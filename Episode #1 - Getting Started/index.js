const { Client, MessageEmbed, MessageAttachment } = require('discord.js');
const config = require('./config');

let bot = new Client ({
    presence: {
        status: 'idle',
        activity: {
            name: `${config.prefix}info | larkx.xyz`,
            type: 'WATCHING'
        }
    }
});

bot.on('ready', () => console.log('Bot is Alive.'));

bot.on('message', async message => {
    if (message.content.startWith(config.prefix)) {
        let args = message.content.slice(config.prefix.length).split(' ');
        let command = args.shift().toLowerCase();

        switch (command) {


        }
    }
});

bot.login(config.token);