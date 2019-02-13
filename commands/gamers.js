module.exports = {
    name: 'gamers',
    description: 'Says how many gamers are doing gamer things at this moment',
    category: 'ppppp',
    execute: async (client, config, Discord, target, utils, message, args) => {
        message.channel.send(`There are currently ${client.users.filter(e => e.presence.game != null && e.presence.game.name === "Fortnite").size} people playing Fortnite.`)
    },
}