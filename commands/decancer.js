module.exports = {
    name: 'decancer',
    description: 'Translates a or name into alphanumeric characters. \nCredits to **stupid cat#8160** and his bot, **[blargbot](https://blargbot.xyz/)**',
    usage: "(text or mention)",
    category: "text",
    execute: async (client, config, Discord, target, utils, message, args) => {
        const unorm = require('unorm');
        const limax = require('limax');
        function decancer(text) {
            text = unorm.nfkd(text);
            text = limax(text, {
                replacement: ' ',
                tone: false,
                separateNumbers: false,
                maintainCase: true,
                custom: ['.', ',', ' ', '!', '\'', '\"', '?']
            });
            return text;
        }

        var dcuser = message.guild.members.get(target.id).displayName
        var renamepls = ''
        
        var decancered = decancer(dcuser)
        if (decancered === '') {
            decancered = 'Best name ever.'
        }

        message.channel.send(`The asciified version of ${dcuser} is \`${decancered}\``)

    },
}
