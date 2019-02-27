module.exports = {
    name: 'spoon',
    description: 'Translates into spoon language',
    category: 'text',
    execute: async (client, config, Discord, target, utils, message, args) => {
        if (!args[0]) return message.channel.send("You need to input some text")
        //Borrowed from https://github.com/helgeh/brainfuck-text
        function BfGen(input) {
            function StringBuilder() {
              var sb = {};
          
              sb.value = '';
              sb.append = (txt) => sb.value += txt;
          
              return sb;
            }
          
            function closest (num, arr) {
              var arr2 = arr.map((n) => Math.abs(num - n))
              var min = Math.min.apply(null, arr2);
              return arr[arr2.indexOf(min)];
            }
          
            function buildBaseTable(arr) {
              var out = StringBuilder();
              out.append('+'.repeat(10));
              out.append('[')
              arr.forEach(function(cc) {
                out.append('>');
                out.append('+'.repeat(cc / 10));
              });
              out.append('<'.repeat(arr.length));
              out.append('-');
          
              out.append(']');
              return out.value;
            }
          
            var output = StringBuilder();
          
            var charArray = input.split('').map((c) =>c.charCodeAt(0));
            var baseTable = charArray.map((c) => Math.round(c / 10) * 10).filter((i, p, s) => s.indexOf(i) === p);
          
            output.append(buildBaseTable(baseTable));
          
            var pos = -1;
            charArray.forEach(function (charCode) {
              var bestNum = closest(charCode, baseTable);
              var bestPos = baseTable.indexOf(bestNum);
          
              var moveChar = pos < bestPos ? '>' : '<';
              output.append(moveChar.repeat(Math.abs(pos - bestPos)))
              pos = bestPos;
          
              var opChar = baseTable[pos] < charCode ? '+' : '-';
              output.append(opChar.repeat(Math.abs(baseTable[pos] - charCode)));
              output.append('.');
              baseTable[pos] = charCode;
            });
          
            return output.value;
          }
        var e = BfGen(args.join(" "))
        e = e.replace(/\+/g, "1").replace(/\-/g, "000").replace(/\>/g, "010").replace(/\</g, "011").replace(/\[/g, "00100").replace(/\]/g, "0011").replace(/./g, "001010").replace(/,/g, "0010110")
        
        message.channel.send(e).catch(() => message.channel.send("Output was too long!"))
    },
}
