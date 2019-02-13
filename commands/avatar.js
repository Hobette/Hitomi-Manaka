module.exports = {
    name: 'avatar',
    aliases: ['avy'],
    description: 'Shows an users\' avatar (or yours)',
    category: "utility",
    usage: "(user mention/id or none to display your avy)",
    execute: async (client, config, Discord, target, utils, message, args) => {
            message.channel.send(`**${target.tag}'s** avatar is:
${target.displayAvatarURL.replace(/\?size=[0-9]+/g, "")}?size=2048`)
    },
}