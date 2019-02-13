module.exports = {
    name: 'garlicbread',
    description: 'Sends a random garlic bread picture',
    category: "fun",
    insensitive: true,
    execute: async (client, config, Discord, target, utils, message, args) => {
        if (args[0] === 'hitomi') {
            message.channel.send(utils.embedImage('https://cdn.discordapp.com/attachments/459376173345013760/521280563907133440/PicsArt_12-09-12.02.05.jpg'))
        } else
        if (args[0] === 'timotainment') {
                message.channel.send("https://www.youtube.com/watch?v=Gs8eLiqyfAY")
        } else
        if (args[0] === 'burger') {
        var text = utils.fs.readFileSync("./util/random/burger.txt").toString();
        var ingredients = text.split("\n");
        var ingrNum = Math.floor(Math.random() * 10) + 1
        var burger = []//ghosty is cute *hugs ghosty*
        for (i = 0; i < ingrNum; i++) { burger.push(ingredients[Math.floor(Math.random() * ingredients.length)]) }

            if (Math.floor(Math.random() * 100) + 1 < 10) { message.channel.send("Bun\n" + burger.join("\n") + "\nBun\n[This burger is Gluten Free, I promise]") } else
            message.channel.send("Garlic bread\n"
            + burger.join("\n")
            + "\nGarlic bread")

            } else {
                var bread = require("../util/random/garlicbread.json")
                var img = utils.random(bread)
                message.channel.send("<:garlicbread:512357006481555466>", utils.embedImage(img()))
            }
    },
                }