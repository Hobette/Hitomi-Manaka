module.exports = {
    name: 'sinfo',
    description: 'Returns simple info about a server I\'m in',
    category: "owner",
    usage: "(number of server in the array of servers)",
    execute: async (client, config, Discord, target, utils, message, args) => {
        const server = client.guilds.array()[args[0]]
        const sowner = client.users.get(client.guilds.array()[args[0]].ownerID)
    
        const scount = client.guilds.array()[args[0]].memberCount
        const shumans = client.guilds.array()[args[0]].members.filter(member => !member.user.bot).size;
            if (server === undefined) {
                message.channel.send("What server?");
        }
            else {
                try {
    message.channel.send(`**SERVER INFO:**
\`NAME:\` ${server.name}
\`ID:\` ${server.id}

\`OWNER\:\` ${sowner.tag}
\`OWNER ID:\` ${server.ownerID}
    
\`MEMBERS\:\` ${shumans} humans/${scount - shumans} bots (${scount} total)`);
                } catch (err) {
                    return message.channel.send(`\`ERROR\` \`\`\`xl\n${err}\n\`\`\``);
                }
            }
        
    },
}