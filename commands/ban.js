module.exports = {
    name: 'ban',
    description: 'Bans an user(s) (can do hackban as well)',
    usage: "(one or multiple mentions/user IDs) (optional reason)",
    category: "mod",
    execute: async (client, config, Discord, target, utils, message, args) => {

	args.push("")

        if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Have you considered having ban perms first?")
        if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("Hey, give me ban members perms!")
        
        var victims = args.map(a => a.replace(/[^0-9]+/g, ""))
        victims = victims.slice(0, victims.indexOf(""))
        var reason = args.slice(victims.length, args.length)
        if (!reason[0]) { reason = `[${message.author.tag}] No reason apparently??????` } else { reason = `[${message.author.tag}] ${reason.join(" ")}` }
        if (!victims[0]) return message.channel.send(`That's not how you use the command!
\`\`\`hi!ban [user 1] [optional reason]
hi!ban [user 1] [user 2] [etc...] [optional reason]\`\`\`
Both mentions and users are valid. This command can also perform hackbanning (aka banning members that aren't on your server by using their user IDs)`)

        await victims.forEach(async e => {
            var ded = message.guild.ban(e, reason).then(async ded => {
                var dedname = `**${ded.tag} (${ded.id})**`
                message.channel.send("Succesfully " +
                    utils.random([
                        `BEANED ${dedname}!!!! <:Beaned:468493110851141633>`,
                        `destroyed ${dedname} from existence.`,
                        `~~unbanned~~ ${dedname} <:troll:381546270528897024>`,
                        `bent ${dedname}. 🔨`,
                        `bAnNeD *${dedname},`,
                        `deleted ${dedname}. <:WindowsRecycleBin:389117071922954240>`,
                        `killed ${dedname}. 💀`,
                        `owned ${dedname}.`,
                        `sent ${dedname} to hell.`
                    ])()
                )
            }).catch(ee => message.channel.send(`Failed to ban **${client.users.get(e).tag}**!!!!!!!!!!! :joy:`))
        })
    },
}
