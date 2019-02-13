module.exports = {
    name: 'baltop',
    description: 'Shows balance leaderboard. Use `global` to show global stats\n(this command does not accept name target for now)',
    usage: "[optional: user ID/mention]",
    category: 'economy',
    execute: async (client, config, Discord, target, utils, message, args) => {
        if (!args[0]) {
        //Searches for the top 3 and outputs it to the user.
        var users = await utils.eco.Leaderboard({
            limit: 10
        })

        var first = client.users.get(users[0].userid) 
        var second = client.users.get(users[1].userid)
        var third = client.users.get(users[2].userid) 
        var fourth = client.users.get(users[3].userid) 
        var fifth = client.users.get(users[4].userid) 
        var sixth = client.users.get(users[5].userid)
        var seventh = client.users.get(users[6].userid) 
        var eighth = client.users.get(users[7].userid) 
        var ninth = client.users.get(users[8].userid) 
        var tenth = client.users.get(users[9].userid) 

            const embed = new Discord.RichEmbed()
                .setTitle("Top 10 users")
                .setColor("#8f91e1")
                .setDescription(`
[\`1\`] **${users[0].balance}<:sapphire:525655228444573696>** ~ ${first.tag}
[\`2\`] **${users[1].balance}<:sapphire:525655228444573696>** ~ ${second.tag}
[\`3\`] **${users[2].balance}<:sapphire:525655228444573696>** ~ ${third.tag}
[\`4\`] **${users[3].balance}<:sapphire:525655228444573696>** ~ ${fourth.tag}
[\`5\`] **${users[4].balance}<:sapphire:525655228444573696>** ~ ${fifth.tag}
[\`6\`] **${users[5].balance}<:sapphire:525655228444573696>** ~ ${sixth.tag}
[\`7\`] **${users[6].balance}<:sapphire:525655228444573696>** ~ ${seventh.tag}
[\`8\`] **${users[7].balance}<:sapphire:525655228444573696>** ~ ${eighth.tag}
[\`9\`] **${users[8].balance}<:sapphire:525655228444573696>** ~ ${ninth.tag}
[\`💩\`] **${users[9].balance}<:sapphire:525655228444573696>** ~ ${tenth.tag}`)
                message.channel.send(embed)
        } else {
            if (target == message.author) {
                utils.eco.Leaderboard({
                    search: message.author.id
                  }).then(output => {
                  message.channel.send(`You're the number **${output}** on my leaderboard!`);
                  })
            } else {
                utils.eco.Leaderboard({
                    search: client.users.get(args[0].re(/[^0-9]/g, ""))
                  }).then(output => {
                  message.channel.send(`The user \`${message.mentions.users.first().tag}\` is number **${output}** on my leaderboard!`);
                  })
            }

        } 


    },
}