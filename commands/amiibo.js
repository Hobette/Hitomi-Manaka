module.exports = {
    name: 'amiibo',
    description: 'Searches for amiibos or shows the info about an specific amiibo. Powered by **[AmiiboAPI](https://www.amiiboapi.com/)**!',
    category: 'utility',
    usage: '<amiibo name> (to display info about an specific amiibo, or "search <words>" to search for different amiibos',
    insensitive: true,
    execute: async (client, config, Discord, target, utils, message, args) => {
        var colors = ["#FF0016", "#008861", "#9ECA00", "#008861", "#00ABEE", "#E90080"] //these colors are from the amiibo logo! (http://vgboxart.com/resources/logo/12370_amiibo-prev.png) 
        if (!args[0]) return message.channel.send("That's not how you use the command. Check `hi!help amiibo` for more info!")
        utils.get("https://www.amiiboapi.com/api/amiibo", {
        }).then((response) => {
            return response.json();
        }).then((response) => {
            if (args[0] === "search") {
                args.shift()
                var amilist = response.amiibo.filter(amiibo => amiibo.name.toLowerCase().includes(args.join(" "))).map(a => `**\`-\` ${a.name}**`)
                if (!amilist[0]) return message.channel.send("No amiibos found!")
                var pages = Math.floor(amilist.length / 10) + 1
                var page = 1

                var j = new Discord.RichEmbed()
                    .setColor(utils.random(colors)())
                    .setFooter(`Showing page ${page} of ${pages} (${amilist.length} amiibos found)`)
                    .setDescription(amilist.slice(10 * (page - 1), (10 * (page - 1)) + 10).join("\n")
                    )

                message.channel.send("Use `hi!amiibo <amiibo name>` to get more info about an specific amiibo", j).then(async msg => {
                    if (amilist.length < 10) return;
                    msg.react('598543245940752384').then(async r => {
                        await msg.react('598543245462601740')

                        const backwardsFilter = (reaction, user) => reaction.emoji.name === '3ds_left' && user.id === message.author.id;
                        const forwardsFilter = (reaction, user) => reaction.emoji.name === '3ds_right' && user.id === message.author.id;

                        const backwards = msg.createReactionCollector(backwardsFilter, { time: 120000 });
                        const forwards = msg.createReactionCollector(forwardsFilter, { time: 120000 });


                        backwards.on('collect', async r => {
                            if (page === 1) { page = pages } else { page--; }

                            await j.setColor(utils.random(colors)())
                            await j.setFooter(`Showing page ${page} of ${pages}`)
                            await j.setDescription(amilist.slice(10 * (page - 1), (10 * (page - 1)) + 10).join("\n")
                            )

                            msg.edit(amilist.length + "amiibos found.", j)
                        })

                        forwards.on('collect', async r => {
                            if (page === pages) { page = 1 } else { page++ }

                            await j.setColor(utils.random(colors)())
                            await j.setFooter(`Showing page ${page} of ${pages} (${amilist.length} amiibos found)`)
                            await j.setDescription(amilist.slice(10 * (page - 1), (10 * (page - 1)) + 10).join("\n")
                            )

                            msg.edit(amilist.length + "amiibos found.", j)
                        })

                    })
                }).catch()

            } else {
                var amiibo = response.amiibo.find(amiibo => amiibo.name.toLowerCase() === args.join(" "))
                if (amiibo === undefined) return message.channel.send("No amiibo found!")
                var embed = new Discord.RichEmbed()
                    .setColor(utils.random(colors)())
                    .setThumbnail(amiibo.image)
                    .setAuthor(amiibo.name, "http://vgboxart.com/resources/logo/12370_amiibo-prev.png")
                    .addField("Amiibo Series", amiibo.amiiboSeries, true)
                    .addField("Release date", `:flag_au: ${amiibo.release.au}
:flag_eu: ${amiibo.release.eu}
:flag_jp: ${amiibo.release.jp}
:flag_us: ${amiibo.release.na}`, true)
                    .addField("Game", amiibo.gameSeries, true)
                    .addField("Type", amiibo.type, true)
                message.channel.send(embed).catch(() => message.channel.send("Hey, give me embed permissions first"))

            }

        }).catch(e => console.log(e))
    },
}
