module.exports = {
    name: "status",
    description: "Sets my playing game",
    category: "owner",
    usage: "status (text or \"random\" to display a random irl game)",
    execute: async (client, config, Discord, target, utils, message, args) => {

        try {
            if (args[0].toLowerCase() === "random") {
                var games = utils.fs.readFileSync("./util/random/games.txt").toString().split("\n")
                var playgame = games[Math.floor(Math.random() * games.length)]

                client.user.setActivity(`${playgame} | hi!help | In ${client.guilds.size} servers with ${client.users.size} amazing people.`);
                message.channel.send('ok*/')
            } else{
if (args[0] === "l") client.user.setActivity(`${args.join(' ')} | hi!help | In ${client.guilds.size} servers with ${client.users.size} amazing people.`, {type:"LISTENING"});
if (args[0] === "s") client.user.setActivity(`${args.join(' ')} | hi!help | In ${client.guilds.size} servers with ${client.users.size} amazing people.`, {type:"LISTENING"})
                client.user.setActivity(`${args.join(' ')} | hi!help | In ${client.guilds.size} servers with ${client.users.size} amazing people.`);
            message.channel.send('Ok, Mama! Changing my status!');}
        } catch (err) {
            return message.channel.send(`\`ERROR\` \`\`\`xl\n${err}\n\`\`\``);
        }

    }
}