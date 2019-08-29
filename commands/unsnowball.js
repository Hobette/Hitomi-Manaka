module.exports = {
    name: 'unsnowball',
    description: 'Removes the `Snowball` role from you (hi!snowball)',
    category: 'fun',
    execute: async (client, config, Discord, target, utils, message, args) => {

        if (!message.guild.me.hasPermission("MANAGE_ROLES")) return message.channel.send("I need Manage Roles permissions!")

        var snowball = message.guild.roles.find(m => m.name.toLowerCase() === 'snowball')
        if (snowball == undefined) return message.channel.send("Why would I remove a role that doesn't exist?")

        if (!message.member.roles.has(snowball.id)) return message.channel.send("But you don't have the snowball role")

        message.member.removeRoles([snowball.id])
        .then(() => { message.channel.send("doned") })
        .catch(() => { message.channel.send("Failed to unsnowball you!") })
    },
}
