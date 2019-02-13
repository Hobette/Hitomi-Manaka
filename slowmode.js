module.exports = {
    name: 'slowmode',
    description: 'Toggles slow mode for the chat',
    category: "mod",
    usage: "(number up to 120 or 0 to remove it)",
    execute: async (client, config, Discord, target, utils, message, args) => {
        if (message.member.hasPermission("MANAGE_CHANNELS")){
          const axios = require("axios")
            function slowmode(s, m){
              axios({
                  method: 'patch',
                  url: `https://discordapp.com/api/v6/channels/${message.channel.id}`,
                  headers: {
                      "Authorization" : `Bot ${config.token}`
                    },
                  data: {
                      rate_limit_per_user: s,
                      reason: args.slice(1).join(" ")
                  }
                }).then(message.channel.send(m))
                .catch((err) =>{
                    message.channel.send("I don't have permissions!");
                });
          }
          slowmode(args[0]) 
        } else {
        message.channel.send("You need permission to manage channels!")
      }
    },
}
