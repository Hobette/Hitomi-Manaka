module.exports = {
    name: 'sexuality',
    description: 'Shows a random sexuality',
    usage: "[optional: number of sexuality]",
    category: "fun",
    execute: async (client, config, Discord, target, utils, message, args) => {
        var sexualities = require( "../util/random/sexualities.json")
        if (!args[0]) {
        var sexuality = utils.random(sexualities)()
            const embed = new Discord.RichEmbed()
            .setDescription(`<:prideFlag:500255005266280448> **#${sexualities.indexOf(sexuality)} ${sexuality.replace("-", ":** ")}.`)
            message.channel.send(embed).catch(()=>message.channel.send("I need embed permissions!"))
}
            else {
        if (!sexualities[args[0]-1]) return message.channel.send("There's no sexuality with that number!")
        const embed = new Discord.RichEmbed()
            .setDescription(`<:prideFlag:500255005266280448> **#${args[0]} ${sexualities[args[0]-1].replace("-", ":** ")}.`)
            message.channel.send(embed).catch(()=>message.channel.send("I need embed permissions!"))
	    }
    },
}
