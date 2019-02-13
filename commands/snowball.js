module.exports = {
    name: 'snowball',
    description: 'Throws a snowball at someone and gives them a `snowball role (only if there\'s any). Fails a lot if they already have it',
    usage: "(mention or id, must be on the same server)",
    category: "fun",
    execute: async (client, config, Discord, target, utils, message, args) => {
        if (!message.guild.me.hasPermission("MANAGE_ROLES")) { message.channel.send("I need Manage Roles permissions!") } else {
        var snowball = message.guild.roles.find(m => m.name === 'Snowball')
        if (snowball == undefined) { message.channel.send("This server needs a role called `Snowball` to use this!") } else {
        if (!args[0]) { message.channel.send("You need to throw it to an user that is here, nerd") } else {
            args[0] = args[0].replace(/[^0-9]/g, "")
        var victim = message.guild.members.get(args[0])
        if (victim == undefined) { message.channel.send("You need to throw it to an user that is here, nerd") } else {
        if (victim.user.id === message.author.id || victim.user.bot) { message.channel.send("No.") } else {
        var hasSnowball = victim.roles.find(m => m.id === snowball.id)
        if (hasSnowball == undefined) {
            try {
            victim.addRole(snowball.id, `${message.author.tag} throwed a snowball to them.`)
            message.channel.send(`**${message.member.displayName}** threw a snowball to ${victim}!`)
            } catch (error) {
                message.channel.send(`Looks like somehow ${message.member.displayName} is not able to throw snowballs to ${victim} (Maybe the role is above mine?)`)
            }
        } else
            try {
            var chance = Math.floor(Math.random() * 100)
            if (chance < 9) {
                victim.removeRole(snowball, `${message.author.tag} throwed a snowball to them.`)
                message.channel.send(`**${message.member.displayName}** threw a snowball to ${victim} and destroyed their ones!`)
            } else {
                message.channel.send(`**${message.member.displayName}** threw a snowball to ${victim} but they failed!`)
            }
            } catch (error) {
                message.channel.send(`Looks like somehow ${message.member.displayName} is not able to throw snowballs to ${victim} (Maybe the role is above mine?)`)
            }}}}}}
    },
}