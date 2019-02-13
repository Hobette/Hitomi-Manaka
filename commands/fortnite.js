module.exports = {
    name: 'fortnite',
    description: 'https://www.youtube.com/watch?v=CZi7UUB9QRk',
    category: 'meme',
    execute: async (client, config, Discord, target, utils, message, args) => {
        var phrase = `naive or naive or 9 49 49 49 49 49 49 nyuk nyuk nyuk nyuk
Horton Horton Horton Horton Horton aye 49 49 49 49 49 49 49
Horton Horton 949 49 49 49 49 49 49 Horton Horton Horton Horton
for tonight for tonight for tonight for tonight for
Horton I 49 49 49 49 49 fortnight Courtney Courtney Courtney Courtney 
Courtney Courtney Courtney Courtney Courtney 
tonight for tonight 49 49 49 49 49 49 49 49 49 49 49 4949 49 49 49
Courtney Courtney Courtney Courtney for tonight for tonight 49
Courtney Courtney Courtney Courtney Hort 49 49 49 49 49 49 49 49 49 49 49 49 49
Horton Horton Horton Horton Horton Horton Horton Horton Horton
nyuk nyuk nyuk nyuk nyuk nyuk nyuk nyuk nyuk
naive or naive or naive or naive or naive or naive or naive or 9
dah is rewind time if I control rewind I would one for naive or naive or`.split("\n")

message.channel.send(utils.random(phrase)())
    },
}