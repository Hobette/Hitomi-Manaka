module.exports = {
    name: 'crab',
    description: '🦀 CONVERTS YOUR TEXT INTO A DEAD (YET STILL COOL) MEME 🦀',
    usage: '(🦀 TEXT 🦀)',
    category: "text",
    execute: async (client, config, Discord, target, utils, message, args) => {
        if (!args[0]) {
            message.channel.send('🦀 I NEED ARGS! 🦀');
        } else
            if (args[0] === 'monky') {
                message.channel.send('🐒 SO BASICALLY, IM MONKY 🐒');
            } else
            if (args[0] === 'rave') {
                message.channel.send('<a:crabRave:524653786871103499>');
            } else
                message.channel.send(`🦀 ${args.join(' ').toUpperCase()} 🦀`);
    },
}