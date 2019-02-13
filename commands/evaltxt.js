module.exports = {
    name: 'evaltxt',
    aliases: ["evaltext"],
    description: 'Same as eval but returns a text file',
    category: "owner",
    usage: "(javascript code)",
    execute: async (client, config, Discord, target, utils, message, args) => {
            try {
                const fs = utils.fs
                const code = args.join(" ");
                let evaled = eval(code);

                if (typeof evaled !== "string")
                    evaled = require("util").inspect(evaled);

                fs.writeFile(`util/temp/eval.txt`, evaled,
                    function (err) {
                        if (err) throw err;
                        message.channel.send({ files: [`./util/temp/eval.txt`] })
                    })
            } catch (err) {
                message.channel.send(`\`ERROR\` \`\`\`xl\n${err}\n\`\`\``);
            }
        
    }
}