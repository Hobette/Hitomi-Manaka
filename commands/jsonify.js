module.exports = {
    name: "jsonify",
    description: "Returns the given args in a format that Mama can use to implement some files",
    category: "owner",
    usage: "(links or whatever)",
    execute: async (client, config, Discord, target, utils, message, args) => {

        
            message.author.send(`\`\`\`    "${args.join(`\", 
    \"`)}"\`\`\``);
        

    }
}