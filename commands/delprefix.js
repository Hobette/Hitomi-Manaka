module.exports = {
    name: 'delprefix',
    description: 'Deletes a prefix',
    category: 'owner',
    execute: async (client, config, Discord, target, utils, message, args) => {
        var prefixes = require("../util/data holders/prefixes.json")
        var delprefix = args.join(" ").toLowerCase().replace("[s]", " ")
        if (!prefixes.includes(delprefix)) return message.channel.send("That's not a prefix,,.")

        prefixes = prefixes.filter(p => p !==delprefix)

        utils.fs.writeFile("./util/data holders/prefixes.json", JSON.stringify(prefixes, null, 2), function (err) {
            if (err) return message.channel.send("`You broke it, nerd:` " + err)
            message.channel.send("Deleted your prefix lol")
        })
    },
}