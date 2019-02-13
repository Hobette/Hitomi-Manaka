module.exports = {
    name: 'commit',
    description: 'Reads a commit from https://whatthecommit.com',
    category: 'fun',
    execute: async (client, config, Discord, target, utils, message, args) => {
        var commits = utils.fs.readFileSync("./util/random/commit.txt").toString().split("\n")
        var embed = new Discord.RichEmbed()
        .setColor("#7289DA")
        .setAuthor(message.author.username, message.author.displayAvatarURL)
        .setTitle("[HitomiBot:master] 1 new commit")
        .setURL("https://github.com/ngerakines/commitment")
        .setDescription(`[\`${Math.floor(Math.random()*10000000).toString()}\`](https://github.com/ngerakines/commitment) ` + utils.random(commits)() + " - " + message.author.username)
        message.channel.send(embed)
    },
}