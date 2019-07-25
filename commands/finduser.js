module.exports = {
    name: 'finduser',
    aliases: ['searchuser'],
    description: 'Finds users that matches your arguments AND share a server with me \n(no, this one does NOT abuse the api). You can also put flags anywhere to filter the users found.',
    usage: "[text and optional flags] ",
    category: "utility",
    execute: async (client, config, Discord, target, utils, message, args) => {
        let flags = [...new Set(args.join(" ").trim().match(/--[bhs]/g))]
            flags.push("")
            args = args.join(" ").replace(/--[bhs]/g, "").trim().split(" ")

        var page = 1
        var displayusers = client.users.filter(u => u.tag.toLowerCase().includes(args.join(" ").toLowerCase()))
        
            if (flags.includes("--h")) {displayusers = displayusers.filter(e=>!e.bot)}
            if (flags.includes("--b")) {displayusers = displayusers.filter(e=> e.bot)}
            if (flags.includes("--s")) {displayusers = displayusers.filter(e=> message.guild.members.has(e.id))}   
        displayusers = displayusers.array()

        if (!displayusers[0]) return message.channel.send("No users were found!")
        if (displayusers.length === 1) return client.commands.get("user").execute(client, config, Discord, displayusers[0], utils, message, args);

        displayusers = displayusers.map(u => `\`${u.id}\` | **${u.tag}** ${u.bot ? "<:botTag:230105988211015680>" : ""} ${message.guild.members.has(u.id) ? "📥" : ""}`)
        
        var pages = Math.floor(displayusers.length / 10)+1
        
        var j = new Discord.RichEmbed()
            .setTitle("🔍 Search results ("+displayusers.length+" users found)")
            .setFooter(`Showing page ${page} of ${pages}.`)
            .setDescription(`<:botTag:230105988211015680> means a bot
📥 means they're in this server

` + displayusers.slice(10 * (page-1), (10 * (page-1)) + 10).join("\n")
)
        .setFooter("Filters: --h humans only, --b to show bots only and --s to only show people in this server")
        message.channel.send("TIP: when only one user is found, the `hi!user` command will show up instead of this embed.", j).then(msg => {
            if (displayusers.length < 10) return;
            msg.react('⏪').then(async r => {
                await msg.react('⏩')

                const backwardsFilter = (reaction, user) => reaction.emoji.name === '⏪' && user.id === message.author.id;
                const forwardsFilter = (reaction, user) => reaction.emoji.name === '⏩' && user.id === message.author.id;

                const backwards = msg.createReactionCollector(backwardsFilter, { time: 120000 });
                const forwards = msg.createReactionCollector(forwardsFilter, { time: 120000 });

                backwards.on('collect', async r => {
                    if (page === 1) {page = pages} else {page--;}

                    await j.setFooter(`Showing page ${page} of ${pages}`)
                    await j.setDescription(`<:botTag:230105988211015680> means a bot
📥 means they're in this server

` + displayusers.slice(10 * (page-1), (10 * (page-1)) + 10).join("\n")
)
                    msg.edit(j)
                })

                forwards.on('collect', async r => {
                    if (page === pages) {page = 1} else {page++}

                    await j.setFooter(`Showing page ${page} of ${pages}`)
                    await j.setDescription(`<:botTag:230105988211015680> means a bot
📥 means they're in this server

` + displayusers.slice(10 * (page-1), (10 * (page-1)) + 10).join("\n")
)
                    msg.edit(j)
                })

            })
        }).catch()
    },
}
