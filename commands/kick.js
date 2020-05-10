module.exports = {
    name: 'kick',
    description: 'kicks user(s) from the server',
    usage: "(one or multiple mentions/user IDs) (optional reason)",
    category: "mod",
    execute: async (client, config, Discord, target, utils, message, args) => {

        if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("Have you considered having kick perms first?")

        var arguments = utils.multitarget(args)
         
        if (!arguments.targets[0]) return message.channel.send(`That's not how you use the command!
\`\`\`hi!kick [user 1] [optional reason]
hi!kick [user 1] [user 2] [etc...] [optional reason]\`\`\`
Both mentions and users are valid.`)

        await arguments.targets.forEach(async e => {
            var ded = message.guild.members.get(e).kick(`[${message.author.tag}] ${arguments.reason}`).then(async ded => {

                await client.fetchUser(e) 
                ded = client.users.get(e)
                 //fetch the user if hitomi doesn't have them in their cache, so banname doesn't become "undefined (undefined)" 

                var kickname = `**${ded.tag} (${ded.id})**`
                message.channel.send("Succesfully " +
                    utils.random([
                        `BEANED ${kickname}!!!! <:Beaned:468493110851141633>`,
                        `destroyed ${kickname} from existence.`,
                        `~~unkickned~~ ${kickname} <:troll:381546270528897024>`,
                        `bent ${kickname}. 🔨`,
                        `kickNeD *${kickname},`,
                        `deleted ${kickname}. <:WindowsRecycleBin:389117071922954240>`,
                        `killed ${kickname}. 💀`,
                        `owned ${kickname}.`
                    ])()
                )
            }).catch(ee => message.channel.send(`Failed to kick **${client.users.get(e).tag}**!!!!!!!!!!! :joy:`))
        })
    },
}
