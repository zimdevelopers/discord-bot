const { Events } = require('discord.js');
const contributionHandler = require('../handlers/messageCreate');

function registerEvents(client) {
    client.on(Events.ClientReady, () => console.log('Ready!'));
    client.on(Events.MessageCreate, contributionHandler);
}

module.exports = { registerEvents };