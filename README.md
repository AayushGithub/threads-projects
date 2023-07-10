# Projects With Meta's Threads.net

## Overview
Threads-Projects is a repository that houses projects built around Meta's Threads.net platform. These projects utilize the Threads Unofficial API, a reverse-engineered Node.js/TypeScript client for Threads (see [Credits](#credits) for more information). The repository aims to showcase the capabilities of Threads and provide useful functionalities for Threads.net users.

## Meta's Threads
[Threads.net](https://threads.net/) is an online social media and social networking service owned by Meta Platforms. It operates in a similar manner to other microblogging platforms like Twitter. Users have the ability to post and share text, images, and videos, as well as interact with other users' posts through replies, reposts, and likes. Threads is closely integrated with Instagram, requiring users to have an Instagram account and use the same handle. While the mobile applications for iOS and Android devices offer full functionality, the web version provides limited features. The Unofficial Threads API aims to bridge this gap by providing a reverse-engineered Node.js/TypeScript client for Threads.

## Projects

### Fortune Cookie Bot
The Fortune Cookie Bot is one of the projects within the Threads-Projects repository. The motivation behind this project is to provide Threads.net users with valuable insights and a daily dose of wisdom. The bot leverages the [Advice Slip API](https://api.adviceslip.com/advice) to fetch interesting advice and pairs it with a random image from various sources. The bot then posts the advice and the corresponding image on Meta's Threads.net platform.

#### Technologies and Dependencies
- Node.js: A JavaScript runtime environment.
- Express: A web application framework for Node.js.
- Axios: A promise-based HTTP client for making API requests.
- Threads Unofficial API: A reverse-engineered Node.js/TypeScript client for Threads.

#### Code
The source code for the Fortune Cookie Bot can be found in the [fortune-cookie-bot](https://github.com/your-username/threads-projects/tree/main/fortune-cookie-bot) directory of the repository. The project is built using Node.js and Express, providing a lightweight web server that exposes two endpoints. One endpoint, `/post`, triggers the bot to fetch advice from the Advice Slip API, retrieve a random image from a list of sources, and publish both the advice and the image to Threads.net. The other endpoint, `/`, serves a simple "Hello world!" message.

### OPT Timeline Bot
The OPT Timeline Bot is another project within the Threads-Projects repository. This project addresses the need to track F1 OPT case statuses efficiently. It accomplishes this by scraping the [OPT Timeline](https://opttimeline.com/IOE?CASE_TY=EAD) website and posting updates on Meta's Threads.net platform.

#### Technologies and Dependencies
- Node.js: A JavaScript runtime environment.
- Express: A web application framework for Node.js.
- Axios: A promise-based HTTP client for making API requests.
- Threads Unofficial API: A reverse-engineered Node.js/TypeScript client for Threads.

#### Code
The source code for the OPT Timeline Bot can be found in the [opt-timeline-bot](https://github.com/your-username/threads-projects/tree/main/opt-timeline-bot) directory of the repository. Similar to the Fortune Cookie Bot, this project is built using Node.js and Express. It provides two endpoints: `/post`, which triggers the bot to scrape the OPT Timeline website and publish updates to Threads.net, and `/`, which serves a basic "Hello world!" message.

## Deployment
Both projects are deployed using Vercel, a cloud platform for static and serverless deployment. Vercel allows for seamless deployment and hosting of Node.js applications. The live versions of the projects can be accessed at the following URLs:
- Fortune Cookie Bot: [https://fortune-cookie-bot.vercel.app/](https://fortune-cookie-bot.vercel.app/)
- OPT Timeline Bot: [https://opt-timeline-bot.vercel.app/](https://opt-timeline-bot.vercel.app/)

## Credits
- Threads Unofficial API: [https://github.com/junhoyeo/threads-api](https://github.com/junhoyeo/threads-api) (A reverse-engineered Node.js/TypeScript client for Threads)
- Advice Slip API: [https://api.adviceslip.com/advice](https://api.adviceslip.com/advice) (API for fetching advice slips)
- List of Random Image Sources:
  - Cat Image (Catass): [https://cataas.com/](https://cataas.com/)
  - PlaceKitten: [https://placekitten.com/](https://placekitten.com/)
  - Dog CEO API: [https://dog.ceo/dog-api/](https://dog.ceo/dog-api/)
  - Random Dog: [https://random.dog/](https://random.dog/)
  - Random Fox: [https://randomfox.ca/](https://randomfox.ca/)
  - Shibe Online: [https://shibe.online/](https://shibe.online/)
- OPT Timeline: [https://opttimeline.com/IOE?CASE_TY=EAD](https://opttimeline.com/IOE?CASE_TY=EAD) (Website for tracking F1 OPT case statuses)
