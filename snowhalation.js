module.exports = {
    name: 'snowhalation',
    description: 'Sends [this song](https://www.youtube.com/watch?v=g1p5eNOsl7I) but converted to mp3 and later converted to txt',
    usage: "[optional: mp3 (to show the actual song)]",
    category: 'mmm',
    execute: async (client, config, Discord, target, utils, message, args) => {
        if (args[0] === "mp3") {
 message.channel.send({files: ["./util/other/Snow halation.mp3"]})
} else 
message.channel.send({files: ["./util/other/Snow halation.txt"]})
    },
}