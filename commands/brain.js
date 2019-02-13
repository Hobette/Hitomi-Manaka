module.exports = {
    name: 'brain',
    description: 'Creates a brain meme (made using [brains-api](https://www.npmjs.com/package/brains-api))',
    usage: "[phrases separated with \";;\"]",
    category: 'fun',
    execute: async (client, config, Discord, target, utils, message, args) => {
        const BrainMeme = require('brains-api');
 
// OPTIONAL for saving the Buffer onto the hard drive
const fs = require('fs');
 
// Set the strings
let strings = args.join(' ').split(";;")
 
 if (!strings[1]) {strings= ["Adding at least 2 phrases", "You"]}

// Create a new instance of the meme
// (here we use destructuring)
let meme = new BrainMeme(...strings)
 
// Add a new string to it
 
// Generate the Buffer from the
// image (it's a PNG buffer)
meme.build().then(buffer => {
 var wstream = fs.createWriteStream(`./util/temp/brain-${message.channel.id}.png`);
 wstream.write(buffer)
 wstream.end()

}).then(() => {
message.channel.send({files: [`./util/temp/brain-${message.channel.id}.png`]})
})
    },
}