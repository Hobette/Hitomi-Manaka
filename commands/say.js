module.exports = {
    name: 'say',
    aliases: ['echo'],
    description: 'Repeats your arguments. Add `-e` at the beggining to say it into an embed, or `-d` to delete your command',
    usage: "[optional: -d or -e] [text]",
    category: "fun",
    execute: async (client, config, Discord, target, utils, message, args) => {
        args = message.cleanContent.slice(utils.checkCommand(message.content, "command").length).trim().replace(utils.inviteRegex, "discord.gg/[CRINGE SERVER]").replace(utils.racistRegex, ":heart:").split(/[\s　]+/g);
        //Keeps the vaporwave chars from the original message
         if (!args[0]) {
            message.channel.send("What do I say <:UltraWeary:468091136615907337>")
        } else 
            if (utils.unvaporwave(args[0]) === '-d') {
                message.delete().then(() => {
                message.channel.send(args.slice(1, args.length).join(' '));
            }).catch(() => {
                message.channel.send("To hide your message I need manage messages permissions.")
            })
            } else
            
            if (utils.unvaporwave(args[0]) === '-e') {
                var embed = new Discord.RichEmbed()
                .setAuthor(message.author.tag, message.author.displayAvatarURL)
                .setDescription(args.slice(1, args.length).join(' '))
                message.channel.send({embed})
            } else
            message.channel.send(args.join(' '))
    },
}