module.exports = {
    name: 'scallop',
    description: 'Shows a random quote from Pascal (most of them come from Animal Crossing: New Leaf',
    category: 'fun',
    execute: async (client, config, Discord, target, utils, message, args) => {
        var quotes = utils.fs.readFileSync("./util/random/pascal.txt").toString().split("\n")
message.channel.send(utils.random(quotes)())
    },
}