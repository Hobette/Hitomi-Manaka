module.exports = {
    name: 'kitchensink',
    aliases: ['ks', 'commandlist'],
    description: 'Shows an user-made command list for Kitchen Sink',
    category: "dbots",
    execute: async (client, config, Discord, target, utils, message, args) => {
        message.channel.send('https://docs.google.com/document/d/1NOwcwYn5uqcETbojVleyu80adNxuclUj0TTSWWLbOfs')
    },
}