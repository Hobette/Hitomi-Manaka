
module.exports = {
    name: 'snowball',
    description: 'This is a game where if you have a role called `snowball` you can use this command to throw snowballs to people, and they\'ll get the role too',
    usage: "(mention or id, must be on the same server)",
    category: "fun",
    execute: async (client, config, Discord, target, utils, message, args) => {
        if (!message.guild.me.hasPermission("MANAGE_ROLES")) return message.channel.send("I need Manage Roles permissions!")

        var snowball = message.guild.roles.find(m => m.name.toLowerCase() === 'snowball')
        if (snowball == undefined) return message.channel.send("This server needs a role called `Snowball` to use this!")
        if (!message.member.roles.has(snowball.id)) return message.channel.send("You need the `Snowball` role to throw snowballs!")

        if (!args[0]) return message.channel.send("You need to throw it to an user that is here, nerd") 
            args[0] = args[0].replace(/[^0-9]/g, "")

        var victim = message.guild.members.get(target.id)

        if (victim  == undefined) return message.channel.send("You need to throw it to an user that is here, nerd") 
        if (victim.user.id === message.author.id || victim.user.bot) return message.channel.send("No.")

        victim.addRoles([snowball.id])
        message.channel.send(`${message.author} threw a snowball at ${victim}!`)
    },
}
