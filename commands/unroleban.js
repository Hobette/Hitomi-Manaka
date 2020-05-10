module.exports = {
    name: 'unroleban',
    aliases: ['untoss'],
    description: 'Reverts a roleban',
    category: 'mod',
    execute: async (client, config, Discord, target, utils, message, args) => {
        if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("You can't roleban if you are not staff /shrug")
        if (!message.guild.me.hasPermission("MANAGE_ROLES")) return message.channel.send("I need manage messages permission to roleban!")
        if (utils.settings[message.guild.id].rolebanRole === "none") return message.channel.send("How do you want to unroleban someone if you haven't even set up a rolebanned roel? (use `hi!settings)` for more info");

        var arguments = utils.multitarget(args)
        if (!arguments.targets[0]) return message.channel.send("`hi!unroleban [@user1] [@user2] [etc] [optional reason] (both mentions and IDs work)`")

        arguments.targets = arguments.targets.map(v => message.guild.members.get(v))

        arguments.targets.forEach(target => {

            var rbrole = message.guild.roles.get(utils.settings[message.guild.id].rolebanRole)
            var rolebans = require("../util/data holders/roleban.json")
            if (rolebans[message.guild.id] == undefined) return message.channel.send("This server hasn't every rolebanned someone yet! (wow)")

            if (target == undefined) return message.channel.send("That user is not here!")
            if (rolebans[message.guild.id][target.user.id] === undefined) return message.channel.send(target.displayName + " is not rolebanned!")
            if (!target.roles.has(rbrole.id)) return message.channel.send("Please make sure the target user has the roleban role because if not this command breaks!!!!!!!!!1!")

            var lastRoles = message.guild.roles.filter(o => rolebans[message.guild.id][target.user.id].includes(o.id))


            if (target.roles.map(e => e.managed).includes(true)) {
                return target.removeRoles([rbrole], `[${message.author.tag}] ` + arguments.reason)
                    .then(async () => {
                        await target.addRoles(lastRoles.array(), `[${message.author.tag}] ` + arguments.reason)
                        message.channel.send(`<:cyclopsCool:477459863644012555> Success! Restored the following roles to **${target.user.tag} (${target.user.id})**:
\`${lastRoles.map(o => o.name).join(', ')}

the user had roles managed by external sites (for example bot default roles, twitch sub roles...), so these were ignored\``)
                    })
                    .then(async () => {
                        await delete rolebans[message.guild.id][target.user.id]
                        utils.fs.writeFile("./util/data holders/roleban.json", JSON.stringify(rolebans, null, 2), function (error) {
                            if (error) {
                                throw "ERROR: " + error
                            }
                        })
                    }).catch(error => { message.channel.send("ERROR: " + error) })
            } else {


                target.setRoles(lastRoles.array(), `[${message.author.tag}] ` + arguments.reason)
                    .then(async () => {
                        message.channel.send(`<:cyclopsCool:477459863644012555> Success! Restored the following roles to **${target.user.tag} (${target.user.id})**:
\`${lastRoles.map(o => o.name).join(', ')}\``)
                    })
                    .then(async () => {
                        await delete rolebans[message.guild.id][target.user.id]
                        utils.fs.writeFile("./util/data holders/roleban.json", JSON.stringify(rolebans, null, 2), function (error) {
                            if (error) {
                                throw "ERROR: " + error
                            }
                        })
                    }).catch(error => { message.channel.send("ERROR: " + error) })
            }
        })
    },

}
