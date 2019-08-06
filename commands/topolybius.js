module.exports = {
    name: 'topolybius',
    aliases: ['topb'],
    description: 'Translates into polybius square cypher',
    category: 'text',
    execute: async (client, config, Discord, target, utils, message, args) => {
        var text = args.join(" ").toLowerCase().replace(/[^a-z ]+/g, "").split("")

        var characters = { 
        a: '11',
        b: '12',
        c: '13',
        d: '14',
        e: '15',
        f: '21',
        g: '22',
        h: '23',
        i: '24',
        j: '24',
        k: '25',
        l: '31',
        m: '32',
        n: '33',
        o: '34',
        p: '35',
        q: '41',
        r: '42',
        s: '43',
        t: '44',
        u: '45',
        v: '51',
        w: '52',
        x: '53',
        y: '54',
        z: '55',
        " ": ' ' }
        
        for (i = 0; i < text.length; i++) {
            text[i] = characters[text[i]]
        }
        message.channel.send(text.join(""))

    },
}
