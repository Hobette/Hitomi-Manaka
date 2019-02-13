module.exports = {
    name: 'gamble',
    description: 'Try your luck',
    usage: "[number]",
    category: 'economy',
    execute: async (client, config, Discord, target, utils, message, args) => {
        if (!args[0]) { message.channel.send("You need to bet something!") } else {
            var bet = parseInt(args[0]);
            if (bet.toString() == "NaN") { message.channel.send("You need to input a number!") } else {


                utils.eco.FetchBalance(message.author.id).then(output => {
                    if (output.balance < bet) { message.channel.send('You have less sapphires than the amount you want to waste on me!') } else {

                        var chance = Math.floor(Math.random() * 100)+1

                        if (chance > 50) {
                            utils.eco.AddToBalance(message.author.id, bet)
                            message.channel.send(`​U ARE WINNOR, CONLATURATION! Take your **${bet * 2}** sapphires, ya lucky boy`)
                        } else {
                            utils.eco.SubstractFromBalance(message.author.id, bet)
                            message.channel.send("Oh no you just lost your sapphires *cries*")
                        }
                    }
                })
            }
        }
    },
}