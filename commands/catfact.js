module.exports = {
    name: 'catfact',
    description: 'Taken from [Steven Quartz Universe#1286](https://discord.bots.gg/bots/421786371183869952)',
    category: 'meme',
    execute: async (client, config, Discord, target, utils, message, args) => {
        message.channel.send("Did you know? Cats respond most readily to names that end in an \\ee\" sound.\"\"\"")
    },
}