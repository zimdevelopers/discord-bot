const cron = require('node-cron');
const { client } = require('../bot/client');
const { getTopContributors } = require('../db/contributions');

function scheduleDaily() {
    cron.schedule('0 0 * * *', async () => { // Runs every day at midnight
        console.log("Running daily reset tasks...");
        try {
            const topContributors = await getTopContributors(3, 'daily');
    
            if (topContributors.length > 0) {
                const message = `🏆 Today's top contributor is ${topContributors[0].user} with ${topContributors[0].daily} contributions!\n\nSecond place is ${topContributors[1].user} (better luck next time)`;
                const channel = await client.channels.fetch(process.env.MAIN_CHANNEL_ID);
                channel.send(message);
            }
        } catch (e) {
            console.error('Error fetching top contributors:', e);
        }
    })
}

module.exports = scheduleDaily;