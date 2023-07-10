const axios = require("axios");

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

const main = async () => {
    const image = await getImageURLFromAPI("random_dog", "Hello");
    console.log(image);
    const image2 = await getImageURLFromAPI("random_dog", "Hello");
    console.log(image2);
    const image3 = await getImageURLFromAPI("random_dog", "Hello");
    console.log(image3);
    

}

main();