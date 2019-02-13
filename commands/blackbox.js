module.exports = {
    name: 'blackbox',
    description: 'Have fun while you try to find out what this does!',
    usage: '(nope you have to guess it)',
    category: "fun",
    execute: async (client, config, Discord, target, utils, message, args) => {
        for (i = 0; i < args.length; i++) { args[i] = parseInt(args[i]) }
        
        function magicalFormula(in1, in2) {
            if (in2 === 0) {
                return in1 * 2;
            }
            return (in1 * 2 ** Math.ceil(Math.log2(in2 + 1))) + in2;
        }

        function computeBlackbox(args) {
            let result = 0;
            while(!(result = args.shift()) && args.length);
            let isNegative = result < 0;
            if(isNegative) {
              result *= -1;
            }
            while(args.length) {
                let arg2 = args.shift() || 0;
                result = magicalFormula(result, arg2);
            }
            return (isNegative && -1 * result) || result;
        }
        if (args.includes(NaN)) { message.channel.send('Invalid input.') } else
        message.channel.send(computeBlackbox(args).toString().replace("69", "sex number hehe epic"))
    },
}