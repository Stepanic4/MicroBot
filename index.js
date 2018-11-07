// MicroBot creator Zolotukhin Ivan (7.11.18)

let TelegramBot = require('./node_modules/node-telegram-bot-api');

// Устанавливаем токен, который выдавал нам бот.
let token = 'https://api.telegram.org/bot775038949:AAFmuDD0ALsBz1Nug8t1A776lpW8teyxl-E/getMe';
// Включить опрос сервера
let bot = new TelegramBot(token, {polling: true});

// Написать мне ... (/echo Hello World! - пришлет сообщение с этим приветствием.)
bot.onText(/echo (.+)/, function (msg, match) {
const fromId = msg.from.id;
const resp = match[1];
bot.sendMessage(fromId, resp);
});

// Простая команда без параметров.
bot.on('message', function (msg) {
    const chatId = msg.chat.id;
    // Фотография может быть: путь к файлу, поток(stream) или параметр file_id
    const photo = 'cats.png';
    bot.sendPhoto(chatId, photo, {caption: 'Милые котята'});
});