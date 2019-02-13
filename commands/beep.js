module.exports = {
    name: 'beep',
    description: 'Revives a chat',
    category: 'meme',
    execute: async (client, config, Discord, target, utils, message, args) => {
        var v = new Discord.RichEmbed()
            .setImage("https://cdn.discordapp.com/attachments/315683286242557955/519638044983427076/Chats_Not_Dead.gif")
        message.channel.send(v)
    },
}