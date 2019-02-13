module.exports = {
    name: 'credits',
    description: 'A list of some people who helped me a lot',
    category: "general",
    
    execute: async (client, config, Discord, target, utils, message, args) => {
        message.channel.send(`\`Thanks to nox#2530 and shirt.js#6109 (they made Nano#9814!) for helping me in my first steps, and to Xamtheking#2099/MaxGrosshandler#6592 (creators of Steak Knight#1560!), for helping me with the hosting, to Tehi#8822 (developer of ReBot, my fav bot <3), for helping in some stuff, to L0c0Crazy45#7527 and Prof. Daniel Gillett#5266 for providing all the pictures from hi!bagel, and to Tuvok#6969 and Tomaticornio#1928 for the support. Without all you, I'd be a shitty bot\``)
    },
}