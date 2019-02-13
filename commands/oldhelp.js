module.exports = {
    name: 'oldhelp',
    description: 'It\'s basically my old help system.\nIdk why I keep it\nNote: I will NOT update this help command, so you might find old features that aren\'t avaiable anymore',
    usage: "(name of the category or none to see the categories)",
    category: "easter egg",
    execute: async (client, config, Discord, target, utils, message, args) => {
        if (!args[0]) {
            message.channel.send("**PLEASE SELECT A CATEGORY:** hi!help general/utility/fun/triggers/owner/mod/me")
        } else {   
        const hlang = {
    
        "general": `\`\`\`╔════╣    GENERAL/INFO COMMANDS    ╠════╗\`\`\`
 **- hi!help** haha yes
 **- hi!ping** check if I'm being lazy
 **- hi!prefix/util/prefixes** checks my current (global) prefixes
 **- hi!support** sends an invite to my server in the DMs (to avoid other bots deleting it in the server).
 **- hi!invite** allows you to invite me to your sexy despacito roblox server.
 **- hi!vote** please vote for my bot
 **- hi!stats** shows my server/member/etc count as well as my uptime
 **- hi!about** shows a boring text about me and Mama.
 **- hi!faq** get some info before asking anything
 **- hi!buymanga** wanna support the creator of the character this bot is bassed off? Use this command and buy his mangas 
 **- hi!feedback/suggest (text)** Suestions? Suggestions? Any issue you wanna report? Use this command and your message will be logged in my support server.
\`(WARNING: you can get blacklisted from using this command if you abuse this command for shitposting or making innapropiate feedbacks)\``,

        "utility": `\`\`\`╔════╣    UTILITY COMMANDS    ╠════╗\`\`\`
 **- hi!genoauth (mention or ID)** generates an invite link for the mentioned bot
 **- hi!emoji (emoji name)** sends the link for an emote
 **- hi!server (optional ID)** shows the server's info.
 **- hi!avatar/avy (optional @mention/user ID)** sends the avatar of the selected user or yours if there's no input
 **- hi!user (optional ID/mention)** shows an user's info
 **- hi!invitegen** generates a discord invite link made out of random characters (probably 99% of them won't work!)
 **- hi!dbots/dbl (text/mention/ID)** makes me search your text on Discord Bots (or Discord Bot List, respectively) and return you the results, or return a bot's profile
 **- hi!calc (operation)** calculates the given numbers. You need to use JavaScript syntax. You can use \`hi!calc\` without args for more info
 **- hi!jumpto (message ID)** creates a link to the given message.
 **- hi!encrypt/cypher/encode (text)** translates your text into caesar cipher
 **- hi!decrypt/decypher/decode (text)** translates back an encrypted text
 **- hi!unshorten (link)** converts a shortened link into a normal link
 **- hi!mp3 (youtube link)** converts your video into an audio file (buggy command)`,


        "fun": `\`\`\`╔════╣    FUN COMMANDS    ╠════╗\`\`\`
 **- hi!coin** self explanatory
 **- hi!sexuality** shows a random sexuality <:gay_sparkle_heart:449944488425553931>
 **- hi!gender** shows a random gender <:BlobTransgenderHeart:449279341654835221>
 **- hi!pronoundice** don't know what pronouns yould you like to use? Lemme choose for you!
 **- hi!randuser/util/randomuser (optional text)** chooses a random member from the server
 **- hi!reactions** shows a list of reaction commands that you can use in the chat
 **- hi!say/echo (text)** replaces your command with whatever you want me to say \`I need manage messages permission to do this\`
 **- hi!randscript/script** sends a text file with a random ad/song/video script
 **- hi!randemoji/util/randomemoji** sends a random emoji from the servers I'm in
 **- hi!8ball** ask something to the magic ball (you can suggest more answers!!)
 **- hi!hitomi** sends a random SFW pic of Hitomi, the character this bot is based off (if you think any of the pictures here may be a little explicit, you can report this to the dev by specifying the number of the pic)
 **- hi!randavatar/util/randomavatar** chooses an avatar from a random user that shares a member with this bot and sends it
 **- hi!youtube (text)** allows you to search a youtube video`,
 

    "triggers": `\`\`\`╔════╣    TRIGGER WORDS    ╠════╗\`\`\`
\`normal triggers\` - a, nothing, no u, t!daily, claps, it's, this is america, rawr, des, despa, ., thanos car, ola 

\`if the sentence starts with it\` - like if

\`can be included in any sentence\` - fix hitomibot, jeff

**SPECIAL TRIGGERS:**
\`alexa play (anything)\` - sends a random song

**To disable autorresponses in an specific channel, add "{shut up, hitomi}" to the channel description**
`,
 

        "owner": `\`\`\`╔════╣  OWNER COMMANDS  ╠════╗\`\`\`
** - hi!eval** I'll try to reproduce the code that Mama sends.
** - hi!addprefix (prefix)** adds a temporal prefix until next reboot
** - hi!removeprefix (number of prefix)** removes temporairly a prefix until next reboot
** - hi!setname (name)** self explanatory.
** - hi!announce/pingannounce/hereannounce** announces the given text to my server. (pingannounce will add an @ everyone tag to the message, and hereping adds a @ here tag)
** - hi!setavatar (image url)** again, self explanatory.
** - hi!status (message)** sets my status (only the first message, the member count and all that stuff will be kept). \`rewriting\`
** - hi!randstatus** like the one above, but makes me display a random game Mama likes
** - hi!despacito** turns me off.
** - hi!sendfiles** sends the current files to Mama, it's like a backup
** - hi!leave (server ID)** leaves the chosen server
** - hi!sinfo (number of server not id)** shows info about a server where I'm in 
** - hi!slist (number of page)** shows a huge list of my servers
** - hi!dm (user ID) (content)** sends a message
** - hi!jsonify (text)** joins several words as in a array so they can be added to the json files easily later

\`NOTE: the commands above can be only run by Mama\``,

        "mod": `\`\`\`╔════╣    MODERATION/MANAGEMENT COMMANDS    ╠════╗\`\`\`
 **- hi!ban (mention or user ID) (optional reason)** throws the hammer to a member's head (has built-in hackban) \`under rewrite\`
 **- hi!unban (user ID) (optional reason)** pardon someone if they want to apologize or something \`under rewrite\`
 **- hi!kick (mention or user ID) (optional reason)** make someone "leave" your guild \`under rewrite\`
 **- hi!softban (mention or user ID) (optional reason)** like kick and ban together: bans someone to delete their messages and then unbans them \`under rewrite\`
 **- hi!addemoji (emoji name) (discord image/emoji link)** lets you add an emoji, useful in mobile
 **- hi!slowmode (number) (optional reason)** turns on slowmode for the channel (max is 120)
 **- hi!snipe** reveals the last deleted message (can be used by everyone and only works once per message)`,

        "me": "Listen, there is still people who loves you and don't want you to go. Use `hi!suicide` to contact the suicide prevention hotlines, you are worth it. Everyone cares about you."
        }
        var category = args[0].toLowerCase()
        
            if (hlang[category] === undefined) {
              message.channel.send("**PLEASE SELECT A CATEGORY:** hi!help general/utility/fun/triggers/owner")
          } else {
            message.author.send(hlang[category])
            .then(() => {
                if (message.channel.type === 'dm') return;
                message.channel.send('Look in the DM I sent you!');
            })
            .catch(error => {
                message.channel.send('Enable your DMs first, nerd');
            });
              } 
          }
    },
}