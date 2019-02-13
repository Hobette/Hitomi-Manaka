module.exports = {
    name: 'achievement',
    aliases: ['mca'],
    description: 'Make a minecraft achievement!',
    usage: "(achievement) or (title | achievement)",
    category: "fun",
    execute: async (client, config, Discord, target, utils, message, args) => {
        var title = ""
        var achievement = ""
        
        var num = Math.floor(Math.random() * 39)+1
        if (!args[0]) {
            var gratz = new Discord.Attachment('https://www.minecraftskinstealer.com/achievement/a.php?i='+num+'&h=Nerd&t=You+have+to+add+text', "nerd.png")    
        } else 
        if (args.includes("|")) { 
            title = args.slice(0, args.indexOf('|'))
            achievement = args.slice(args.indexOf('|')+1, args.length)
            var gratz  = new Discord.Attachment(`https://www.minecraftskinstealer.com/achievement/a.php?i=${num}&h=${title.join('+')}&t=${achievement.join('+')}`, "congratulation.png")
        } else {
            var gratz = new Discord.Attachment(`https://www.minecraftskinstealer.com/achievement/a.php?i=${num}&h=Achievement+get%21&t=${args.join('+')}`, "congratulation.png")
        }
	message.channel.send(gratz)
    },
}