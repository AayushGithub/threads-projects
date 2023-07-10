# OPT Timeline Bot

The OPT Timeline Bot is a project within the Threads-Projects repository. It enables users to track F1 OPT case statuses efficiently and receive updates on Meta's Threads.net platform.

## Motivation

The OPT Timeline Bot addresses the need for a streamlined process to track F1 OPT case statuses. By scraping the [OPT Timeline](https://opttimeline.com/IOE?CASE_TY=EAD) website and posting updates on Meta's Threads.net platform, users can easily stay informed about their OPT applications.

## Technologies and Dependencies

- **Node.js**: A JavaScript runtime environment.
- **Express**: A web application framework for Node.js.
- **Axios**: A promise-based HTTP client for making API requests.
- **Threads Unofficial API**: A reverse-engineered Node.js/TypeScript client for Threads.

## How to Use

1. Clone this repository to your local machine.
2. Navigate to the `opt-timeline-bot` directory.
3. Install the dependencies by running `npm install`.
4. Set up your Meta Threads API credentials and environment variables in the following format:
```bash
export USERNAME="your-thread-username"
export PASSWORD="your-thread-password"
export PORT="your-port-number"
```
5. Start the server by running `npm start`.
6. The bot will be accessible at `http://localhost:{PORT}` (default port is 3000).
7. Access the `/post` endpoint to trigger the bot and scrape the OPT Timeline website for updates.
8. The updates will be published on Meta's Threads.net platform.

## Credits

- **Threads Unofficial API**: [https://github.com/junhoyeo/threads-api](https://github.com/junhoyeo/threads-api)
- **OPT Timeline**: [https://opttimeline.com/IOE?CASE_TY=EAD](https://opttimeline.com/IOE?CASE_TY=EAD)
