module.exports = {
    name: 'poopify',
    description: 'Turns someone\'s nickname into the 💩 emoji',
    category: 'mod',
    execute: async (client, config, Discord, target, utils, message, args) => {
        if (!message.member.hasPermissions("MANAGE_NICKNAMES")) return message.channel.send("You don't have permissions to turn people into poop.");
        var victim = message.guild.members.get(target.id)
        if (victim === undefined || victim === message.member) return message.channel.send("You need to specify a member from here!")
        if (victim.user.id === config.ownerID || victim.user === client.user) return message.channel.send("Nah.")
        victim.setNickname("💩", "idk").then(e => message.channel.send(`Succesfully poopified **${target.tag}**.`)).catch(err => message.channel.send("Missing permissions!"))
    },
}