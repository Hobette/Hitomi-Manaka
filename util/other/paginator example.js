const Discord = require('discord.js'); 
const db = require("quick.db")
exports.run = async (client, message, args) => {
  let langs = db.fetch(`${message.guild.id}_lang`)
  if(langs === "es") {
  let paginas = ['» e!welcome\n» e!modlog\n» e!language', '» e!happy\n» e!slap\n» e!pat\n» e!punch\n» e!suicide\n» e!cuddle\n» e!kill\n» e!hug\n» e!burn\n» e!cry\n» e!feed\n» e!happy\n» e!dance\n» e!lick\n» e!tickle\n» e!twerk\n» e!dab\n» e!sleep\n» e!k-pop\n» e!bite\n» e!dance\n» e!fear\n» e!poke\n» e!shoot', '» e!profile\n» e!rep\n» e!setinfo\n» e!marry\n» e!divorce\n» e!accounts\n» e!add', '» e!8ball\n» e!coinflip\n» e!cowsay\n» e!ascii\n» e!weed', '» e!cat\n» e!dog\n» e!achievement\n» e!trigger\n» e!plsmeme\n» e!ddlc\n» e!iphonex\n» e!captcha\n» e!changemymind\n» e!awooify\n» e!clyde\n» e!deefry\n» e!kannagen\n» e!nichijou\n» e!lolice\n» e!petition\n» e!phcomment\n» e!whowoulwin\n» e!magic\n» e!threats', '» e!kick\n» e!clear\n» e!ban\n» e!adcheck', '» e!ow\n» e!getquote\n» e!calc\n» e!ping\n» e!timer\n» e!love\n» e!csgo\n» e!fortnite\n» e!autocomplete\n» e!lyrics\n» e!emoji', '» e!server\n» e!serverlist\n» e!user\n» e!avatar\n» e!stats\n» e!bugreport\n» e!suggest\n» e!uptime\n» e!twitch\n» e!yt\n» e!horoscope\n» e!wiki\n» e!npm\n» e!weather', '» e!play\n» e!skip\n» e!queue\n» e!pause\n» e!resume\n» e!volume\n» e!leave\n» e!clearqueue','» e!balance\n» e!work\n» e!daily\n» e!leaderboard' , '» e!jimin\n» e!rm, e!suga\n» e!jungkook\n» e!jin\n» e!jhope\n» e!v\n» e!btschibi\n» e!rose\n» e!jennie\n» e!lisa\n» e!jisoo\n» e!blackpink', '» e!fuck\n» e!suck\n» e!gmasturbate\n» e!masturbate\n» e!ass\n» e!cum\n» e!boobs\n» e!penis\n» e!pornhub\n» e!yaoi\n» e!yuri']; 
  let comandos = ['Configuracion Por Servidor', 'Comandos De Reaccion', 'Comandos Sociales', 'Comandos De Diversion', 'Comandos De Imagenes', 'Comandos De Moderacion', 'Comandos De Miscelános', 'Comandos De Informacion', 'Comandos De Musica','Comandos de Economia' , 'Comandos De K-POP', 'Comandos NSFW'];
  let image = ['https://img.icons8.com/metro/1600/data-configuration.png', 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/6105c734559659.56d59c54f0d05.gif', 'http://www.casiope.fr/offres/file_inline_src/480/480_imgO_040515_123206.png', 'http://conexionritmica.com/wp-content/uploads/2018/07/icono_Diversi%C3%B3n.png', 'https://cdn2.iconfinder.com/data/icons/flaticons-solid/16/image-gallery-1-512.png', 'https://communitysfe.com/assets/moderation.png', 'https://pngimage.net/wp-content/uploads/2018/06/miscellaneous-icon-png.png', 'https://img.icons8.com/metro/1600/info.png', 'http://icons.iconarchive.com/icons/graphicloads/colorful-long-shadow/256/Music-icon.png', 'https://img.icons8.com/cotton/1600/economic-growth-.png', 'https://3.bp.blogspot.com/sN1YZPIuQH8qI2AQ9ez8s_Ko9KpSyiTKEE5s_EZeCkCt0U2J-7rDLrG8gsRONHJBXxo=w300', 'https://pbs.twimg.com/media/CcIBOviUsAApAn2.png']
  let pagina = 1; 
  let comando = 1;
    let images = 1;
 
  const embed = new Discord.RichEmbed() 
    .setColor("RANDOM")
    .setFooter(`Pagina ${pagina} de ${paginas.length}`) 
    .setDescription(paginas[pagina-1])
    .setTitle(comandos[comando-1])
  .setThumbnail(image[images-1])
  
  message.channel.send(embed).then(msg => { 
   
    msg.react('⏪').then( r => { 
      msg.react('⏩') 
     
      const backwardsFilter = (reaction, user) => reaction.emoji.name === '⏪' && user.id === message.author.id;
     const forwardsFilter = (reaction, user) => reaction.emoji.name === '⏩' && user.id === message.author.id;
     
      const backwards = msg.createReactionCollector(backwardsFilter, { time: 60000 }); 
      const forwards = msg.createReactionCollector(forwardsFilter, { time: 60000 }); 
     
      
      backwards.on('collect', r => { 
        if (pagina === 1) return;
        if (comando === 1) return;
        if (images === 1) return
        pagina--; 
        comando--;
        images--;
		embed.setTitle(comandos[comando-1]);
		embed.setDescription(paginas[pagina-1]); 
        embed.setFooter(`Pagina ${pagina} de ${paginas.length}`);
        embed.setThumbnail(image[images-1])
        msg.edit(embed) 
      })
     
      forwards.on('collect', r => { 
        if (pagina === paginas.length) return; 
        if (comando === comandos.length) return;
        if (images === image.length) return
        pagina++; 
        comando++;
        images++;
        embed.setTitle(comandos[comando-1]);
        embed.setDescription(paginas[pagina-1]); 
        embed.setThumbnail(image[images-1])
        embed.setFooter(`Pagina ${pagina} de ${paginas.length}`); 
        msg.edit(embed).catch()
    })
 
  })
}).catch()
} else {
let paginas = ['» e!welcome\n» e!modlog\n» e!language', '» e!happy\n» e!slap\n» e!pat\n» e!punch\n» e!suicide\n» e!cuddle\n» e!kill\n» e!hug\n» e!burn\n» e!cry\n» e!feed\n» e!happy\n» e!dance\n» e!lick\n» e!tickle\n» e!twerk\n» e!dab\n» e!sleep\n» e!k-pop\n» e!bite\n» e!dance\n» e!fear\n» e!poke\n» e!shoot', '» e!profile\n» e!rep\n» e!setinfo\n» e!marry\n» e!divorce\n» e!accounts\n» e!add', '» e!8ball\n» e!coinflip\n» e!cowsay\n» e!ascii\n» e!weed', '» e!cat\n» e!dog\n» e!achievement\n» e!trigger\n» e!plsmeme\n» e!ddlc\n» e!iphonex\n» e!captcha\n» e!changemymind\n» e!awooify\n» e!clyde\n» e!deefry\n» e!kannagen\n» e!nichijou\n» e!lolice\n» e!petition\n» e!phcomment\n» e!whowoulwin\n» e!magic\n» e!threats', '» e!kick\n» e!clear\n» e!ban\n» e!adcheck', '» e!ow\n» e!getquote\n» e!calc\n» e!ping\n» e!timer\n» e!love\n» e!csgo\n» e!fortnite\n» e!autocomplete\n» e!lyrics\n» e!emoji', '» e!server\n» e!serverlist\n» e!user\n» e!avatar\n» e!stats\n» e!bugreport\n» e!suggest\n» e!uptime\n» e!twitch\n» e!yt\n» e!horoscope\n» e!wiki\n» e!npm\n» e!weather', '» e!play\n» e!skip\n» e!queue\n» e!pause\n» e!resume\n» e!volume\n» e!leave\n» e!clearqueue','» e!balance\n» e!work\n» e!daily\n» e!leaderboard' , '» e!jimin\n» e!rm, e!suga\n» e!jungkook\n» e!jin\n» e!jhope\n» e!v\n» e!btschibi\n» e!rose\n» e!jennie\n» e!lisa\n» e!jisoo\n» e!blackpink', '» e!fuck\n» e!suck\n» e!gmasturbate\n» e!masturbate\n» e!ass\n» e!cum\n» e!boobs\n» e!penis\n» e!pornhub\n» e!yaoi\n» e!yuri']; 
  let comandos = ['Server Configuration', 'Reaction Commands', 'Social Commands', 'Fun Commands', 'Commands Of Images', 'Moderation Commands', 'Miscellaneous Commands', 'Information Commands', 'Music Commands', 'Commands of Economy' , 'K-POP Commands', 'NSFW Commands']; 
  let image = ['https://img.icons8.com/metro/1600/data-configuration.png', 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/6105c734559659.56d59c54f0d05.gif', 'http://www.casiope.fr/offres/file_inline_src/480/480_imgO_040515_123206.png', 'http://conexionritmica.com/wp-content/uploads/2018/07/icono_Diversi%C3%B3n.png', 'https://cdn2.iconfinder.com/data/icons/flaticons-solid/16/image-gallery-1-512.png', 'https://communitysfe.com/assets/moderation.png', 'https://pngimage.net/wp-content/uploads/2018/06/miscellaneous-icon-png.png', 'https://img.icons8.com/metro/1600/info.png', 'http://icons.iconarchive.com/icons/graphicloads/colorful-long-shadow/256/Music-icon.png', 'https://img.icons8.com/cotton/1600/economic-growth-.png', 'https://3.bp.blogspot.com/sN1YZPIuQH8qI2AQ9ez8s_Ko9KpSyiTKEE5s_EZeCkCt0U2J-7rDLrG8gsRONHJBXxo=w300', 'https://pbs.twimg.com/media/CcIBOviUsAApAn2.png']
  let pagina = 1; 
  let comando = 1;
  let images = 1;
 
  const embed = new Discord.RichEmbed() 
    .setColor("RANDOM")
    .setFooter(`Page ${pagina} of ${paginas.length}`) 
    .setDescription(paginas[pagina-1])
    .setTitle(comandos[comando-1])
  .setThumbnail(image[images-1])
  
  message.channel.send(embed).then(msg => { 
   
    msg.react('⏪').then( r => { 
      msg.react('⏩') 
     
      const backwardsFilter = (reaction, user) => reaction.emoji.name === '⏪' && user.id === message.author.id;
     const forwardsFilter = (reaction, user) => reaction.emoji.name === '⏩' && user.id === message.author.id;
     
      const backwards = msg.createReactionCollector(backwardsFilter, { time: 60000 }); 
      const forwards = msg.createReactionCollector(forwardsFilter, { time: 60000 }); 
     
      
      backwards.on('collect', r => { 
        if (pagina === 1) return;
        if (comando === 1) return;
        if (images === 1) return
        pagina--; 
        comando--;
        images--;
		embed.setTitle(comandos[comando-1]);
		embed.setDescription(paginas[pagina-1]);
        embed.setThumbnail(image[images-1])
        embed.setFooter(`Page ${pagina} of ${paginas.length}`); 
        msg.edit(embed).catch()
      })
     
      forwards.on('collect', r => { 
        if (pagina === paginas.length) return; 
        if (comando === comandos.length) return;
        if (images === image.length) return
        pagina++; 
        comando++;
        images++;
        embed.setTitle(comandos[comando-1]);
        embed.setDescription(paginas[pagina-1]); 
        embed.setThumbnail(image[images-1])
        embed.setFooter(`Page ${pagina} of ${paginas.length}`); 
        msg.edit(embed).catch()
    })
 
  })
})
}
}