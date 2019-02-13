module.exports = {
    name: 'unban',
    description: 'Unbans an user or multiple',
    usage: "(one or multiple mentions/user IDs) (optional reason)",
    category: "mod",
    execute: async (client, config, Discord, target, utils, message, args) => {

	args.push("")

        if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Have you considered having ban perms first?")
        if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("Hey, give me uban members perms!")
        
        var victims = args.map(a => a.replace(/[^0-9]+/g, ""))
        victims = victims.slice(0, victims.indexOf(""))
        var reason = args.slice(victims.length, args.length)
        if (!reason[0]) { reason = `[${message.author.tag}] No reason apparently??????` } else { reason = `[${message.author.tag}] ${reason.join(" ")}` }
        if (!victims[0]) return message.channel.send(`That's not how you use the command!
\`\`\`hi!unban [user 1] [optional reason]
hi!unban [user 1] [user 2] [etc...] [optional reason]\`\`\`
Both mentions and users are valid.`)

        var victimmsg = []
        await victims.forEach(async e => {
            var ded = message.guild.unban(e, reason).then(async ded => {
                var dedname = `**${ded.tag} (${ded.id})**`
                message.channel.send("Succesfully " +
                    utils.random([
                        `forgiven ${dedname}.`,
                        `allowed ${dedname} to come back to play again!`,
                        `revived ${dedname}.`
                        `bannedn't ${dedname}.`,
                        `regretted banning ${dedname}.`
                    ])()
                )
            }).catch(async ee => {
                if (client.users.get(e) === undefined) {client.fetchUser(e)}
            message.channel.send(`**${client.users.get(e).tag}** wasn't actually banned wtf`)
        })
        })
    },
}