module.exports = {
    name: 'album',
    description: 'Shows info about all of SiIvaGunner\'s albums',
    category: 'utility',
    insensitive: true,
    execute: async (client, config, Discord, target, utils, message, args) => {
        var albums = 
`\`0​1.\`​GilvaSunner's Highest Quality Video Game Rips: Volume 1
\`0​2.\`​GiIvaSunner's Highest Quality Video Game Rips Volume 2
\`0​3.\`​The Phantom Rips: SiIVa has come to 
\`0​4.\`​7 Gram Dab
\`0​5.\`​KORIBALL
\`​06.\`​7 GRAND MOTHER
\`0​7.\`​765 GRAND DAD
\`08.\`​GilvaSunner's Highest Quality Video Game Rips: Volume 3 & Knigra
\`0​9.\`​Grand Dad 64
\`​10.\`​7 Somari Dad
\`​11.\`​GilvaSunner's Highest Quality Video Game Rips: Volume FOUR HOURS!
\`​12.\`​GilvaSunner's Highest Quality Video Game Rips Volume 5
\`​13.\`​GilvaSunner's Highest Quality Video Game Rips: Volume 6​.​66
\`​14.\`​Kirby Rip Attack
\`​15.\`​Heaven Grand Dad
\`​16.\`​il settimo grande padre 
\`​17.\`​Bigai Circulation
\`​18.\`​Ooooooooo I Smoke The Weed, I'm Bob Dylan
\`​19.\`​Gurando no Mori
\`​20.\`​beatmania IIDX 7 GRAND
\`​21.\`​Stagg Street Arrangements
\`​22.\`​Crypt of the Necrokazoo
\`​23.\`​JOEJOE'S BIZZAERE JOJOKE
\`​24.\`​Quality Sampler
\`​25.\`​SILVA GUNNER BEST OF SOUNDTRACK【B​/​W】
\`​26.\`​CD Grand Beta
\`​27.\`​The Phantom Rips: Subsistence
\`​28.\`​Five Nights at Freddy's Original Soundtrack
\`​29.\`​PC Master Rips
\`​30.\`​GilvaSunner's Highest Quality Video Game Rips: Volume 7 
\`​31.\`​GilvaSunner's Highest Quality Video Game Rips: Volume 7: Part mm2wood
\`​32.\`​The SilvaGunner Spooktacular Halloween Horror Special: Volume 8-Bit Beast
\`​33.\`​Zero Grand Prix
\`​34.\`​Kingdom Hearts Chain Of Memories Final Mix HD​ ​Reverb Edition
\`​35.\`​Inspector Gunner
\`​36.\`​The Voice's Highest Quality Video Game Rips
\`​37.\`​A HOT ONE
\`​38.\`​@​​GiIvaSunnerer Whips & Nae Naes on Ellen the Generous
\`​39.\`​Haltmann's Highest Quality Video Game Rips
\`​40.\`​wood man's very nice album .​.​.​feat. mega man, i guess
\`​41.\`​DAMN.
\`​42.\`​Hatsilva Miku: Ripping DIVA
\`​43.\`​The SiIvaGunner YTPMV Collab (Eek​!​)​.​veg
\`​44.\`​Ripmas
\`​45.\`​Your Onii​-​Chan's Favorite Rips! 
\`​46.\`​Rips of Christmas Past
\`​47.\`​Rips of Christmas Future
\`​48.\`​Now That's What I Call Quality!
\`​49.\`​A High Quality Journey Through the Undergrand
\`​50.\`​Inspector Gunner 2 With Critic
\`​51.\`​Video Game Music to Do Your Taxes To
\`​52.\`​SiIvaGunner's Highest Quality Rips Volume A
\`​53.\`​STRINGS OF FATE ~ SiIvaGunner: King for a Day Tournament Original Soundtrack
\`​54.\`​SiIvaGunner: Starter Kit & Essentials`.split("\n")

        if (args[0] === "info") return message.channel.send("This command only displays album names for now. Download links and original descriptions coming soon!")
        var page = 0

        if (args[0] && parseInt(args[0]) != NaN) {
            page = parseInt(args[0])
        }

        var displayalbums = albums.slice(page*10, (page*10)+10)
        if (displayalbums === []) return message.channel.send("Invalid page!")
        var e = new Discord.RichEmbed()
        .setTitle(`All SiIvaGunner albums (page ${page} of ${Math.floor(albums.length / 10)})`)
        .setDescription(`Use \`hi!album <page>\` to navigate or \`hi!album info <album number>\` to see download links and original descriptions from an album

${displayalbums.join("\n")}`)
        .setThumbnail("https://vignette.wikia.nocookie.net/youtube/images/8/8b/SiIvaGunner.png/revision/latest?cb=20161016084854")
        .setFooter("\"I only upload high quality rips.\"")
        message.channel.send(e)
    },
}