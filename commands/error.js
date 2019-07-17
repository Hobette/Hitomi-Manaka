module.exports = {
    name: 'error',
    description: 'Generates a windows error. [Click here for a list of all icons you can use](https://pastebin.com/uwQ9ESwp)',
    category: 'fun',
    usage: '[icon] [98/xp] "<title>" "<text>" "<button1>" "<button2>" "<button3>\n`[] means obligatory, <> means optional. Quotes are needed tho`',
    execute: async (client, config, Discord, target, utils, message, args) => {
        
        
        var icons = [ 'none', 'Attention', 'Error', 'Error2', 'Error3', 'Error4', 'aim_guy', 'aol_icon', 'bomb', 'bomb_dynamite', 'bomb_grenade', 'bubble_i', 'bubble_q', 'bulb', 'butterfly', 'cake', 'circularsaw', 'control_pannel', 'cow', 'defrag', 'disk_blu', 'disk_lbl', 'disk_org', 'disk_red', 'disk_red_lbl', 'disk_skull', 'disk_yel', 'dos', 'e_orbit', 'file_cabinet', 'find', 'fortune_cookie', 'garbage_empty', 'garbage_full', 'gun', 'hammer', 'heart', 'help', 'hub', 'hwinfo', 'ic_a', 'keys', 'keys2', 'keys3', 'labtec', 'mac', 'mail', 'mail_deleted', 'mailbox', 'mouth', 'mycomputer', 'mycomputer2', 'mycomputer3', 'newspaper', 'peripheral', 'plant_leaf', 'radiation', 'ram', 'recycle', 'recycle2', 'scanner', 'screw', 'screw2', 'setup', 'sknife', 'skull', 'skull2', 'skull3', 'tux', 'tux_config', 'ups', 'zipdisk', 'zipdisk' ]
    
        if (!icons.includes(args[0])) return message.channel.send("You icon must be one from the list! Do `hi!help error` to get the list of all icons you can use!")
        if (args[1] !== "98" && args[1] !== "xp") return message.channel.send("Your second argument must be either `98` or `xp`")

        var other_args = args.slice(2).join(" ").replace(/\+/g, "%2B").replace(/ /g, "+").match(/"[^"]+"/g).map(e=>e.replace(/"/g, ""))
        
        if (!other_args[0]) { other_args[0] = "" }
        if (!other_args[1]) { other_args[1] = "" }
        if (!other_args[2]) { other_args[2] = "" }
        if (!other_args[3]) { other_args[3] = "" }
        if (!other_args[4]) { other_args[4] = "" }
        
        
        var urltext = `http://atom.smasher.org/error/${args[1]}.png.php?icon=${args[0]}&title=${other_args[0]}&url=&text=${other_args[1]}&b1=${other_args[2]}&b2=${other_args[3]}&b3=${other_args[4]}`
        
        var friccinimage = new Discord.Attachment(urltext, "error.png")
        message.channel.send(friccinimage).catch(()=> message.channel.send("Pleas give me attachment permissions,,,,,,"))
    },
}
