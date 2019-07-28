module.exports = {
    name: 'gender',
    description: 'Shows a random gender definition',
    aliases: ['whatgenderisroad'],
    usage: "[optional: number of gender]",
    category: "fun",
    execute: async (client, config, Discord, target, utils, message, args) => {
        var genders = require("../util/random/genders.json")

        if (!args[0]) {
            var gender = utils.random(genders)()
            const embed = new Discord.RichEmbed()
                .setDescription(`<:prideFlag:500255005266280448> **#${genders.indexOf(gender)} ${gender.replace("-", ":** ")}.`)
            message.channel.send(embed)
        } else {
            if (!genders[args[0] - 1]) return message.channel.send("There's no sexuality with that number!")
            const embed = new Discord.RichEmbed()
                .setDescription(`<:prideFlag:500255005266280448> **#${args[0]} ${genders[args[0] - 1].replace("-", ":** ")}.`)
            message.channel.send(embed)
        }
    },
}
