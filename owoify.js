module.exports = {
    name: 'owoify',
    description: 'Tuwnys a text inyto owo wanyguage uwu',
    usage: '(text)',
    category: "text",
    execute: async (client, config, Discord, target, utils, message, args) => {
        var m = `${args.join(' ')}`
        m = m.replace(/\`/g, "\\`")
        var ex = m.replace(/[^!]/g, "").length
        var randomEmote = ["owo ", "òwó ", "ówò ", "õwõ ", "ôwô ", "uwu ", "ùwú ", "úwù ", "ûwû ", "OwO ", "ÒWÓ ", "ÓwÒ ", "ÕwÕ ", "ÔwÔ ", "UwU ", "ÙwÚ ", "ÚwÙ ", "ÛwÛ ", ">w< ", "XwX ", "nwn ", "ñwñ ", "^w^ "]
        m = m.replace(/[nN]/g, "ny")
        m = m.replace(/[bjrlBJRL]/g, "w")
        if (ex != 0) {
            for (i = 0; i < ex; i++) {
                m = m.replace("!", randomEmote[Math.floor(Math.random() * randomEmote.length)]);
            }
        }
        message.channel.send(`\`\`\`${m}\`\`\``)
    },
}