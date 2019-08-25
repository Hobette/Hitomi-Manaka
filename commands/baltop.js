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

        var first = await client.fetchUser(users[0].userid) 
        var second = await client.fetchUser(users[1].userid)
        var third = await client.fetchUser(users[2].userid) 
        var fourth = await client.fetchUser(users[3].userid) 
        var fifth = await client.fetchUser(users[4].userid) 
        var sixth = await client.fetchUser(users[5].userid)
        var seventh = await client.fetchUser(users[6].userid) 
        var eighth = await client.fetchUser(users[7].userid) 
        var ninth = await client.fetchUser(users[8].userid) 
        var tenth = await client.fetchUser(users[9].userid) 

            const embed = new Discord.RichEmbed()
                .setTitle("Top 10 users")
                .setColor("#8f91e1")
                .setDescription(`
[\`1\`] **${users[0].balance}<:sapphire:525655228444573696>** ~ ${client.users.get(first.id).tag}
[\`2\`] **${users[1].balance}<:sapphire:525655228444573696>** ~ ${client.users.get(second.id).tag}
[\`3\`] **${users[2].balance}<:sapphire:525655228444573696>** ~ ${client.users.get(third.id).tag}
[\`4\`] **${users[3].balance}<:sapphire:525655228444573696>** ~ ${client.users.get(fourth.id).tag}
[\`5\`] **${users[4].balance}<:sapphire:525655228444573696>** ~ ${client.users.get(fifth.id).tag}
[\`6\`] **${users[5].balance}<:sapphire:525655228444573696>** ~ ${client.users.get(sixth.id).tag}
[\`7\`] **${users[6].balance}<:sapphire:525655228444573696>** ~ ${client.users.get(seventh.id).tag}
[\`8\`] **${users[7].balance}<:sapphire:525655228444573696>** ~ ${client.users.get(eighth.id).tag}
[\`9\`] **${users[8].balance}<:sapphire:525655228444573696>** ~ ${client.users.get(ninth.id).tag}
[\`💩\`] **${users[9].balance}<:sapphire:525655228444573696>** ~ ${client.users.get(tenth.id).tag}`)
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
                    search: client.fetchUser(args[0].replace(/[^0-9]/g, ""))
                  }).then(output => {
                  message.channel.send(`The user \`${message.mentions.users.first().tag}\` is number **${output}** on my leaderboard!`);
                  })
            }

        } 


    },
}
