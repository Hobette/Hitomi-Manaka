module.exports = {
    name: 'stupidcat',
    description: 'Shows a random image about **stupid cat#8160** being cute',
    category: "dbots",
    execute: async (client, config, Discord, target, utils, message, args) => {
        var cute = [
            'https://www.minecraftskinstealer.com/achievement/a.php?i=5&h=Cat+got+an+achievement!&t=Being+cute',
            'https://cdn.discordapp.com/attachments/119222314964353025/502170335114690572/unknown.png',
            'https://cdn.discordapp.com/attachments/461509407839092736/502203411488571394/image.png',
            'https://cdn.discordapp.com/attachments/132632676225122304/502203579176845323/brain.png',
            'https://owo.whats-th.is/44c818.png',
            'https://cdn.discordapp.com/attachments/110373943822540800/502219629012451329/ratismal.png',
            'https://cdn.discordapp.com/attachments/406497072939008001/502223175568850974/god.png',
            'https://cat.girlsare.life/b58a2c.png',
            'https://cdn.discordapp.com/attachments/119222314964353025/502536929066090516/unknown.png',
            'https://cdn.discordapp.com/attachments/119222314964353025/502545408258473994/unknown.png',
            'https://cdn.discordapp.com/attachments/406497072939008001/502551174885670923/unknown.png',
            'https://cdn.discordapp.com/attachments/461509407839092736/534078637943816193/unknown.png',
            'https://cdn.discordapp.com/attachments/461509407839092736/534097045770862622/unknown.png'
        ]
        var cat = utils.random(cute)
            message.channel.send(utils.embedImage(cat()))
    },
}