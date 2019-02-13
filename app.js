//hie
var utils = require("./utils.js")
const Discord = require("discord.js");
const client = new Discord.Client({
    disableEveryone: true,
    disabledEvents: [
        "TYPING_START"
    ]
});
client.commands = new Discord.Collection();
const commandFiles = utils.fs.readdirSync('./commands/').filter(file => file.endsWith('.js')); 

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    // set a new item in the Collection
    // with the key as the command name and the value as the exported module
    client.commands.set(command.name, command);
}

const config = require("./config.json");
var blacklist = require("./util/data holders/blacklist.js")

    function randgame() {
/*
        var games = utils.fs.readFileSync("./util/random/games.txt").toString().split("\n")
        var playgame = games[Math.floor(Math.random() * games.length)]
        client.user.setActivity(`${playgame} | hi!help | In ${client.guilds.size} servers with ${client.users.size} amazing people.`);
*/
        var playgame = utils.random(require("./util/data holders/siivagunner.json").map (e => e.name.slice(5)))()
        client.user.setActivity(`${playgame} | hi!help | In ${client.guilds.size} servers with ${client.users.size} amazing people.`, {type: "LISTENING"})
    }
client.on("ready", () => {
    console.log(`
Ohayo!!`);
    randgame()
    //client.user.setActivity("UNder maintenance, pls stand by")
});

client.on("guildCreate", guild => {
    const hibye = client.channels.get('443441620659077130') //the hitomi-hibye channel
    const sowner = client.users.get(guild.ownerID)
    const shumans = guild.members.filter(member => !member.user.bot).size; 

    if (blacklist.guilds.includes(guild.id)) { guild.leave(); } else {
    if (utils.settings[guild.id] === undefined) guild.owner.send("Hello, my nam HitomiBot, and my main prefix (I have more than one) is `hi!`. I hope you have fun with me!\n(btw, you can disable my autoresponses by adding `{shut up, hitomi}` to the channel topic or globally in the server by doing `hi!set disableAutoresponses true`)")

        hibye.send(`<:happ:468794941162651658> Hey, new server
\`\`\`markdown
+ NAME: ${guild.name}
- ID: ${guild.id}
+ OWNED BY: ${sowner.tag} (${guild.ownerID})
- MEMBERS: ${guild.memberCount} (${shumans} humans/${guild.memberCount - shumans} bots)\`\`\`
__I'm now at a total of **${client.guilds.size}** servers with **${client.users.size}** cool persons__`);
        randgame()
    }
});

client.on("guildDelete", guild => {
    const hibye = client.channels.get('443441620659077130') //the hitomi-hibye channel
    const sowner = client.users.get(guild.ownerID)
    const shumans = guild.members.filter(member => !member.user.bot).size;

    if (blacklist.guilds.includes(guild.id)) { hibye.send(`\`\`\`asciidoc
⚠ left blacklisted guild [${guild.id}] ⚠\`\`\``) }

    else { hibye.send(`<:angr:468795068698984458> I left a server grr
\`\`\`markdown
+ NAME: ${guild.name}
- ID: ${guild.id}
+ OWNED BY: ${sowner.tag} (${guild.ownerID})
- MEMBERS: ${guild.memberCount} (${shumans} humans/${guild.memberCount - shumans} bots)\`\`\`
__I'm now at a total of **${client.guilds.size}** servers with **${client.users.size}** cool persons__`) }
    randgame()
});

//event that adds the server to the guild settings file
client.on("guildCreate", guild => {
    if (utils.settings[guild.id] !== undefined) return;
    utils.setDefaultSettings(guild.id)
})
//Snipe event
client.on("messageDelete", (message) => {
    if (message.channel.type === 'dm') return;

    if (message.author.bot) return;
    var snipes = require("./util/data holders/snipe.json")
    var msg = message.content.replace(/discord.gg\/[0-9A-Za-z]+/g, "[BAD SERVER]")
    var hh
    if (message.member.colorRole !== null) { hh = message.member.colorRole.hexColor }
    
    if (message.attachments.size == 1) { msg = msg+`\n\`[ 1 attachment ]\``}
    if (message.attachments.size > 1) { msg = msg+`\n\`[ ${message.attachments.size} attachments ]\``}
    snipes[`${message.channel.id}`] = [`${msg}`, `${message.author.id}`, `${hh}`]

    var fs = require('fs');
    var fileName = './util/data holders/snipe.json';
    fs.writeFile(fileName, JSON.stringify(snipes, null, 2), function (error) {
      if (error) {
        return console.log(error)
      }
    })
  });

  client.on("guildMemberAdd", member => {
      if (utils.settings[member.guild.id].botRole === 'none') return;
      if (!member.user.bot) return;
      if (!member.guild.me.hasPermission("MANAGE_ROLES")) return member.guild.me.lastMessage.channel.send("This guild has `botRole` enabled, but I'm missing permissions to manage roles. Please ping a staff member if you see this message.")
      member.addRoles([utils.settings[member.guild.id].botRole], "botRole is enabled.").catch((error) => member.guild.me.lastMessage.channel.send("Something happened while adding the role to the bot: "+error))
  })

  /*
client.on("messageReactionAdd", async (reaction, user) =>{
    if (reaction.message.channel.id === "537721627899854858") {
        var userr = client.guilds.get("348937971409485857").members.get(user.id)
        userr.kick("They shouldn't have pressed the button")
        client.channels.get('537721627899854858').overwritePermissions(user.id, {"VIEW_CHANNEL": false})
        client.channels.get('537732155220951050').overwritePermissions(user.id, {"VIEW_CHANNEL": true})
    }
})
  */
client.on("message", async (message) => {
    if (message.channel.type === 'dm') return;
    if (blacklist.guilds.includes(message.guild.id)) return message.guild.leave()


    const Discord = require("discord.js");
    var prefix = utils.checkCommand(message.content, "prefix")

    if (!utils.checkCommand(message.content, true) || message.author.bot) return undefined;

    if (blacklist.users.includes(message.author.id) || blacklist.guilds.includes(message.guild.id)) return undefined;

  
    var args = utils.checkCommand(message.content, "args")
    var commandName = utils.checkCommand(message.content, "name")

    var target
    if (!args[0]) { target = message.author } else {
    
        if (client.users.get(args[0].replace(/[^0-9]/g, "")) !== undefined) { 
            target = client.users.get(args[0].replace(/[^0-9]/g, ""));
        } else
        if (message.guild.members.find(g => g.user.tag.toLowerCase().includes(utils.unvaporwave(args.join(' ')))) !== null) {
            target = message.guild.members.find(g => g.user.tag.toLowerCase().includes(utils.unvaporwave(args.join(' '))));
            target = target.user
        } else { target = message.author }
    }

    const command = client.commands.get(commandName)    
        || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
        if (!command) return;

        if (command.category === 'dbots' && message.guild.id !== '110373943822540800') { return; } else 
        if (command.category === 'lgtb' && message.guild.id !== '348937971409485857') { return; } else 
        //for the guild exclusive commands

        if (command.insensitive == true && args.length != 0) { args = args.join(' ').toLowerCase().split(' ') } 
        //converts args to lowerCase in commands that have this enabled

        if (command.name === 'despacito' && message.author.id !== config.ownerID) {
            message.channel.send('https://genius.com/songs/2955220')
        } else

        var isOwner = false;
        if (message.author.id === config.ownerID) { isOwner = true; }
        if (command.category === "owner" && isOwner == false) return;
        if (command.category === "wip" && isOwner == false) return message.channel.send("WIP command, sorry.");

    try {
        command.execute(client, config, Discord, target, utils, message, args);
    }
    catch (error) {
        message.channel.send(`\`Beep boop error!\`
\`\`\`xl\n${error}\`\`\``);
    }     
});

client.on("messageUpdate", async (oldMsg, newMsg) => {
    if (newMsg.channel.type === 'dm') {return;} else

    if (utils.checkCommand(newMsg.content, true) && utils.settings[newMsg.guild.id].allowEdits === true) { client.emit("message", newMsg) }
    var command = utils.checkCommand(newMsg.content, "name")
    if (command !== "snipe") {
        oldMsg.content = "`[edited]` " + oldMsg.content
        client.emit("messageDelete", oldMsg)
    }    
});

//DM logging
client.on("message", async (message) => {
    if (message.channel.type === "dm") {
        if (message.author.bot || blacklist.users.includes(message.author.id)) return;
        if (message.content.toLowerCase().includes("discord.gg/")) return message.channel.send("Please stop sending server invites, that's not how bots work. Use `hi!invite` instead.")
        if (utils.checkCommand(message.content,"prefix")) return message.channel.send("I'm not made to work in the DMs, please use me in a guild.")
        var attachments = ""
        if (message.attachments.size > 0) {
            attachments = `Attachments: `+message.attachments.map(a => a.url) 
        }
        message.channel.send("Your message has been sent to my support server. All your messages will be send to a __private__ channel, and attachments are shown too. And no, editing messages won't work here.")
        if (message.content === "") {message.content = "[nothing lol]"}
        client.channels.get("537360925636952074").send(`**${message.author.tag} (${message.author.id})** said:
\`\`\`${message.content}\`\`\`
${attachments}`)
    }
})

client.on("message", (message) => {
    if (message.channel.type === 'dm') return;
    var utils = require("./utils.js")
    var trigger = utils.unvaporwave(message.content.toLowerCase())

    if (message.channel.id === "425796981999403032" && (
        trigger.includes("verify") ||
        trigger.includes(".iam")   ||
        trigger.includes("?role")  
    ) && message.member.roles.has("350261118511611914")) {
        message.reply("you need to see the roles at <#349120132674748418> and ping a moderator or a verification helper in order to tell them the roles you want so they can verify you (you need at least a sexuality role)")
    }
    
    if(trigger.includes("owned")) {
        if (message.channel.parent !== null && message.channel.parent.id === '435875849670098944') return;
        var owned = message.guild.channels.find(e => e.name === "owned-logs")
        if (owned !== null && message.channel !== owned) return owned.send(`***${message.author.tag}*** OWNED!!!!!!!!!!!!!!!!!!`)
    }//OWNED!!!!!!!!!!!!!
    
    if (utils.settings[message.guild.id].nWordTaxes === true && !message.author.bot) {
        var raciststuff = trigger.match(utils.racistRegex)
        if (raciststuff !== null) return utils.eco.SubstractFromBalance(message.author.id, 15)
    }
    
})
//autoresponse and misc stuff
client.on("message", (message) => {
    if (message.channel.type === 'dm') return;
    var utils = require("./utils.js")
    var trigger = utils.unvaporwave(message.content.toLowerCase())

    
    
    if (message.author.bot) return;
    if (utils.settings[message.guild.id].disableAutoresponses === true) return;
    if (message.channel.topic != null && message.channel.topic.includes("{shut up, hitomi}")) return;
    
    //allows vaporwave in autoresponses

    
    if (message.guild.id === "110373943822540800" || message.guild.id === "450100127256936458") return; //Discord Bots and Discord Bot List (.com)

    var triggerContent = {    
        "no u": [`Wow, what an original comeback ${message.author}`],
        "a": [`a`],
        "t!daily": [`Hello <@172002275412279296>`],
        "nothing": [`*seinfeld bass line*`],
        "it's": [`the`, `NUTSHACK`],
        "its": [`the`, `NUTSHACK`],
        "claps": [`clap clap clap`],
        "des": [`cito`],
        "despa": [`stop`],
        "rawr": [`xd`],
        "this is america": [`No this is ${message.guild.name}`],
        "thanos car": [message.content]
    }
    function plsSay(reactions) {
        for (i = 0; i< reactions.length; i++) {
            if (!message.guild.me.permissionsIn(message.channel).has("SEND_MESSAGES")) return;
             message.channel.send(reactions[i]).then()
        }
    }
    if (triggerContent[trigger] != undefined ) { plsSay(triggerContent[trigger]) }

    if (trigger.includes("fix hitomibot")) {
        message.react('473450929895636993');
    }
    if (trigger.includes("jeff")) {
        message.react('😍');
    }
    if (trigger.includes("hola")) {
        message.react('🌊')
    }
    if (trigger.startsWith("like if ")) {
        message.react('👍')
    }
    if (trigger.startsWith("alexa play ")) {
        if (!message.guild.me.permissionsIn(message.channel).has("SEND_MESSAGES"))return;
        var music = require("./util/random/music.json")
        message.channel.send(utils.random(music)())
    }
});

client.login(config.token);