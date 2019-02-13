module.exports = {
    name: 'pray',
    description: 'Your average daily command',
    category: 'economy',
    execute: async (client, config, Discord, target, utils, message, args) => {
        
 var output = await utils.eco.Daily(message.author.id)
 //output.updated will tell you if the user already claimed his/her daily yes or no.
 
 if (output.updated) {
    var sapphires = Math.floor(Math.random() * 100)+101
    utils.eco.AddToBalance(message.author.id, sapphires).then(profile => {
 message.channel.send(`Thank you for praying to our lord Shake-O! <:HitomiHeart:434733273483051008> Take your **${sapphires}**<:sapphire:525655228444573696> sapphires and add them to your bag!`);
    })
 } else {
 message.channel.send(`Thanks for praying again! <:HitomiYay:436241639783268362> Although you seem to love our god (Shake-O), we can't reward you until **${output.timetowait.replace("0d ", "")}**, but we still have cookies and manga!`)
 }

    },
}