module.exports = {
    name: 'randuser',
    description: 'Selects a random user from the guild. You can use "global" as an argument too to not limit this to guild users',
    usage: '[optional: you can call someone a thing if you add arguments]',
    category: "fun",
    execute: async (client, config, Discord, target, utils, message, args) => {
        var randuser = message.guild.members.random().user
        if (args[0] && args[0].toLowerCase() === "global") {
           args = args.slice(1,args.length)
            randuser = client.users.random()
        } 

        if (!args[0]) {
             message.channel.send(`And the chosen one was... **${randuser.tag}**!`)
         }
         else {
            

             if (args[0] === "ping" && message.guild.id === "438590624162250752") {
                var goodroles = [ '491853655306141706',
                '456792557406388224',
                '438590981982519307',
                '487369323057381377',
                '438598500620566529' ]
                var hasRole = false
                for (i=0; i<goodroles.length; i++) {
                    if (message.member.roles.has(goodroles[i])) {
                       hasRole = true
                    }
                }
                if (hasRole === true) {  message.channel.send(`haha ${randuser}`) }
             } else

             message.channel.send(`Now **${randuser.tag}** is ${args.join(' ')}`)
         }
    },
}