require('dotenv').config();
const { Bot, InlineKeyboard } = require('grammy');
const bot = new Bot(process.env.TOKEN);

const tgAdsTest = InlineKeyboard.webApp('Telegram Ads | test29.ru', 'https://test29.ru/tg-ads/');
const tgAds = InlineKeyboard.webApp('Telegram Ads | localhost', 'https://192.168.0.103:3000/tg-ads/');
// const testWebApp = InlineKeyboard.webApp('test webapp', 'https://domen-a.ru');
// const wallstringDev = InlineKeyboard.webApp('WS Dev | nodeapi.ru', 'https://nodeapi.ru/?promocode=0ZL-N88-CWZ-BD3');
// const cropImageProd = InlineKeyboard.webApp('wallstring.monitour.ru/crop', 'https://wallstring.monitour.ru/crop/?promocode=0ZL-N88-CWZ-BD3');
// const wallstringProd = InlineKeyboard.webApp('wallstring.monitour.ru/voice', 'https://wallstring.monitour.ru/voice/?promocode=0ZL-N88-CWZ-BD3');
const magnettopro = InlineKeyboard.webApp('Magnetto.pro | magnetto.monitour.ru', 'https://magnetto.monitour.ru');
// const magnettoproDev = InlineKeyboard.webApp('Magnetto.pro | domen-a.ru', 'https://domen-a.ru/magnettopro/');

const buttons = [tgAds, /*testWebApp, wallstringDev, cropImageProd, wallstringProd,*/ magnettopro/*, magnettoproDev*/];
const keyboard = InlineKeyboard.from(buttons.map(button => [button]));

bot.command('start', async (ctx) => {
  await ctx.reply('WebApp', {
    reply_markup: keyboard
  });
});

bot.start();