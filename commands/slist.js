module.exports = {
    name: 'slist',
    description: 'Shows the list of servers I\'m in',
    category: "owner",
    usage: "(number of page)",
    execute: async (client, config, Discord, target, utils, message, args) => {
        if (!args[0]) {args[0] = "0"}
        try {
            var slist = []
            for (i = 0; i < 10; i++) {
                var snumber = args[0] * 10 + i
                if (client.guilds.array()[snumber]) { slist.push(`${snumber} - ${client.guilds.array()[snumber].name} (${client.guilds.array()[snumber].id})`) }
            }
            message.channel.send(`\`\`\`
${slist.join('\n')}

(page ${args[0]} of ${Math.floor(client.guilds.size / 10)})
\`\`\``)
        } catch (err) {
            message.channel.send(`\`ERROR\` \`\`\`xl\n${err}\n\`\`\``);
        }

    },
}