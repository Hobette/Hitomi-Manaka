module.exports = {
    name: 'test',
    description: 'Command template',
    category: "h",
    execute: async (client, config, Discord, target, utils, message, args) => {
        var e = await message.channel.send('h')
        e.edit("If you see this, async is working")
    }
}