module.exports = {
  name: 'faq',
  description: 'Shows some questions and answers',
  category: "general",
  
  execute: async (client, config, Discord, target, utils, message, args) => {
    const embed = new Discord.RichEmbed()
      .setColor(7322022)
      .setAuthor("Here are some questions you might ask:")

      .addField("In what language/libary are you made in?",
        "JavaScript and discord.js",
        true)
      .addField("Wouldn't the `hi!buymanga` command be illegal?",
        "Maybe, but that's why mama asked the creator of the manga for permission first. \n[Here is the tweet she made for him](https://twitter.com/TinaTheCyclops/status/1038787225880813568), and [this was his answer](https://twitter.com/shakekoujou/status/1038810062846754817)",
        true)
      .addField("How can I disable autorresponses in my server?",
        "Use `hi!settings disableAutoresponses true",
        true)
      .addField("Why are you HitomiBot?",
        "[Nurse Hitomi](https://en.wikipedia.org/wiki/Nurse_Hitomi%27s_Monster_Infirmary) is a cyclops and Mama likes cyclops. Simple. Also becasue the character itself is not very known and that adds more originality to me",
        true)
      .addField("Does your Mama own any other bot or server?",
        "Apart from Mi-Chan, a testing version of myself, and Mitsumi, an Eris rewrite she's doing (cuz why not), she doesn't own any other bots. But she owns a lot of servers, being the most active one a [pride server](https://discord.gg/qmSDpCS) (they accept straight people as well)",
        true)

    message.channel.send({ embed });
  },
}