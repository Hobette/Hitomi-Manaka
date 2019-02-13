module.exports = {
    name: 'snipe',
    description: 'Reveals the last deleted message on a channel.\nThis can be restricted to members with Manage Messages permissions using `hi!settings`. It also accepts arguments: use `hide` to remove the sniped message (you need manage messages permissions) and `dm` if you want it to be DMed to you',
    usage: "(optional: dm or hide)",
    insensitive: true,
    category: "mod",
    execute: async (client, config, Discord, target, utils, message, args) => {
        if (utils.settings[message.guild.id].fuckSnipers === true && !message.member.hasPermission("MANAGE_MESSAGES")) return undefined;

        if (require("../util/data holders/snipe.json")[message.channel.id] == undefined) { message.channel.send("There are no messages to snipe!").then(m => m.delete(5000)); } else {

                var snipes = require("../util/data holders/snipe.json")
                var snipechannel = snipes[message.channel.id]

                var snipecontent = snipechannel[0]
                var snipeauthor = client.users.get(snipechannel[1])
                var snipecolor = snipechannel[2]

                function hidesnipe() {
                    var fileName = './util/data holders/snipe.json';
                    var file = require("../util/data holders/snipe.json")
                    delete (file[message.channel.id])
                    utils.fs.writeFile(fileName, JSON.stringify(snipes, null, 2), function (error) {
                        if (error) {
                            return console.log(error)
                        }
                    })
                }

                const embed = new Discord.RichEmbed()
                    .setFooter(`Sniped by: ${message.author.tag}`)
                    .setAuthor(`${snipeauthor.tag} said...`, `${snipeauthor.displayAvatarURL.replace(/\?size=[0-9]+/g, "")}?size=2048`)
                    .setDescription(`${snipecontent}`)
                    if (snipecolor != 0 ) { embed.setColor(snipecolor) }

                if (args[0] === "hide" && message.member.hasPermission("MANAGE_MESSAGES")) {
                    hidesnipe()
                    message.channel.send("Succesfully removed the sniped message")
                } else
                if (args[0] === "dm") {
                    message.author.send({ embed })
                    hidesnipe()
                } else {
                    message.channel.send({ embed }).then()
                    hidesnipe()
                }
            }
    },
}
