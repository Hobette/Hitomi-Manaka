module.exports = {
    name: 'youtube',
    aliases: ['yt'],
    description: 'Searches a video on youtube',
    category: "easter egg",
    execute: async (client, config, Discord, target, utils, message, args) => {
        if (!args[0]) {
            message.channel.send('I need! Arguments!')
        } else {
            if (args[0] === 'pizza' && args[1] === 'time') {
                message.channel.send(`Pizza time!
🍕 https://www.youtube.com/watch?v=lpvT-Fciu-4 🍕`)
            } else
                if (args[0] === 'tina') {
                    message.channel.send(`\`Henol, my nam Tina, and i'm a spanish youtuber who makes videos of Geometry 
Dash levels (though I suck at the game), and I also upload Mario Kart CTGP ...\`
<:youtube:314349922885566475> https://www.youtube.com/channel/UC-lpzOby46FW5EeKElIRbAg <:youtube:314349922885566475> `)
                } else {

                    message.channel.send(`Here are your search results for \`${args.join(' ')}\`:
<:youtube:314349922885566475> https://www.youtube.com/watch?v=0v0pgH6MmZM <:youtube:314349922885566475>`)
                }
        }
    },
}