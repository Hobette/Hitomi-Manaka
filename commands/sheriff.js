module.exports = {
    name: 'sheriff',
    description: 'Shows a random sheriff. Based on [@EverySheriff](https://twitter.com/EverySheriff) on Twitter', //hi!no
    category: "fun",
    execute: async (client, config, Discord, target, utils, message, args) => {
        var emoji = utils.random(require("../util/random/discord_emojis.json"))()

       message.channel.send(`
​⠀ ⠀ ⠀  🤠
　   ${emoji.char}${emoji.char}${emoji.char}
    ${emoji.char}   ${emoji.char}　${emoji.char}
   👇   ${emoji.char}${emoji.char} 👇
  　  ${emoji.char}　${emoji.char}
　   ${emoji.char}　 ${emoji.char}
　   👢     👢
howdy. i'm the sheriff of ${emoji.name}`)
    },
}
