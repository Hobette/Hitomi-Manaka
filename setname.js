module.exports = {
    name: "setname",
    description: "Changes the bot's name",
    category: "owner",
    usage: "(name)",
    execute: async (client, config, Discord, target, utils, message, args) => {
        try {
            client.user.setUsername(args.join(' '));
        } catch (err) {
            return message.channel.send(`\`\`\`xl \n${err}\`\`\``);
        }
        return message.channel.send('Yay');
    }
}
