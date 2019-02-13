module.exports = {
    name: 'villager',
    description: 'Returns stats for an Animal Crossing villager (special characters are NOT included)',
    category: 'fun',
    insensitive: true,
    execute: async (client, config, Discord, target, utils, message, args) => {
        var villagers = require("../util/other/villagers.json")

        var villager = villagers[args.join(" ")]
        if (villager === undefined) return message.channel.send("There's no villager called like that!")
        var tiers = ["yes", "Very popular", "Popular", "Kind of popular", "Not really popular", ":weary:"]

        const attachment = new Discord.Attachment("./util/other/icons-en/"+args.join(" ")+".gif", "icon.png")
        
        var embed = new Discord.RichEmbed()
        .setColor("#38bc1c")
        .attachFile(attachment)
        .setThumbnail('attachment://icon.png')
        .setFooter("All villagers are from Animal Crossing: New Leaf")

        .addField("Name", `:flag_us: ${villager.name_en}
:flag_jp: ${villager.name_jp} (${utils.firstLetterUppercase(villager.name_jp_slug)})`, true)
        .addField("Personality", `:flag_us: ${villager.type_en}
:flag_jp: ${villager.type_jp}`, true)
        .addField("Species", `:flag_us: ${villager.species_en}
:flag_jp: ${villager.species_jp}`, true)
        .addField("Phrase", `:flag_us: ${villager.phrase_en}
:flag_jp: ${villager.phrase_jp}`, true)
        .addField("Birthday (mm/dd)", `${villager.species_en}`, true)
        .addField("Gender", `${villager.gender.replace("m","🚹").replace("f","🚺")}`, true)
        .addField("Popularity", `${tiers[villager.amv_tier]}`, true)
        

        message.channel.send(embed)
    },
}