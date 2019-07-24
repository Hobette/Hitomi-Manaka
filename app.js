//hie
var utils = require("./utils.js")
var Discord = require("discord.js");
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
    var playgame = utils.random(require("./util/data holders/siivagunner.json").map(e => e.name.slice(5)))()
    client.user.setActivity(`${playgame} | hi!help | In ${client.guilds.size} servers with ${client.users.size} amazing people.`, { type: "LISTENING" })
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

    if (blacklist.guilds.includes(guild.id)) {
        hibye.send(`\`\`\`asciidoc
⚠ left blacklisted guild [${guild.id}] ⚠\`\`\``)
    }

    else {
        hibye.send(`<:angr:468795068698984458> I left a server grr
\`\`\`markdown
+ NAME: ${guild.name}
- ID: ${guild.id}
+ OWNED BY: ${sowner.tag} (${guild.ownerID})
- MEMBERS: ${guild.memberCount} (${shumans} humans/${guild.memberCount - shumans} bots)\`\`\`
__I'm now at a total of **${client.guilds.size}** servers with **${client.users.size}** cool persons__`)
    }
    randgame()
});

//event that adds the server to the guild settings file
client.on("guildCreate", guild => {
    if (utils.settings[guild.id] !== undefined) return;
    utils.setDefaultSettings(guild.id)
})
//Snipe event
client.on("messageDelete", (message) => {
    if (message.channel.type === 'dm' || message.author.bot || message.system || utils.checkCommand(message.content, "name") === "snipe" ||  utils.checkCommand(message.content, "name") === "confess") return;

    var snipes = require("./util/data holders/snipe.json")
    var msg = message.content.replace(/discord.gg\/[0-9A-Za-z]+/g, "[BAD SERVER]")
    var hh
    if (message.member.colorRole !== null && message.member.colorRole.color > 0) { hh = message.member.colorRole.hexColor }

    if (message.attachments.size == 1) { msg = msg + `\n\`[ 1 attachment ]\`` }
    if (message.attachments.size > 1) { msg = msg + `\n\`[ ${message.attachments.size} attachments ]\`` }
    if (msg == "") return;
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
    member.addRoles([utils.settings[member.guild.id].botRole], "botRole is enabled.").catch((error) => member.guild.me.lastMessage.channel.send("Something happened while adding the role to the bot: " + error))
})

client.on("message", async (message) => {
    if (message.channel.type === 'dm') return;
    if (blacklist.guilds.includes(message.guild.id)) return message.guild.leave()
    var prefix = utils.checkCommand(message.content, "prefix")

    if (!utils.checkCommand(message.content, true) || message.author.bot) return undefined;

    if (blacklist.users.includes(message.author.id) || blacklist.guilds.includes(message.guild.id)) return undefined;


    var args = utils.checkCommand(message.content, "args")
    var commandName = utils.checkCommand(message.content, "name")

    var target
    if (!args[0]) { target = message.author } else {
	
        if (client.users.get(args[0].replace(/[^0-9]/g, "")) !== undefined) { target = client.users.get(args[0].replace(/[^0-9]/g, "")); } else
        if (args[0] === "@someone") { target = message.guild.members.random().user } else

            if (message.guild.members.find(g => g.user.tag.toLowerCase().includes(utils.unvaporwave(args.join(' ')))) !== null) {
                target = message.guild.members.find(g => g.user.tag.toLowerCase().includes(utils.unvaporwave(args.join(' '))));
                target = target.user
            } else { target = message.author }
    }

    const command = client.commands.get(commandName)
        || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
    if (!command) return;

    if (command.category === 'dbots' && message.guild.id !== '110373943822540800') return;
    if (command.category === 'lgtb' && message.guild.id !== '348937971409485857') return;
    //for the guild exclusive commands

    if (command.insensitive == true && args.length != 0) { args = args.join(' ').toLowerCase().split(' ') }
    //converts args to lowerCase in commands that have this enabled


    var isOwner = message.author.id === config.ownerID || message.author.id === "401398653236936706";
    if (command.name === "despacito" && !isOwner) return message.channel.send('https://genius.com/songs/2955220')
    if (command.category === "owner" && !isOwner) return;
    if (command.category === "wip" && !isOwner) return message.channel.send("WIP command, sorry.");

    if (command.category !== "owner") args = args.join(" ").replace(/discord.gg\/[0-9A-Za-z]+/g, "discord.gg/[CRINGE SERVER]").replace(utils.racistRegex, ":heart:").split(" ")
    //replaces any invite or racist/homophobic word in any command that uses args


    command.execute(client, config, Discord, target, utils, message, args)
        .catch((error) => {
            message.channel.send(`\`Beep boop error!\`
\`\`\`xl\n${error}\`\`\`Please report this error to my dev either using \`hi!feedback\`, joining my support server or DMing me.`);
        })
});

client.on("messageUpdate", async (oldMsg, newMsg) => {
    if (newMsg.channel.type === 'dm' || oldMsg.content === newMsg.content || newMsg.author.bot) return; 
    if (utils.checkCommand(newMsg.content, true) && utils.settings[newMsg.guild.id].allowEdits === true) { client.emit("message", newMsg) }
});

//DM logging
client.on("message", async (message) => {
    if (message.channel.type === "dm") {
        if (message.author.bot || blacklist.users.includes(message.author.id)) return;
        if (message.content.toLowerCase().includes("discord.gg/")) return message.channel.send("Please stop sending server invites, that's not how bots work. Use `hi!invite` instead.")
        if (utils.checkCommand(message.content, "prefix")) return message.channel.send("I'm not made to work in the DMs, please use me in a guild.")
        var attachments = ""
        if (message.attachments.size > 0) {
            attachments = `Attachments: ` + message.attachments.map(a => `||${a.url}||`).join("\n")
        }
        message.channel.send("Your message has been sent to a private channel in my support server (attachments are sent too btw)").then(msg=>msg.delete(10000))
        if (message.content === "") { message.content = "[no content]" }
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
        trigger.includes(".iam") ||
        trigger.includes("?role")
    ) && message.member.roles.has("350261118511611914")) {
        message.reply("that's not how it works! You need to see the roles at <#349120132674748418> and ping a moderator or a verification helper in order to tell them the roles you want so they can verify you. One of these roles must be a sexuality, these are at the top of the channel (and yes, your *actual* sexuality, although you can also keep it as a secret or say you're unsure. Or that you just don't label yourself)")
    }

    if (trigger.includes("owned")) {
        if (message.channel.parent !== null && message.channel.parent.id === '435875849670098944') return;
        var owned = message.guild.channels.find(e => e.name === "owned-logs")
        if (owned !== null && message.channel !== owned) return owned.send(`***${message.author.tag}*** OWNED!!!!!!!!!!!!!!!!!!`)
    }//OWNED!!!!!!!!!!!!!

    if (utils.settings[message.guild.id].nWordTaxes === true && !message.author.bot) {
        var raciststuff = trigger.match(utils.racistRegex)
        if (raciststuff !== null) return utils.eco.SubstractFromBalance(message.author.id, 15)
    }

})

//client.on("guildMemberUpdate")






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

    if (message.content.startsWith("t!") && message.content.toLowerCase().startsWith("t!daily")) {
        message.channel.send(message.guild.members.has("172002275412279296") ? "Hello <@172002275412279296>" : message.channel.send("what"))
    }
    
    var triggers = {
        "no u": `Wow, what an original comeback ${message.author}`,
        "a": `a`,
        "nothing": `*seinfeld bass line*`,
        "it's": `It's`,
        "cg": `coconut gun`,
        "des": `cito`,
        "despa": `stop`,
        "rawr": `xd`,
        "thanos car": message.content,
        "he's quick": `and nimble`,
        "and quick": `and nimble`,
        "and nimble": `and quick`
    }

    if (triggers[trigger] != undefined && message.guild.me.permissionsIn(message.channel).has("SEND_MESSAGES")) { 
        /*
        console.log("========================================================================================")
        console.log(`                                                              trigger : ${trigger}`)
        console.log(`                                                    triggers[trigger] : ${triggers[trigger]}`)
        console.log(`                                   utils.unvaporwave(message.content) : ${utils.unvaporwave(message.content)}`)
        console.log(`                                      triggers[trigger].toUpperCase() : ${triggers[trigger].toUpperCase()}`)
        console.log(`            utils.unvaporwave(message.content).replace(/[^a-z]/g, "") : "${utils.unvaporwave(message.content).replace(/[^a-z]/g, "")}"`)
        console.log(`utils.unvaporwave(message.content).replace(/[^a-z]/g, "").length == 0 : ${utils.unvaporwave(message.content).replace(/[^a-z]/g, "").length == 0}`)
        */ //i was debugging stuff lol
        message.channel.send(utils.unvaporwave(message.content).replace(/[^a-z]/g, "").length == 0 ? triggers[trigger].toUpperCase() : triggers[trigger])
     }
     var a = trigger.match(/^(thanks|thank you|ty),?( for nothing|) hitomi *?(manaka|bot|babe|butt|bastard|)$/ig)

     if (a !== null && a[0] === trigger) { message.channel.send("what") }

    if (trigger.includes("fix hitomibot")) {
        message.react('473450929895636993');
    }
    if (trigger.includes("jeff") && utils.checkCommand(message.content, "name") !== "jeff") {
        message.react('😍');
    }
    if (trigger.includes("hola")) {
        message.react('🌊');
    }
    if (trigger.includes("trans rights")) {
        message.react('361930686552342538');
    }
});

client.login(config.token);
