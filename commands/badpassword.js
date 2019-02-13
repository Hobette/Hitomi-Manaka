module.exports = {
    name: 'badpassword',
    aliases: ['bp'],
    description: 'Shows a random password that is banned in the NPM website (there are 6164 lol)\nYou can also check if a password is on that list',
    usage: "[optional: text (to check if it's on the list)]",
    insensitive: true,
    category: 'h',
    execute: async (client, config, Discord, target, utils, message, args) => {
        var passwords = utils.fs.readFileSync("./util/random/badpasswords.txt").toString().toLowerCase().split("\n")
        if (!args[0]) return message.channel.send(utils.random(passwords)())
        message.channel.send(utils.yesNo(passwords.includes(args[0]), "Gratz, you found a banned password.","That password is not banned on NPM."))
    },
}