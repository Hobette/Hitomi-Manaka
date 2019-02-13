module.exports = {
    name: 'fromhex',
    description: 'Decodes from hexadecimal',
    category: 'text',
    execute: async (client, config, Discord, target, utils, message, args) => {
        if (!args[0]) return message.channel.send("44696420796f75206b6e6f77206d7920646576202854696e6120746865204379636c6f707329206973207472616e7367656e6465723f")
var text = Buffer(args.join(' '), 'hex').toString()
if (text.includes("�")) return message.channel.send("Malformed hexadecimal.")
message.channel.send(text)
    },
}