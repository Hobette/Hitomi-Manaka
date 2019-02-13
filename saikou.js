module.exports = {
    name: 'saikou',
    description: 'Random text memes from ACG world',
    category: 'easter',
    execute: async (client, config, Discord, target, utils, message, args) => {
        const saikou = require('saikou')
message.channel.send(saikou())
    },
}