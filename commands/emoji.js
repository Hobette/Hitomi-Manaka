module.exports = {
    name: 'emoji',
    aliases: ['emote'],
    description: 'Shows an emoji from any guild (name is case sensitive)',
    category: "utility",
    usage: "(name of emoji/the emoji itself)",
    execute: async (client, config, Discord, target, utils, message, args) => {
        if (!args[0]) return message.channel.send("You need to specify an emote (or an emote name)")
        var emoj = args[0].match(/\<(a|):[a-z_0-9]+:[0-9]+\>/i)

        if (emoj !== null) {
            emoj = emoj[0]
            message.channel.send(`\`${emoj.replace(/\<(a|):|:[0-9]+\>/ig, "")}\`: https://cdn.discordapp.com/emojis/${emoj.replace(/\<(a|):[a-z_0-9]+:|\>/ig, "")}${emoj.startsWith("<a:") ? ".gif" : ".png"}`)
        } 
        
        else {
           var emoji = client.emojis.find(e=> e.name == args[0] || e.id == args[0]) 
           if (emoji == null) return message.channel.send("No emojis found!")
           message.channel.send(`\`${emoji.name}\`: ${emoji.url}`)
        }
    },
}
