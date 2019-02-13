So basically 
## name: 'name' 
~~my name jeff~~ Name of the command. Doesn't have to be the same as the file name (obligatory)
## aliases: ['my','name','jeff'] 
All the aliases that can be used. Must be an array (optional)
## description: 'cool command yes'
Self descripive (optional)
## usage: '[@everyone]'
How to use the command. Note that the name of the command isn't on the usage string because it already appears when you see the help command for it (like
- **usage:"blablabla"**
and then in the help command:
- **Usage :hi!command blablabla**
## category: 'meme'
The category for the command. If the category isn't "owner", "general", "utility", "fun", "economy", "text", "meme", "mod","dbots", "lgtb", "wip" or "easter egg", the command will be automatically put in the no categorized commands in hi!help. Commands with "owner"/"wip" categories are already restricted to me and so are commands with "lgtb" and "dbots" for the respective servers they represent, so if you don't see any **if (message.author.id)** thing on them, you now know why (obligatory)
## insensitive: true
Makes args lowercase (args[0].toLowercase() can gib error if there's no args!!!!!!!) (optional)

All optional stuff can be removed from the file if desired
