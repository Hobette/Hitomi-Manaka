module.exports = {
    name: 'e',
    description: 'Searches emojis',
    insensitive: true,
    category: 'utility',
    insensitive: true,
    execute: async (client, config, Discord, target, utils, message, args) => {
        if (!args[0]) args[0] == ""
        var e = client.emojis
        if (args[0] === "guild") {
            if (!args[1]) { args[1] = message.guild.id }
            if (client.guilds.get(args[1]) === undefined) return message.channel.send("I don't know that guild!")
            e = client.guilds.get(args[1]).emojis
        } else {
            e = e.filter(e => e.name.toLowerCase().includes(args[0]))
        }
        e = e.map(e => `${e} \`${e}\``)
        var embed = new Discord.RichEmbed()
            .setTitle("Emojis found:")
            .setColor(utils.vaporwavecolor())
        if (e.join("\n").length < 2048) {
            embed.setDescription(e.join("\n"))
            message.channel.send(embed)
        } else {
            var page = 1
            var pages = Math.floor(e.length / 10) + 1

            embed.setFooter(`Showing page ${page} of ${pages}.`)
            embed.setDescription(e.slice(10 * (page - 1), (10 * (page - 1)) + 10).join("\n"))

            message.channel.send(embed).then(msg => {

                msg.react('⏪').then(async r => {
                    await msg.react('⏩')

                    const backwardsFilter = (reaction, user) => reaction.emoji.name === '⏪' && user.id === message.author.id;
                    const forwardsFilter = (reaction, user) => reaction.emoji.name === '⏩' && user.id === message.author.id;

                    const backwards = msg.createReactionCollector(backwardsFilter, { time: 120000 });
                    const forwards = msg.createReactionCollector(forwardsFilter, { time: 120000 });


                    backwards.on('collect', async r => {
                        if (page === 1) { page = pages } else { page--; }

                        await embed.setColor(utils.vaporwavecolor())
                        await embed.setFooter(`Showing page ${page} of ${pages}`)
                        await embed.setDescription(e.slice(10 * (page - 1), (10 * (page - 1)) + 10).join("\n"))
                        msg.edit(embed)
                    })

                    forwards.on('collect', async r => {
                        if (page === pages) { page = 1 } else { page++ }

                        await embed.setColor(utils.vaporwavecolor())
                        await embed.setFooter(`Showing page ${page} of ${pages}`)
                        await embed.setDescription(e.slice(10 * (page - 1), (10 * (page - 1)) + 10).join("\n"))
                        msg.edit(embed)
                    })


                })  
            })
        }
    },
}
