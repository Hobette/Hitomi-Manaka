module.exports = {
    name: 'eval',
    description: 'I\'ll try to reproduce the code that Mama sends.',
    category: "owner",
    usage: "(javascript code)",
    execute: async (client, config, Discord, target, utils, message, args) => {
	var  ghosty = {
cute: true,
gender: null,
j: "shutdshutdfdtttfd"
}
	let cat = "cute";
	let amy = "cute";
	let eri = "cute";
	let tina = "gay";



            try {
                function clean(text) {
                    if (typeof (text) === "string")
                        return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
                    else
                        return text;
                }
                const code = args.join(" ");
                let evaled = eval(code);

                if (typeof evaled !== "string")
                    evaled = require("util").inspect(evaled);

                message.channel.send(clean(evaled), { code: "xl" });
            } catch (err) {
                message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
            }
        
    }
}