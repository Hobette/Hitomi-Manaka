module.exports = {
    name: 'help',
    aliases: ['?'],
    description: 'What',
    category: "general",
    insensitive: true,
    usage: '(command name or none to show list)',
    execute: async (client, config, Discord, target, utils, message, args) => {
        if (utils.settings[message.guild.id].kitchenSinkMode === true) return message.channel.send("Help yourself.")
        
        var categories = [
            "owner",
            "general",
            "utility",
            "fun",
            "economy",
            "text",
            "meme",
            "mod",
            "dbots",
            "lgtb",
            "easter egg",
            "wip",
        ]

        function getsomehelp(category) {
            if (category === false) return client.commands.filter(cmd => !categories.includes(cmd.category)).map(cmd => cmd.name);
            //automatically makes an array of miscellaneous commands 
            return client.commands.filter(cmd => cmd.category === category).map(cmd => cmd.name);
        }

        var howner = getsomehelp("owner")
        var hgeneral = getsomehelp("general")
        var hutility = getsomehelp("utility")
        var hfun = getsomehelp("fun")
        var heconomy = getsomehelp("economy")
        var htext = getsomehelp("text")
        var hmeme = getsomehelp("meme")
        var hmod = getsomehelp("mod")
        var hdbots = getsomehelp("dbots")
        var hgay = getsomehelp("lgtb")
        var hsecret = getsomehelp("easter egg")
        var nocat = getsomehelp(false)
        var wipcat = getsomehelp("wip")
        //this generates a list of commands with their categories. It's similar to Tony Bamanaboni's help command
        
        let prefix = utils.checkCommand(message.content, "prefix")

        if (!args[0]) {
            const embed = new Discord.RichEmbed() 
                .setAuthor(`All commands (${client.commands.size - hsecret.length})`)
                .setDescription("Run `hi!help [command]` to see more info about it!")
                .addField(`Owner (${howner.length})`, `${howner.join("\n")}`, true)
                .addField(`General (${hgeneral.length})`, `${hgeneral.join("\n")}`, true)
                .addField(`Utility (${hutility.length})`, `${hutility.join("\n")}`, true)
                .addField(`Fun (${hfun.length})`, `${hfun.join("\n")}`, true)
                .addField(`Economy (${heconomy.length})`, `${heconomy.join("\n")}`, true)
                .addField(`Text (${htext.length})`, `${htext.join("\n")}`, true)
                .addField(`Meme (${hmeme.length})`, `${hmeme.join("\n")}`, true)
                .addField(`Mod (${hmod.length})`, `${hmod.join("\n")}`, true)
                .addField(`* Discord Bots (${hdbots.length})`, `${hdbots.join("\n")}`, true)
                .addField(`* LGTBQ+ Lounge REBORN (${hgay.length})`, `${hgay.join("\n")}`, true)
                .addField(`No category (${nocat.length})`, `${nocat.join("\n")}`, true)
                .setFooter("*: guild specific commands");

             message.author.send( embed ).then(() =>
                    message.channel.send("Look in the DM I sent you! <:heart_trans:361930686552342538>")
               ).catch((error) => 
                   message.channel.send("Enable your DMs first, nerd")
               )

        } else /*
            
            
            [redactaded]
            
             */

        if (args[0] === 'yourself') {
            var ks = new Discord.RichEmbed()
                .setImage('https://cdn.discordapp.com/attachments/461509407839092736/497770004327170058/unknown.png')
            message.channel.send(ks)
        } else

        /*
        [RDACETED]
        */


            if (args[0] === 'easter' && args[1] === 'egg') {
                if (message.author.id === config.ownerID) {
                    const embed = new Discord.RichEmbed()
                        .setTitle(`All easter egg commands (${hsecret.length})`)
                        .setDescription(hsecret.join("\n"))
                    message.author.send({ embed }).then(() =>
                        message.channel.send("Sent you the list of secret commands, handle it with care")
                    )
                }
        } else 
        if (args[0] === 'wip') {
            const embed = new Discord.RichEmbed()
                .setTitle(`All unfinished commands (${wipcat.length})`)
                .setFooter("Only my dev can use these")
                .setDescription(wipcat.join("\n"))
            message.author.send({ embed }).then(() =>
                message.channel.send("Sent you the list of secret commands, handle it with care")
            )
        }

        else {
        var name = args[0].toLowerCase();
        var command = client.commands.get(name) || client.commands.find(c => c.aliases && c.aliases.includes(name));

        if (!command) {
            return message.channel.send('That\'s not a valid command!!!!!!!!!!!1');
        } else

        var calias = 'None'
        var cusage = 'None'
        var ccat = "None"

        if (command.aliases !== undefined) { calias = (`${command.aliases.join(', ')}`) }
        if (command.usage !== undefined) { cusage = (`${prefix}${command.name} ${command.usage}`) }
        if (categories.includes(command.category)) { ccat = command.category }

        ccat = utils.firstLetterUppercase(ccat)

        const embed = new Discord.RichEmbed()
            .setTitle(prefix + command.name, true)
            .setDescription(command.description, true)
            .addField("Usage:", cusage, true)
            .addField("Aliases:", calias, true)
            .addField("Category:", ccat, true)

        message.channel.send({ embed })
        }
    }
}
