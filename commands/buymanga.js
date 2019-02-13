module.exports = {
    name: 'buymanga',
    description: 'Wanna support the creator of the character in which this bot was inspired? Use this command and buy his mangas!',
    execute: async (client, config, Discord, target, utils, message, args) => {
        const embed = new Discord.RichEmbed()
            .setColor(5341466)
            .setDescription("(run `hi!faq` for more info about this)")
            .setAuthor("ALL AMAZON LINKS")
            .setFooter("Support the creator of Nurse Hitomi's Monster Infirmary by buying his mangas!")
            .setImage('https://cdn.discordapp.com/attachments/454333351839399946/454740281716375572/IMG_20180425_004149.jpg')

            .addField("<:HitomiAndMiChan:438400023823122442> Chapters 1 - 5 (:flag_us:)",
                `[Vol. 1](https://www.amazon.com/Nurse-Hitomis-Monster-Infirmary-Vol/dp/1626921474/ref=sr_1_1?ie=UTF8&qid=1536495315&sr=8-1&keywords=nurse+hitomi%27s+monster)
[Vol. 2](https://www.amazon.com/Nurse-Hitomis-Monster-Infirmary-Vol-ebook/dp/B071Y47MF7/ref=sr_1_5?ie=UTF8&qid=1537119386&sr=8-5&keywords=nurse+hitomi%27s+monster)
[Vol. 3](https://www.amazon.com/Nurse-Hitomis-Monster-Infirmary-Vol/dp/1626922055/ref=sr_1_7?ie=UTF8&qid=1536495455&sr=8-7&keywords=nurse+hitomi%27s+monster)
[Vol. 4](https://www.amazon.com/Nurse-Hitomis-Monster-Infirmary-Vol/dp/1626924147/ref=sr_1_8?ie=UTF8&qid=1536495455&sr=8-8&keywords=nurse+hitomi%27s+monster)
[Vol. 5](https://www.amazon.com/Nurse-Hitomis-Monster-Infirmary-Vol/dp/1626924198/ref=sr_1_6?ie=UTF8&qid=1536495455&sr=8-6&keywords=nurse+hitomi%27s+monster)`,
                true)
            .addField("<:HitomiOhayo:434733271553671178> Chapters 6 - 9 (:flag_us:)",
                `[Vol. 6](https://www.amazon.com/Nurse-Hitomis-Monster-Infirmary-Vol/dp/1626923574/ref=sr_1_1?ie=UTF8&qid=1536495455&sr=8-1&keywords=nurse+hitomi%27s+monster)
[Vol. 7](https://www.amazon.com/Nurse-Hitomis-Monster-Infirmary-Vol/dp/162692676X/ref=sr_1_9?ie=UTF8&qid=1536495455&sr=8-9&keywords=nurse+hitomi%27s+monster)
[Vol. 8](https://www.amazon.com/Nurse-Hitomis-Monster-Infirmary-Vol/dp/1626929602/ref=sr_1_3?ie=UTF8&qid=1536495455&sr=8-3&keywords=nurse+hitomi%27s+monster)
[Vol. 9](https://www.amazon.com/Nurse-Hitomis-Monster-Infirmary-Vol/dp/1642750980/ref=sr_1_4?ie=UTF8&qid=1536495455&sr=8-4&keywords=nurse+hitomi%27s+monster)`,
                true)
            .addField("<:Hitomi:435179491493543952> Chapters 1 - 5 (:flag_jp:)",
                `[Vol. 1](https://hwy.pw/AAAChY) 
[Vol. 2](https://hwy.pw/AAAChZ) 
[Vol. 3](https://hwy.pw/AAACha) 
[Vol. 4](https://hwy.pw/AAAChd) 
[Vol. 5](https://hwy.pw/AAAChe)`,
                true)
            .addField("<:HitomiPte:438399554317058058> Chapters 6 - 9 (:flag_jp:)",
                `[Vol. 6](https://hwy.pw/AAAChf) 
[Vol. 7](https://hwy.pw/AAAChg) 
[Vol. 8](https://hwy.pw/AAAChj) 
[Vol. 9](https://hwy.pw/AAAChk)`,
                true)
        message.channel.send({ embed });
    },
}