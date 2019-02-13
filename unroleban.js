module.exports = {
    name: 'unroleban',
    aliases: ['untoss'],
    usage: "[user mention/id] [optional: reason]",
    description: 'Reverts a roleban',
    category: 'mod',
    execute: async (client, config, Discord, target, utils, message, args) => {
        if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("You can't roleban if you are not staff /shrug")
        if (!message.guild.me.hasPermission("MANAGE_ROLES")) return message.channel.send("I need manage messages permission to roleban!")
        if (utils.settings[message.guild.id].rolebanRole === "none") return message.channel.send("How do you want to unroleban someone if you haven't even set up a rolebanned roel? (use `hi!settings)` for more info");
        if (!args[0]) return message.channel.send("No, check `hi!help roleban` for more info")
        var rbrole = message.guild.roles.get(utils.settings[message.guild.id].rolebanRole)
        var victim = message.guild.members.get(args[0].replace(/[^0-9]+/g, ""))
        var rolebans = require("../util/data holders/roleban.json")
        if (rolebans[message.guild.id] == undefined) return message.channel.send("This server has never rolebanned someone! (wow)")

        if (victim == undefined) return message.channel.send("That user is not here!")
        if (rolebans[message.guild.id][victim.user.id] === undefined) return message.channel.send("That user is not rolebanned!")
        if (!victim.roles.has(rbrole.id)) return message.channel.send("Please make sure the target user has the roleban role because if not this command breaks!!!!!!!!!1!")


        var reason
        if (!args[1]) { reason = "None specified." } else { reason = args.slice(1, args.length).join(' ') }
        if (victim.user.id === message.author.id) { reason = "Finally decided to use common sense" }

        var lastRoles = message.guild.roles.filter(o => rolebans[message.guild.id][victim.user.id].includes(o.id))
        

        if (victim.roles.map(e => e.managed).includes(true)) 
        return victim.removeRoles([rbrole], `[${message.author.tag}] ` + reason)
        .then(async () => {
        await victim.addRoles(lastRoles.array(), `[${message.author.tag}] ` + reason)
                message.channel.send(`Success! Restored the following roles to **${victim.user.tag} (${victim.user.id})**:
\`${lastRoles.map(o => o.name).join(', ')}
the user had roles managed by external sites (for example bot default roles), so some roles might not have been removed/added\``)
            })
            .then(async () => {
                await delete rolebans[message.guild.id][victim.user.id]
                utils.fs.writeFile("./util/data holders/roleban.json", JSON.stringify(rolebans, null, 2), function (error) {
                    if (error) {
                        throw "ERROR: " + error
                    }
                })
            }).catch(error => { message.channel.send("ERROR: " + error) })

            
            victim.setRoles(lastRoles.array(), `[${message.author.tag}] ` + reason)
            .then(async () => {
                    message.channel.send(`Success! Restored the following roles to **${victim.user.tag} (${victim.user.id})**:
    \`${lastRoles.map(o => o.name).join(', ')}\``)
                })
                .then(async () => {
                    await delete rolebans[message.guild.id][victim.user.id]
                    utils.fs.writeFile("./util/data holders/roleban.json", JSON.stringify(rolebans, null, 2), function (error) {
                        if (error) {
                            throw "ERROR: " + error
                        }
                    })
                }).catch(error => { message.channel.send("ERROR: " + error) })

    },

}