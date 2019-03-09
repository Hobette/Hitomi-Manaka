module.exports = {
    name: 'tatsumaki',
    description: 'Checks someone\'s info from [Tatsumaki](https://tatsumaki.xyz/)',
    category: 'utility',
    aliases: ['tatsu'],
    execute: async (client, config, Discord, target, utils, message, args) => {
        if (target.bot) return message.channel.send("You can't fetch info from bots!!")
        const Tatsu = require("tatsu.js");
        var tatsu = new Tatsu(config.tatsuapikey);

        tatsu.getUser(target.id).then(async user => {
            var embed = new Discord.RichEmbed()
                .setColor("#17A166")
                .setAuthor(target.tag + "'s info:", "https://cdn.discordapp.com/attachments/406497072939008001/551082827609931777/enlarge.png")
                .setThumbnail(user.background)

                .setDescription(`*${utils.yesNo(user.title !== "", user.title, "[no title]")}*
${utils.yesNo(!user.info_box !== "", user.info_box, "[no info]")}`)
                .addField("General info", `**Level:** ${user.level}
**Rank:** ${user.rank}
**Reputation:** ${user.reputation}
**Credits:** ${user.credits}
**XP:** ${user.total_xp} (${user.next_level_xp - user.level_xp} until next level)
**Background**: [Click here](${user.background})`)
            message.channel.send(embed).catch(()=>{message.channel.send("I need embed permissions!")})
        }).catch(e=>{message.channel.send(`\`tatsumaki api broke smh\`
\`\`\`xl\n${JSON.stringify(e)}\`\`\``)
})
        /*{
            "user_id": "132842210231189504",
            "name": "TheEvilSocks", 
            "background": "https://www.tatsumaki.xyz/images/backgrounds/profile/tatsumaki_animeBG.png", 
            "background_url": "https://tatsumaki.xyz/images/backgrounds/profile/https://www.tatsumaki.xyz/images/backgrounds/profile/tatsumaki_animeBG.png.png", 
            "title": "", 
            "info_box": "𝅳𝅳𝅳𝅳𝅳𝅳𝅳𝅳𝅳𝅳𝅳𝅳𝅳𝅳𝅳𝅳𝅳𝅳", 
            "badgeSlots": ["reached-lvl_t2", "dailys-used_t3", "credits-gained_t2", "gameico_overwatch_badge", "gameico_halflife_badge", null, null, null, null, null, null, null], 
            "rank": 40791, 
            "level": 71, 
            "total_xp": 358033, 
            "level_xp": 7964, 
            "credits": 1857200, 
            "reputation": 372
        }
        (for example purposes)
        */

    },
}
