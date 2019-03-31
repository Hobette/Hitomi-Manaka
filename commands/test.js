module.exports = {
    name: 'test',
    aliases: ['commands', 'jeff', 'larious', 'tomi'],
    description: 'Acts different depending on the alias used, to avoid making too many commands',
    category: "h",
    execute: async (client, config, Discord, target, utils, message, args) => {
        var cmd = utils.checkCommand(message.content, "name")
        if (cmd === "commands") return message.channel.send("Beep boop wrong command use `hi!help` instead")
        if (cmd === "jeff") return message.channel.send("jeff")
	if (cmd === "larious" && utils.checkCommand(message.content, "prefix") === "hi!") return message.channel.send('Nice pun')
        if (cmd === "tomi" && utils.checkCommand(message.content, "prefix") === "hi!") return message.channel.send('Lol')

        var e = await message.channel.send('h')
        e.edit("If you see this, async is working")
    }
}
