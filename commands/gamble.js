module.exports = {
    name: 'gamble',
    description: 'Try your luck. Special honors to nox and elliot for fuckin breaking this command and destroying my leaderboard',
    usage: "[number]",
    category: 'economy',
    execute: async (client, config, Discord, target, utils, message, args) => {
        if (!args[0]) return message.channel.send("You need to bet *something!*")
        var bet = parseInt(args[0]);
        if (bet == NaN) return message.channel.send("You need to gamble a *number* of diamonds, nerd")
        if (bet < 0) return message.channel.send("You... You can't gamble negative sapphires...")
        var player = await utils.eco.FetchBalance(message.author.id);
        if (player.balance < bet) return message.channel.send('You have less sapphires than the amount you want to waste on me!');

        var chance = Math.floor(Math.random() * 100)

        if (chance > 50) {
            utils.eco.AddToBalance(message.author.id, bet)
            message.channel.send(`U ARE WINNOR, CONLATURATION! Take your **${bet * 2}** sapphires, ya lucky boy`)
        } else {
            utils.eco.SubstractFromBalance(message.author.id, bet)
            message.channel.send("Oh no you just lost your sapphires *cries*")
        }
    },
}
