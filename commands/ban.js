module.exports = {
    name: 'ban',
    aliases: ['bean'],
    description: 'Bans an user(s) (can do hackban as well)',
    usage: "(one or multiple mentions/user IDs) (optional reason)",
    category: "mod",
    execute: async (client, config, Discord, target, utils, message, args) => {

        if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Have you considered having ban perms first?")
        if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("Hey, give me ban members perms!")
        
        var arguments = utils.multitarget(args)
        if (!arguments.targets[0]) return message.channel.send(`That's not how you use the command!
\`\`\`hi!ban [user 1] [optional reason]
hi!ban [user 1] [user 2] [etc...] [optional reason]\`\`\`
Both mentions and users are valid. This command can also perform hackbanning (aka banning members that aren't on your server by using their user IDs)`)


        await arguments.targets.forEach(async e => {
            var ded = message.guild.ban(e, `[${message.author.tag}] ${arguments.reason}`).then(async ded => {

                if (!client.users.has(e)) { await client.fetchUser(e) 
                    ded = client.users.get(e)
                } //fetch the user if hitomi doesn't have them in their cache, so banname doesn't become "undefined (undefined)" 
                
                var banname = `**${ded.tag} (${ded.id})**`
                message.channel.send("Succesfully " +
                    utils.random([
                        `BEANED ${banname}!!!! <:Beaned:468493110851141633>`,
                        `destroyed ${banname} from existence.`,
                        `~~unbanned~~ ${banname} <:troll:381546270528897024>`,
                        `bent ${banname}. 🔨`,
                        `bAnNeD *${banname},`,
                        `deleted ${banname}. <:WindowsRecycleBin:389117071922954240>`,
                        `killed ${banname}. 💀`,
                        `owned ${banname}.`,
                        `sent ${banname} to hell.`
                    ])()
                )
            }).catch(ee => message.channel.send(`Failed to ban **${client.users.get(e).tag}**!!!!!!!!!!! :joy:`))
        })
    },
}
