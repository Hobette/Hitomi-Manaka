So basically 
## name: 'name' 
~~my name jeff~~ Name of the command. Doesn't have to be the same as the file name buuuut should be to avoid confusion (obligatory)

## aliases: ['alias1', 'alias2', 'etc'] 
All the aliases that can be used. Must be an array (optional)

## description: 'description'
Self descripive (optional)

## usage: 'usage'
How to use the command. Writing the name of the command is not necessary. Better explained, if you write "memes" in the usage text of a command, the help message for that command will display `(prefix you used)(command) memes`

## category: 'meme'
The category for the command. Avaiable categories are `owner`, `general`, `utility`, `fun`, `economy`, `text`, `meme`, `mod`, `dbots`, `lgtb`, `wip` and `easter egg`. Writing anything else or leaving the category in blank will cause the command to belong in the list of commands with no category in `hi!help`. Commands marked as `owner` or `wip` can only be usable by me, and commands marked as `lgtb` or `dbots` can only be used in the LGTBQ+ Lounge Reborn!!! (348937971409485857) and Discord Bots (110373943822540800) servers, respectively. Commands marked as `easter egg` and `wip` are hidden in the help command (obligatory)

## insensitive: true
Makes args lowercase (args[0].toLowercase() can gib error if there's no args!!!!!!!) (optional)

All optional stuff can be removed from the command's code (or left in blank) if desired
