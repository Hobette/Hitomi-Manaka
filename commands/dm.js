module.exports = {
    name: "dm",
    description: "Sends a DM to the desired user",
    category: "owner",
    usage: "(user ID) (message)",
    execute: async (client, config, Discord, target, utils, message, args) => {
            const person = client.users.get(args[0])
            const mcontent = args.slice(1, args.length)
            person.send(`You got a DM from the developer!
**${mcontent.join(' ')}**`)
                .then(() => {
                    message.channel.send(`Sent a Dehydrated Mink to **${person.tag}**.`);
                })
                .catch(error => {
                    message.channel.send('This fella has dms disabled, that\'s so sad');
                });

    }
}