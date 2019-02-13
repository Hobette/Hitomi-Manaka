module.exports = {
    name: 'smallcaps',
    description: 'Converts a text into small uppercase letters',
    usage: '(text)',
    category: "text",
    execute: async (client, config, Discord, target, utils, message, args) => {
        var letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ 0123456789.?!,:;\"'-_+%=$*(){}[]<>|/~\\@&%£#"
        letters = letters.split('')
        var ss = "ᴀʙᴄᴅᴇғɢʜɪᴊᴋʟᴍɴᴏᴘǫʀsᴛᴜᴠᴡxʏᴢABCDEFGHIJKLMNOPQRSTUVWXYZ 0123456789.?!,:;\"'-_+%=$*(){}[]<>|/~\\@&%£#"
        ss = ss.split('')

        var text = args.join(' ')
        text = text.toLowerCase()
        text = text.split('')
        for (i = 0; i < text.length; i++) {
            text[i] = ss[letters.indexOf(text[i])]
        }
        message.channel.send(text.join(''))
    },
}