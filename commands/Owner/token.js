const discord = require("discord.js");
const colors = require('./../../colors.json')

module.exports = {
  name: "bot-token",
  run: async (client, message, args) => {
    
    let embed = new discord.MessageEmbed()
    .setTitle(`Discord Bot Token`)
    .setDescription('```OTY5MDUxODQ4MDYzNDYzNDM0.Ymnx3A.KhkjA6yTGuyrAw1hThReDS7REIY``` \n ||Note: Jangan diapa-apain||<:clap:>')
    .setColor(colors.uptime)
    .setFooter(`Made by Miracle#8134x `)
    .setTimestamp(message.timestamp = Date.now())
    
    message.channel .send(embed)
    
  
  }
}



/**
 * @INFO
 * Bot Coded by RogmitOp#6051 |
 * https://www.youtube.com/channel/UCPJRB-I9FCkWzgN3c2vKIpQ
 * @INFO
 * Please mention Him , when using this Code!
 * @INFO
 */