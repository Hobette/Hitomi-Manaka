module.exports = {
    name: 'frompolybius',
    aliases: ['frompb'],
    description: 'Decyphers polybius square cypher',
    usage: "(text)",
    category: 'text',
    execute: async (client, config, Discord, target, utils, message, args) => {
        var text = args.join("  ")
        if (text.replace(/[1-5 ]+/g, "").length > 0 || text.length % 2 == 1) return message.channel.send("Invalid polybius text.")
        text = text.match(/.{1,2}/g);
        
        var characters = {
            '11': 'a',
            '12': 'b',
            '13': 'c',
            '14': 'd',
            '15': 'e',
            '21': 'f',
            '22': 'g',
            '23': 'h',
            '24': 'j',
            '25': 'k',
            '31': 'l',
            '32': 'm',
            '33': 'n',
            '34': 'o',
            '35': 'p',
            '41': 'q',
            '42': 'r',
            '43': 's',
            '44': 't',
            '45': 'u',
            '51': 'v',
            '52': 'w',
            '53': 'x',
            '54': 'y',
            '55': 'z',
            '  ': ' '
        }

        for (i = 0; i < text.length; i++) {
            text[i] = characters[text[i]]
        }
        message.channel.send(text.join(""))
    },
}
