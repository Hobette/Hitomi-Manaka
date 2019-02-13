module.exports = {
    name: 'ghosty',
    description: 'Very yes',
    category: 'meme',
    execute: async (client, config, Discord, target, utils, message, args) => {
        var randomLorem = require('random-lorem');
 
message.channel.send(utils.firstLetterUppercase(randomLorem({ min: 3, max: 20 })))
    },
}