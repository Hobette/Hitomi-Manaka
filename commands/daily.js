module.exports = {
    name: 'daily',
    description: 'better than tatsumaki tbh',
    category: 'economy',
    execute: async (client, config, Discord, target, utils, message, args) => {
        var gay = [ "[object Object]", NaN, undefined, Infinity, -Infinity, null, Number, Object, Function, 0.1+0.2, "Promise { <pending> }", "", "client.token"]
        gay = utils.random(gay)
     var e = new Discord.RichEmbed()
     .setDescription("YOU GOT YOUR DAILY **" + gay() + "** BVUCKS!!!!!!!!!!!! :joy::euro::euro::euro::euro::euro::euro::euro::euro:")
     .setImage("https://cdn.discordapp.com/attachments/459376173345013760/522909846383624212/rainbow.gif")
     .setColor(Math.floor(Math.random() * 16777216))
    .setFooter("You thought I was gonna have a generic command! HA! Use hi!pray instead, noob!")
     message.channel.send(e)
    },
}