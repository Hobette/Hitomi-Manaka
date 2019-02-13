module.exports = {
    name: 'createcommand',
    description: 'Creates a command file',
    usage: "(name of file) (category) (code) -d (description)",
    category: "owner",
    execute: async (client, config, Discord, target, utils, message, args) => {
        var fs = utils.fs;
	var category = args[1]
        var code = args.slice(2, args.length)
        if (!args.includes("-d")) { message.channel.send("You forgot to add a description (`-d (desc)` at the end)") } else {
        if (args[1] === 'easter' && args[2] === 'egg') { code = args.slice(3, args.length); category = args[1]+" "+args[2]; }
        code = code.slice(0, code.lastIndexOf('-d'))
        var description = args.slice(args.lastIndexOf("-d")+1, args.length).join(' ').replace(/'/g, "\\'")

fs.writeFile(`./commands/${args[0]}.js`,
            `module.exports = {
    name: '${args[0]}',
    description: '${description}',
    category: '${category}',
    execute: async (client, config, Discord, target, utils, message, args) => {
        ${code.join(' ')}
    },
}`
            , function (err) {
                if (err) throw err;
                message.channel.send('Saved! Here\'s the file:', { files: [`./commands/${args[0]}.js`] })
                var meme = require(`./${args[0]}.js`)
                client.commands.set(args[0], meme)
            });
            
            }
    },
}