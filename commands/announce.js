module.exports = {
    name: "announce",
    description: "Sends an announcement to my main server",
    category: "owner",
    usage: "[optional: ping (adds an everyone mention)/here (adds a here mention)] [text]",
    execute: async (client, config, Discord, target, utils, message, args) => {
        const announcements = client.channels.get('434491176393900052')
        
        client.options.disableEveryone = false //Allows pinging everyone/here in the announcements channel
        if (args[0] === "everyone") { announcements.send("@everyone "+args.slice(1, args.length).join(' '));} else
        if (args[0] === "here") { announcements.send("@here "+args.slice(1, args.length).join(' ')); } else 
        { announcements.send(args.join(' ')) }
        
        client.options.disableEveryone = true //Disables pings again to avoid abuse
        message.channel.send("Succesfully sent the announcement to my server, Mama!")
    }
}