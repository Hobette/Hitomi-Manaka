module.exports = {
    name: 'fakenitro',
    description: 'Generates a fake nitro gift link',
    category: 'fun',
    execute: async (client, config, Discord, target, utils, message, args) => {
        const e = () => Math.random().toString(36).substr(2,6).split("").map(v=> Math.random() > Math.random() ? v : v.toUpperCase()).join("");
const f = () => e() + e() + e() + e();
new Array(parseInt(args[0]) || 1).fill(null).map(v => `​https://discord.gift/${f()}`​)
    },
}
