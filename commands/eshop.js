module.exports = {
    name: 'eshop',
    description: 'Searches games in the eShop from Nintendo',
    category: 'wip',
    insensitive: true,
    execute: async (client, config, Discord, target, utils, message, args) => {
        var filter = {
            limit: 200
        }
        /*
        flags:

        options.sort: --so
        options.system: --sy
        options.availability: --av
        options.category: --ca
        options.price: --pr
        options.number: --pl
        */
        if (message.author.id !== config.ownerID) return message.channel.send("WIP command")
        const eshop = require('eshop-api-wrapper');
        if (!args[0]) return message.channel.send("You need to search something, nerd! (check `hi!help eshop` to see a list of flags too)")

        var query = args.join(' ').replace(/--(so|sy|av|ca|pr|pr)-[a-z_.0-9]+/g, "")
        var flags = args.join(' ').match(/--(so|sy|av|ca|pr|pr)-[a-z_.0-9]+/g)
        
        for(i=0; i<flags.length; i++){
            
        }
        eshop.search(query)
            .then(data => console.log(data.games.game))
            .catch(err => console.error(err))
    },
}