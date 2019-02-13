module.exports = {
    name: 'toadette',
    aliases: ["god"],
    description: 'Sends an image of Toadette on a [Quacker](https://www.youtube.com/watch?v=-hdkz5KXi8s) in Mario Kart Wii',
    category: 'fun',
    execute: async (client, config, Discord, target, utils, message, args) => {
        /*
            "https://imgur.com/gZq1grv",
            "https://imgur.com/S2F983G",
            "https://imgur.com/EIbDTsK",
            "https://imgur.com/JuW8Lzi",
            "https://imgur.com/ZeNA6jA",
            "https://imgur.com/G2j0EjX",
            "https://imgur.com/8zAvLpZ",
            "https://imgur.com/lxDCiNl"
        */
       //https://imgur.com/a/fK4LHYL

        var toadette = [
            "https://vignette.wikia.nocookie.net/mario/images/3/30/Quacker-Toadette.png/revision/latest?cb=20171215192337&path-prefix=es",
            "http://image.blingee.com/images19/content/output/000/000/000/7c1/779721795_552133.gif",
            "https://i.ytimg.com/vi/o8GEsyLXtik/hqdefault.jpg",
            "https://i.ytimg.com/vi/f_b0aFg-ohc/maxresdefault.jpg",
            "https://i.ytimg.com/vi/chCLcK6B5wc/maxresdefault.jpg",
            "https://i.ytimg.com/vi/WyhXRSl22-4/hqdefault.jpg",
            "https://i.ytimg.com/vi/sKJ44SDHDYc/hqdefault.jpg",
            "https://i.ytimg.com/vi/f33nXZ03NcI/hqdefault.jpg",
            "https://i.ytimg.com/vi/xYEqphxazFs/hqdefault.jpg",
            "https://i.ytimg.com/vi/vd-Fk6ROGJE/hqdefault.jpg",
            "https://pm1.narvii.com/6858/1cc43c71fb465c0db9b59acb2fadfe4847615841v2_hq.jpg",
            "https://cdn.discordapp.com/attachments/406497072939008001/519946716619997194/unknown.png",
            "https://cdn.discordapp.com/attachments/461509407839092736/519968457966616576/resize.png",
            "https://cdn.discordapp.com/attachments/406497072939008001/519948460376457237/unknown.png",/*
            "https://cdn.discordapp.com/attachments/461509407839092736/519967916331106316/resize.png",
            "https://cdn.discordapp.com/attachments/461509407839092736/519968024220925952/resize.png",
            "https://cdn.discordapp.com/attachments/461509407839092736/519968335472099347/resize.png",*/
            "https://cdn.discordapp.com/attachments/443556421469077534/519965795908845579/unknown.png",
            "https://cdn.discordapp.com/attachments/406497072939008001/519966195479216139/unknown.png",
            "https://cdn.discordapp.com/attachments/406497072939008001/519966668139659265/unknown.png",
            "https://cdn.discordapp.com/attachments/406497072939008001/519966957077004288/unknown.png",
            "https://cdn.discordapp.com/attachments/406497072939008001/519967471172845578/unknown.png",
            "https://cdn.discordapp.com/attachments/406497072939008001/520002887548534821/unknown.png",
            "https://cdn.discordapp.com/attachments/406497072939008001/520003956106330113/unknown.png",
            "https://cdn.discordapp.com/attachments/406497072939008001/520004132803837957/unknown.png",
            "https://cdn.discordapp.com/attachments/406497072939008001/520004889611599884/unknown.png",
            "https://cdn.discordapp.com/attachments/406497072939008001/520005457054662683/unknown.png"
        ]
        message.channel.send('<:god:518738464972210187>', utils.embedImage(utils.random(toadette)()))
    },
}