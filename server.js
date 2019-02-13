module.exports = {
    name: 'server',
    aliases: ['guild'],
    description: 'Shows a server\'s info',
    usage: "(optional server id)",
    category: "utility",
    execute: async (client, config, Discord, target, utils, message, args) => {
        var server = client.guilds.get(args[0])
    if (server === undefined) { server = message.guild }
        var afk =  "None"
    if (server.afkChannel !== null) { afk = server.afkChannel }

    var verificationlevels = ["None", "Low", "Medium", "(╯°□°）╯︵ ┻━┻", " ┻━┻彡 ヽ(ಠ益ಠ)ノ彡┻━┻"]

    const sowner = client.users.get(server.ownerID)
    const embed = new Discord.RichEmbed()
      .setColor(12961221)
      .setAuthor(`${server.name} (aka "${server.nameAcronym}")`)

      .addField("Members", `${server.memberCount}
(${server.memberCount-server.members.filter(member => member.user.bot).size} humans/${server.members.filter(member => member.user.bot).size} bots)`, true)
      .addField("ID", `${server.id}`, true)
      .addField("Owner", `${server.owner.user.tag} (${server.owner})`, true)
      .addField("Owner ID", `${server.ownerID}`, true)
      .addField("Region", `${server.region}`, true)
      .addField("Verification level", `${verificationlevels[server.verificationLevel]}`, true)
      .addField("AFK channel", `${afk}`, true)
      .addField("Emojis", server.emojis.array().join("").slice(0, 1023), true)
      .addField("Created at", `${server.createdAt}`, true)
	if(server.iconURL !== null) { embed.setThumbnail(`${server.iconURL}?size=2048`) }

    message.channel.send({ embed });
    },
}