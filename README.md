# Discord Bot for the Zim Tech Community

## Project Overview
This project aims to create a comprehensive Discord bot for the [Zim Tech Community](https://discord.gg/eKGq6AxRbJ), providing a range of features to enhance community engagement and foster collaboration.

## Current Features
- Contribution Tracking: Tracks and rewards user contributions to the community, such as posting valuable content, participating in discussions, and organizing events.
## Future Features
- AI Assistant: Provides automated assistance to users with questions and information related to the community.
- Content Moderation: Monitors and moderates community content to ensure a positive and respectful environment.
- Daily Newsletter: Delivers a daily digest of community updates, upcoming events, and relevant resources.
- Event Management: Facilitates the creation and management of community events, including registration, reminders, and post-event follow-ups.
- Member Directory: Provides a searchable database of community members, allowing users to connect with each other based on interests and expertise.
- Resource Library: Curates and organizes a collection of valuable resources for community members, including articles, tutorials, and industry news.

## Project Structure
The project is organized into the following modules:
- `bot`: Contains the main bot client and event handlers.
- `cron`: Includes all scheduled tasks that run at specific intervals.
- `handlers`: Holds the command files that the bot can execute.
- `db`: Provides utility functions and helpers to use with the supabase database.

## How to run
To run the bot locally, follow these steps:
1. Clone the repository to your local machine.
2. Install the dependencies by running `npm install`.
3. Copy the `.env.sample` file to a new file named `.env`.
4. Fill in the `.env` file with the necessary environment variables:
   - `DISCORD_TOKEN`: Your Discord bot token.
   - `SUPABASE_KEY`: Your Supabase API key.
   - `SUPABASE_URL`: The URL to your Supabase project.
   - `MAIN_CHANNEL_ID`: The ID of the main channel where the bot will operate.
5. Start the bot by running `npm start`.

## How to Contribute
Contributions to this project are welcome and encouraged. To contribute, please:
1. Fork the repository.
2. Create a new branch for your feature or fix.
3. Write your code and commit your changes.
4. Push your branch and create a pull request against the main branch.
5. Ensure your code adheres to the project's coding standards and passes all tests.

## Technologies Used
- Node.js: The runtime environment for the bot.
- discord.js: A powerful library to interact with the Discord API.
- dotenv: A module to load environment variables from a `.env` file.
- Supabase: An open-source Firebase alternative providing database and authentication services.

----


