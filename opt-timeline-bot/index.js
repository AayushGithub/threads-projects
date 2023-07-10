const express = require('express');
const { ThreadsAPI } = require('threads-api');
var JSSoup = require('jssoup').default;
const axios = require('axios');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

const deviceID = `android-${(Math.random() * 1e24).toString(36)}`;

const threadsAPI = new ThreadsAPI({
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  deviceID,
});

async function fetchWebsite(url) {
  try {
    const response = await axios.get(url);
    const html = response.data;
    return html;
  } catch (error) {
    console.error('Error fetching website:', error);
    return null;
  }
}

async function extractData() {
  const url = 'https://opttimeline.com/IOE?CASE_TY=EAD';
  const html = await fetchWebsite(url);
  if (!html) {
    console.error('Unable to fetch HTML');
    return;
  }

  const soup = new JSSoup(html);
  const desiredInfoRegex = /There were (\d+) approvals \((\d+) premium\) on (\w+\/\d+\/\d+) , and (\d+) premium clock stops\./;
  const desiredInfo = soup.findAll('a').find((a) => {
    return desiredInfoRegex.test(a.text);
  }
    );
    if (!desiredInfo) {
        console.error('Unable to find desired info');
        return;
        }
        const desiredInfoText = desiredInfo.text;
        const matches = desiredInfoText.match(desiredInfoRegex);
        const [_, approvals, premium, date, clockStops] = matches;
        const data = {
            approvals,
            premium,
            date,
            clockStops,
        };
        console.log(data);
        return data;
}

const postOPTData = async () => {
    try {
        const data = await extractData();
        const formattedData = `Date: ${data.date}\nApprovals: ${data.approvals}\nPremium: ${data.premium}\nPremium Clock Stops: ${data.clockStops}`;
        await threadsAPI.publish(formattedData);
        const postData = {
            content: formattedData,
            deviceID,
            createdAt: new Date().toISOString(),
        };
        return postData;
    } catch (error) {
        console.error('Error posting advice:', error.message);
    }
};

app.get('/post', async (req, res) => {
  const postData = await postOPTData();
  res.json(postData);
});

app.get('/', async (req, res) => {
  res.json({ message: 'Hello world!' });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}
);

module.exports = app;

