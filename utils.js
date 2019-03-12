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
    unvaporwave(text) {
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

    checkCommand(text, output) {
        try {
        if (typeof text !== "string") {throw "Both text and output must be strings"}
        var prefixes = require('./util/data holders/prefixes.json')
        let prefix = false;
        for (const thisPrefix of prefixes) {
            if (this.unvaporwave(text.toLowerCase()).startsWith(thisPrefix)) prefix = thisPrefix;
        }
        if (this.unvaporwave(text.toLowerCase()).startsWith(prefix)) {
            var args = text.slice(prefix.length).trim().split(/ +/g);
            args = this.unvaporwave(args.join(' ')).split(' ')
            var commandName = args.shift().toLowerCase();
            commandName = this.unvaporwave(commandName)
            //this allows to use commands with full-width chars 
	 
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
            } else 
            if (output === "multitarget") {
                args.push("")
                var victims = args.map(a => a.replace(/[^0-9]+/g, ""))
	            victims = victims.slice(0, victims.indexOf(""))
	            var reason = args.slice(victims.length, args.length)
                if (!reason[0]) { reason = "None." } else { reason = reason.join(" ") }
            return { "victims": victims, "reason": reason}
            } else return output;
        } else return false
    } catch (error) { console.log(error) }
    },
    
    setDefaultSettings(guildid) {
        this.settings[guildid] = this.settings["default"]
        this.fs.writeFile('./util/data holders/guildsettings.json', JSON.stringify(this.settings, null, 2), function (error) {
            if (error) {
                return console.log(error)
            }
        })
    },
  
    embedImage(zelda) {
        const Discord = require("discord.js")
        var embed = new Discord.RichEmbed()
            .setImage(zelda) 
        return embed
    },

    firstLetterUppercase(string) {
        return string = string.replace(string[0], string[0].toUpperCase())
    },
    
    yesNo(bool, yes, no) {
        if (typeof bool !== "boolean") throw "First argument on the function must be either true or false";
        if (!bool) return no;
        return yes;
     }
}
