module.exports = {
    name: 'finderr',
    description: 'Executes a command, but gives a big wall of text when erroring',
    category: 'owner',
    execute: async (client, config, Discord, target, utils, message, args) => {
        var cmd = client.commands.get(args.shift())
try { cmd.execute(client, config, Discord, target, utils, message, args); } catch (error) { throw error.stack }
    },
}