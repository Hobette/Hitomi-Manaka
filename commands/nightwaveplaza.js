module.exports = {
    name: 'nightwaveplaza',
    aliases: ["plaza", "np", "nightwave"],
    description: 'Shows stats about the current song on [Nightwave Plaza](https://plaza.one/)',
    usage: "cover (to see cover artwork)",
    insensitive: true,
    category: 'utility',
    execute: async (client, config, Discord, target, utils, message, args) => {
        /*
        {
            "maintenance": false,
                "playback": {
                    "artist": "jeff",
                    "title": "my",
                    "album": "nameis jeff",
                    "length": seconds,
                    "position": position on the leaderboard of songs idk,
                    "updated": timestamp,
                    "artwork": "artwork_b6c06083ffa8d533f04efc3458def25d.jpg",
                    "likes": 9999,
                    "hates": 999999999999
            },
            "listeners": 999
        }
        */
        
        function vaporwavecolor(){
            var r = (Math.round(Math.random()* 127) + 127).toString(16);
            var g = (Math.round(Math.random()* 127) + 127).toString(16);
            var b = (Math.round(Math.random()* 127) + 127).toString(16);
            return '#' + r + g + b;
        }
        
        utils.get(" https://api.plaza.one/status", {
        }).then((response) => {
  return response.json();
}).then((response) => {
    if (response.maintenance == true) {
        const Embed = new Discord.RichEmbed()
            .setAuthor("Ｅｒｒｏｒ！ ⚠", "https://cdn.discordapp.com/attachments/461509407839092736/528152666795409409/invert.png", "https://plaza.one/")
            .setDescription("Whoops! Looks like Nightwave Plaza is under maintenance. Try again later!")
            .setFooter("I can't do anything until the maintenance ends, sorry")
            .setThumbnail("https://plaza.one/img/dead.jpg")
            .setColor(0)

        message.channel.send(Embed);
    } else {
        if (args[0] === "cover") return message.channel.send(`From **"${response.playback.album}"**, by **${response.playback.artist}**`, utils.embedImage("https://plaza.one/img/"+response.playback.artwork))
        if (args[0] === "dead") return message.channel.send(utils.embedImage("https://plaza.one/img/dead.jpg"))
                var passedminutes = Math.floor(response.playback.position/60)
                var passedseconds = response.playback.position - passedminutes*60
                if (passedseconds.toString().length == 1) { passedseconds = "0"+passedseconds}

                var minutes = Math.floor(response.playback.length/60)
                var seconds = response.playback.length - minutes*60
                if (seconds.toString().length == 1) { seconds = "0"+seconds}

                const Embed = new Discord.RichEmbed()
                .setAuthor("Ｎｉｇｈｔｗａｖｅ　Ｐｌａｚａ 🌙", "https://img7.androidappsapk.co/300/1/c/7/one.plaza.nightwaveplaza.png", "https://plaza.one/")
                .setDescription("**Now playing: **" + response.playback.title + ` \`(${passedminutes}:${passedseconds}/${minutes}:${seconds})\`
(ᴄʟɪᴄᴋ ᴏɴ ᴛʜᴇ ᴇᴍʙᴇᴅ ᴛɪᴛʟᴇ ᴛᴏ ʟɪsᴛᴇɴ ᴛᴏ ɪᴛ!)`)
                .addField("Artist", response.playback.artist,true)
                .addField("Album (ʜɪ!ɴɪɢʜᴛᴡᴀᴠᴇᴘʟᴀᴢᴀ ᴄᴏᴠᴇʀ)", response.playback.album,true)
                .setThumbnail("http://plaza.one/" + response.playback.artwork)
                .setURL("http://plaza.one/")
                .setFooter(`👍 ${response.playback.likes} | 👎 ${response.playback.hates} | ${response.listeners} listeners`)
                .setColor(vaporwavecolor())
                
                message.channel.send(Embed);
            }
}).catch(()=>{ 
    const Embed = new Discord.RichEmbed()
            .setAuthor("Ｅｒｒｏｒ！ ⚠", "https://cdn.discordapp.com/attachments/461509407839092736/528152666795409409/invert.png", "https://plaza.one/")
            .setDescription("Whoops! Looks like Nightwave Plaza API is down. Try again later!")
            .setFooter("I can't do anything to fix this, so you have to wait. Sorry")
            .setThumbnail("https://plaza.one/img/dead.jpg")
            .setColor(0)

        message.channel.send(Embed);
});

    },
}
