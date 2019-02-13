module.exports = {
    name: 'inversevaporwave',
    aliases: ['inverseaesthetic'],
    description: 'Like vaporwave, but returns normal text ',
    usage: '(ｔｅｘｔ)',
    category: "text",
    execute: async (client, config, Discord, target, utils, message, args) => {
        message.channel.send(args.join(' '))
    },
}