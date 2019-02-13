module.exports = {
    name: 'ding',
    description: 'Favorite command of Erisa',
    category: 'meme',
    execute: async (client, config, Discord, target, utils, message, args) => {
        if (message.author.id === '228574821590499329' && Math.floor(Math.random() * 100) < 50) {
            message.channel.send("There are other commands you can use, eri")
        } else
        message.channel.send("fries are done")
    },
}