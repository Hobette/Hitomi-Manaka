module.exports = {
    name: 'erioioire',
    description: 'https://cdn.discordapp.com/attachments/406497072939008001/559405933776601089/unknown.png',
    category: 'text',
    execute: async (client, config, Discord, target, utils, message, args) => {
        if (!args[0]) return;
        var oire = args.join(" ")
        oire = oire.slice(oire.length/2, oire.length)
        var erio = oire.split("").reverse().join("")
        message.channel.send(erio+oire)
    },
}
