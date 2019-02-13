module.exports = {
    name: 'bagel',
    description: '',
    category: "h",
    execute: async (client, config, Discord, target, utils, message, args) => {
        var bagels = require("../util/random/bagels.json")
        var bagel = bagels[Math.floor(Math.random() * bagels.length)]
        try {
          const attachment = new Discord.Attachment(bagel);
          message.channel.send(attachment);
        } catch (err) {
            return message.channel.send(`\`ERROR\` \`\`\`xl\n${err}\n\`\`\``);
        }
    },
}