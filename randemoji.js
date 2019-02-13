module.exports = {
    name: 'randemoji',
    aliases: ['randemote'],
    description: 'Sends a random emoji from a random guild',
    category: "fun",
    execute: async (client, config, Discord, target, utils, message, args) => {
        var remoji = Math.floor(Math.random() * client.emojis.size)
        var rname = client.emojis.array()[remoji].name
        var rurl = client.emojis.array()[remoji].url
        message.channel.send(`\`:${rname}:\` ${rurl}`)
    },
}