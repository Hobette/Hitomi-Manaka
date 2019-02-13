module.exports = {
    name: 'tobase64',
    aliases: ['tob64'],
    description: 'Encodes to base 64',
    category: 'text',
    usage: "(text)",
    execute: async (client, config, Discord, target, utils, message, args) => {
        if (!args[0]) return message.channel.send("aHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj0wdjBwZ0g2TW1aTQ==")
message.channel.send(Buffer(args.join(' ')).toString('base64'))
    },
}