module.exports = {
    name: "leave",
    description: "Makes me leave a server",
    category: "owner",
    usage: "(server ID)",
    execute: async (client, config, Discord, target, utils, message, args) => {

        try {
            let badserver = client.guilds.get(args[0])
            badserver.leave()
            message.channel.send('Oh, okay')
        } catch (err) {
            message.channel.send(`\`ERROR\` \`\`\`xl\n${err}\n\`\`\``);
        }

    }
}