module.exports = {
    name: 'invite',
    description: 'Lets you add me to your server',
    category: "general",
    execute: async (client, config, Discord, target, utils, message, args) => {
        message.author.send(`Here you gooooo~:heart: (renember: you need either \`manage server\` or \`administrator\` permissions to invite bots to a server)
https://discordapp.com/oauth2/authorize?client_id=431495393520386068&scope=bot&permissions=1342569672
\`Uncheck administrator permissions if you don't want hitomi to have read every channel or uncheck everything if you don't want the bot to create a new role)\``)
        .then(() => {
            return message.channel.send('Omfg thank you! Look in your DMs! :heart:');
        })
        .catch(error => {
            return message.channel.send('Using hi!invite but then not allowing me to DM you, you\'re evil <:angr:468795068698984458>');
        });
    },
}