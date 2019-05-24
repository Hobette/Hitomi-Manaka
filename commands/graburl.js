module.exports = {
    name: 'graburl',
    description: 'Grabs a thumbnail from an embed, useful for mobile users',
    category: 'utility',
    execute: async (client, config, Discord, target, utils, message, args) => {
        message.channel.fetchMessages()
            .then(async e => {
                var o = e.filter(m => m.embeds[0] !== undefined && m.embeds[0].thumbnail !== null).first()
                if (o == undefined) return message.channel.send("There's no images to grab!")
                message.channel.send(o.embeds[0].thumbnail.url)
            })
    },
}
