module.exports = {
    name: 'romanize',
    description: 'Romanizes japanese text',
    category: 'text',
    execute: async (client, config, Discord, target, utils, message, args) => {
        var japanese = require("japanese")
if (!args[0]) return message.channel.send("You need to put some text!");
var text = args.join(" ").toLowerCase()
 message.channel.send("Succesfully romanized to `"+japanese.romanize(text)+"`")
    },
}