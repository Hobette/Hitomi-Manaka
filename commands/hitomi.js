module.exports = {
    name: 'hitomi',
    description: 'Sends a random picture of Hitomi, the character this bot is inspired on',
    category: "fun",
    usage: "[optional: number of picture]",
    execute: async (client, config, Discord, target, utils, message, args) => {
        var pics = utils.fs.readFileSync("../util/random/hitomi.txt").toString().split("\n")
        var emoj = utils.random(client.guilds.get("431910179991322624").emojis.filter(e => e.name.toLowerCase().includes("hitomi")).array())().toString()
        if (!args[0]) {
            var sendpic = utils.random(pics)()

            const embed = new Discord.RichEmbed()
            .setDescription(`**#${pics.indexOf(sendpic)+1}** `+emoj)
            .setImage(sendpic)
            message.channel.send(embed).catch(()=>message.channel.send("I need embed permissions!"))
        } else {
            if (!pics[args[0]-1]) return message.channel.send("There's no pic with that number!")

            const embed = new Discord.RichEmbed()     
            .setDescription(`**#${args[0]}** `+emoj)
            .setImage(pics[args[0]-1])
            message.channel.send(embed).catch(()=>message.channel.send("I need embed permissions!"))

        }
    },
}
