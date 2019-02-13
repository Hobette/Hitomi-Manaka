module.exports = {
    name: 'animequote',
    aliases: ["aq"],
    description: 'Shows a random quote from an anime',
    category: 'fun',
    execute: async (client, config, Discord, target, utils, message, args) => {
        
            var anime_quote = [
        
            {

              "quotesentence": "People die when they are killed.",
              "quotecharacter": "Emiya Shirou",
              "quoteanime": " Fate/stay night"
            },
        
            {

              "quotesentence": "The fake is of far greater value. In its deliberate attempt to be real, it's more real than the real thing.",
              "quotecharacter": "Kaiki Deishū",
              "quoteanime": " Nisemonogatari"
            },
        
            {

              "quotesentence": "Mankind’s greatest fear is Mankind itself.",
              "quotecharacter": "Gendo Ikari",
              "quoteanime": " Neon Genesis Evangelion"
            },
        
            {

              "quotesentence": "If you act only on what you should do without heed for what you want to do, you're nothing more than a machine, a phenomenon.",
              "quotecharacter": "Natalia Kaminski",
              "quoteanime": " Fate/Zero"
            },
        
            {

              "quotesentence": "It's a mistake to choose your path based upon the sins that you carry. We don't choose our path based on the sins that we carry, but we must bear our sins on the path we choose. ",
              "quotecharacter": "Aozaki Touko",
              "quoteanime": " Kara no Kyoukai"
            },
        
            {

              "quotesentence": "A lie that can't be disproven is no different from the truth.",
              "quotecharacter": "Kraft Lawrence",
              "quoteanime": " Ookami to Koushinryou"
            },
        
            {

              "quotesentence": "I can only say that the human curiosity is something completely irrational.",
              "quotecharacter": "Kyubee",
              "quoteanime": " Mahou Shoujo Madoka★Magica"
            },
        
            {

              "quotesentence": "The day before yesterday, I saw a rabbit. Yesterday, it was a deer. And today, It’s you.",
              "quotecharacter": "Ichinose Kotomi",
              "quoteanime": " Clannad"
            },
        
            {

              "quotesentence": "Only God knows who shall be the victor. I can only do the best I can.",
              "quotecharacter": "Takane Shijou",
              "quoteanime": " The iDOLM@STER"
            },
        
            {

              "quotesentence": "Those aren’t tears of sadness. They’re tears of happiness, right? Let us make haste, lest the wind ceases.",
              "quotecharacter": "Hidenori Tabata",
              "quoteanime": " Danshi Koukousei no Nichijou"
            },
        
            {

              "quotesentence": "Poi!",
              "quotecharacter": "Yuudachi",
              "quoteanime": " Kantai Collection"
            },
        
            {

              "quotesentence": "If you forced someone to do something they didn’t want to do, they’d just end up hating life.",
              "quotecharacter": "Chihiro Sengoku",
              "quoteanime": " Sakurasou no Pet na Kanojo"
            },
        
            {

              "quotesentence": "There are things that cannot be taken back. But the world will keep on spinning whether you laugh or you cry. High school life will eventually end too.",
              "quotecharacter": "Hachiman Hikigaya",
              "quoteanime": " Yahari Ore no Seishun Love Comedy wa Machigatteiru."
            },
        
            {

              "quotesentence": "There's something wrong with people who seek reality in fiction.",
              "quotecharacter": "Kyon",
              "quoteanime": " Suzumiya Haruhi no Yuuutsu"
            },
        
            {

              "quotesentence": "Don't be distracted by the what-if's, should-have's, and if-only's. The one thing you choose for yourself - that is the truth of your universe.",
              "quotecharacter": "Kamina",
              "quoteanime": " Tengen Toppa Gurren Lagann"
            },
        
            {

              "quotesentence": "People tend to show off their act of kindness. It is not an act of good will, it is a demand because they are expecting a word of grace as a reward.",
              "quotecharacter": "Itoshiki Nozomu",
              "quoteanime": " Sayonara Zetsubou Sensei"
            },
            
            {

              "quotesentence": "Love always happens without warning. At that time, the gears of fate will start spinning. Just like the hands of a clock, two people’s hearts will separate and meet again. Eventually, they reunite.",
              "quotecharacter": "Konjiki No Yami",
              "quoteanime": " To LOVE-Ru Darkness"
            },
            
            {

              "quotesentence": "There are only two times when a man can cry in public: when he loses his wallet and when his mother dies. And even if you cry in private, there's a severe restriction. Shed tears for others. The only thing you should be shedding for yourself is sweat. Remember that.",
              "quotecharacter": "Yuuji Kazami",
              "quoteanime": " Grisaia no Kajitsu"
            },
        
            {

              "quotesentence": "The real fun is in constantly pushing beyond your limits. So if you're thinking of everything as a game, you won't be able to fully experience it.",
              "quotecharacter": "Kagami Junichirou",
              "quoteanime": " Denpa Kyoushi"
            },
            
            {

              "quotesentence": "Those with talent who aren't aware of themselves cause pain for those who have none.",
              "quotecharacter": "Fuyumi Irisu",
              "quoteanime": " Hyouka"
            },
            
            {

              "quotesentence": "Even if he hates me, being able to die with the knowledge that the one I love will never forget me… there is no greater happiness a woman could desire.",
              "quotecharacter": "Hakaze Kusaribe",
              "quoteanime": " Zetsuen no Tempest"
            },
            
            {

              "quotesentence": "I wasn’t scared that I’d be rejected, I was scared that if I said how I felt, all of our relationships would change.",
              "quotecharacter": "Chisaki Hiradaira",
              "quoteanime": " Nagi no Asukara"
            },
            
            {

              "quotesentence": "Do you know what's the most important thing about climbing mountains is? It's not about having the courage to challenge it, It's about having the courage to back down.",
              "quotecharacter": "Nozomi Tōjō",
              "quoteanime": " Love Live! School idol project"
            },
            
            {

              "quotesentence": "You may be unfortunate, but that doesn't mean you have to suffer. You may not be blessed, but that doesn't mean you have to throw a fit over it. Even if bad things happen to you, just be strong!",
              "quotecharacter": "Koyomi Araragi",
              "quoteanime": " Bakemonogatari"
            },
            
            {

              "quotesentence": "A faint clap of thunder, clouded skies; perhaps rain comes. If so, will you stay here with me?",
              "quotecharacter": "Yukari Yukino",
              "quoteanime": " Kotonoha no Niwa"
            },
            
            {

              "quotesentence": "Hold on. Don't go! Let's argue again. I'll bribe you with a canelé. I'll call you to kill time. I don't mind being Friend A. Please don't go. Please don't go. Please don't go...please don't leave me behind.",
              "quotecharacter": "Kousei Arima",
              "quoteanime": " Shigatsu wa Kimi no Uso"
            },
            
            {

              "quotesentence": "Having happy and beautiful memories won't always bring you salvation. The more beautiful a memory is, the more painful it can become. It can even become terrifying. Both for the one who's leaving... And for the one left behind.",
              "quotecharacter": "Isla",
              "quoteanime": " Plastic Memories"
            },
            
            {

              "quotesentence": "Even if I know you'll reject me, even if I'm afraid you won't accept me, even if I know it will really hurt if you dump me - I still have to tell you how I feel!",
              "quotecharacter": "Kousaka Kyousuke ",
              "quoteanime": " Ore no Imouto ga Konnani Kawaii Wake ga Nai"
            },
            
            {

              "quotesentence": "There is nothing that you can acquire without making a move on your own. It's the same with romance - your only hope is to be more aggressive.",
              "quotecharacter": "Marika Tachibana",
              "quoteanime": " Nisekoi"
            },
            
            {

              "quotesentence": "It makes you sad when someone suddenly just up and disappears without a word. If you're just going to end up hurt in the end, you're better off not forming any bonds at all.",
              "quotecharacter": "Yozora Mikazuki",
              "quoteanime": " Boku wa Tomodachi ga Sukunai"
            },
            
            {

              "quotesentence": "Well, it's an anime, so you shouldn't think so hard about it.",
              "quotecharacter": "Illyasviel von Einzbern",
              "quoteanime": " Fate/kaleid liner Prisma☆Illya "
            },
            
            {

              "quotesentence": "You were ready to kill another creature, yet you’re scared of being killed yourself. Don’t you think that is strange? When you point a gun at a living thing… this is what that act means. ",
              "quotecharacter": "Kurumi Tokisaki",
              "quoteanime": " Date A Live"
            },
            
            {

              "quotesentence": "Watching TV or playing games alone is more fun. Playing along with your friends' hobbies... Laughing at their jokes when they're not funny... All that does is tire me out.",
              "quotecharacter": "Yuzuru Otonashi",
              "quoteanime": " Angel Beats!"
            },
            
            {

              "quotesentence": "There’s no hope on the battlefield. It has nothing but unspeakable despair. Just a crime we call victory, paid for by the pain of the defeated. Yet humanity has never recognized this truth. And the reason for that is, in every era, a dazzling hero has blinded people with their legends and prevented them from seeing the evil of bloodshed. The true nature of humanity has not advanced a step beyond the Stone Age.",
              "quotecharacter": "Emiya Kiritsugu",
              "quoteanime": " Fate/Zero"
            },
            
            {

              "quotesentence": "Wishes are great because they don’t come true. We work hard because they don’t. We constantly push ourselves forward precisely because they don’t come true. But once they do what’s left to keep driving us forward?",
              "quotecharacter": "Alis Color",
              "quoteanime": " Kamisama no Inai Nichiyoubi"
            },
            
            {

              "quotesentence": "It is a poor knight indeed who slays one who defies him. The key is to show yourself to be superior that they will not defy you in the first place.",
              "quotecharacter": "Slaine Troyard",
              "quoteanime": " Aldnoah.Zero"
            },
            
            {

              "quotesentence": "I always have this feeling... The feeling that I'm losing something. The world is really beautiful, but... it feels like it's just me... who's drifting away from it.",
              "quotecharacter": "Sayuri Sawatari",
              "quoteanime": " Kumo no Mukou, Yakusoku no Basho"
            },
            
            {

              "quotesentence": "The moment you say a word of parting, you've already parted. So long as you and I are both somewhere in this world, we haven’t parted. So long as you don’t say it, you haven’t parted.",
              "quotecharacter": "Satone Shichimiya",
              "quoteanime": " Chuunibyou Demo Koi Ga Shitai!"
            },
            
            {

              "quotesentence": "Because she learned about happiness, she feels lonely for the first time. And because she knows unhappiness, she understands happiness for the first time.",
              "quotecharacter": "Himura Yuu",
              "quoteanime": " Ef - A Fairy Tale Of The Two"
            },
            
            {

              "quotesentence": "Playing a game by yourself is boring. You need a loser to crush so badly they can't recover.",
              "quotecharacter": "Five",
              "quoteanime": " Zankyou no Terror"
            },
            
            {

              "quotesentence": "It's okay. Fuck my brains out.",
              "quotecharacter": "Sora Kasugano",
              "quoteanime": " Yosuga no Sora: In Solitude, Where We Are Least Alone."
            },
            
            {

              "quotesentence": "Love, passion, why do we get caught up by such troublesome feelings? The mind couldn't ever get things straight, and you lose control to know what is sensible. Deep down it's all so vexing.",
              "quotecharacter": "Takumi Usui",
              "quoteanime": " Kaichou Wa Maid-Sama!"
            },
            
            {

              "quotesentence": "We finally became friends. I've said everything I wanted to say. Now we know everything about each other. Though, from the moment we become friends, we'll never speak to each other again.",
              "quotecharacter": "Touma Kazusa",
              "quoteanime": " White Album 2"
            },
            
            {

              "quotesentence": "People don't realize they aren't able to choose whether or not to believe something. If they subconsciously believe something, therein lies the potential for a curse.",
              "quotecharacter": "Kanoe Yuuko",
              "quoteanime": " Tasogare Otome X Amnesia"
            },
            
            {

              "quotesentence": "Accident or amnesia, you can't rewind your life and start again. If you struggle, you'll just hurt yourself, and the people around you.",
              "quotecharacter": "Tada Banri",
              "quoteanime": " Golden Time"
            },
            
            {

              "quotesentence": "Onii-chan! You're going to split me in half!",
              "quotecharacter": "Every Imouto",
              "quoteanime": " in Every Incest Hentai Ever"
            },
            
            {

              "quotesentence": "Fake people have an image to maintain. Real people just don't care.",
              "quotecharacter": "Hachiman Hikigaya",
              "quoteanime": " Yahari Ore No Seishun Love Come Wa Machigatteiru"
            },
            
            {

              "quotesentence": "Panties, Panties, Panties!",
              "quotecharacter": "Chii",
              "quoteanime": " Chobits"
            },
            
            {

              "quotesentence": "Brilliant people shine more brightly than ordinary ones. They never regret or agonize over what they've done.",
              "quotecharacter": "Archer",
              "quoteanime": " Fate/stay night: Unlimited Blade Worlks"
            },
            
            {

              "quotesentence": "A suicide means you've killed the most important existence of all: yourself.",
              "quotecharacter": "Monokuma",
              "quoteanime": " Danganronpa"
            },
            
            {

              "quotesentence": "Skipping school for one day might not be a problem, but if you skip for three days in a row, it'd be really hard to convince yourself to go back.",
              "quotecharacter": "Ushiromiya Ange",
              "quoteanime": " Umineko no Naku Koro ni"
            },
            
            {

              "quotesentence": "People who don't work hard don't have the right to be envious of the people with talent. People fail because they don't understand the hard work necessary to be successful.",
              "quotecharacter": "Yukino Yukinoshita",
              "quoteanime": " Yahari Ore no Seishun Love Come wa Machigatteiru."
            },
            
            {

              "quotesentence": "In our society, letting others find out that you're a nice person is a very risky move. It's extremely likely that someone would take advantage of that.",
              "quotecharacter": "Hitagi Senjougahara",
              "quoteanime": " Bakemonogatari"
            },
            
            {

              "quotesentence": "If everyone were perfect, there would be no need to look out for others. Sympathy or love is needed because people are imperfect. A perfect human cannot love anyone.",
              "quotecharacter": "Keima Katsuragi",
              "quoteanime": " Kami Nomi zo Shiru Sekai"
            },
            
            {

              "quotesentence": "I am who I am now because of everything that's happened. If I try to deny my past, I'm denying the person I've become. I don't want to do that.",
              "quotecharacter": "Iori Nagase",
              "quoteanime": " Kokoro Connect"
            },
            
            {

              "quotesentence": "If only I could stand on a larger stage and have even more fans…but I realized something after yesterday’s performance. I was naive. Ultimately, what I enjoyed was being coddled by the fans of this familiar store.",
              "quotecharacter": "Miyu Okamoto",
              "quoteanime": " Wake Up, Girls!"
            },
            
            {

              "quotesentence": "I think there are many things in this world we are better off not knowing. Sometimes the truth is the cruelest thing of all. Not everyone can bear it. ",
              "quotecharacter": "Maria Akitsuki",
              "quoteanime": " Shinsekai Yori"
            },
            
            {

              "quotesentence": "Death is terrible for anyone. Young or old, good or evil, it's all the same. Death is impartial. There is no especially terrible death. That's why death is so fearsome. Your deeds, your age, your personality, your wealth, your beauty... They are all meaningless in the face of death.",
              "quotecharacter": "Sunako Kirishiki",
              "quoteanime": " Shiki"
            },
            
            {

              "quotesentence": "Keeping all the wealth for yourself may make your rich, but it won’t make you prosperous. You give people money, and they spend it. True prosperity comes from a free flow of wealth and goods.",
              "quotecharacter": "Maou",
              "quoteanime": " Maoyuu Maou Yuusha"
            },
            
            {

              "quotesentence": "People aren't complicated. We work hard when we know that we'll get something in return, and we try to work even harder if that something is our own improvement.",
              "quotecharacter": "Kumiko Oumae",
              "quoteanime": " Hibike! Euphonium"
            },
            
            {

              "quotesentence": "No person can become a replacement for another. Not even the past version of themselves.",
              "quotecharacter": "Ushiromiya Ange",
              "quoteanime": " Umineko no Naku Koro ni"
            },
            
            {

              "quotesentence": "If you claim to love humans, that should include their lies and betrayals, their sins and ugliness, their jealousy and immaturity, their hatred and conflicts.",
              "quotecharacter": "Myouri Unzen",
              "quoteanime": " Medaka Box"
            },
            
            {

              "quotesentence": "Where will we be in five or ten years from now? No one knows. All we know right now, all we can see right now, is what's right in front of us. That's why we'll always live our 'right now' to the fullest!",
              "quotecharacter": "Kanzaki Tomoyo",
              "quoteanime": " Inou Battle wa Nichijou-kei no Naka de"
            },
            
            {

              "quotesentence": "Don't believe in the you that believes in me and don't believe in the me that believes in you. Believe in the you that believes in yourself!",
              "quotecharacter": "Kamina",
              "quoteanime": " Tengen Toppa Gurren Lagann"
            },
            
            {

              "quotesentence": "Life eventually ends. But that doesn't mean that the fact that we met, or the time we spent together will disappear.",
              "quotecharacter": "Mei",
              "quoteanime": " Arashi no Yoru ni"
            },
            
            {

              "quotesentence": "I have someone I like. I never had the confidence and I’ve doubted my feelings countless of times. But, when she stays by my side and smiles with me, I feel like I can do anything.",
              "quotecharacter": "Yoshida Haru",
              "quoteanime": " Tonari No Kaibutsu-kun"
            },
            
            {

              "quotesentence": "If you look away and just turn your back on those you don't understand, you'll regret it someday. Accept what's happening before your eyes as a fact. That's a shortcut to becoming an adult.",
              "quotecharacter": "Nobuchika Ginoza",
              "quoteanime": " Psycho-Pass"
            },
            
            {

              "quotesentence": "It's alright to feel sad. When you're sad, you should experience that sorrow fully. It's not too late to move on after that.",
              "quotecharacter": "Urutori",
              "quoteanime": " Utawarerumono"
           },
           
           {

              "quotesentence": "Because my time is limited, I don't have any time to waste hesitating. That is why I can walk straight ahead. That is why I never stop.",
              "quotecharacter": "Rosette Christopher",
              "quoteanime": " Chrono Crusade"
            },
            
            {

              "quotesentence": "If a girl chases after you, it's likely a trap.",
              "quotecharacter": "Keima Katsuragi",
              "quoteanime": " Kami nomi zo Shiru Sekai"
            },
           
           {

              "quotesentence": "People aren't as complex as you think they are. They're simple, and they get sad or angry over simple things. That's how they are. They're quickly affected by the littlest things, and live without knowing where they're going to fall down. That's who people are!",
              "quotecharacter": "Kurokami no Onna",
              "quoteanime": " Death Parade"
            },
            
            {

              "quotesentence": "Greed may not be good, but it’s not so bad either. You humans think greed is just for money or power, but everyone wants something they can’t have.",
              "quotecharacter": "Greed",
              "quoteanime": " Fullmetal Alchemist"
            },
            
            {

              "quotesentence": "If I'm getting in trouble no matter what I do, I may as well make a grand frontal assault and fight to my last breath.",
              "quotecharacter": "Yuuko Aioi",
              "quoteanime": " Nichijou"
            },
            
            {

              "quotesentence": "The ordinary days that we live in may, in fact, be a series of miracles.",
              "quotecharacter": "Koujirou Sasahara",
              "quoteanime": " Nichijou"
            },
            
            {

              "quotesentence": "By depending on others and letting them depend on you, people can exceed what they can do as individuals.",
              "quotecharacter": "Mikoto Misaka",
              "quoteanime": " To Aru Majutsu No Index"
            },
            
            {

              "quotesentence": "Love is nothing more than a cultural idea attached to our pre-existing genetic needs to reproduce and gain recognition from our peers.",
              "quotecharacter": "Akane Senri",
              "quoteanime": " Rewrite"
            },
            
            {

              "quotesentence": "You never appreciate the irreplaceable things in life until they're gone. Like summer vacation... or brothers.",
              "quotecharacter": "Umaru Doma",
              "quoteanime": " Himouto! Umaru-chan"
            },
            
            {

              "quotesentence": "Love is hating someone but you still want to be with them.",
              "quotecharacter": "Taichi Mashima",
              "quoteanime": " Chihayafuru"
            },
            
            {

              "quotesentence": "I'm sure that things that are truly fun can't be compared. Back then, now, and from now on, in the time you spend with others, lots of small fun things are born and disappear. If you are able to capture each of them, you'll never run out of fun things. Forever and ever. And here's one point of advice. Thinking that now is fun is what makes it the most fun.",
              "quotecharacter": "Alicia Florence",
              "quoteanime": " Aria The Animation"
            },
            
            {

              "quotesentence": "Everyone dies eventually, whether they have power or not. That's why you need to think about what you'll accomplish while you're alive.",
              "quotecharacter": "Mary Macbeth",
              "quoteanime": " Kekkai Sensen"
            },
            
            {

              "quotesentence": "Broadly speaking, there are two reasons a person feels the desire to teach something: Either he wants to pass on his successes or he wants to pass on his failures.",
              "quotecharacter": "Korosensei",
              "quoteanime": " Assasination Classroom"
            },
            
            {

              "quotesentence": "Oppression. Rule by fear. Dictatorships. It's a strange thing. Throughout history, for some reason, the lives of such rulers have always ended in the same way: Assassination by someone who isn't even part of a combat unit.",
              "quotecharacter": "Sora",
              "quoteanime": " No Game No Life"
            },
            {

              "quotesentence": "Power isn't determined by your size, but the size of your heart and dreams!",
              "quotecharacter": "Monkey D. Luffy",
              "quoteanime": "One Piece"
            },
            {
              "quotesentence": "My name jeff.",
              "quotecharacter": "Jeff",
              "quoteanime": "22 Jump Street"
            },
            {
              "quotesentence": "I only upload high quality rips.",
              "quotecharacter": "SiIvaGunner",
              "quoteanime": "SiIvaGunner"
            },
            {
              "quotesentence": "Please read the channel description.",
              "quotecharacter": "SiIvaGunner",
              "quoteanime": "SiIvaGunner"
            }
        ];
            
           
            
            var quote = anime_quote[Math.floor(Math.random() * (anime_quote.length))];
            var embed = new Discord.RichEmbed()
            .setTitle(`#${anime_quote.indexOf(quote)+1}`)
            .setDescription(`"${quote.quotesentence}"
~ ${quote.quotecharacter}`)
            .setFooter("From "+quote.quoteanime)
	          message.channel.send({embed})
          
    },
}