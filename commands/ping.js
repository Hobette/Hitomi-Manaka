module.exports = {
    name: 'ping',
    description: 'Check if I\'m being lazy',
    category: "general",
    insensitive: true,
    usage: "(insert some secret word here)",
    execute: async (client, config, Discord, target, utils, message, args) => {
        if (args[0] === "me") {
            message.reply()
        }  
        
        else if (args[0] === "ry") {
            message.channel.send('<@190544080164487168>')
        } else if (args[0] === 'max') {
            message.channel.send('<@!107563269484490752> <@!195156669108322313>')
        } else if (args[0] === 'tehi') {
            message.channel.send("<@288006377484451850>")
        } else if (args[0] === 'ghosty') {
            message.channel.send("<@!97437477723193344>")
        } else if (args[0] === "nox") {
            message.channel.send('<@!105096514388373504>')
        } 
        
        else if (args[0] === "yourself") {
            message.channel.send('hi!ping')
        } else if (args[0] === 'tina' || args[0] === 'mama') {
            message.channel.send('Do it yourself, lazy human.')
        } else {

            if (Math.floor(Math.random() * 100)+1 <= 3) {
                const embed = new Discord.RichEmbed()
                    .setImage('https://cdn.discordapp.com/attachments/110373943822540800/490483655869726730/unknown.png')
                message.channel.send({ embed })
            }                var pings = require("../util/random/ping.json")
                var pinged = utils.random(pings)
                message.channel.send("hmMmmMmMmmM")
                    .then(m => 
                        m.edit(`${pinged()} \`(${m.createdTimestamp - message.createdTimestamp}ms/${Math.round(client.ping)}ms)\``))
            }
    },
};