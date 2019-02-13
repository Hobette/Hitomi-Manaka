module.exports = {
    name: 'addprefix',
    description: 'Adds a prefix',
    category: 'owner',
    execute: async (client, config, Discord, target, utils, message, args) => {
        var prefixes = require("../util/data holders/prefixes.json")
        var newprefix = args.join(" ").toLowerCase().replace("[s]", " ") //to make prefixes that need to be separated like "hey bot "
        prefixes.push(newprefix)
        utils.fs.writeFile("./util/data holders/prefixes.json", JSON.stringify(prefixes, null, 2), function (err) {
            if (err) return message.channel.send("`You broke it, nerd:` " + err)
            message.channel.send("Added prefix `"+newprefix+"`")
        })
    },
}