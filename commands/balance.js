module.exports = {
    name: 'balance',
    aliases: ["bal", "sapphires"],
    description: 'Shows your money uwu',
    category: 'economy',
    execute: async (client, config, Discord, target, utils, message, args) => {
        utils.eco.FetchBalance(target.id).then(u => {
            let embed = new Discord.RichEmbed()
                .setTitle(target.username + "'s sapphires:")
                .setDescription(`**${u.balance}** <:sapphire:525655228444573696> ${u.balance < 0 ? "(uh oh!)" : "")}`)
                .setColor("#8f91e1")
            message.channel.send(embed)
        })
    },
}
