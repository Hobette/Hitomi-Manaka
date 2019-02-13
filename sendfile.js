module.exports = {
    name: 'sendfile',
    description: 'Sends a command file',
    category: "owner",
    usage: "[file location(s)]",
    execute: async (client, config, Discord, target, utils, message, args) => {
        if (!args[0]) return message.channel.send("You forgot the args")
        var i = 0
        while (i < args.length) {
            message.author.send({files: [args[i]]})
            i++
        }
    },
}