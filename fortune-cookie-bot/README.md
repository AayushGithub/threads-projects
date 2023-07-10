# [Fortune Cookie Bot](https://www.threads.net/@fortune_cookie_bot)

The Fortune Cookie Bot is a project within the Threads-Projects repository. It aims to provide valuable insights and a daily dose of wisdom to users of Meta's Threads.net platform.

## Motivation

The Fortune Cookie Bot was developed to enhance the Threads.net user experience by delivering interesting advice and thought-provoking messages. The bot fetches advice from the [Advice Slip API](https://api.adviceslip.com/advice) and pairs it with a random image from a curated list of sources. It then publishes both the advice and the image on Meta's Threads.net platform.

## Technologies and Dependencies

- **Node.js**: A JavaScript runtime environment.
- **Express**: A web application framework for Node.js.
- **Axios**: A promise-based HTTP client for making API requests.
- **Threads Unofficial API**: A reverse-engineered Node.js/TypeScript client for Threads.

## How to Use

1. Clone this repository to your local machine.
2. Navigate to the `fortune-cookie-bot` directory.
3. Install the dependencies by running `npm install`.
4. Set up your Meta Threads API credentials and environment variables in the following format:
```bash
export USERNAME="your-thread-username"
export PASSWORD="your-thread-password"
export PORT="your-port-number"
```
5. Start the server by running `npm start`.
6. The bot will be accessible at `http://localhost:{PORT}` (default port is 3000).
7. Access the `/post` endpoint to trigger the bot and get a random advice with an accompanying image.
8. The published advice and image will be visible on Meta's Threads.net platform.

## Credits

- **Threads Unofficial API**: [https://github.com/junhoyeo/threads-api](https://github.com/junhoyeo/threads-api)
- **Advice Slip API**: [https://api.adviceslip.com/advice](https://api.adviceslip.com/advice)
- List of Random Image Sources:
  - **Cat Image (Catass)**: [https://cataas.com/](https://cataas.com/)
  - **PlaceKitten**: [https://placekitten.com/](https://placekitten.com/)
  - **Dog CEO API**: [https://dog.ceo/dog-api/](https://dog.ceo/dog-api/)
  - **Random Dog**: [https://random.dog/](https://random.dog/)
  - **Random Fox**: [https://randomfox.ca/](https://randomfox.ca/)
  - **Shibe Online**: [https://shibe.online/](https://shibe.online/)

