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

client.on('messageCreate', (message) => {
    if (message.author.bot) return; // Ignore bot messages

    const processedMessage = translateIfGibberish(message.content);

    console.log(processedMessage)
});

client.login(process.env.CLIENT_TOKEN);