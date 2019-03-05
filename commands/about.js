module.exports = {
    name: 'about',
    description: 'Shows some boring text describing me',
    category: "general",
    execute: async (client, config, Discord, target, utils, message, args) => {
        const mama = client.users.get(config.ownerID)
        var thing = "hi!credits"
        if (Math.floor(Math.random() *  100)+1 < 5) { thing = "hi!help useless" }
        
        const embed = new Discord.RichEmbed()
            .setDescription(`Hello, my nama HitomiBot, and I'm a bot made in discord.js by a bad dev called ${mama.tag} who I always refer as mama and also only learnt JavaScript thanks to me (that's pathetic... But adorable). My objective is to serve you original commands that no other bot has, such as a link generator for other bots, random pictures of the character I'm based in, and many more! Thanks for using me, and enjoy!`)
            .setColor(463471)
            .setFooter("Beep beep lettuce haha", "https://images-ext-1.discordapp.net/external/3JQfOq2t0e6oSLK4-M_5DBQ8MqUHLPgpFy2dPVAZ8F4/%3Fv%3D1/https/cdn.discordapp.com/emojis/435179491493543952.png")
            .setThumbnail("https://cdn.discordapp.com/avatars/431495393520386068/2209e745b30f77b55947f0404116e87e.png?size=2048")
            .setImage("https://cdn.discordapp.com/attachments/459376173345013760/484473813782757386/pca.gif")
            .setAuthor("About me")
            .addField("ALL LINKS:",
`- [Discord Bots](https://discord.bots.gg/bots/431495393520386068) 
- [Discord Bot List (.org)](https://discordbots.org/bot/431495393520386068) 
- [Discord Bot List (.com)](https://discordbotlist.com/bots/431495393520386068)
- [Discord Boats](https://discord.boats/bot/431495393520386068)
- [Github (might not be updated)](https://github.com/GmdDjca/Hitomi-Manaka)`)
            .addField("CREDITS", "Run `"+thing+"`")
          message.channel.send({ embed });
        }
}
