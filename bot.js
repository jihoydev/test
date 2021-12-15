const { Telegraf } = require('telegraf');
var bot = new Telegraf('5035671828:AAFUb0ql45GxEaOYt7iS86iWkXHBkGQwoTQ');
bot.start(ctx => ctx.reply(`
   Hi, I'm a simple bot
   `))
bot.help(ctx => ctx.reply(`
	   Hello world!
	`))

bot.launch();
