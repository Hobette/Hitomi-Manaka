module.exports = {
    name: 'e',
    description: 'Searches emojis',
    insensitive: true,
    category: 'utility',
    execute: async (client, config, Discord, target, utils, message, args) => {
        
        if (!args[0]) { message.channel.send("What do I search??????????????????????????????????") } else {
            var emotes = client.emojis.filter(e => e.name.toLowerCase().includes(args[0])).array()

            var e = new Discord.RichEmbed()
            .setColor(message.guild.me.highestRole.color)
            .setTitle("Found emojis ("+emotes.length+")")
            .setDescription(emotes.join("").slice(0,1023))
            .setFooter("In PC, right click on the emoji to save or copy it")
		message.channel.send(e)
        }
    },
}