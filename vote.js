module.exports = {
    name: 'vote',
    description: 'Please gimmie votes',
    category: "general",
    execute: async (client, config, Discord, target, utils, message, args) => {
        const embed = new Discord.RichEmbed()
        .setTitle("Here thank you")
        .setURL("https://www.youtube.com/watch?v=lENJVAPqeeE")
        .setColor(6466522)
        .setFooter("Lasaga")
        .setThumbnail("https://cdn.discordapp.com/attachments/348937971858145293/477083242122575872/CyclopsCool.png")
        .addField("Listcord",
        "No")
        .addField("Discord Bot List (.org)",
        "[Click for free money](https://discordbots.org/bot/431495393520386068/vote)"
        )
        .addField("Discord Bot List (.com)",
        "[Free Fortnite vBucks here](https://discordbotlist.com/bots/431495393520386068)")
        .addField("Discord Boats",
        "[I run out of ideas for jokes](https://discord.boats/bot/431495393520386068)")
      message.channel.send({ embed });
    },
}