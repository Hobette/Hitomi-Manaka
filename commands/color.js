module.exports = {
    name: 'color',
    description: 'Shows a color. Took some help from [Anna\'s color command](https://github.com/Kaboodle3005/Kit/blob/master/commands/color.js)',
    usage: '[(hex color)/(id/name/mention)/random]',
    category: 'utility',
    execute: async (client, config, Discord, target, utils, message, args) => {
        function colorembed(hexcolor) {
        const embed = new Discord.RichEmbed()
		.setColor(hexcolor)
		.setImage("https://api.alexflipnote.xyz/colour/image/" + hexcolor.replace("#", ""))
		.setFooter(hexcolor)
        message.channel.send({embed});
        }

        if (!args[0]) { message.channel.send("Use `hi!help color` for more info") } else {

            const hex = /^#?[0-9A-F]{6}$/i;;
            if (!hex.test(args[0])) {
                if (args[0] === "random") {
                    var randomColor = '0x' + (function co(lor) { return (lor += [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'][Math.floor(Math.random() * 16)]) && (lor.length == 6) ? lor : co(lor); })('');
                    var rawColor = randomColor.replace("0x", "");
                    rawColor = "#" + rawColor;
                    colorembed(rawColor)
                } else
                if (!message.guild.members.has(target.id)) { message.channel.send("Do you want me to show the role of an user that is not here?") }
                else colorembed(message.guild.members.get(target.id).highestRole.hexColor)
            } else
            colorembed(args[0])
        }
    },
}