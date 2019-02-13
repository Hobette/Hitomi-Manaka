module.exports = {
    name: 'countdown',
    description: 'Tells how many days are left until Super Smash Bros comes out',
    category: "easter egg",
    execute: async (client, config, Discord, target, utils, message, args) => {
        message.channel.send("There's no countdown anymore, super smash bros ultimate came out last year.")/*
        var dd = new Date().getDate()
        var mm = new Date().getMonth() + 1
        var yy = new Date().getFullYear()

        var daysWeWaited = 60 - (30 * (12 - mm)) + dd - 7
        var timeUntilSmash = 60 - daysWeWaited 

        if (timeUntilSmash > 0) {
            var embed = new Discord.RichEmbed()
            .setTitle('Days until Super Smash Bros ultimate comes out:')
            .setDescription(`${timeUntilSmash} days remaining. We waited ${daysWeWaited} days since this command was made.`)
            .setFooter('Super smash bros comes out on Friday 07/12/2018')
            .setThumbnail('https://cdn.discordapp.com/attachments/481177465520390154/498965376919404545/enlarge-2.png')
            message.channel.send({embed})
        } else {
            var embed = new Discord.RichEmbed()
            .setTitle('Days until Super Smash Bros Ultimate comes out:')
            .setDescription('Zero days! SSBU is out!!')
            .setFooter("Let's celebrate it!")
            .setThumbnail('https://cdn.discordapp.com/attachments/481177465520390154/498965376919404545/enlarge-2.png')
            message.channel.send({embed})
        }*/
    },
}