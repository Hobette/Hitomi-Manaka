module.exports = {
  name: 'faq',
  description: 'fucking annoying questions',
  category: "general",
  execute: async (client, config, Discord, target, utils, message, args) => {
       message.channel.send(`Please refer to ${utils.yesNo(message.guild.id === "431910179991322624", "<#521317263048179712>", "the #faq channel from my support server")}, thanks!`)
  },
}
