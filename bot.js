const { Telegraf } = require('telegraf');
var bot = new Telegraf('5035671828:AAEAlqmzRxz_HXLCUAtTVt9xfj0P0KHW2V4');
bot.start(ctx => ctx.reply(`
   Hi, I'm a simple bot
   `))
bot.help(ctx => ctx.reply(`
	   Hello world!
	`))

bot.launch();
