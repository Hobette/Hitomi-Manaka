module.exports = {
    name: 'icon',
    description: 'Shows the guild\'s icon',
    usage: '[optional: guild ID]',
    category: 'utility',
    execute: async (client, config, Discord, target, utils, message, args) => {
        if (!args[0]) { args = args.push(message.guild.id) }
        var server = client.guilds.get(args[0])
        if (server === undefined ) { server = message.guild }

        message.channel.send("Here's **"+server.name+"**'s icon:",utils.embedImage(server.iconURL+"?size=2048"))
    },
}