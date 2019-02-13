module.exports = {
	name: "verify",
	description: "Sends a random meme about unverified users (this command is exclusive to **LGTBQ+ Lounge REBORN!!**)",
	category: 'lgtb',

	execute: async (client, config, Discord, target, utils, message, args) => {
		if (message.member.roles.has("350261118511611914")) { message.channel.send("You need to verify in order to use this command.")} else
			var vmemes = ['https://cdn.discordapp.com/attachments/406497072939008001/500692284925542420/isabelle-1.gif',
				'https://cdn.discordapp.com/attachments/406497072939008001/500692285722329088/aZWi3h8u6.png',
				'https://cdn.discordapp.com/attachments/406497072939008001/500692286405869568/unknown-31.png',
				'https://cdn.discordapp.com/attachments/406497072939008001/500692286968168468/thesearch.png',
				'https://cdn.discordapp.com/attachments/406497072939008001/500692287500713995/nitro.png',
				'https://cdn.discordapp.com/attachments/406497072939008001/500692288133922818/EEKyPJhiy.png',
				'https://cdn.discordapp.com/attachments/406497072939008001/500692288733970443/ESJ_ajKrj.png',
				'https://cdn.discordapp.com/attachments/406497072939008001/500692289337819151/dosomething-1.png',
				'https://cdn.discordapp.com/attachments/406497072939008001/500692289832615966/tweet-1.png',
				'https://cdn.discordapp.com/attachments/406497072939008001/500692289832615968/gratz-3.png',
				'https://cdn.discordapp.com/attachments/461509407839092736/501394964899561480/nichijou.gif',
				'https://cdn.discordapp.com/attachments/406497072939008001/500693240991711242/output-1.png',
				'https://cdn.discordapp.com/attachments/406497072939008001/500693241436569600/meme.png',
				'https://cdn.discordapp.com/attachments/406497072939008001/500693241436569603/output-1_1.png',
				'https://cdn.discordapp.com/attachments/406497072939008001/500693242153664512/b4a3f9b0-62dd-4e9a-8088-76ae2e2b6bbb.png',
				'https://cdn.discordapp.com/attachments/406497072939008001/500693242153664513/output.png',
				'https://cdn.discordapp.com/attachments/406497072939008001/500693243147845647/thesearch-1.png',
				'https://cdn.discordapp.com/attachments/406497072939008001/500693243604893716/336492042299637771-1.png',
				'https://cdn.discordapp.com/attachments/406497072939008001/500693243604893717/64938a1d-9027-4c56-bba0-8f0688c69508.png',
				'https://cdn.discordapp.com/attachments/406497072939008001/500693244208742400/72a92490-047f-440e-87f0-53e5d8ce8953.png',
				'https://cdn.discordapp.com/attachments/406497072939008001/500693760720502804/FREEFREEFREE.gif',
				'https://cdn.discordapp.com/attachments/406497072939008001/500693761379270666/realfact.png',
				'https://cdn.discordapp.com/attachments/406497072939008001/500693761379270667/days.png',
				'https://cdn.discordapp.com/attachments/406497072939008001/500693761945370644/5aaf7011-f27f-43a7-a927-11d2aad3a259.png',
				'https://cdn.discordapp.com/attachments/406497072939008001/500693761945370646/DOYOUNEEDHELP.png',
				'https://cdn.discordapp.com/attachments/406497072939008001/500693762402418719/reminder.png',
				'https://cdn.discordapp.com/attachments/449345217779466252/501134738820431912/wth.png',
				'https://cdn.discordapp.com/attachments/349122704995254275/501133812625833984/wFeTzNMqZn4QAAAABJRU5ErkJggg.png',
				'https://cdn.discordapp.com/attachments/349122704995254275/501133501463134224/vXwS5NljPGuJWkEUcHQ72srWupZwPwhf9P2wTWF7YoiCPCEDHrBdVRdwjwir80sFVMAGHW1WAJymMYd1mJVKHjQ6UYivxvVeA7Cg.png',
				'https://cdn.discordapp.com/attachments/349122704995254275/501133384353972234/pLrbdfyvJRQAAAABJRU5ErkJggg.png',
				'https://cdn.discordapp.com/attachments/349122704995254275/501132266022371328/image0.jpg',
				'https://media.discordapp.net/attachments/349122704995254275/501132222409998382/dB4loETg7iXCn7UfAvjYfJBSQSAIrI9AtwW8vsmxMAgEgSAQBIJAEAgCQaCCQAhgBb2UDQJBIAgEgSAQBILACREIATyh02JyEAgC.png',
				'https://cdn.discordapp.com/attachments/349122704995254275/501132074820960286/XY34sMAAAAASUVORK5CYII.png',
				'https://cdn.discordapp.com/attachments/349122704995254275/501131736546148352/QZdMKukAAAAASUVORK5CYII.png',
				'https://cdn.discordapp.com/attachments/461509407839092736/501480512452296724/file.jpg',
				'https://cdn.discordapp.com/attachments/461509407839092736/501481547233361930/file.jpg',
				'https://cdn.discordapp.com/attachments/461509407839092736/501481864599437322/file.jpg',
				'https://cdn.discordapp.com/attachments/425796981999403032/503651657905864724/p7gARaOa.png'
			];

		vmemes = utils.random(vmemes)
		message.channel.send(utils.embedImage(vmemes()));

	}
}