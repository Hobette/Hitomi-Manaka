module.exports = {
    name: 'ratewaifu',
    aliases: ['rate'],
    description: 'Rate waifus like Tatsumaki',
    category: 'fun',
    execute: async (client, config, Discord, target, utils, message, args) => {
        if (!args[0]) {args.push("PewDiePie")}
        var waifu = message.mentions.users.first()
        if (waifu === undefined) { waifu = args.join(" ") } else { waifu = waifu.username }

        if (waifu.toLowerCase().includes("tina") || waifu.toLowerCase() === "mama") 
        return message.channel.send(`​🤔  |  **${message.author.username}**, I'd give ${client.users.get(config.ownerID).username.replace(message.author.username, "you")} a 5/10`)
        if (waifu.toLowerCase().includes("hitomi")) 
        return message.channel.send(`​🤔  |  **${message.author.username}**, I'd give myself a 11/10`)
        message.channel.send(`​🤔  |  **${message.author.username}**, I'd give ${waifu.replace(message.author.username, "you")} a 0/10`)
    },
}