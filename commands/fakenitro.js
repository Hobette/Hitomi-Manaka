const generateCharacters = () => Math.random().toString(36).substr(2, 8).split("").map(v => Math.random() > Math.random() ? v : v.toUpperCase()).join("");
const formatLink = () => "https://discord.gift/" + generateCharacters() + generateCharacters();

module.exports = {
    name: 'fakenitro',
    description: 'Generates a fake nitro gift link. Credits to **y21#0909** for the help',
    category: 'fun',
    execute: async (client, config, Discord, target, utils, message, args) => {
        let links = parseInt(args[0]) || 1;
        if (links > 5) links = 5;
        if (links < 1) links = 1;
        message.channel.send(new Array(links).fill(null).map(() => formatLink()).join(" "));
    },
}
