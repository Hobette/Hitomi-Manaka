module.exports = {
    name: 'barrel',
    description: 'lol',
    category: 'easter egg',
    execute: async (client, config, Discord, target, utils, message, args) => {
        if (args[0] === "roll") message.channel.send("<a:memed:433320880135733248>")
    },
}