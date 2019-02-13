module.exports = {
    name: 'ambulance',
    description: 'Help someone',
    category: 'easter egg',
    execute: async (client, config, Discord, target, utils, message, args) => {
        var embed = new Discord.RichEmbed()
.setImage('https://cdn.discordapp.com/attachments/459376173345013760/501464644821712897/unknown.png')
message.channel.send({embed})
    },
}