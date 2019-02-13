module.exports = {
    name: "despacito",
    description: "Makes me die",
    category: "owner",
    execute: async (client, config, Discord, target, utils, message, args) => {

        console.log(`
He sido apagada -<`)
        message.channel.send('`*gunshots mix with drums*`').then(() =>{
            process.exit();
        })
    }
}