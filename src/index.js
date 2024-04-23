// Discord Bot for the Zim Tech Community
require('dotenv').config();
const initializeCronJobs = require('./cron');
const { client } = require('./bot/client');
const { registerEvents } = require('./bot/events');
const cronJobs = require('./cron');

// Register bot event handlers
registerEvents(client);

// Start the bot
client.login(process.env.DISCORD_TOKEN);

// Initialize and start cron jobs
initializeCronJobs();
