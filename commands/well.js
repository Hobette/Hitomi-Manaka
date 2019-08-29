module.exports = {
    name: 'well',
    description: '**Item #:** [SCP-245](http://www.scp-wiki.net/scp-245)\n\n**Object Class:** Safe',
    category: 'fun',
    execute: async (client, config, Discord, target, utils, message, args) => {
        message.channel.send("Would you like to throw a coin down the well?");
        const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 10000 });

        collector.on('collect', message => {
            var response = utils.unvaporwave(message.content.toLowerCase())
            if (response == "yes") {
                message.channel.send("Well. Now you've lost a coin. What did you think was going to happen?");
            } else if (response == "no") {
                message.channel.send("A penny saved is a penny earned. Just kidding. You get nothing.");
            }
        })
    },
}
