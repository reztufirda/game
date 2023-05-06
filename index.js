const Telegraf = require('telegraf')
const Extra = require('telegraf/extra')
const Markup = require('telegraf/markup')

const gameShortName = 'snailbrokgame'
const gameUrl = 'https://reztuif.itch.io/snailbrook'

const markup = Extra.markup(
  Markup.inlineKeyboard([
    Markup.gameButton('🎮 Play now!'),
    Markup.urlButton('Telegraf help', 'http://telegraf.js.org')
  ])
)

const bot = new Telegraf('5733239861:AAHaDSeqZcDCOLbzAGyJkkrezeXx7mbMLwo')
bot.start(({ replyWithGame }) => replyWithGame(gameShortName))
bot.command('foo', ({ replyWithGame }) => replyWithGame(gameShortName, markup))
bot.gameQuery(({ answerGameQuery }) => answerGameQuery(gameUrl))
bot.launch()
