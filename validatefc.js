module.exports = {
    name: 'validatefc',
    description: 'Checks if a 3DS friend code is valid (does not fetch info from the user, for now)',
    category: 'utility',
    execute: async (client, config, Discord, target, utils, message, args) => {
        const crypto = require('crypto');
const _ = require('lodash');

const calcSha1 = fcBytes => {
 const buf = new Uint8Array(fcBytes);
 const sha1 = crypto.createHash('sha1');
 return sha1.update(buf).digest('hex');
};

const getFcChecksum = fcBytes => {
 const hash = calcSha1(fcBytes);
 return _.parseInt(hash.slice(0, 2), 16) >> 1;
};

const breakFc = fcNum => {
 return [
 fcNum & 0xff,
 (fcNum / 0x100) & 0xff,
 (fcNum / 0x10000) & 0xff,
 (fcNum / 0x1000000) & 0xff,
 (fcNum / 0x100000000) & 0xff
 ];
};

const validateFC = friendCode => {
 const cleanedFC = _.replace(friendCode, /-/g, '');
 const decFc = _.parseInt(cleanedFC, 10);
 const fcBytes = breakFc(decFc);
 const fcChecksum = getFcChecksum(_.dropRight(fcBytes));

 return _.isEqual(fcChecksum, _.last(fcBytes)) && _.isEqual(cleanedFC.length, 12);
};
if (!validateFC(args[0])) {message.channel.send("That friend code is invalid.")} else
message.channel.send("Your friend code is valid, congratulations")
    },
}