module.exports = {
    name: 'catavy',
    aliases: ['catavatar'],
    description: 'Shows a random avatar from **stupid cat#8160**',
    category: "dbots",
    execute: async (client, config, Discord, target, utils, message, args) => {
            message.channel.send(utils.embedImage(`https://stupidcat.me/img/avatars/${Math.floor(Math.random() * 31) + 1}.gif`))
    },
}