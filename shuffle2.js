module.exports = {
    name: 'shuffle2',
    description: 'Shuffles letters',
    usage: '(text)',
    category: "text",
    execute: async (client, config, Discord, target, utils, message, args) => {
        var h = args.join(' ')
        h = h.split('')
        var output = [];
        var z = h.length;
        for (var i = 1; i <= z; i++) {
            var r = Math.floor(Math.random() * h.length);
            output.push(h[r]);
            h.splice(parseInt(r), 1);
        }
        message.channel.send(output.join(""))
    },
}