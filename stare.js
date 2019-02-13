module.exports = {
    name: 'stare',
    description: '',
    category: 'no',
    execute: async (client, config, Discord, target, utils, message, args) => {
        message.channel.send("*stares at you*")
    },
}