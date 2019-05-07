module.exports = {
    name: 'settings',
    aliases: ['set'],
    description: 'Toggles stuff for the guild (finally). Run it without arguments to see your options. Requires manage server permissions',
    category: 'mod',
    execute: async (client, config, Discord, target, utils, message, args) => {
        if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send("Computer says: \"you are missing permissions\"")

        var set = utils.settings[message.guild.id]
        
        function savechanges(setting, option) {
            utils.settings[message.guild.id][setting] = option
            utils.fs.writeFileSync('./util/data holders/guildsettings.json', JSON.stringify(utils.settings, null, 2), function (error) {
                if (error) {
                    throw error
                }
            })
        }


        if (!args[0]) {
            var bbbbb = message.guild.roles.get(set.rolebanRole)
            if (bbbbb === undefined) { bbbbb = "None" }

            var botr = message.guild.roles.get(set.botRole)
            if (botr === undefined) { botr = "None" } 

            const embed = new Discord.RichEmbed()
                .setAuthor(message.guild.name + "'s settings", message.guild.iconURL+"?size=2048")
                .setDescription(`[Click here to see what every setting does](https://gist.github.com/GmdDjca/3e862ba016c2f664d71d636d108bd1ff)

\`fuckSnipers\`: ${set.fuckSnipers}
\`disableAutoresponses\`: ${set.disableAutoresponses}
\`rolebanRole\`: ${bbbbb}
\`kitchenSinkRole\`: ${set.kitchenSinkMode}
\`botRole\`: ${botr}
\`allowEdits\`: ${set.allowEdits}
\`nWordTaxes\`: ${set.nWordTaxes}`)
               
   if (message.guild.me.highestRole.color > 0) { embed.setColor(message.guild.me.colorRole.color) }
            message.channel.send(embed)

        } else {

            if (args[0] === "reset") {
                utils.setDefaultSettings(message.guild.id);
                return message.channel.send("Succesfully reset this guild's options!");
            }

            if (set[args[0]] === undefined) return message.channel.send("Your first argument must be one of the ones that figure in the list (run this command without arguments to see it)")
            if (!args[1]) return message.channel.send("You need to add a second argument too, run this command without arguments to get a bit of help")

            var targetRole = message.guild.roles.find(role => (role.id === args[1].replace(/[^0-9]+/g, "") || role.name.toLowerCase().includes(args.slice(1, args.length).join(' ')) ) && !role.managed)
            


            if (args[0] === "rolebanRole") {
                if (args[1] === "none") { savechanges(args[0], "none")
                return message.channel.send("Removed your rolebanned role from the settings!") } 
                
                if (targetRole === null) return message.channel.send("You need to choose a role (either by mention, ID or by typing its name)")
                savechanges(args[0], targetRole.id)
                message.channel.send(`Set your rolebanned tole to **${targetRole.name}**! (make sure you deny access to all channels (except some designated room of your choice) for rolebanned people to users with that role)`)
            } else
            if (args[0] === "botRole") {
                if (args[1] === "none") { savechanges(args[0], "none")
                return message.channel.send("Removed your bot role from the settings!") } 

                if (targetRole === null) return message.channel.send("You need to choose a role (either by mention, ID or by typing its name)")
                savechanges(args[0], targetRole.id)
                message.channel.send(`Set your bot tole to **${targetRole.name}**! (make sure I have Manage Roles permissions)`)
            } else


                if (args[1] === "true") {
                    savechanges(args[0], true)
                    message.channel.send("Saved changes!")
                } else
                if (args[1] === "false") {
                    savechanges(args[0], false)
                    message.channel.send("Saved changes!")
                } else
                    message.channel.send("The second argument must be either `true` or `false`")
        }
    },
}
