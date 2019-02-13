module.exports = {
    name: 'feedback',
    aliases: ['report', 'suggest'],
    description: 'Have a suggestion, opinion or want to report a bug/problem? Feel free to use this!',
    category: "general",
    usage: "feedback (your feedback)",
    execute: async (client, config, Discord, target, utils, message, args) => {
        /*if (message.author.id ===
            "420318869501116416"
        ) {
            message.channel.send("You've been blocked from sending feedback, maybe for shitposting. Sorry.")
        }*/
        if (!args[0]) {
            message.channel.send('I need something to `suggest`')
        }
        else {
            const suggest = client.channels.get('432226530198814741')

            suggest.send(`Hey new feedback <:HitomiYay:436241639783268362>
\`\`\`asciidoc
== From: ${message.author.tag} (${message.author.id})
== Guild: ${message.guild.name} (${message.guild.id})

Content:: ${args.join(' ')}\`\`\` `).then(() => {

            message.channel.send('Sent the feedback to Mama! ❤❤❤');
        })
        }
    },
}