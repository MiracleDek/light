const ButtonPages = require('discord-button-pages');
const { MessageEmbed } = require('discord.js')
const colors = require('./../../colors.json')
const disbutpages = require("discord-embeds-pages-buttons")
const Discord = require("discord.js");
const disbut = require("discord-buttons");
const MessageButton = require("discord-buttons");

module.exports = {
  name: "developer",
  description: "Shows all commands of the bot",
  botPermission: [],
  authorPermission: [],
  aliases: ["newhelp"],
  ownerOnly: false,
  run: async (client, message, args) => {
    let helpEmbed = new MessageEmbed()
      .setTitle("<a:757683476756562084:873297833581744218> <a:757683476836122725:873297883250688020> <a:757683476580401184:873297902502551562>")
      
      .addField(
        "About Me:",
        "Hi I am DiegoBot Official! I am a bot developer who codes in node.js! I have been coding since October of 2021. Some of my hobbies are playing video games and coding! ",
      )
      .setThumbnail("https://cdn.discordapp.com/avatars/813890066781962271/1224647ef75999e8308f476e5b1658f5.png?size=1024")
      .setFooter("Make sure to show your support by subbing to my youtube(linked below)! If you have any questions about the bot, join support server linked below or send me a DM at DiegoBot#1739")

      let button1 = new disbut.MessageButton()
      .setStyle('url')
      .setLabel('💞 • Invite Me') 
      .setURL("https://discord.gg/23ayhRann6");
      let button2 = new disbut.MessageButton()
      .setStyle('url')
      .setLabel('🤔 • Support Server') 
      .setURL("https://discord.gg/23ayhRann6");
      let button3 = new disbut.MessageButton()
      .setStyle('url')
      .setLabel('🎬 • Youtube Channel') 
      .setURL("https://www.youtube.com/c/DiegoBotOfficial");



      return message.channel.send(helpEmbed,{
        button: [button1,button2,button3],
      });

  },
};



/**
 * @INFO
 * Bot Coded by DiegoBot Official |
 * https://www.youtube.com/c/DiegoBotOfficial
 * @INFO
 * Please mention Him , when using this Code!
 * @INFO
 */