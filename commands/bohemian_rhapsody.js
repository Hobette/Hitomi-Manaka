module.exports = {
    name: 'bohemian_rhapsody',
    aliases: ['bohemianrhapsody', `br`],
    //description: 'Sing Bohemian Rhapsody with me! (credits to **mudkipscience#0001** and her bot, **[Woomy#9220](https://discordapp.com/api/oauth2/authorize?client_id=435961704145485835&permissions=8&scope=bot)**)',
    description: "hehehehe wip",
    category: 'fun',
    execute: async (client, config, Discord, target, utils, message, args) => {
        message.channel.send("Whoops, I still need to fix this command.")
        /*
        const lyrics = [
            "Is this the real life?",
            "Is this just fantasy?",
            "Caught in a landslide, no escape from reality",
            "Open your eyes, look up to the skies and see",
            "I'm just a poor boy, I need no sympathy",
            "Because I'm easy come, easy go, little high, little low",
            "Any way the wind blows doesn't really matter to me, to me",
            "Mama, just killed a man",
            "Put a gun against his head, pulled my trigger, now he's dead",
            "Mama, life had just begun",
            "But now I've gone and thrown it all away",
            "Mama, ooh, didn't mean to make you cry",
            "If I'm not back again this time tomorrow",
            "Carry on, carry on as if nothing really matters",
            "Too late, my time has come",
            "Sends shivers down my spine, body's aching all the time",
            "Goodbye, everybody, I've got to go",
            "Gotta leave you all behind and face the truth",
            "Mama, ooh, (Anyway the wind blows)",
            "I don't wanna die",
            "I sometimes wish I'd never been born at all",
            "I see a little silhouetto of a man",
            "Scaramouche! Scaramouche! will you do the Fandango?",
            "Thunderbolt and lightning, very, very fright'ning me",
            "(Galileo) Galileo, (Galileo) Galileo, Galileo Figaro magnifico",
            "I'm just a poor boy, nobody loves me",
            "He's just a poor boy from a poor family",
            "Spare him his life from this monstrosity",
            "Easy come, easy go, will you not let me go?",
            "Bismillah! No, we will not let you go",
            "(Let him go!) Bismillah! We will not let you go",
            "(Let him go!) Bismillah! We will not let you go",
            "(Let me go) Will not let you go",
            "(Let me go) Will not let you go",
            "(Let me go) Ah",
            "No, no, no, no, no, no, no",
            "(Oh mamma mia, mamma mia) Mamma mia, let me go",
            "Beelzebub has the devil put aside for me, for me, for me!",
            "So you think you can stone me and spit in my eye?",
            "So you think you can love me and leave me to die?",
            "Oh baby, can't do this to me, baby!",
            "Just gotta get out, just gotta get right outta here!",
            "Nothing really matters, anyone can see",
            "Nothing really matters",
            "Nothing really matters, to me",
            "Any way the wind blows"
          ];
        
          var runtop = true;
          var runbottom = false;
          for(var br = 0; br < lyrics.length; br++) {
            {
              if (runtop === true) {
            var response = await client.awaitReply(message, lyrics[br]);
            runbottom = false;
            };
        
            if (runbottom === true) {
              if (response !== lyrics[br]) {
                return message.channel.send("Those aren't the lyrics you nerd!")
              }
              runtop = false
            };
          } if (runtop === true) {
            runtop = false
            runbottom = true
          } else if (runbottom === true) {
            runtop = true
            runbottom = false
          }
          }
          message.channel.send("What a lovely duet! Please contact with `"+client.users.get(config.ownerID).tag+"` with a screenshot of this message to be added to the hall of fame!")
        */},
}