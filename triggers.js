module.exports = {
    name: 'triggers',
    description: 'Current list of autoresponses (will probably make this better some day, idk)',
    category: "general",
    execute: async (client, config, Discord, target, utils, message, args) => {
       message.channel.send(`\`\`\`CURRENT AUTORESPONSES\`\`\`
\`normal triggers\` - a, nothing, no u, t!daily, claps, it's, this is america, rawr, des, despa, thanos car
       
\`if the sentence starts with it\` - like if
       
\`can be included in any sentence\` - fix hitomibot, jeff, hola
       
**SPECIAL TRIGGERS:**
\`alexa play (anything)\` - sends a random song
       
**To disable autorresponses in an specific channel, add "{shut up, hitomi}" to the channel description**
`)
    },
}