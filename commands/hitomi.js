module.exports = {
    name: 'hitomi',
    description: 'Sends a random SFW pic of Hitomi, the character this bot is based off (some pics might be A LITTLE explicit. However, this command is supposed to be totally SFW)',
    category: "fun",
    usage: "[optional: number of gepicturender]",
    execute: async (client, config, Discord, target, utils, message, args) => {
        var pics = require( "../util/random/hitomi.json")
        var emoj = utils.random(client.guilds.get("431910179991322624").emojis.filter(e => e.name.toLowerCase().includes("hitomi")).array())().toString()
        if (!args[0]) {
            var sendpic = utils.random(pics)()

            const embed = new Discord.RichEmbed()
            .setDescription(`**#${pics.indexOf(sendpic)}** `+emoj)
            .setImage(sendpic)
            message.channel.send(embed)
        } else {
            if (!pics[args[0]]) return message.channel.send("There's no pic with that number!")

            const embed = new Discord.RichEmbed()     
            .setDescription(`**#${args[0]}** `+emoj)
            .setImage(pics[args[0]])
            message.channel.send(embed)
        }
    },
}