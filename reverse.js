module.exports = {
    name: 'reverse',
    description: 'txet a sesreveR',
    usage: ')txet(',
    category: "text",
    execute: async (client, config, Discord, target, utils, message, args) => {
        message.channel.send(args.join(' ').split("").reverse().join(""))
    },
}