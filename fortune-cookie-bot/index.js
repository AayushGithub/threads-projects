const express = require('express');
const axios = require('axios');
const { ThreadsAPI } = require('threads-api');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

const deviceID = `android-${(Math.random() * 1e24).toString(36)}`;

const threadsAPI = new ThreadsAPI({
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  deviceID,
});

const listOfImageURLs = {
  catass: "https://cataas.com/cat/cute/says/",
  placekitten: "https://placekitten.com/600/600",
  dog_ceo: "https://dog.ceo/api/breeds/image/random",
  random_dog: "https://random.dog/woof.json",
  random_fox: "https://randomfox.ca/floof/",
  shibe_online: "https://shibe.online/api/shibes?count=1&urls=true&httpsUrls=true",
};

const getImageURLFromAPI = async (APIName, ImageText) => {
  try {
    if (APIName === "catass") {
      return listOfImageURLs[APIName] + ImageText;
    } else if (APIName === "placekitten") {
      return listOfImageURLs[APIName];
    } else if (APIName === "dog_ceo") {
      const response = await axios.get(listOfImageURLs[APIName]);
      if (response.data.status === "success") {
        return response.data.message;
      }
    } else if (APIName === "random_dog") {
      // if its an mp4, get a new image
      const response = await axios.get(listOfImageURLs[APIName]);
      if (response.data.url.endsWith(".mp4")) {
        return getImageURLFromAPI(APIName, ImageText);
      }
      return response.data.url;
    } else if (APIName === "random_fox") {
      const response = await axios.get(listOfImageURLs[APIName]);
      return response.data.image;
    } else if (APIName === "shibe_online") {
      const response = await axios.get(listOfImageURLs[APIName]);
      return response.data[0];
    }
  } catch (error) {
    console.error('Error getting image:', error.message);
  }
};


const postAdvice = async () => {
  try {
    // Fetch advice from the API
    const response = await axios.get('https://api.adviceslip.com/advice');
    const advice = response.data.slip.advice;

    // Publish the advice to Threads
    // Get a random image from the list
    const APIName = Object.keys(listOfImageURLs)[Math.floor(Math.random() * Object.keys(listOfImageURLs).length)];
    const ImageText = advice;
    const imageURL = await getImageURLFromAPI(APIName, ImageText);
    await threadsAPI.publish({
      text: advice,
      image: imageURL,
    });
    const postData = {
      content: advice,
      image: imageURL,
      deviceID,
      createdAt: new Date().toISOString(),
    };
    return postData;
  } catch (error) {
    console.error('Error posting advice:', error.message);
  }
};

app.get('/post', async (req, res) => {
  const postData = await postAdvice();
  res.json(postData);
});

app.get('/', async (req, res) => {
  res.json({ message: 'Hello world!' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;