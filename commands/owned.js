module.exports = {
    name: 'owned',
    description: 'Inside jokes',
    category: 'meme',
    execute: async (client, config, Discord, target, utils, message, args) => {
        var vc = utils.random(['<@​226488914557403136>',
            'Executives :underage::one: :eight: Definitely not a nice room',
            'auto-cash-owned',
            'fan-art',
            '<@​&242997502234591233>',
            'Poof',
            'patrons',
            'general',
            'bot-spam',
            'filthy-weebs',
            'Patrons',
            'very-nice-room',
            'see-bots-chat',
            'musicrequests'])()
            var owned = target.tag.replace(client.user.tag, message.author.tag).replace(client.users.get(config.ownerID), message.author.tag)
        message.channel.send(`**${owned}** just joined *${vc}*`)
        message.channel.send(`**${owned}** just left *${vc}*`)
    },
}