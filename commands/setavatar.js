module.exports = {
    name: "setname",
    description: "Changes the bot's avatar",
    category: "owner",
    usage: "(image url)",
    execute: async (client, config, Discord, target, utils, message, args) => {
        try {
            client.user.setAvatar(args[0]);
            message.channel.send('<:oneEye:470710365450141706> thanks for the avatar mama');
        } catch (err) {
            return message.channel.send(`\`\`\`xl \n${err}\`\`\``);
        }
    }
}