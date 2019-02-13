module.exports = {
    name: 'gender',
    description: 'Shows a random gender definition',
    aliases: ['whatgenderisroad'],
    usage: "[optional: number of gender]",
    category: "fun",
    execute: async (client, config, Discord, target, utils, message, args) => {
        var genders = require( "../util/random/genders.json")
        
        if (!args[0]) {
            var gender = utils.random(genders)()
            const embed = new Discord.RichEmbed()
            .setDescription(`<:prideFlag:500255005266280448> **#${genders.indexOf(gender)}** ${gender}`)
            message.channel.send(embed)
        } else {
            if (!genders[args[0]]) return message.channel.send("There's no sexuality with that number!")
            const embed = new Discord.RichEmbed()
                .setDescription(`<:prideFlag:500255005266280448> **#${args[0]}** ${genders[args[0]]}`)
                message.channel.send(embed)    }
    },
}