module.exports = {
    name: 'dice',
    description: 'D&D dice',
    usage: "[(rolls)d(sides)] or just (number)]",
    insensitive: true,
    category: 'fun',
    execute: async (client, config, Discord, target, utils, message, args) => {

    if (!args[0]) { message.channel.send("Gimmie something to roll...") } else
        if (args[0].replace(/[0-9d]+/g, "") !== "") { message.channel.send("Wrong syntax, do `hi!help dice` for more help") } else {
        if (args[0].match(/[0-9]+d[0-9]+/) == null) { args[0]= "1d" + args[0]}

        var dice = args[0].split("d")[0]
        dice = parseInt(dice)
        var sides = args[0].split("d")[1]
        sides = parseInt(sides)

        function roll(dice, sides) {
            var rolls = [];
            for (var i = 0; i < dice; i++) {
                // Get a random dice roll capped at the number of sides.
                rolls[i] = Math.floor(Math.random() * sides) + 1;
            }
            return (rolls).join();
        }

        message.channel.send(roll(dice, sides))
        }
    },
}