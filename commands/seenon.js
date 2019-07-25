module.exports = {
    name: 'seenon',
    description: 'Shows what servers do you share with me',
    category: "utility",
    execute: async (client, config, Discord, target, utils, message, args) => {
        var servers = client.guilds.filter(g => g.members.has(target.id)).map(a => `\`${a.id}\` | **${a.name}** ${a.members.has(message.author.id) && target.id !== message.author.id ? "📥" : ""}`)

        var page = 1
        var pages = Math.floor(servers.length/10)+1
    
        var embed = new Discord.RichEmbed()
            .setTitle(`So basically I see ${target.username.replace(message.author.username, "you")} in ${servers.length} servers:`)
            .setDescription(`${target.id !== message.author.id ? "📥 means they share that server with you\n" : "")}${servers.slice((page - 1) * 10, (page - 1) * 10 + 10).join("\n")}`)
            .setFooter(`Page ${page} of ${pages}`)

        message.channel.send(embed).then(msg => {
            if (servers.length < 10) return;
            msg.react('⏪').then(async r => {
                await msg.react('⏩')

                const backwardsFilter = (reaction, user) => reaction.emoji.name === '⏪' && user.id === message.author.id;
                const forwardsFilter = (reaction, user) => reaction.emoji.name === '⏩' && user.id === message.author.id;

                const backwards = msg.createReactionCollector(backwardsFilter, { time: 120000 });
                const forwards = msg.createReactionCollector(forwardsFilter, { time: 120000 });


                backwards.on('collect', async r => {
                    if (page == 1) {page = pages} else {page--;}

                    await embed.setDescription(servers.slice((page - 1) * 10, (page - 1) * 10 + 10).join("\n"))
                    await embed.setFooter(`Page ${page} of ${pages}`)

                    msg.edit(embed)
                })

                forwards.on('collect', async r => {
                    if (page == pages) {page = 1} else {page++}    

                    await embed.setDescription(servers.slice((page - 1) * 10, (page - 1) * 10 + 10).join("\n"))
                    await embed.setFooter(`Page ${page} of ${pages}`)

                    msg.edit(embed)
                })

            })
        }).catch()
    },
}
