module.exports = {
    name: 'spoilerimage',
    description: 'Turns a channel\'s last attached image (or your message\'s) into a spoiler image, or vice versa. It\'s intended for mobile users to use this feature',
    category: 'utility',
    execute: async (client, config, Discord, target, utils, message, args) => {
        message.channel.fetchMessages()
 .then(async e => {
 var o = e.filter(m => m.attachments.size > 0).first()
 if (o == undefined) return message.channel.send("There's no images to grab!")
 o = o.attachments.first()
if (o.filename.startsWith("SPOILER")) {
var a = new Discord.Attachment(o.url, o.filename.replace("SPOILER", ""))
 message.channel.send("Here's your unspoilered image!", a) .catch(e=>message.channel.send("error: "+e))
} else {
 var a = new Discord.Attachment(o.url, "SPOILER_"+o.filename)
 message.channel.send("Here's your spoilered image!", a) .catch(e=>message.channel.send("error: "+e))
}


}).catch(e=>message.channel.send("error: "+e))
    },
}
