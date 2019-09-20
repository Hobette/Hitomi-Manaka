module.exports = {
    name: 'unroleban',
    aliases: ['untoss'],
    description: 'Reverts a roleban',
    category: 'mod',
    execute: async (client, config, Discord, target, utils, message, args) => {
        if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("You can't roleban if you are not staff /shrug")
        if (!message.guild.me.hasPermission("MANAGE_ROLES")) return message.channel.send("I need manage messages permission to roleban!")
        if (utils.settings[message.guild.id].rolebanRole === "none") return message.channel.send("How do you want to unroleban someone if you haven't even set up a rolebanned roel? (use `hi!settings)` for more info");

        var reason = message.context.reason
        if (!reason[0]) { reason = `[${message.author.tag}] No reason apparently.` }
        
        var victims = message.context.victims.map(v=>message.guild.members.get(v))
        if (!victims[0]) return message.channel.send("`hi!unroleban [@user1] [@user2] [etc] [optional reason] (both mentions and IDs work)`")

        victims.forEach(victim => {

        var rbrole = message.guild.roles.get(utils.settings[message.guild.id].rolebanRole)
        var rolebans = require("../util/data holders/roleban.json")
        if (rolebans[message.guild.id] == undefined) return message.channel.send("This server has never rolebanned someone! (wow)")

        if (victim == undefined) return message.channel.send("That user is not here!")
        if (rolebans[message.guild.id][victim.user.id] === undefined) return message.channel.send(victim.displayName+" is not rolebanned!")
        if (!victim.roles.has(rbrole.id)) return message.channel.send("Please make sure the target user has the roleban role because if not this command breaks!!!!!!!!!1!")

        var lastRoles = message.guild.roles.filter(o => rolebans[message.guild.id][victim.user.id].includes(o.id))
        

        if (victim.roles.map(e => e.managed).includes(true)) 
        return victim.removeRoles([rbrole], `[${message.author.tag}] ` + reason)
        .then(async () => {
        await victim.addRoles(lastRoles.array(), `[${message.author.tag}] ` + reason)
                message.channel.send(`<:cyclopsCool:477459863644012555> Success! Restored the following roles to **${victim.user.tag} (${victim.user.id})**:
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
                    message.channel.send(`<:cyclopsCool:477459863644012555> Success! Restored the following roles to **${victim.user.tag} (${victim.user.id})**:
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
        })
    },

}
