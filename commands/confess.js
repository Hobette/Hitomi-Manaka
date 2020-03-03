module.exports = {
    name: 'confess',
    description: 'Allows you to anonymously confess a secret. Requires a channel called `confessions` and access for Hitomi to see it to work. Messages containing this command cannot be sniped for more privacy.',
    usage: '<text>',
    category: 'fun',
    execute: async (client, config, Discord, target, utils, message, args) => {
        var confesschannel = message.guild.channels.find("name", "confessions")
        if (confesschannel === null) return message.channel.send("This server needs a channel called `confessions` to use this command!").then(e=>e.delete(5000))
        if (!args[0]) return message.channel.send("You need to confess... something")
        message.delete().then(() => {
            var embed = new Discord.RichEmbed()
            .setColor(utils.vaporwavecolor())
            .setAuthor("An anonymous user said...", "https://media.discordapp.net/attachments/461509407839092736/556165419086381057/autocrop.png?width=494&height=494")
            .setDescription(args.join(" "))
            confesschannel.send(embed)
            .catch(() => { message.channel.send("Either I can't talk in " +confesschannel.toString()+ " or I don't have permissions to send embedded messages. Please make sure that I'm able to do both things!").then(e=>e.delete(5000)) })
        })
        .catch(() => { message.channel.send("I need manage messages permissions to delete your message in order to keep it secret!").then(e=>e.delete(5000)) })
    },
}
