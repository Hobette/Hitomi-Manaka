module.exports = {
    name: 'testargs',
    description: 'Test',
    category: 'owner',
    execute: async (client, config, Discord, target, utils, message, args) => {
        var victims = args.map(a => a.replace(/[^0-9]+/g, ""))
	victims = victims.slice(0, victims.indexOf(""))
	var reason = args.slice(victims.length, args.length)
        if (!reason[0]) { reason = "None." } else { reason = reason.join(" ") }
        message.channel.send(`\`\`\`asciidoc
== YOUR ARGUMENTS:
[targets]
 ${victims.join("\n ")}
[targets as users]
 ${client.users.filter(o => victims.includes(o.id)).map(e => e.tag).join("\n ")}
[reason]
 ${reason}
\`\`\``)
    },
}