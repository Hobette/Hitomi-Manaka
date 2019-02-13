module.exports = {
    name: 'commands',
    description: 'Tells you to use the right command',
    category: "e",
    execute: async (client, config, Discord, target, utils, message, args) => {
        message.channel.send('Beep boop wrong command use `hi!help` instead')
    },
}