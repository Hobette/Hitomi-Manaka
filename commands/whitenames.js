module.exports = {
    name: 'whitenames',
    description: 'Shows a true fact about whitenames (this command is exclusive to **Discord Bots**)',
    category: 'dbots',
    execute: async (client, config, Discord, target, utils, message, args) => {
        var embed = new Discord.RichEmbed()
            .setImage('https://cdn.discordapp.com/attachments/119222314964353025/501771190478569472/image.png')
        message.channel.send({ embed })
    },
}