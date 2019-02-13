module.exports = {
    name: 'react',
    description: 'Sends a reaction image',
    aliases: ['r'],
    usage: "react (reaction from the list or none to show it",
    execute: async (client, config, Discord, target, utils, message, args) => {
        if (!args[0]) {
            message.channel.send(`\`\`\`CURRENT REACTIONS\`\`\`
**bible** sends a PDF of the bible, for when someone says "frick" or they send a cursed image
**jazz** \*jazz music stops\*
**meme** banned for bad meme
**dab** yes
**no** f
**shoot** Marie stop
**doubt** generic game reference
**out** gtfo!
**pain** just stop it!
**nice** very nice!
**wtf** wut
**edge** wow, you are so rude
**gm** おはよう！
**epic** ok, this is-
**hmm** HMMMMMMMMMMMMMMMMM
`)
        } else
            if (args[0] === 'bible') {
                message.channel.send('Hey, this is a christian server, so read the bible! >-[', { files: ["./util/reactions/bible.pdf"] });
            } else

                function react(link) {
                    var embed = new Discord.RichEmbed()
                        .setImage(link)
                    message.channel.send({ embed })
                }

        if (args[0] === 'jazz') {
            react('https://cdn.discordapp.com/attachments/461509407839092736/497785227092033536/jazz.jpg')
        }
        if (args[0] === 'meme') {
            react('https://cdn.discordapp.com/attachments/406497072939008001/502522242966487040/unfunny_meme_bro.gif')
        }
        if (args[0] === 'dab') {
            react('https://cdn.discordapp.com/attachments/461509407839092736/497785408344817675/dab.png')
        }
        if (args[0] === 'no') {
            react('https://cdn.discordapp.com/attachments/461509407839092736/497785428322156544/no.png')
        }
        if (args[0] === 'shoot') {
            react('https://cdn.discordapp.com/attachments/461509407839092736/497785437910335498/shoot.png')
        }
        if (args[0] === 'doubt') {
            react('https://cdn.discordapp.com/attachments/461509407839092736/497786893002473483/doubt.jpg')
        }
        if (args[0] === 'out') {
            react('https://cdn.discordapp.com/attachments/461509407839092736/497787853473054759/out.jpg')
        }
        if (args[0] === 'pain') {
            react('https://cdn.discordapp.com/attachments/461509407839092736/497787595724685322/pain.png')
        }
        if (args[0] === 'nice') {
            react('https://cdn.discordapp.com/attachments/461509407839092736/497785727623495690/nice.png')
        }
        if (args[0] === 'wtf') {
            react('https://cdn.discordapp.com/attachments/461509407839092736/497787542461087744/wtf.png')
        }
        if (args[0] === 'edge') {
            react('https://cdn.discordapp.com/attachments/461509407839092736/497785863229538314/edgy.png')
        }
        if (args[0] === 'gm') {
            react('https://cdn.discordapp.com/attachments/461509407839092736/497785822460772363/HitomiOhayo.png')
        }
        if (args[0] === 'epic') {
            react('https://cdn.discordapp.com/attachments/406497072939008001/501008913987272716/epic.gif')
        }
        if (args[0] === 'hmm') {
            react('https://pm1.narvii.com/6585/b5b717574d0d6250181c18aadd89fbe0b3c7bf3a_hq.jpg')
        }
    },
}