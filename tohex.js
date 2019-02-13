module.exports = {
    name: 'tohex',
    description: 'Encodes to hexadecimal',
    category: 'text',
    usage: "(text)",
    execute: async (client, config, Discord, target, utils, message, args) => {
        if (!args[0]) return message.channel.send("47616D657273206265206C696B65205C2A666F72746E697465206E6F697365732A")
message.channel.send(Buffer(args.join(' ')).toString('hex'))
    },
}