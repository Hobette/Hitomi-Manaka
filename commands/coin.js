module.exports = {
    name: 'coin',
    description: 'Let the luck decide for you!',
    category: "h",
    execute: async (client, config, Discord, target, utils, message, args) => {
        var coin = ["HEADS", "TAILS"]
        var coinresult = coin[Math.floor(Math.random() * coin.length)]
        try {
            message.channel.send(`Congtatulation, you got... Oh, **${coinresult}**`).then();
        } catch (err) {
            return message.channel.send(`\`ERROR\` \`\`\`xl\n${err}\n\`\`\``);
        }
    },
}