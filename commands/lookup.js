module.exports = {
    name: 'lookup',
    description: 'Searches for the provided invite or user ID\'s info',
    category: 'utility',
    execute: async (client, config, Discord, target, utils, message, args) => {
        args[0] = args[0].replace(/(http:\/\/|https:\/\/)?(?:discord(?:(?:.|.?dot.?)(?:gg|me|li|to|link)|app(?:.|.?dot.?)com\/invite)|(invite|disco)(?:.|.?dot.?)gg)\//g, "")
        
        var user = await client.fetchUser(args[0]).catch(ee => { return undefined })
        var invite = await client.fetchInvite(args[0]).catch(ee => { return undefined })

        if (user == undefined && invite == undefined) return message.channel.send("No Data.")


        var e = new Discord.RichEmbed()
        if (message.guild.me.colorRole !== null && message.guild.me.colorRole.color > 0) { e.setColor(message.guild.me.colorRole.hexColor)}

        if (user !== undefined) {
            var u = client.users.get(user.id)
                e.setThumbnail(u.displayAvatarURL)
                e.setTitle("User found!")
                e.setDescription(`**Name:** ${user.tag}
**ID:** ${u.id}
**Bot:** ${u.bot ? "yes" : "no"}
**Created at:** ${u.createdAt}
[Avatar url](${u.displayAvatarURL})`)
        }

        if (invite !== undefined) {
            var guild = invite.guild
            var inviter = invite.inviter
                e.setThumbnail(`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png?size=2048`)
                e.addField("Guild", `**Name:** ${guild.name}
**ID:** ${guild.id}
**Users:** ${invite.memberCount} users (${invite.presenceCount} online) 
[Icon url](https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png?size=2048)`, true)
                e.addField("Invite", `**Inviter:** ${inviter.username}#${inviter.discriminator}
**Inviter ID:** ${inviter.id}
**Channel:** #${invite.channel.name}`)
        }
        
        message.channel.send(e)

    },
}
