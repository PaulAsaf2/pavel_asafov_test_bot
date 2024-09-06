require('dotenv').config();
const { Bot, InlineKeyboard } = require('grammy');
const bot = new Bot(process.env.TOKEN);

const basicDoodle = InlineKeyboard.webApp('basic doodle | nodeapi.ru', 'https://nodeapi.ru/basic-doodle/');
const doodle = InlineKeyboard.webApp('doodle | nodeapi.ru', 'https://nodeapi.ru/dooodle/');
const certificateDev = InlineKeyboard.webApp('certificate | nodeapi.ru', 'https://nodeapi.ru/certificate/?lead=1234567');
const testWebApp = InlineKeyboard.webApp('test webapp', 'https://domen-a.ru');
const wallstringDev = InlineKeyboard.webApp('WS Dev | nodeapi.ru', 'https://nodeapi.ru/?promocode=0ZL-N88-CWZ-BD3');
const cropImageProd = InlineKeyboard.webApp('wallstring.monitour.ru/crop', 'https://wallstring.monitour.ru/crop/?promocode=0ZL-N88-CWZ-BD3');
const wallstringProd = InlineKeyboard.webApp('wallstring.monitour.ru/voice', 'https://wallstring.monitour.ru/voice/?promocode=0ZL-N88-CWZ-BD3');
const magnettopro = InlineKeyboard.webApp('Magnetto.pro | magnetto.monitour.ru', 'https://magnetto.monitour.ru');
const magnettoproDev = InlineKeyboard.webApp('Magnetto.pro | domen-a.ru', 'https://domen-a.ru/magnettopro/');

const buttons = [certificateDev, testWebApp, wallstringDev, cropImageProd, wallstringProd, magnettopro, magnettoproDev];
const keyboard = InlineKeyboard.from(buttons.map(button => [button]));

const gameButtons = [doodle, basicDoodle];
const gameKeyboard = InlineKeyboard.from(gameButtons.map(button => [button]));

bot.command('start', ctx => ctx.reply('Welcome!'));

bot.command('webapp', async (ctx) => {
  await ctx.reply('Webapps', {
    reply_markup: keyboard
  });
});

bot.command('game', async (ctx) => {
  await ctx.reply('Webapps', {
    reply_markup: gameKeyboard
  });
});

bot.start();