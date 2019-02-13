module.exports = {
    name: 'shuffle',
    description: 'Randomizes the order of your arguments',
    usage: '(text)',
    category: "text",
    execute: async (client, config, Discord, target, utils, message, args) => {
        var h = args
        var output = [];
        var z = h.length;
        for (var i = 1; i <= z; i++) {
            var r = Math.floor(Math.random() * h.length);
            output.push(h[r]);
            h.splice(parseInt(r), 1);
        }
        message.channel.send(output.join(" "))
    },
}