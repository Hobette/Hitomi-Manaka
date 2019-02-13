module.exports = {
    name: "restart",
    description: "Do I have to explain lole",
    category: "owner",
    execute: async (client, config, Discord, target, utils, message, args) => {

        console.log(`
Restarted`);
        message.channel.send('This is so sad')
        client.destroy();
        client.login(config.token)

    }
}