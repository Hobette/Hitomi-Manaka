module.exports = {
    name: 'vaporwave',
    aliases: ['aesthetic'],
    description: 'Ｃｏｎｖｅｒｔｓ ａ ｔｅｘｔ ｉｎｔｏ ｖａｐｏｒｗａｖｅ ',
    usage: '(ｔｅｘｔ)',
    category: "text",
    execute: async (client, config, Discord, target, utils, message, args) => {
        var letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ 0123456789.?!,:;\"'-_+%=$*(){}[]<>|/~\\@&%£#"
        letters = letters.split('')
        var wp = "ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ　０１２３４５６７８９．？！，：；＂＇－＿＋％＝＄＊（）｛｝［］＜＞｜／～＼＠＆％￡＃"
        wp = wp.split('')
        var text = args.join(' ')
        text = text.split('')
        for (i = 0; i < text.length; i++) {
            text[i] = wp[letters.indexOf(text[i])]
        }
        message.channel.send(text.join(''))
    },
}