module.exports = {
    name: 'commit',
    description: 'Reads a commit from https://whatthecommit.com',
    category: 'fun',
    execute: async (client, config, Discord, target, utils, message, args) => {
        var name = utils.random(['Nick', 'Steve', 'Andy', 'Qi', 'Fanny', 'Sarah', 'Cord', 'Todd',
        'Chris', 'Pasha', 'Gabe', 'Tony', 'Jason', 'Randal', 'Ali', 'Kim',
        'Rainer', 'Guillaume', 'Kelan', 'David', 'John', 'Stephen', 'Tom', 'Steven',
        'Jen', 'Marcus', 'Edy', 'Rachel'])()

        var commit = utils.random(utils.fs.readFileSync("./util/random/commit.txt").toString().split("\n"))()

        commit = commit.replace(/XNAMEX/g, name).replace(/XUPPERNAMEX/g, name.toUpperCase()).replace(/XLOWERNAMEX/g, name.toLowerCase()).replace(/\<br\/\>/g, "\n")
        
        var embed = new Discord.RichEmbed()
        .setColor("#7289DA")
        .setAuthor(message.author.username, message.author.displayAvatarURL)
        .setTitle("[HitomiBot:master] 1 new commit")
        .setURL("https://github.com/ngerakines/commitment")
        .setDescription(`[\`${Math.floor(Math.random()*10000000).toString()}\`](https://github.com/ngerakines/commitment) ` + commit + " - " + message.author.username)
        message.channel.send(embed)
    },
}
