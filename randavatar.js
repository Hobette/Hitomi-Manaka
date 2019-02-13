module.exports = {
    name: 'randavatar',
    aliases: ['randavy'],
    description: 'Shows an avatar from a random user',
    category: "fun",
    execute: async (client, config, Discord, target, utils, message, args) => {
        var randuser = client.users.random()
    
        message.channel.send(`**${randuser.tag}'s (${randuser.id})** avatar is:
${randuser.displayAvatarURL.replace(/.gif/g, '.gif?size=2048')}`)
    },
}