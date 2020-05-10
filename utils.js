var prefixes = require('./util/data holders/prefixes.json')
var Discord = require("discord.js")
module.exports = {
    //modules
    fs: require('fs'),
    random: require("unique-random-array"),
    get: require("node-fetch"),
    eco: require("discord-economy"),
    settings: require("./util/data holders/guildsettings.json"),
    weeb() {
        const nekoclient = require('nekos.life');
        const { sfw } = new nekoclient();

        return sfw;
    },

    //Other stuff
    racistRegex: /nig(g|)(a|er)|fag(|got|ger|git)|kys|trann(y|ies)/gi,
    inviteRegex: /(http:\/\/|https:\/\/)?(?:discord(?:(?:.|.?dot.?)(?:gg|me|li|to|link)|app(?:.|.?dot.?)com\/invite)|(invite|disco)(?:.|.?dot.?)gg)\/[\da-z]+/,
    idRegex: /[^0-9]/g,

    //text
    normaltext: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ 0123456789.?!,:;\"'-_+%=$*(){}[]<>|/~\\@&%£#".split(''),
    vaportext: "ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ　０１２３４５６７８９．？！，：；＂＇－＿＋％＝＄＊（）｛｝［］＜＞｜／～＼＠＆％￡＃".split(''),

    //functions
    unvaporwave(text) {
        try {
            if (typeof text !== "string") { throw "(text) must be a string, nerd" }
            var letters = this.normaltext
            var wp = this.vaportext
            return text.split('').map(i => wp.includes(i) ? letters[wp.indexOf(i)] : i).join("")
        } catch (error) { console.log(error) }
    },

    unemojify(text) {
        return text.replace(/🅱/g, "b").replace(/🅾/g, "o").replace(/🅰/g, "a")
    },

    checkCommand(text) {
        try {
            if (typeof text !== "string") { throw "Both text and output must be strings" }

            if (text.split("").filter(t => this.vaportext.includes(t)) !== []) { text = this.unvaporwave(text) }
            //allows usage of vaporwave letters in autoresponses, but only executes the unvaporwave function if the message contains any 

            let prefix = false;
            for (const thisPrefix of prefixes) {
                if (this.unemojify(text.toLowerCase()).startsWith(thisPrefix)) prefix = thisPrefix;
            }

            if (!prefix) return;

            var args = text.slice(prefix.length).trim().split(/ +/g);
            var commandName = this.unemojify(args.shift().toLowerCase());
 
            

            return {
                args,
                name: commandName, //will display the command name OR the alias used (if any)
                prefix,
                command: prefix+commandName, //not only displays the command's name, but also the used prefix
                fulltext: text
            } 

            /* 
             * reason and targets are used for commands like ban or kick which accept multiple targets
             * for example: hi!kick [user1] [user2] [reason]
             * non number characters are removed from the targets to turn mentions into plain user IDs
            */
            
        }
        catch (error) { console.log(error) }
    },

    multitarget(args) {
        if (!typeof(args) == "array") return;
        args.push("")
        var targets = args.concat("").map(a => a.replace(/[^0-9]+/g, ""))
            targets = targets.slice(0, targets.indexOf(""))
        var reason = args.slice(targets.length, args.length).join(" ")
        if (!reason[0]) { reason = "(no reason set)"}
        return {
            targets: [...new Set(targets)],
            reason,
        }
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
        var embed = new Discord.RichEmbed()
            .setImage(zelda)
        return embed
    },

    firstLetterUppercase(string) {
        return string = string.replace(string[0], string[0].toUpperCase())
    },

    vaporwavecolor() {
        var r = (Math.round(Math.random() * 127) + 127).toString(16);
        var g = (Math.round(Math.random() * 127) + 127).toString(16);
        var b = (Math.round(Math.random() * 127) + 127).toString(16);
        return '#' + r + g + b;
    }
}
