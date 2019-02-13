module.exports = {
    name: 'bee',
    description: 'Writes a sentence made out of words taken from the bee movie script',
    category: 'fun',
    execute: async (client, config, Discord, target, utils, message, args) => {
	var fileName = "./util/random/bee.txt"
        if (args[0] === "movie") { message.channel.send({files: [fileName]}) } else {
        var text = utils.fs.readFileSync(fileName).toString();
        var words = text.split(/[\s\n-]+/g)
	
        var amountofwords = Math.floor(Math.random() * 25) + 5
        var sentence = []
        for (i = 0; i < amountofwords; i++) {
            
            sentence.push(utils.random(words)())
        }
        sentence = utils.firstLetterUppercase(sentence.join(' '))
        message.channel.send("🐝 ~ " + sentence)
    }
    },
}