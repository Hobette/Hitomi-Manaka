module.exports = {
    name: 'decrypt',
    aliases: ['decypher', 'decode'],
    description: 'Translates back an encrypted text\n(credits to **murphydbuffalo** on [github](https://github.com/Murphydbuffalo/caesar-cipher/blob/master/cipher.js))',
    category: "text",
    usage: '(encrypted text)',
    execute: async (client, config, Discord, target, utils, message, args) => {
        var caesarShift = function (str, amount) {
            if (amount < 0)
                return caesarShift(str, amount + 26);
            var output = '';
            for (var i = 0; i < str.length; i++) {
                var c = str[i];
                if (c.match(/[a-z]/i)) {
                    var code = str.charCodeAt(i);
                    if ((code >= 65) && (code <= 90))
                        c = String.fromCharCode(((code - 65 + amount) % 26) + 65);
                    // Lowercase letters
                    else if ((code >= 97) && (code <= 122))
                        c = String.fromCharCode(((code - 97 + amount) % 26) + 97);
                }
                output += c;
            }
            return output;
        } 
        
        if (!args[0]) {
            message.channel.send('Itmf pa U qzodkbf?')
        }
        message.channel.send(`${caesarShift(args.join(' '), -12)}`)
    },
}