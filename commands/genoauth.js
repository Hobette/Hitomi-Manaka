module.exports = {
    name: 'genoauth',
    description: 'Generates an invite link for a bot',
    category: "utility",
    usage: "(bot id/mention)",
    execute: async (client, config, Discord, target, utils, message, args) => {
        if (!args[0]) {
            message.channel.send(`Please specify a bot (by mention or ID)`)
        } else{
            if (client.users.get(args[0].replace(/[^0-9]/g, "")) == undefined && target.id === message.author.id) {
                target = client.fetchUser(args[0].replace(/[^0-9]/g, ""))
            }
            if (!target.bot || target == undefined) {
                message.channel.send("That's not a bot <:LMFAO:443921300201799681>")
            }  else {
                message.channel.send("Look in your DM's :heart:")
        message.author.send(`Have fun with \`${target.tag}\`!!
https://discordapp.com/oauth2/authorize?client_id=${target.id}&scope=bot&permissions=2146958591
**disclaimer: this link is NOT guaranteed to work. Some bots are private or need a grant code, for example**
\`tip: if you don't want the bot to create it's default role, uncheck all permissons before inviting it\``)
}}
    },
}