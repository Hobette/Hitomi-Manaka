module.exports = {
    name: 'stats',
    description: 'Shows stuff like the amount of servers I\'m  in, as well as my uptime and command count, and more stuff',
    category: "general",
    execute: async (client, config, Discord, target, utils, message, args) => {

        let totalSeconds = (client.uptime / 1000);
        let hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = (totalSeconds % 60).toFixed(2)

        let uptime = `${hours}h ${minutes}min ${seconds}sec`;

        var nonbotfarms = client.guilds.filter(s => s.members.filter(m => !m.user.bot).size < s.members.filter(m => m.user.bot).size).size
        var hitomi = utils.fs.readFileSync("./util/random/hitomi.txt").toString().split("\n").length
        var confessions = client.guilds.filter(c=>c.channels.find(e => e.name === "confessions") !== null).size
        var snowball = client.guilds.filter(c=>c.roles.find(e=>e.name.toLowerCase() ==="snowball") !== null).size
        
        function formatBytes(a,b){if(0==a)return"0 Bytes";var c=1024,d=b||2,e=["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],f=Math.floor(Math.log(a)/Math.log(c));return parseFloat((a/Math.pow(c,f)).toFixed(d))+" "+e[f]}

        var embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField("Client", 
`Servers: \`${client.guilds.size}\`
Users: \`${client.users.size}\`
Emojis: \`${client.emojis.size}\`
Text channels: \`${client.channels.filter(c => c.type === "text").size}\`
Non-bot farm servers (users > bots): \`${nonbotfarms}\`
Uptime: \`${uptime}\``, true)
        .addField("Commands", 
`Number of commands: \`${client.commands.size}\`
Number of prefixes: \`${require("../util/data holders/prefixes.json").length}\`
Pictures in **hi!hitomi:** \`${hitomi}\`
Guilds with a **#confessions** channel: \`${confessions}\`
Guilds with a **Snowball** role: \`${snowball}\``, true)
        .addField("System",
`Memory usage: \`${formatBytes(process.memoryUsage().rss)}\``, true)
message.channel.send(embed)

    },
}
