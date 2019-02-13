module.exports = {
    name: 'reload',
    description: 'Reloads a command',
    usage: "(command name)",
    category: "owner",
    execute: async (client, config, Discord, target, utils, message, args) => {
        if (!args[0]) { message.channel.send("What do I reload !?"); }
        const commandName = args[0];
        // Check if the command exists and is valid
        if (!client.commands.has(commandName)) {
            return message.channel.send("That command does not exist you nert!");
        }
        // the path is relative to the *current folder*, so just ./filename.js
        const props = require(`./${commandName}.js`);
        delete require.cache[require.resolve(`./${commandName}.js`)];
        // We also need to delete and reload the command from the client.commands Enmap
        client.commands.delete(commandName);
        client.commands.set(commandName, props);
        message.channel.send(`Nice job team, **${commandName}** has been reloaded!`);
    },
}