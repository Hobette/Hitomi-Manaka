module.exports = {
    name: 'homestuck',
    aliases: ['classpect'],
    description: 'Generates a random homestuck classpect',
    category: 'fun',
    execute: async (client, config, Discord, target, utils, message, args) => {

        var class_ = utils.random(['Lord',
            'Muse',
            'Mage',
            'Seer',
            'Witch',
            'Heir',
            'Page',
            'Knight',
            'Thief',
            'Rogue',
            'Maid',
            'Sylph',
            'Prince',
            'Bard'])()

        var aspect = utils.random(['Space',
            'Time',
            'Life',
            'Doom',
            'Light',
            'Void',
            'Breath',
            'Blood',
            'Heart',
            'Mind',
            'Hope',
            'Rage'])()
            
        if (!args[0]) { args[0] = message.author.username }
        var a = client.users.get(args[0].replace(utils.idRegex, ""))
        if (a === undefined) { a =  args.join(' ') } else { a = a.username }

        message.channel.send(`${a} is a ${class_} of ${aspect}`)
    },
}
