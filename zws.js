module.exports = {
    name: 'zws',
    description: 'Sends a zero-width space that you can copy and use',
    category: 'pppp',
    execute: async (client, config, Discord, target, utils, message, args) => {
        message.channel.send("\u200B")
    },
}