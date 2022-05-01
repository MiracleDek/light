const ButtonPages = require('discord-button-pages');
const { MessageEmbed } = require('discord.js')
const disbutpages = require("discord-embeds-pages-buttons")
const Discord = require("discord.js");
const disbut = require("discord-buttons");
const MessageButton = require("discord-buttons");

module.exports = {
  name: "help",
  description: "Shows all commands of the bot",
  category: "uptime",
  botPermission: [],
  authorPermission: [],
  aliases: ["help"],
  ownerOnly: false,
  run: async (client, message, args) => {
    let helpEmbed = new MessageEmbed()
      .setTitle("Here are my commands")
      .setDescription("**Light Store Bot Adalah Bot Yang DIbuat Oleh Light Store Team**")
      .addField(
        "**ADMIN**",
        "`addrole` `auditlog` `ban` `dm` `embed` `hackban` `kick` `lock` `nuke` `removerole` `addemoji` `unban` `unlock`"
      )
      .addField(
        "**CHATBOT**",
        "`chatbot-disable` `chatbot-set`"
      )
      .addField(
        "**FUN**",
        "`deepfry` `coinflip` `corona` `drake` `eightball` `flipcoin` `google` `hack` `hangman` `hug` `joke` `meme` `ship` `slap` `snake` `snipe` `sudo` `tictactoe` `triggered` `trivia` `tictactoe` `youtube`"
      )
      .addField(
        "**GENERAL**",
        "`servericon` `akinator` `ascii` `avatar` `base64` `battleship` `calculator` `calc` `choose` `color` `country` `emojify` `firstmsg` `invite` `reverse` `rps` `support` `trivia` `weather`"
      )
      .addField(
        "**GIVEAWAY**",
        "`gstart` `gend` `greroll`"
      )
      .addField(
        "**IMAGE**",
        "`3000years` `affect` `beautiful` `dog` `facepalm` `fire` `fox` `gay` `glass` `jail` `kangaroo` `shit` `tweet`"
      )
      .addField(
        "**INFO**",
        "`botinfo` `botinvite` `report-bug` `commandscount` `developer` `djs` `feedback` `github` `help` `info` `roleinfo` `serverinfo` `userinfo`"
      )
      .addField(
        "**MODERATION**",
        "`purge` `resetwarns` `Userid` `lockchannel` `mute` `purge` `say` `setchat` `slowmode` `unlockchannel` `unmute` `warn` `warnings` `Userinfo`"
      )
      .addField(
        "**AUTOMODERATION**",
        "`anti-alt` `antilink` `autonick` `autoofficial` `autoofficiald` `autorole` `roleall`"
      )
      .addField(
        "**AURA**",
        "`addword` `blacklist-server` `blacklist-user` `delword` `whitelist-add` `whitelist-delete` `whitelist` `wordlist`"
      )
      .addField(
        "**NSFW**",
        "`4k` `anal` `ass` `boobs` `pussy` `erokemo` `gonewild` `hentai` `hentai-ass` `hentai-midriff` `kitsune` `lewd` `pussy` `solo` `Thigh`"
      )
      .addField(
        "**OWNER**",
        "`bot-token` `eval-test` `eval` `getinvite` `reload` `serverlist`"
      )
      .addField(
        "**TICKET**",
        "`tadd`, `tclose`,`tdelete`, `tnew`,`topen`, `tremove`"
      )
      .addField(
        "**ULTILITY**",
        "`bot-token` `eval-test` `eval` `getinvite` `reload` `serverlist`"
      )
      .addField(
        "**UPTIMER**",
        "`add` `howtouse` `ping` `projects` `remove` `stats` `total` `uptime`"
      )
      .setThumbnail(client.user.displayAvatarURL())
      .setFooter("BOT DEVELOPERS: Light Store | Prefix: !")


      let button1 = new disbut.MessageButton()
      .setStyle('url')
      .setLabel('💞 • Invite Me') 
      .setURL("https://discord.com/api/oauth2/authorize?client_id=969051848063463434&permissions=8&scope=bot");
      let button2 = new disbut.MessageButton()
      .setStyle('url')
      .setLabel('🤔 • Support Server') 
      .setURL("https://discord.gg/ygvxrHjbpH");
      let button3 = new disbut.MessageButton()
      .setStyle('url')
      .setLabel('🎬 • Tutorial Video') 
      .setURL("https://www.youtube.com/");


      return message.channel.send(helpEmbed,{
        button: [button1,button2,button3],
      });

  },
};
