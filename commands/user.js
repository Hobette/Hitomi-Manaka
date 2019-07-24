
module.exports = {
  name: 'user',
  description: 'Sees an user\'s info',
  category: "utility",
  usage: '(mention or user ID or none to see your info)',
  execute: async (client, config, Discord, target, utils, message, args) => {

      var statuses = {
        online: "green_",
        idle: "yellow_",
        dnd: "",
        offline: "black_"
      }
      var gaem = "A boring game."
      if (target.presence.game !== null) {gaem = target.presence.game.name}

      const embed = new Discord.RichEmbed()
        .setColor(12961221)
        .setFooter(`Requested by ${message.author.username}#${message.author.discriminator}${message.guild.members.has(target.id) ? " | Use hi!guilduser to see info about them as a member of this guild." : ""}`)
        .setThumbnail(`${target.displayAvatarURL.replace(/\?size=[0-9]+/g, "")}?size=2048`)
        .setAuthor(`User info`)

        .addField("Name", target.tag, true)
        .addField("ID", target.id, true)
        .addField("Bot?", (target.bot ? "<:check:314349398811475968>": "<:xmark:314349398824058880>"), true)
        .addField("Playing...", gaem, true)
        .addField("Status", `:${statuses[target.presence.status]}heart:`, true)
        .addField("Seen on", (target == client.user || client.guilds.filter(e=>e.members.has(target.id))).size<0 ? "The school infirmary": `${client.guilds.filter(e=>e.members.has(target.id)).size} servers.`, true)
        .addField("Created at", `${target.createdAt}`, true)

      message.channel.send({ embed }).catch(()=> message.channel.send("I need embed permissions for this!"));
    
  },
}
