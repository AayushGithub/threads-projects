const express = require('express');
const { ThreadsAPI } = require('threads-api');
const { badgen } = require('badgen');
const { applyGradient } = require('gradient-badge');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const NodeCache = require('node-cache');

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

const cors = require('cors');
app.use(cors());

const threadsAPI = new ThreadsAPI();
const cache = new NodeCache({ stdTTL: 18000 }); // Cache with 5 hours (18000 seconds) TTL

const fs = require('fs');
const path = require('path');
const threadsColorSVG = fs.readFileSync(path.join(__dirname, './threads-color.svg'), 'utf8');
const threadsColorBase64 = Buffer.from(threadsColorSVG).toString('base64');

async function getThreadsFollowerCount(username) {
  try {
    const userID = await threadsAPI.getUserIDfromUsername(username);
    if (!userID) {
      return;
    }
    const user = await threadsAPI.getUserProfile(username, userID);
    return user['follower_count'];
  } catch (error) {
    // If TypeError: Cannot read properties of null (reading 'userData')
    // then username is not found
    if (error.message.includes('Cannot read properties of null')) {
      throw new Error('Username not found');
    } else {
      throw new Error('Error getting follower count');
    }
  }
}

// Route handler for /thread-count/
app.get('/thread-count/', (req, res) => {
  const defaultBadge = badgen({
    label: 'Thread Count',
    status: 'Username not specified',
    color: 'red',
    style: 'flat',
    icon: `data:image/svg+xml;base64,${threadsColorBase64}`,
  });
  res.set('Content-Type', 'image/svg+xml');
  return res.status(400).send(defaultBadge);
});

// Route handler for /thread-count/{username}
app.get('/thread-count/:username', async (req, res) => {
  try {
    const { username } = req.params;

    // Check if username is provided
    if (!username) {
      const defaultBadge = badgen({
        label: 'Thread Count',
        status: 'Username not specified',
        color: 'red',
        style: 'flat',
        icon: `data:image/svg+xml;base64,${threadsColorBase64}`,
      });
      res.set('Content-Type', 'image/svg+xml');
      return res.status(400).send(defaultBadge);
    }

    // Check if result is cached
    let followerCount = cache.get(username);
    if (!followerCount) {
      followerCount = await getThreadsFollowerCount(username);
      // Cache the result
      cache.set(username, followerCount);
    }

    // Handle username not found
    if (!followerCount) {
      const defaultBadge = badgen({
        label: 'Thread Count',
        status: 'Username not found',
        color: 'red',
        style: 'flat',
        icon: `data:image/svg+xml;base64,${threadsColorBase64}`,
      });
      res.set('Content-Type', 'image/svg+xml');
      return res.status(404).send(defaultBadge);
    }

    const followerCountString = followerCount.toString();
    const badgeColor = req.query.color || 'blue';
    const badgeStyle = req.query.style || 'flat';
    const badgeWidth = req.query.width || 13;
    const badgeScale = req.query.scale || 1;
    const labelColor = req.query.labelColor || 'black';
    const useIcon = req.query.icon || true;
    const label = req.query.label || 'Thread Count';
    const gradient = req.query.gradient || 'true';
    const gradientArray = ['FA7E1E', 'D62976', '962FBF', '4F5DB5'];
    const badge = badgen({
      label: label,
      status: followerCountString,
      color: badgeColor,
      style: badgeStyle,
      iconWidth: badgeWidth,
      scale: badgeScale,
      labelColor: labelColor,
      icon: useIcon === 'false' ? undefined : `data:image/svg+xml;base64,${threadsColorBase64}`,
    });

    if (gradient === 'true') {
      res.set('Content-Type', 'image/svg+xml');
      const newBadge = applyGradient(badge, gradientArray);
      return res.status(200).send(newBadge);
    } else {
      res.set('Content-Type', 'image/svg+xml');
      return res.status(200).send(badge);
    }
  } catch (error) {
    const defaultBadge = badgen({
      label: 'Thread Count',
      status: error.message,
      color: 'red',
      style: 'flat',
      icon: `data:image/svg+xml;base64,${threadsColorBase64}`,
    });
    res.set('Content-Type', 'image/svg+xml');
    if (error.message.includes('Username not found')) {
      return res.status(404).send(defaultBadge);
    } else {
      return res.status(500).send(defaultBadge);
    }
  }
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/', (req, res) => {
  res.redirect('/api-docs');
});

app.use((req, res, next) => {
  res.status(404).send('404: Page not found');
});

app.listen(port, () => {
  console.log(`Thread Count API listening at http://localhost:${port}`);
});

module.exports = app;
