// MicroBot creator Zolotukhin Ivan (7.11.18)

const TelegramBot = require('node-telegram-bot-api');

const token = '685656590:AAEIB7YfCalkxVILZCEIr6ylANrtVRfECpc';

const bot = new TelegramBot(token, {polling: true});

bot.onText(/\/echo (.+)/, (msg, match) => {

    const chatId = msg.chat.id;
    const resp = match[1];

    bot.sendMessage(chatId, resp);
});

bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    if (msg === 'Hello') {
        bot.sendMessage(chatId, 'Приветик :)');
    } else {
        bot.sendMessage(chatId, 'Fuck')
    }
});





