module.exports = {
    name: 'baldelete',
    description: 'Removes all credits from an user',
    usage: "[user]",
    category: 'owner',
    execute: async (client, config, Discord, target, utils, message, args) => {
        utils.eco.Delete(target.id).then(output =>{
 if (output.deleted == true) {return message.reply('Succesfully rekt\'d the user!')} else
 throw "Could not find the user in database."
})
    },
}