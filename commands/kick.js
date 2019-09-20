module.exports = {
    name: 'kick',
    description: 'kicks an user(s) (can do hackkick as well)',
    usage: "(one or multiple mentions/user IDs) (optional reason)",
    category: "mod",
    execute: async (client, config, Discord, target, utils, message, args) => {


        if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("Have you considered having kick perms first?")

        var victims = message.context.victims
        var reason = message.context.reason
        if (!reason[0]) { reason = `[${message.author.tag}] No reason apparently??????` } else { reason = `[${message.author.tag}] ${reason}` }
        if (!victims[0]) return message.channel.send(`That's not how you use the command!
\`\`\`hi!kick [user 1] [optional reason]
hi!kick [user 1] [user 2] [etc...] [optional reason]\`\`\`
Both mentions and users are valid.`)

        var victimmsg = []
        await victims.forEach(async e => {
            var ded = message.guild.members.get(e).kick(reason).then(async ded => {
                var dedname = `**${ded.tag} (${ded.id})**`
                message.channel.send("Succesfully " +
                    utils.random([
                        `BEANED ${dedname}!!!! <:Beaned:468493110851141633>`,
                        `destroyed ${dedname} from existence.`,
                        `~~unkickned~~ ${dedname} <:troll:381546270528897024>`,
                        `bent ${dedname}. 🔨`,
                        `kickNeD *${dedname},`,
                        `deleted ${dedname}. <:WindowsRecycleBin:389117071922954240>`,
                        `killed ${dedname}. 💀`,
                        `owned ${dedname}.`
                    ])()
                )
            }).catch(ee => message.channel.send(`Failed to kick **${client.users.get(e).tag}**!!!!!!!!!!! :joy:`))
        })
    },
}
