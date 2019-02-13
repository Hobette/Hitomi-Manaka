module.exports = {
    name: 'baldi',
    description: 'Don\'t forget fun!',
    category: 'meme',
    execute: async (client, config, Discord, target, utils, message, args) => {
	if (Math.floor(Math.random() * 100) < 5) return message.channel.send(utils.embedImage("https://baldis-basics-in-education-and-learning.wikia.com/wiki/File:472e3e17e403ee63fd4347ad0a77b274_original.png"))
        message.channel.send (utils.random(["Yum!", "Historicality", "A", "12?46"])())
    },
}//https://baldisbasics.wikia.com/wiki/Baldi?li_source=LI&li_medium=wikia-rail