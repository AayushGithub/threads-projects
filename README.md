# Projects With Meta's Threads.net

## Overview
Threads-Projects is a repository that houses projects built around Meta's Threads.net platform. These projects utilize the Threads Unofficial API, a reverse-engineered Node.js/TypeScript client for Threads (see [Credits](#credits) for more information). The repository aims to showcase the capabilities of Threads and provide useful functionalities for Threads.net users.

<p align="center">
<img width="600" height="auto" src="https://github.com/AayushGithub/threads-projects/assets/66742440/df624592-1420-497e-bb45-3c4ad483c6ba">
</p>

## <img width="25" height="25" src="https://github.com/AayushGithub/threads-projects/assets/66742440/c2a25b6d-658b-48b0-99bb-f3fdf5eac95e"> Meta Threads 

[Threads.net](https://threads.net/) is an online social media and social networking service owned by Meta Platforms. It operates in a similar manner to other microblogging platforms like Twitter. Users have the ability to post and share text, images, and videos, as well as interact with other users' posts through replies, reposts, and likes. Threads is closely integrated with Instagram, requiring users to have an Instagram account and use the same handle. While the mobile applications for iOS and Android devices offer full functionality, the web version provides limited features. The Unofficial Threads API aims to bridge this gap by providing a reverse-engineered Node.js/TypeScript client for Threads.

## Projects

### [Fortune Cookie Bot](https://www.threads.net/@fortune_cookie_bot)
<p align="center">
<img width="300" height="auto" src="https://github.com/AayushGithub/threads-projects/assets/66742440/d1f52c22-515c-48df-b226-23176dcdda01">
</p>

The Fortune Cookie Bot is one of the projects within the Threads-Projects repository. The motivation behind this project is to provide Threads.net users with valuable insights and a daily dose of wisdom. The bot leverages the [Advice Slip API](https://api.adviceslip.com/advice) to fetch interesting advice and pairs it with a random image from various sources. The bot then posts the advice and the corresponding image on Meta's Threads.net platform.

#### Technologies and Dependencies
- **Node.js**: A JavaScript runtime environment.
- **Express**: A web application framework for Node.js.
- **Axios**: A promise-based HTTP client for making API requests.
- **Threads Unofficial API**: A reverse-engineered Node.js/TypeScript client for Threads.

#### Code
The source code for the Fortune Cookie Bot can be found in the [fortune-cookie-bot](https://github.com/AayushGithub/threads-projects/tree/main/fortune-cookie-bot) directory of the repository. The project is built using Node.js and Express, providing a lightweight web server that exposes two endpoints. One endpoint, `/post`, triggers the bot to fetch advice from the Advice Slip API, retrieve a random image from a list of sources, and publish both the advice and the image to Threads.net. The other endpoint, `/`, serves a simple "Hello world!" message.

### [OPT Timeline Bot](https://www.threads.net/@opttimeline)

<p align="center">
  <img width="350" height="auto" src="https://github.com/AayushGithub/threads-projects/assets/66742440/e2912a4d-2aac-4462-8112-84d886a436b4">
</p>

The OPT Timeline Bot is another project within the Threads-Projects repository. This project addresses the need to track F1 OPT case statuses efficiently. It accomplishes this by scraping the [OPT Timeline](https://opttimeline.com/IOE?CASE_TY=EAD) website and posting updates on Meta's Threads.net platform.

#### Technologies and Dependencies
- **Node.js**: A JavaScript runtime environment.
- **Express**: A web application framework for Node.js.
- **Axios**: A promise-based HTTP client for making API requests.
- **Threads Unofficial API**: A reverse-engineered Node.js/TypeScript client for Threads.

#### Code
The source code for the OPT Timeline Bot can be found in the [opt-timeline-bot](https://github.com/AayushGithub/threads-projects/tree/main/opt-timeline-bot) directory of the repository. Similar to the Fortune Cookie Bot, this project is built using Node.js and Express. It provides two endpoints: `/post`, which triggers the bot to scrape the OPT Timeline website and publish updates to Threads.net, and `/`, which serves a basic "Hello world!" message.

### [Thread Count](https://www.thread-count.vercel.app/)

<div align="center">

![ThreadCountFortune](https://thread-count.vercel.app/thread-count/fortune_cookie_bot?scale=3&Thread%20Count%20Fortune%20Cookie%20Bot)
![ThreadCountOPT](https://thread-count.vercel.app/thread-count/opttimeline?labelColor=white&scale=3&Thread%20Count%20OPTTimeline)

</div>
The Thread Count API was created to provide an easy way for users to showcase their Threads.net follower counts using customizable status badges. Whether you want to display your follower count on your personal blog, project documentation, or social media profiles, this API enables you to generate visually appealing badges that suit your preferences.

## Technologies and Dependencies

The Thread Count API is built using the following technologies:

- **Node.js**: A JavaScript runtime environment.
- **Express.js**: A fast and minimalist web framework for Node.js.
- **Threads Unofficial API**: A reverse-engineered Node.js/TypeScript client for Threads.
- **Badgen**: A library for generating SVG badges.
- **Gradient Badge**: A library for applying gradients to badges.
- **Swagger UI Express**: A middleware for rendering Swagger UI documentation.

#### Code
The source code for the Thread Count can be found in the [thread-count](https://github.com/AayushGithub/threads-projects/tree/main/thread-count) directory of the repository. Similar to the Fortune Cookie Bot, this project is built using Node.js and Express. It provides one endpoint: `/thread-count/:username`, which triggers the bot to fetch the follower count for the specified username and generate a badge displaying the count.

#### Parameters

The `/thread-count/:username` endpoint supports the following query parameters:

- `color` (optional): The color of the badge. Default: `blue`.
- `style` (optional): The style of the badge. Default: `flat`.
- `width` (optional): The width of the badge icon. Default: `13`.
- `scale` (optional): The scale of the badge. Default: `1`.
- `labelColor` (optional): The color of the badge label. Default: `black`.
- `icon` (optional): Whether to include the badge icon. Default: `true`.
- `label` (optional): The label text for the badge. Default: `Thread Count`.
- `gradient` (optional): Whether to apply a gradient to the badge. Default: `true`.

## Deployment
Both projects are deployed using Vercel, a cloud platform for static and serverless deployment. Vercel allows for seamless deployment and hosting of Node.js applications. The live versions of the projects can be accessed at the following URLs:
- Fortune Cookie Bot: [https://fortune-cookie-bot.vercel.app/](https://fortune-cookie-bot.vercel.app/)
- OPT Timeline Bot: [https://opt-timeline-bot.vercel.app/](https://opt-timeline-bot.vercel.app/)
- Thread Count: [https://thread-count.vercel.app/](https://thread-count.vercel.app/)

## Credits
- **Threads Unofficial API**: [https://github.com/junhoyeo/threads-api](https://github.com/junhoyeo/threads-api) (Major Thanks to [@junhoyeo](https://github.com/junhoyeo) for the work on this project - a reverse-engineered Node.js/TypeScript client for Threads) <p align="center">
  <img width="350" height="auto" src="https://github.com/AayushGithub/threads-projects/assets/66742440/cf135ca9-6530-48a0-9d06-9c8def1ee718"> </p>
  
- **Advice Slip API**: [https://api.adviceslip.com/advice](https://api.adviceslip.com/advice) (API for fetching advice slips)
- List of Random Image Sources:
  - **Cat Image (Catass)**: [https://cataas.com/](https://cataas.com/)
  - **PlaceKitten**: [https://placekitten.com/](https://placekitten.com/)
  - **Dog CEO API**: [https://dog.ceo/dog-api/](https://dog.ceo/dog-api/)
  - **Random Dog**: [https://random.dog/](https://random.dog/)
  - **Random Fox**: [https://randomfox.ca/](https://randomfox.ca/)
  - **Shibe Online**: [https://shibe.online/](https://shibe.online/)
- **OPT Timeline**: [https://opttimeline.com/IOE?CASE_TY=EAD](https://opttimeline.com/IOE?CASE_TY=EAD) (Website for tracking F1 OPT case statuses)
- **Badgen**: [https://github.com/badgen/badgen](https://github.com/badgen/badgen) (Library for generating SVG badges)
- **Gradient Badge**: [https://github.com/bokub/gradient-badge](https://github.com/bokub/gradient-badge) (Library for applying gradients to badges)
- **Swagger UI Express**: [https://github.com/scottie1984/swagger-ui-express](https://github.com/scottie1984/swagger-ui-express) (Middleware for rendering Swagger UI documentation)
