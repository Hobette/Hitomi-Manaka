module.exports = {
    name: 'invitegen',
    description: 'Generates a discord invite using random characters (it has a high probability of not working)',
    category: "utility",
    execute: async (client, config, Discord, target, utils, message, args) => {
        var chars = ["a", "b", "c", "d", "f", "g", "h", "j", "k", "m", "n", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "M", "N", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "X", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
        //the characters to generate the invite. Some are missing because discord doesn't use them on server invites
        var char1 = chars[Math.floor(Math.random() * chars.length)]
        var char2 = chars[Math.floor(Math.random() * chars.length)]
        var char3 = chars[Math.floor(Math.random() * chars.length)]
        var char4 = chars[Math.floor(Math.random() * chars.length)]
        var char5 = chars[Math.floor(Math.random() * chars.length)]
        var char6 = chars[Math.floor(Math.random() * chars.length)]

        if (Math.floor(Math.random() * 2) == 0) { char6 = "" }
    
        message.channel.send(`https://discord.gg/${char1}${char2}${char3}${char4}${char5}${char6}`)
    },
}