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

## Contributing Code

To contribute code to the bot, please follow these steps:

1. Fork the repository to your GitHub account.
2. Clone your forked repository to your local machine.
3. Create a new branch for your changes (`git checkout -b my-feature`).
4. Make your changes and commit them with descriptive commit messages.
5. Push your changes to your forked repository (`git push origin my-feature`).
6. Go to the [Issues](../../issues) tab of this repository and create a new issue if one doesn't already exist for your contribution.
7. In your pull request description, reference the issue you created in step 6 (e.g., "Fixes #123").
8. Submit a pull request from your branch to the main branch of this repository.
5. Ensure your code adheres to the project's coding standards and passes all tests.

The team will review your pull request and provide feedback.

## Technologies Used
- Node.js: The runtime environment for the bot.
- discord.js: A powerful library to interact with the Discord API.
- dotenv: A module to load environment variables from a `.env` file.
- Supabase: An open-source Firebase alternative providing database and authentication services.

----


