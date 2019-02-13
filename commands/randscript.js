module.exports = {
    name: 'randscript',
    description: 'Sends a text file with a random ad/song/video script',
    category: "fun",
    execute: async (client, config, Discord, target, utils, message, args) => {
        //this contains all names from every script. I have to add each one manually when an script is added
        var scriptlist = utils.fs.readdirSync('../util/randscript')
          message.channel.send({files:[`./util/randscript/${utils.random(scriptlist)()}`]})
    },
}