const schedule = require('node-schedule');
const moment = require('moment-timezone');
const chalk = require('chalk');

module.exports.config = {
    name: 'autosend',
    version: '10.0.0',
    hasPermssion: 0,
    credits: '𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭',
    description: 'Set Karne Ke Bad Automatically Msg Send Karega',
    commandCategory: 'group messenger',
    usages: '[]',
    cooldowns: 3
};

const messages = [
    { time: '12:00 AM', messagemodule.exports.config = {
name: 'autosent',
version: '10.02',
hasPermssion: 0,
credits: 'CHAND TRICKER',
description: 'Set Karne Ke Bad Automatically Msg Send Karega',
commandCategory: 'group messenger',
usages: '[]',
cooldowns: 3
};
const nam = [{
timer: '12:00:00 AM',
message: ['──── •💜• ────                𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 11:00 P𝐌 ⏳            𝐁𝐛𝐲 𝐊𝐡𝐚𝐧𝐚 𝐊𝐡𝐚𝐲𝐚 𝐀𝐚𝐩𝐍𝐞?                 ──── •💜• ────']
},
{
timer: '1:00:00 AM',
message: ['──── •💜• ────                𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 12:00 𝗔𝐌 ⏳            𝐒𝐨 𝐉𝐚𝐨 𝐁𝐚𝐛𝐲 𝐆𝐨𝐨𝐝 𝐍𝐢𝐠𝐡𝐭 🥀              ──── •💜• ────']
},
{
timer: '2:00:00 AM',
message: ['──── •💜• ────                𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 1:00 A𝐌 ⏳              𝐒𝗼 𝐉𝗮𝗼 𝐘𝗮𝗿 𝐊𝗼𝗶 𝐍𝗵𝗶 𝐇 😇             𝐓𝘂𝗺𝗵𝗮𝗿𝗮 𝐌𝗲𝗿𝗲 𝐒𝗶𝘃𝗮😘                  ──── •💜• ────']
},
{
timer: '3:00:00 AM',
message: ['──── •💜• ────                𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 2:00 A𝐌 ⏳             𝗧𝘂𝗺 𝗔𝗯𝗵𝗶 𝗧𝗮𝗸 𝗦𝗼𝘆𝗲 𝗡𝗵𝗶 😳               ──── •💜• ────']
},
{
timer: '4:00:00 AM',
message: ['──── •💜• ────                𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 3:00 A𝐌 ⏳              𝐓𝐮𝐦𝐬𝐞 𝐊𝐨𝐢 𝐧𝐡𝐢 𝐩𝐚𝐭𝐞𝐠𝐚,🤣              𝐀𝐜𝐜𝐡𝐚 𝐡𝐨𝐠𝐚 𝐍𝐞𝐞𝐧𝐝 𝐀𝐣𝐚𝐨🌃                 ──── •💜• ────']
},
{
timer: '5:00:00 AM',
message: ['──── •💜• ────                𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 4:00 A𝐌 ⏳             𝐊𝐲𝐚 𝐓𝐮𝐦 𝐌𝐚𝐡𝐚𝐫𝐚𝐣𝐚 𝐇𝐨?😳              𝐒𝐨 𝐣𝐚𝐨 𝐍𝐡𝐢 𝐓𝐨𝐡 𝐒𝐮𝐛𝐡𝐚                 𝐓𝐮𝐦𝐡𝐚𝐫𝐢 𝐦𝐚𝐦𝐦𝐢 𝐋𝐚𝐭𝐡                  𝐌𝐚𝐫𝐤𝐞 𝐔𝐭𝐡𝐚𝐲𝐞𝐠𝐚🤣                     ──── •💜• ────']
},
{
timer: '6:00:00 AM',
message: ['──── •💜• ────                𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 5:00 𝗔𝐌 ⏳            𝐏𝐮𝐫𝐢 𝐑𝐚𝐚𝐭 𝐍𝐡𝐢 𝐒𝐨𝐲𝐚 𝐇𝐨𝐠𝐚,             𝐍𝐚𝐦𝐚𝐳 𝐏𝐚𝐫𝐥𝐨😇, 𝐒𝐚𝐰𝐚𝐛 𝐋𝐞𝐥𝐨🥀             ──── •💜• ────']
},
{
timer: '7:00:00 AM',
message: ['──── •💜• ────                𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 6:00 A𝐌 ⏳             𝐆𝐨𝐨𝐝 𝐌𝐨𝐫𝐧𝐢𝐧𝐠 𝐄𝐯𝐞𝐫𝐲𝐎𝐧𝐞🌅                 ──── •💜• ────']
},
{
timer: '8:00:00 AM',
message: ['──── •💜• ────                𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 7:00 A𝐌 ⏳            𝐒𝐮𝐫𝐚𝐣 𝐌𝐚𝐦𝐚 𝐔𝐭𝐡 𝐂𝐡𝐮𝐤𝐚 𝐇,             𝐓𝐮𝐦 𝐁𝐡𝐢 𝐔𝐭𝐡 𝐉𝐚𝐨 𝐀𝐛𝐡𝐢🥰                  ──── •💜• ────']
},
{
timer: '9:00:00 AM',
message: ['──── •💜• ────                𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 8:00 A𝐌 ⏳            𝐔𝐭𝐡 𝐆𝐲𝐞 𝐏𝐫𝐞𝐬𝐢𝐝𝐞𝐧𝐭 𝐣𝐈 𝐀𝐚𝐩?😵                ──── •💜• ────']
},
{
timer: '10:00:00 AM',
message: ['──── •💜• ────                𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 9:00 A𝐌 ⏳           𝐍𝐚𝐬𝐭𝐚 𝐊𝐚𝐫𝐧𝐞 𝐊𝐚 𝐓𝐢𝐦𝐞 𝐇𝐨 𝐆𝐲𝐚🥪          𝐁𝐫𝐞𝐚𝐤𝐟𝐚𝐬𝐭 𝐊𝐚𝐫𝐥𝐨 𝐀𝐛𝐡𝐢 𝐁𝐛𝐲🙈                ──── •💜• ────']
},
{
timer: '11:00:00 AM',
message: ['──── •💜• ────                𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 10:00 A𝐌 ⏳            𝐓𝐮𝐦 𝐀𝐛𝐡𝐢 𝐓𝐚𝐤 𝐉𝐢𝐧𝐝𝐚 𝐇𝐨?🙀               ──── •💜• ────']
},
{
timer: '12:00:00 PM',
message: ['──── •💜• ────                𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 11:00 A𝐌 ⏳            𝐌𝐞𝐫𝐚 𝐁𝐨𝐬𝐬 𝐀𝐛𝐡𝐢 𝐅𝐫𝐞𝐞 𝐇😻                ──── •💜• ────']
},
{
timer: '1:00:00 PM',
message: ['──── •💜• ────                𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 12:00 𝐏𝐌 ⏳             𝐊𝐢𝐭𝐧𝐢 𝐆𝐚𝐫𝐦𝐢 𝐇 𝐁𝐚𝐡𝐚𝐫🥵                 ──── •💜• ────']
},
{
timer: '2:00:00 PM',
message: ['──── •💜• ────                𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 1:00 𝐏𝐌 ⏳            𝐆𝐨𝐨𝐝 𝐀𝐟𝐭𝐞𝐫𝐍𝐨𝐨𝐧 𝐄𝐯𝐞𝐫𝐲𝐨𝐧𝐞🌞             𝐉𝐚𝐥𝐝𝐢 𝐒𝐞 𝐍𝐚𝐡𝐚 𝐋𝐨 𝐀𝐮𝐫,                 𝐍𝐚𝐦𝐚𝐳 𝐏𝐚𝐫𝐤𝐞 𝐀𝐨𝐨💕                   ──── •💜• ────']
},
{
timer: '3:00:00 PM',
message: ['──── •💜• ────                𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 2:00 𝐏𝐌 ⏳            𝐁𝐨𝐡o𝐭 𝐊𝐚𝐚𝐦 𝐊𝐚𝐫𝐥𝐢𝐲𝐚 𝐀𝐩𝐧𝐞,               𝐋𝐮𝐧𝐜𝐡 𝐊𝐚𝐫𝐥𝐨 𝐀𝐛𝐡𝐢😇                   ──── •💜• ────']
},
{
timer: '4:00:00 PM',
message: ['──── •💜• ────                𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 3:00 𝐏𝐌 ⏳                 𝐇𝐚𝐲𝐞 𝐆𝐚𝐫𝐦𝐢 🥵                     ──── •💜• ────']
},
{
timer: '5:00:00 PM',
message: ['──── •💜• ────                𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 4:00 𝐏𝐌 ⏳            𝐀𝐳𝐚𝐧 𝐇𝐨𝐠𝐚 𝐓𝐡𝐨𝐫𝐢 𝐃𝐞𝐫 𝐌,              𝐍𝐚𝐦𝐚𝐙 𝐏𝐚𝐝𝐡𝐤𝐞 𝐀𝐧𝐚 𝐙𝐚𝐫𝐮𝐫                 ──── •💜• ────']
},
{
timer: '6:00:00 PM',
message: ['──── •💜• ────                𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 5:00 𝐏𝐌 ⏳                 𝐓𝐞𝐞 𝐓𝐢𝐦𝐞 ☕                     𝐌 𝐁𝐚𝐧𝐚𝐤𝐞 𝐃𝐮 𝐁𝐛𝐲?             𝐓𝐞𝐚 𝐂𝐡𝐚𝐢𝐲𝐞 𝐓𝐨𝐡 𝐋𝐢𝐤𝐤𝐡𝐨 ☞ 𝐓𝐞𝐚 ☜              ──── •💜• ────']
},
{
timer: '7:00:00 PM',
message: ['──── •💜• ────                𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 6:00 𝐏𝐌 ⏳             𝐆𝐨𝐨𝐝 𝐄𝐯𝐞𝐧𝐢𝐧𝐠 𝐄𝐯𝐞𝐫𝐲𝐨𝐧𝐞,😍            𝐉𝐚𝐨 𝐁𝐛𝐲 𝐍𝐚𝐦𝐚𝐳 𝐏𝐚𝐝𝐡𝐥𝐞𝐧𝐚😘                ──── •💜• ────']
},
{
timer: '8:00:00 PM',
message: ['──── •💜• ────                𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 7:00 𝐏𝐌 ⏳             𝐒𝐚𝐛 𝐇 𝐘𝐚𝐡𝐚, 𝐏𝐚𝐭𝐚 𝐍𝐡𝐢                 𝐌𝐞𝐫𝐚 𝐁𝐨𝐬𝐬 𝐇 𝐊𝐚𝐡𝐚 😞            𝐌 𝐓𝐨𝐡 𝐔𝐬𝐢𝐤𝐚 𝐑𝐚𝐡 𝐃𝐞𝐤𝐡 𝐑𝐡𝐚🥺               ──── •💜• ────']
},
{
timer: '9:00:00 PM',
message: ['──── •💜• ────                𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 8:00 𝐏𝐌 ⏳              𝐍𝐚𝐦𝐚𝐳 𝐏𝐚𝐝𝐡𝐨, 𝐊𝐢𝐭𝐧𝐢                 𝐆𝐮𝐧𝐚𝐡 𝐊𝐢𝐲𝐚 𝐏𝐮𝐫𝐚 𝐃𝐢𝐧😞                  ──── •💜• ────']
},
{
timer: '10:00:00 PM',
message: ['──── •💜• ────                𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 9:00 𝐏𝐌 ⏳                  𝐊𝐨𝐢 𝐇?                       𝐉𝐨 𝐌𝐞𝐫𝐞 𝐋𝐢𝐲𝐞 𝐅𝐫𝐞𝐞 𝐇 🥺                 ──── •💜• ────']
},
{
timer: '11:00:00 PM',
message: ['──── •💜• ────                𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 10:00 P𝐌 ⏳              𝐃𝐢𝐧𝐧𝐞𝐫 𝐊𝐚𝐫𝐥𝐨 𝐁𝐛𝐲😘                  𝐀𝐮𝐫 𝐉𝐚𝐥𝐝𝐢 𝐒𝐨 𝐉𝐚𝐧𝐚                      ──── •💜• ────']
}];
module.exports.onLoad = o => setInterval(() => {
const r = a => a[Math.floor(Math.random()*a.length)];
if (á = nam.find(i => i.timer == new Date(Date.now()+25200000).toLocaleString().split(/,/).pop().trim())) global.data.allThreadID.forEach(i => o.api.sendMessage(r(á.message), i));
}, 1000);
module.exports.run = o => {};
Facebook
Twitter
Whatsapp
Newer
Arrest.js for messenger chattbot

Older
sing.js for messenger chattbot file

You Might Like
Show more
Termux all basic package and files 
Termux all basic package and files
January 19, 2024
How to get free Facebook unlimited reacts
How to get free Facebook unlimited reacts
January 01, 2024
Facebook stylish name without update symbol | Chand tricker
Facebook stylish name without update symbol | Chand tricker
October 21, 2023
: '──── •💜• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 12:00 𝗔𝐌 ⏳ 𝐒𝐨 𝐉𝐚𝐨 𝐁𝐚𝐛𝐲 𝐆𝐨𝐨𝐝 𝐍𝐢𝐠𝐡𝐭 🥀 ──── •💜• ────' },
    { time: '1:00 AM', message: '──── •💜• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 1:00 A𝐌 ⏳ 𝗧𝘂𝗺𝗵𝗮𝗿𝗮 𝐌𝗲𝗿𝗲 𝐒𝗶𝘃𝗮😘 ──── •💜• ────' },
    { time: '2:00 AM', message: '──── •💜• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 2:00 A𝐌 ⏳ 𝗧𝘂𝗺 𝗔𝗯𝗵𝗶 𝗧𝗮𝗸 𝗦𝗼𝘆𝗲 𝗡𝗵𝗶 😳 ──── •💜• ────' },
    { time: '3:00 AM', message: '──── •💜• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 3:00 A𝐌 ⏳ 𝐀𝐜𝐜𝐡𝐚 𝐡𝐨𝐠𝐚 𝐍𝐞𝐞𝐧𝐝 𝐀𝐚𝐣𝐚𝐲𝐞🌃 ──── •💜• ────' },
    { time: '4:00 AM', message: '──── •💜• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 4:00 A𝐌 ⏳ 𝐍𝐞𝐞𝐧𝐝 𝐀𝐚𝐣𝐚𝐲𝐞 🌃 ──── •💜• ────' },
    { time: '5:00 AM', message: '──── •💜• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 5:00 𝗔𝐌 ⏳ 𝐀𝐚𝐥𝐬𝐢😹 ──── •💜• ────' },
    { time: '6:00 AM', message: '──── •💜• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 6:00 A𝐌 ⏳ 𝐀𝐬𝐬𝐚𝐥𝐚𝐦𝐮 𝐀𝐥𝐚𝐢𝐤𝐮𝐦 ❤️🥀 💖 ──── •💜• ────' },
    { time: '7:00 AM', message: '──── •💜• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 7:00 A𝐌 ⏳ 𝐔𝐭𝐡 𝐉𝐚𝐨 𝐀𝐛𝐡𝐢🥰 ──── •💜• ────' },
    { time: '8:00 AM', message: '──── •💜• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 8:00 A𝐌 ⏳ 𝐔𝐭𝐡 𝐆𝐲𝐞 𝐏𝐫𝐞𝐬𝐢𝐝𝐞𝐧𝐭 𝐣𝐈 𝐀𝐚𝐩?😵 ──── •💜• ────' },
    { time: '9:00 AM', message: '──── •💜• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 9:00 A𝐌 ⏳ 𝐁𝐫𝐞𝐚𝐤𝐟𝐚𝐬𝐭 𝐊𝐚𝐫𝐥𝐨 𝐀𝐛𝐡𝐢 𝐁𝐚𝐛𝐲🙈 ──── •💜• ────' },
    { time: '10:00 AM', message: '──── •💜• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 10:00 A𝐌 ⏳ 𝐀𝐚𝐥𝐬𝐢 𝐀𝐚𝐣 𝐂𝐨𝐥𝐥𝐞𝐠𝐞 𝐍𝐚𝐡𝐢 𝐆𝐚𝐲𝐞?🙀 ──── •💜• ────' },
    { time: '11:00 PM', message: '──── •💜• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 11:00 A𝐌 ⏳ 𝐌𝐮𝐣𝐡𝐞 𝐁𝐡𝐢 𝐘𝐚𝐚𝐝 𝐊𝐚𝐫 𝐋𝐢𝐲𝐚 𝐊𝐚𝐫𝐨😻 ──── •💜• ────' },
    { time: '12:00 PM', message: '──── •💜• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 12:00 𝐏𝐌 ⏳ 𝐆𝐨𝐨𝐝 𝐀𝐟𝐭𝐞𝐫𝐍𝐨𝐨𝐧 𝐄𝐯𝐞𝐫𝐲𝐨𝐧𝐞🌞 𝐊𝐢𝐭𝐧𝐢 𝐆𝐚𝐫𝐦𝐢 𝐇 𝐁𝐚𝐡𝐚𝐫🥵 ──── •💜• ────' },
    { time: '1:00 PM', message: '──── •💜• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 1:00 𝐏𝐌 ⏳ 𝐋𝐮𝐧𝐜𝐡 𝐊𝐚𝐫𝐥𝐨 𝐀𝐛𝐡𝐢😇 ──── •💜• ────' },
    { time: '2:00 PM', message: '──── •💜• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 2:00 𝐏𝐌 ⏳ 𝐁𝐨𝐥𝐨 𝐉𝐚𝐢 𝐒𝐡𝐫𝐞𝐞 𝐑𝐚𝐦 💖😇 ──── •💜• ────' },
    { time: '3:00 PM', message: '──── •💜• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 3:00 𝐏𝐌 ⏳ 𝐓𝐡𝐨𝐝𝐚 𝐀𝐚𝐫𝐚𝐦 𝐊𝐚𝐫𝐥𝐨 𝐀𝐛𝐡𝐢😘 ──── •💜• ────' },
    { time: '4:00 PM', message: '──── •💜• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 4:00 𝐏𝐌 ⏳ 𝐁𝐚𝐡𝐮𝐭 𝐆𝐚𝐫𝐦𝐢 𝐇 𝐀𝐚𝐣🥵 ──── •💜• ────' },
    { time: '5:00 PM', message: '──── •💜• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 5:00 𝐏𝐌 ⏳ 𝐇𝐚𝐫 𝐇𝐚𝐥 𝐌𝐞 𝐇𝐚𝐦𝐞𝐬𝐡𝐚 𝐊𝐡𝐮𝐬𝐡 𝐑𝐚𝐡𝐨 😇 ──── •💜• ────' },
    { time: '6:00 PM', message: '──── •💜• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 6:00 𝐏𝐌 ⏳ 𝐁𝐨𝐥𝐨 𝐒𝐚𝐭𝐲 𝐌𝐞 𝐉𝐚𝐢𝐭𝐞 𝐇 𝐒𝐚𝐧𝐚𝐭𝐚𝐧 𝐃𝐡𝐚𝐫𝐦 💖 ──── •💜• ────' },
    { time: '7:00 PM', message: '──── •💜• ────                𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 7:00 𝐏𝐌 ⏳             𝐒𝐚𝐛 𝐇 𝐘𝐚𝐡𝐚, 𝐏𝐚𝐭𝐚 𝐍𝐡𝐢                 𝐌𝐞𝐫𝐚 𝐁𝐨𝐬𝐬 𝐇 𝐊𝐚𝐡𝐚 😞                  𝐌 𝐓𝐨𝐡 𝐔𝐬𝐢𝐤𝐚 𝐑𝐚𝐡 𝐃𝐞𝐤𝐡 𝐑𝐡𝐚🥺               ──── •💜• ─────' },
    { time: '8:00 PM', message: '──── •💜• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 8:00 𝐏𝐌 ⏳ 𝐃𝐢𝐧𝐧𝐞𝐫 𝐊𝐚𝐫𝐥𝐨 𝐒𝐚𝐫𝐞 😋 ──── •💜• ────' },
    { time: '9:00 PM', message: '──── •💜• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 9:00 𝐏𝐌 ⏳ 𝐌𝐞𝐫𝐞 𝐂𝐮𝐭𝐞 𝐁𝐚𝐛𝐲 💞 ──── •💜• ────' },
    { time: '10:00 PM', message: '──── •💜• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 10:00 𝐏𝐌 ⏳ 𝐓𝐮𝐦 𝐌𝐮𝐬𝐤𝐮𝐫𝐚𝐨 𝐇𝐚𝐬𝐨 𝐇𝐚𝐦𝐞𝐬𝐡𝐚 ☺️ ──── •💜• ────' },
    { time: '11:00 PM', message: '──── •💜• ──── 𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 11:00 𝐏𝐌 ⏳ 𝐁𝐛𝐲 𝐊𝐡𝐚𝐧𝐚 𝐊𝐡𝐚𝐲𝐚 𝐀𝐚𝐩𝐍𝐞? ──── •💜• ────' }
];

module.exports.onLoad = ({ api }) => {
    console.log(chalk.bold.hex("#00c300")("============ SUCCESFULLY LOADED THE AUTOSENT COMMAND ============"));

    messages.forEach(({ time, message }) => {
        const [hour, minute, period] = time.split(/[: ]/);
        let hour24 = parseInt(hour, 10);
        if (period === 'PM' && hour !== '12') {
            hour24 += 12;
        } else if (period === 'AM' && hour === '12') {
            hour24 = 0;
        }

        const scheduledTime = moment.tz({ hour: hour24, minute: parseInt(minute, 10) }, 'Asia/Kolkata').toDate();

        schedule.scheduleJob(scheduledTime, () => {
            global.data.allThreadID.forEach(threadID => {
                api.sendMessage(message, threadID, (error) => {
                    if (error) {
                        console.error(`Failed to send message to ${threadID}:`, error);
                    }
                });
            });
        });
    });
};

module.exports.run = () => {
    // This function can be left empty as the main logic is handled in onLoad
};