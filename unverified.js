module.exports = {
    name: 'unverified',
    description: 'Shows unverified users (only for the staff and verification helpers)',
    usage: "(\"list\" to see a text file with every unverified member or none to see how many are there)",
    category: "lgtb",
    execute: async (client, config, Discord, target, utils, message, args) => {
        if (message.member.hasPermission("MANAGE_ROLES")) {
            var fs = require('fs');
            const unverified = message.guild.roles.get('350261118511611914')

            if (args[0] === 'list') {
                var verifylol = unverified.members.array()

                if (verifylol.join("\n").length > 2048) {
                    fs.writeFile(`util/temp/unverified.txt`,
                        `${verifylol.map(verifylol => `${verifylol.user.id} (${verifylol.user.tag})`).join(` | `)}`,
                        function (err) {
                            if (err) throw err;
                            message.channel.send({ files: [`./util/temp/unverified.txt`] })
                        })
                } else 
                    var embed = new Discord.RichEmbed()
                        .setColor(message.member.highestRole.color)
                        .setDescription(verifylol.map(verifylol => `\`${verifylol.user.id}\` | ${verifylol.user.tag}`).join("\n"))
                    message.channel.send(embed )

            } else{
                var embed = new Discord.RichEmbed()
                    .setColor(message.member.highestRole.color)
                    .setDescription(` <:prideFlag:500255005266280448>There are **${unverified.members.size}** users with the \`${unverified.name}\` role.
Run **hi!unverified list** to see a full list of them.`)
            message.channel.send({ embed })}
        }
    },
}