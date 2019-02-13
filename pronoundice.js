module.exports = {
    name: 'pronoundice',
    description: 'Don\'t know what prefix (not gender) to use? Let me help you!',
    category: "fun",
    execute: async (client, config, Discord, target, utils, message, args) => {
        var pronouns = [
            "he/him",
            "she/her",
            "they/them",
            "ze/zir",
            "xe/xir",
            "hir/hirs",
            "it/that",
            "fae/faer",
            "ae/aer",
            "fuck all"
        ]
        var yourpronouns = pronouns[Math.floor(Math.random() * pronouns.length)]
        const embed = new Discord.RichEmbed()
            .setDescription(`<:prideFlag:500255005266280448> Your pronouns for today are **${yourpronouns}**!`)
            message.channel.send(embed)
    },
}