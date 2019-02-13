module.exports = {
    name: '8ball',
    description: 'Ask something to the spherical lord 🎱',
    category: "fun",
    
    execute: async (client, config, Discord, target, utils, message, args) => {
        var responses = require( "../util/random/8ball.json")
	var result = utils.random(responses)
                try {
            message.channel.send(result()).then();
        } catch (err) {
            return message.channel.send(`\`ERROR\` \`\`\`xl\n${err}\n\`\`\``);
        }
    },
}