module.exports = {
    name: 'support',
    description: 'Sends you a link to my support server',
    category: "general",
    
    execute: async (client, config, Discord, target, utils, message, args) => {
        message.author.send('For any questions you can contact with Mama (aka Tina) in my support server: https://discord.gg/4E69aYC')
        .then(() => {
            if (message.channel.type === 'dm') return;
            message.channel.send('Lemme slide into yo dms owo');
        })
        .catch(error => {
            message.channel.send('Haha you want help but don\'t want me to help you in the DMs 😂');
        });
    },
}