module.exports = {
    name: 'burger',
    description: 'Creates a burger for you',
    category: 'fun',
    execute: async (client, config, Discord, target, utils, message, args) => {
        if (message.guild.id === "438590624162250752") {
message.channel.send("Sorry you have BurgerBot here so use it instead")
} else {
var text = utils.fs.readFileSync("./util/random/burger.txt").toString();
var ingredients = text.split("\n");

var ingrNum = Math.floor(Math.random() * 10) + 1

var burger = []

for (i=0; i<ingrNum; i++) { burger.push(ingredients[Math.floor(Math.random() * ingredients.length)])}

if (Math.floor(Math.random() * 100)+1 < 10) { message.channel.send("Bun\n" + burger.join("\n") + "\nBun\n[This burger is Gluten Free, I promise]") } else
        message.channel.send("Bun\n" 
        + burger.join("\n") 
        + "\nBun")
        }
    },
}