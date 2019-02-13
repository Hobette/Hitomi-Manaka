module.exports = {
  name: 'user',
  description: 'Sees an user\'s info',
  category: "utility",
  usage: '(mention or user ID or none to see your info)',
  execute: async (client, config, Discord, target, utils, message, args) => {

      let sharedServers = 0;
      for (i = 0; i < client.guilds.size; i++) {
        if (client.guilds.array()[i].members.find(m => m.user.id === target.id) != undefined) {
          sharedServers++;
        }
      }
      if (target == client.user) { sharedServers = "America" } else { sharedServers = sharedServers + ' guilds' }

      var idgame 
      if (target.presence.game != null) { idgame = target.presence.game.name } else { idgame = "Nothing -(" }
      const embed = new Discord.RichEmbed()
        .setColor(12961221)
        .setFooter(`Requested by ${message.author.username}#${message.author.discriminator}`)
        .setThumbnail(`${target.displayAvatarURL.replace(/\?size=[0-9]+/g, "")}?size=2048`)
        .setAuthor(`User info`)

        .addField("Name", `${target.username}#${target.discriminator}`, true)
        .addField("ID", `${target.id}`, true)
        .addField("Bot?", `${utils.yesNo(target.bot, "<:check:314349398811475968>", "<:xmark:314349398824058880>")}`, true)
        .addField("Playing...", `${idgame}`, true)
        .addField("Status", `${utils.firstLetterUppercase(target.presence.status)}`, true)
        .addField("Seen on", `${sharedServers}`, true)
        .addField("Created at", `${target.createdAt}`, true)
      message.channel.send({ embed });
    
  },
}