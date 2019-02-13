module.exports = {
    name: 'jumpto',
    description: 'Sends a link to a message',
    category: "utility",
    usage: "(message ID)",
    execute: async (client, config, Discord, target, utils, message, args) => {
        if (!args[0]) {
            message.channel.send('UwU cany you pws senyd a message id >w<')
        } else {
            const findmsg = message.channel.fetchMessage(args[0])
            if (findmsg === undefined) {
                message.channel.send("???????????????????")
            } else {
                message.channel.send(`Make sure you're in the same channel as the message!
https://discordapp.com/channels/${message.guild.id}/${message.channel.id}/${args[0]}`)
            }
        }
    },
}