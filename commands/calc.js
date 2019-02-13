module.exports = {
    name: "calc",
    description: "Let's do some math together! (run hi!calc without args to see a guide on how to use it)",
    category: "utility",
    usage: "(javascript operation)",
    execute: async (client, config, Discord, target, utils, message, args) => {
        function clean(text) {
            if (typeof (text) === "string")
                return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
            else
                return text;
        }
        if (!args[0]) {
            message.channel.send(`**HOW TO USE hi!calc**
This command uses JavaScript syntax, so you might have to use different characters as operators. Here is all you need to keep in mind:
                                
 - To multiply numbers, use \`*\`
 - To divide numbers, use \`/\`
 - To write decimals, use a dot\`.\`, not a comma
 - As always, use \`+\` and \`-\` to add and substract, respectively
 - You're allowed to use parenthesis too
 - You can't use characters such as \`²\`, \`√\`, \`π\`
 - Use \`^\` to compare numbers (eg \`3^5=2\`, \`9^4=5\` and \`2^2=0\`
You can learn more about js operators at <https://www.w3schools.com/js/js_operators.asp>`)
        } else {
            var code = args.join(" ");
            code = code.replace(/[a-zA-Z]/g, "")
            try {
                let evaled = eval(code);

                if (typeof evaled !== "string")
                    evaled = require("util").inspect(evaled);

                message.channel.send(clean(evaled), { code: "xl" });
            } catch (err) {
                message.channel.send(`\`ERROR\` \`\`\`xl\n${err}\n\`\`\``);
            }
        }
    }
}