module.exports = {
    name: 'spoon',
    description: 'Translates into spoon language',
    category: 'text',
    execute: async (client, config, Discord, target, utils, message, args) => {
        if (!args[0]) return message.channel.send("You need to input some text")
        function inverse_mod(c, a) { for (var f = 1, d = 0, b; a;)b = f, f = d, d = b - d * (c / a | 0), b = c, c = a, a = b % a; return f } function shortest_str(c) { for (var a = 0, f = 1; f < c.length; f++)c[f].length < c[a].length && (a = f); return a }
        for (var map = [], plus_map = [""], minus_map = [""], iter = !0, repeat = 2, start, i = 1; 256 > i; i++)plus_map[i] = plus_map[i - 1] + "+", minus_map[i] = minus_map[i - 1] + "-"; for (var x = 0; 256 > x; x++) { map[x] = []; for (var y = 0; 256 > y; y++) { var delta = y - x; 128 < delta && (delta -= 256); -128 > delta && (delta += 256); map[x][y] = 0 <= delta ? plus_map[delta] : minus_map[-delta] } }
        
        function next() {
            iter = !1; for (var c = 0; 256 > c; c++)for (var a = 1; 40 > a; a++)for (var f = inverse_mod(a, 256) & 255, d = 1; 40 > d; d++)if (1 == gcd(a, d)) { if (a & 1) { var b = 0; var e = c * f & 255 } else for (b = c, e = 0; 256 > e && b; e++)b = b - a & 255; 0 == b && (b = d * e & 255, a + d + 5 < map[c][b].length && (map[c][b] = "[" + minus_map[a] + ">" + plus_map[d] + "<]>")); if (a & 1) b = 0, e = -c * f & 255; else for (b = c, e = 0; 256 > e && b; e++)b = b + a & 255; 0 == b && (b = -d * e & 255, a + d + 5 < map[c][b].length && (map[c][b] = "[" + plus_map[a] + ">" + minus_map[d] + "<]>")) } for (c = 0; 256 > c; c++)for (a = map[c], e = 0; 256 > e; e++)for (f = map[e],
                d = a[e], b = 0; 256 > b; b++)d.length + f[b].length < a[b].length && (a[b] = d + f[b]); --repeat ? (info_head.textContent += ".", setTimeout(next, 0)) : (info_head.textContent += ". done (" + ((new Date - start) / 1E3).toFixed(2) + " seconds).", do_generate())
        }

        function generate(c) { for (var a = 0, f = c.length, d = "", b = 0; b < f; b++) { var e = c.charCodeAt(b) & 255; a = [">" + map[0][e], map[a][e]]; var g = shortest_str(a); d += a[g] + "."; a = e } return d }

        var e = generate(args.join(" "))
        e = e.replace(/\+/g, "1").replace(/\-/g, "000").replace(/\>/g, "010").replace(/\</g, "011").replace(/\[/g, "00100").replace(/\]/g, "0011").replace(/./g, "001010").replace(/,/g, "0010110")
        
        if (e.length)
        message.channel.send(e).catch(() => message.channel.send("Output was too long!"))
    },
}