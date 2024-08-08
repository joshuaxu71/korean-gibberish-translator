require('dotenv').config(); //initialize dotenv
require('module-alias/register');

const { Client, GatewayIntentBits } = require('discord.js');

const { translateIfGibberish } = require('@utils/translate.js');

const client = new Client({ intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
] });

client.on('ready', () => {
    console.log('Ready');
});

client.on('messageCreate', async (message) => {
    if (message.author.bot) return; // Ignore bot messages

    try {
        const processedMessage = await translateIfGibberish(message.content);
        console.log(processedMessage);
    } catch (error) {
        console.error('Error processing message:', error);
    }
})

client.login(process.env.CLIENT_TOKEN);