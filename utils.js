module.exports = {
    //modules
    fs: require('fs'),
    random: require("unique-random-array"),
    get: require("node-fetch"),
    eco: require("discord-economy"),
    settings: require("./util/data holders/guildsettings.json"),

    //Other stuff
    racistRegex: /n[\w\W]+gg[\w\W]+|f[aA\W*-_0-9]gg[\w\W]+|f[aA\W*-_0-9]g|kys/gi,
    inviteRegex: /discord.gg\/[0-9A-Za-z]+/g,
    idRegex: /[^0-9]/g,

    //functions
    unvaporwave: function (text) {
        try {
        if (typeof text !== "string") { throw "(text) must be a string, nerd"}
        var letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ 0123456789.?!,:;\"'-_+%=$*(){}[]<>|/~\\@&%£#"
        letters = letters.split('')
        var wp = "ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ　０１２３４５６７８９．？！，：；＂＇－＿＋％＝＄＊（）｛｝［］＜＞｜／～＼＠＆％￡＃"
        wp = wp.split('')
        text = text.split('')
        for (i = 0; i < text.length; i++) {
            if (wp.includes(text[i])) {
                text[i] = letters[wp.indexOf(text[i])]
            }
        }
        return text.join('')
        } catch (error) { console.log(error) }
    }, 

    checkCommand: function (text, output) {
        try {
        if (typeof text !== "string") {throw "Both text and output must be strings"}
        const utils = require("./utils.js")
        var prefixes = require('./util/data holders/prefixes.json')
        let prefix = false;
        for (const thisPrefix of prefixes) {
            if (utils.unvaporwave(text.toLowerCase()).startsWith(thisPrefix)) prefix = thisPrefix;
        }
        if (utils.unvaporwave(text.toLowerCase()).startsWith(prefix)) {
            var args = text.slice(prefix.length).trim().split(/ +/g);
            args = utils.unvaporwave(args.join(' ')).split(' ')
            var commandName = args.shift().toLowerCase();
            commandName = utils.unvaporwave(commandName)
            //this allows to use commands with full-width chars 
            for (i = 0; i < args.length; i++) {
                args[i] = args[i].replace(/discord.gg\/[0-9A-Za-z]+/g, "discord.gg/[CRINGE SERVER]").replace(this.racistRegex, ":heart:")
            }    
            //replaces any invite or racist/homophobic word in any command that uses args
            if (output === "prefix") {
                return prefix;
            } else
            if (output === "name") {
                return commandName;
            } else 
            if (output === "args") {
                return args;
            } else
            if (output === "command") {
                return prefix+commandName;
            } else return output;
        } else return false
    } catch (error) { console.log(error) }
    },
    setDefaultSettings: function (guildid) {
        this.settings[guildid] = this.settings["default"]
        this.fs.writeFile('./util/data holders/guildsettings.json', JSON.stringify(this.settings, null, 2), function (error) {
            if (error) {
                return console.log(error)
            }
        })
    },
    embedImage: function (zelda) {
        const Discord = require("discord.js")
        var embed = new Discord.RichEmbed()
            .setImage(zelda) 
        return embed
    },

    firstLetterUppercase: function (string) {
        return string = string.replace(string[0], string[0].toUpperCase())
    },
    yesNo: function (bool, trueString, falseString) {
        if (typeof bool !== "boolean") throw "First argument on the function must be either true or false";
        return bool.toString().replace("true", trueString).replace("false", falseString);
     }}