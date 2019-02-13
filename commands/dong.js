module.exports = {
    name: 'dong',
    description: 'Believ in yourslef',
    category: 'meme',
    execute: async (client, config, Discord, target, utils, message, args) => {
        message.channel.send(utils.embedImage("https://cdn.discordapp.com/attachments/406497072939008001/526529761170817024/autocrop.png"))
    },
}