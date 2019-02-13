module.exports = {
  name: 'addemoji',
  description: 'Adds an emoji to the current guild.',
  usage: "[emoji name] [discord image/emoji link]",
  category: "mod",
  execute: async (client, config, Discord, target, utils, message, args) => {
      if (!message.member.hasPermission("MANAGE_EMOJIS")) return message.channel.send("Lol you are missing permissions")
      if (!message.guild.me.hasPermission("MANAGE_EMOJIS")) return message.channel.send("Lol I'm missing permissions")
      if (!args[0] || !args[1]) return message.channel.send("Wrong syntax, try `hi!help addemoji`")
      var ename = args[0]
      var elink = args[1]

      if (args[0].match(/[^0-9A-Za-z_-]+/g) !== null) return message.channel.send("Sowwy, I can't do magic, all emoji names must contain only numbers, letters, dashes and uderscores. Please understand. Hi")
    
      if (args[1].match(/[\w\W]+.[gifpnjeg]+/gi) !== null) 
        return message.guild.createEmoji(args[1], args[0])
        .then(() => message.channel.send("Done!"))
        .catch(() => message.channel.send("Did you know Discord `used` to allows bots to ignore the emoji limit?\nSadly that's not a thing anymore"))
  },
}