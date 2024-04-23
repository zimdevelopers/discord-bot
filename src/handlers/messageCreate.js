const { addContribution } = require('../db/contributions');

async function contributionHandler(message) {
    if (message.author.bot) return;
    if (message.author.username === "ZimTech") return; 
    console.log(message);
   // message.reply(`Echo: ${message.content}`);
    await addContribution(message.author.username,1);

}

module.exports = contributionHandler;