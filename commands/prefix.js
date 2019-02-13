module.exports = {
    name: 'prefix',
    description: 'Shows my current global prefixes',
    category: "general",
    
    execute: async (client, config, Discord, target, utils, message, args) => {
        var prefixes = require('../util/data holders/prefixes.json')
        message.channel.send(`Current prefixes:
\`\`\`- ${prefixes.join(`
- `)}
(pls don't include the "-")
\`\`\``)
    },
}