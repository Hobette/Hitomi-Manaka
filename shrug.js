module.exports = {
    name: 'shrug',
    description: 'Sends a random shrug (why do I even have this)',
    category: "h",
    execute: async (client, config, Discord, target, utils, message, args) => {
        var shrug = [
             '()ツ',
             ')(ツ',
             "ツ()",
             "ツ)(",
             '((ツ',
             "))ツ",
             "ツ((",
             "ツ))",
             ")ツ(",
             "(ツ)",
             "(ツ)(ツ)",
             "(ツ ツ)",
             "(ツノ)",
             "(ソ)",
             "(ン)",
             "(ノ)",
             "(ゴ)",
             "(じ)",
             "(う)",
             "(ッ)",
             "[ツ]",
             "{ツ}",
             "(road is a girl)",
             "😂",
             "ツ",
             "()",
             ")(",
             "(",
             ")"
        ]

        message.channel.send("¯\\\\\\_"+ utils.random(shrug)() + "_/¯")
    },
}