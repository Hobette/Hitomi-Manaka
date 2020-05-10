module.exports = {
    name: 'roleban',
    aliases: ['toss'],
    description: 'Like mute, but more effective, and allows the staff to directly talk with a member that did something really bad. The command takes all of an user\'s roles and gives them a special role which revokes access to all channels and opens a special room for talking with the server\'s staff. Requires `rolebanRole` to be set up (use `hi!settings` for more info)',
    usage: "[user mention/id] [optional: reason] or list (to see what people are rolebanned)",
    category: 'mod',
    execute: async (client, config, Discord, target, utils, message, args) => {
        if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("You can't roleban if you are not staff /shrug");
        if (!message.guild.me.hasPermission("MANAGE_ROLES")) return message.channel.send("I need manage messages permission to roleban!");

        if (utils.settings[message.guild.id].rolebanRole === "none") return message.channel.send("There's no roleban role! Please use `hi!settings rolebanRole {role ID/name/mention}` to set up this command!");

        var rbrole = message.guild.roles.get(utils.settings[message.guild.id].rolebanRole)

        var rolebans = require("../util/data holders/roleban.json")
        if (args[0].toLowerCase() === 'list') return message.channel.send(`**List of rolebanned people in ${message.guild.name}:**
\`\`\`
${message.guild.members.filter(o => rolebans[message.guild.id][o.user.id] !== undefined).map(e => `- ${e.user.tag} (${e.user.id})`).join("\n")}
\`\`\``)

        var arguments = utils.multitarget(args)

        if (!arguments.targets[0]) return message.channel.send("`hi!roleban [@user1] [@user2] [etc] [optional reason]`")

        arguments.targets.forEach(target => {
            target = message.guild.members.get(target)
            if (target == undefined) return message.channel.send("That user is not here!")
            if (!message.guild.me.highestRole.comparePositionTo(target.highestRole) < 0) return message.channel.send("I can't roleban that user because their role hierarchy is higher than mine!")
            if (target.roles.has(rbrole.id)) return message.channel.send("Please make sure the target user doesn't have the roleban role already!")

            if (rolebans[message.guild.id] == undefined) { rolebans[message.guild.id] = {} }
            if (rolebans[message.guild.id][target.user.id] !== undefined) return message.channel.send("What have that person done to you that makes you wanna roleban them twice?")

            var lastRoles = target.roles.filter(r => !r.managed && r !== rbrole && r !== message.guild.defaultRole)
            //Ignores roles like patreon roles or bot roles cause they give errors!!!!!!!!111111

            rolebans[message.guild.id][target.user.id] = lastRoles.map(p => p.id)
            utils.fs.writeFile("./util/data holders/roleban.json", JSON.stringify(rolebans, null, 2), function (error) {
                if (error) {
                    message.channel.send("ERROR: " + error)
                }
            })

            //For when the target has a role like the bots' roles or twitch sub roles
            if (target.roles.map(e => e.managed).includes(true)) {
                return target.removeRoles(lastRoles.array(), arguments.reason)
                    .then(async () => {
                        await target.addRoles([rbrole.id], `[${message.author.tag}] ${target.user.id === message.author.id ? "lol they rolebanned themselves" : arguments.reason}`)

                        if (target.user.id === message.author.id) return message.channel.send("Lol owned")
                        message.channel.send(`<:cyclopsCool:477459863644012555> Succesfully rolebanned **${target.user.tag} (${target.user.id})**. Their past roles were:
\`${lastRoles.map(e => e.name).join(", ")}

the user had roles managed by external sites (for example bot default roles, twitch sub roles...), so they were ignored\``)
                    })
                    .catch(error => { message.channel.send("ERROR: " + error) })
            } else {

                target.setRoles([rbrole.id], `[${message.author.tag}] ${target.user.id === message.author.id ? "lol they rolebanned themselves" : arguments.reason}`).then(async () => {
                    if (target.user.id === message.author.id) return message.channel.send("Lol owned");
                    message.channel.send(`<:cyclopsCool:477459863644012555> Succesfully rolebanned **${target.user.tag} (${target.user.id})**. Their past roles were:
\`${lastRoles.map(e => e.name).join(", ")}\``);
                })
            }
        })
    }

}
