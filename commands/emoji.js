module.exports = {
    name: 'emoji',
    aliases: ['emote'],
    description: 'Shows an emoji from any guild (name is case sensitive)',
    category: "utility",
    usage: "(name of emoji/emoji ID/the emoji itself)\n`tip: you can find emojis from other guilds too!`",
    execute: async (client, config, Discord, target, utils, message, args) => {
        if (!args[0]) return message.channel.send("You need to specify an emote (or an emote name)")
        var emoj = client.emojis.get(args[0].replace(/[^0-9]+/g, ""))
        if (emoj === undefined) { emoj = client.emojis.find("name", args[0].replace(/:[0-9]+>/g, "").replace(/[<a]+:/g, ""), "name") }
        if (emoj === null) return message.channel.send("That is not an emote smh")

        message.channel.send(`Here's your emote:
\`${emoj}\` **|** ${emoj}
${emoj.url}`)
    },
}