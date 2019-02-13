module.exports = {
    name: 'resetdaily',
    description: 'Reset someone\'s daily',
    usage: "[user]",
    category: 'owner',
    execute: async (client, config, Discord, target, utils, message, args) => {
        utils.eco.ResetDaily(target.id).then(() => {
            return message.channel.send("Ok buddy")
        })

    },
}