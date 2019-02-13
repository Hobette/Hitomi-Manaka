module.exports = {
    name: 'setnick',
    description: 'Sets the nickname of Hitomi in the server',
    category: 'owner',
    execute: async (client, config, Discord, target, utils, message, args) => {
        message.guild.me.setNickname(args.join(" ")).then(e=>message.channel.send("Epic")).catch(g => message.channel.send("No nickname perms 😭"))
    },
}