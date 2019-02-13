module.exports = {
    name: 'unshorten',
    description: 'Takes a short url and returns the site the link redirects you to',
    usage: "unshorten (short url)",
    category: "utility",
    execute: async (client, config, Discord, target, utils, message, args) => {
        if (!args[0]) {
            message.channel.send("No! I need an url to unshorten!")
          }
          let uu = require('url-unshort')();
          uu.add([ 'tinyurl.com', 'bit.ly' ]);
          uu.expand(args[0])
            .then(url => {
              if (url) { message.channel.send(`Original url is: ${url}`); }
              // no shortening service or an unknown one is used
              else message.channel.send('This url can\'t be expanded');
            })
        .catch(err => console.log(err));
    },
}