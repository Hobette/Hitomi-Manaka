module.exports = {
    name: 'stats',
    description: 'Shows stuff like the amount of servers I\'m  in, as well as my uptime and command count, and more stuff',
    category: "general",
    execute: async (client, config, Discord, target, utils, message, args) => {
        var osu = require('node-os-utils')
        var cpu = osu.cpu
 
        var count = cpu.count()
        cpu.usage()
        .then(cpuPercentage => {

        let totalSeconds = (client.uptime / 1000);
        let hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = (totalSeconds % 60).toFixed(2)

        let uptime = `${hours}h ${minutes}min ${seconds}sec`;
	
	function formatBytes(a,b){if(0==a)return"0 Bytes";var c=1024,d=b||2,e=["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],f=Math.floor(Math.log(a)/Math.log(c));return parseFloat((a/Math.pow(c,f)).toFixed(d))+" "+e[f]}

        var embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField("Client", 
`Servers: \`${client.guilds.size}\`
Users: \`${client.users.size}\`
Emojis: \`${client.emojis.size}\`
Text channels: \`${client.channels.filter(c => c.type === "text").size}\`
Non-bot farm servers (users > bots): \`${client.guilds.filter(s => s.members.filter(m => !m.user.bot).size < s.members.filter(m => m.user.bot).size).size}\`
Uptime: \`${uptime}\`
Commands: \`${client.commands.array().length}\`
Number of prefixes: \`${require("../util/data holders/prefixes.json").length}\``, true)
        .addField("Responses and other stuff", 
`Pictures in **hi!hitomi:** \`${utils.fs.readFileSync("./util/random/hitomi.txt").toString().split("\n").length}\`
Genders in **hi!gender:** \`${require("../util/random/genders.json").length}\`
Sexualities in **hi!sexuality:** \`${require("../util/random/sexualities.json").length}\`
Responses in **hi!ping**: \`${require("../util/random/ping.json").length}\` 
Note that not all commands that respond with a random text aren't here
`, true)
        .addField("System",
`Memory usage: \`${formatBytes(process.memoryUsage().rss)}\`
CPU usage: \`${cpuPercentage}%\``, true)
message.channel.send(embed)
        
        })
    },
}
