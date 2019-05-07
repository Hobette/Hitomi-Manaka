module.exports = {
    name: 'lamal',
    description: 'https://cdn.discordapp.com/attachments/406497072939008001/559405666633121824/unknown.png',
    category: 'text',
    execute: async (client, config, Discord, target, utils, message, args) => {
        if (!args[0]) return;
        var lan = args.join(" ")
        lan = lan.slice(0, lan.length/2)
        var nal = lan.split("").reverse().join("")
        message.channel.send(lan+nal)
    },
}
