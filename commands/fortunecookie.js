module.exports = {
    name: 'fortunecookie',
    aliases: ["cookie"],
    description: 'Shows your fortune. Each cookie costs 25<:sapphire:525655228444573696>',
    category: 'economy',
    execute: async (client, config, Discord, target, utils, message, args) => {
        utils.eco.FetchBalance(message.author.id).then(output => {
            if (output.balance < 25) { 
                return message.channel.send('You don\'t have enough money for cookies!');
            } else 
                utils.eco.SubstractFromBalance(message.author.id, 25).then(() => {
                    var fortune = new Discord.RichEmbed()
                
                .setDescription("<:fortuneCookie:525714651930165268> "+utils.random(require("../util/random/cookie.json"))())
        
                message.channel.send("Thank you for your 25 <:sapphire:525655228444573696>. Your fortune cookie reads...", fortune)
                })
            
        })
        
    },
}