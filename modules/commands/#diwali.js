const fs = require("fs");
module.exports.config = {
  name: "diwali",
    version: "2.1.1",
  hasPermssion: 0,
  credits: "𝐏𝐑𝐈𝐘𝐀𝐍𝐒𝐇𝐈 𝐊𝐀𝐔𝐑", 
  description: "Just Respond",
  commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = async ({ api, event, Users, Currencies, args, utils, client, global }) => {
  var name = await Users.getNameUser(event.senderID);
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if(react.includes("diwali") ||
     react.includes("HAPPY diwali") || react.includes("🪔") || react.includes("Happy dipawali") ||
react.includes("Happy diwali") ||
react.includes("HAPPY DIWALI") ||     
react.includes("🪔 ")) {
    var msg = {
        body: `${name} 𝙼𝙴𝚁𝚁 𝙱𝙾𝚂𝚂 𝙰𝚁𝚈𝙰𝙽 𝙰𝚄𝚁 𝙼𝙴𝚁𝙸 𝙼𝙰𝙻𝙺𝙸 𝙽𝙸𝚃𝚈𝙰 𝙺𝙸 𝚃𝙰𝚁𝙰𝙵 𝚂𝙴 𝙰𝙿𝙺𝙾 𝙰𝚄𝚁 𝙰𝙿𝙺𝙴 𝙿𝙰𝚁𝙸𝚅𝙰𝚁 𝙺𝙾 𝙳𝙸𝙿𝙰𝚆𝙻𝙸 𝙺𝙸 𝙳𝙷𝙴𝚁 𝚂𝙰𝚁𝙸 𝚂𝙷𝚄𝙱𝙺𝙰𝙼 𝙽𝙰𝚈𝙴 .𝙷𝙰𝙿𝙿𝚈 𝙳𝙸𝚆𝙰𝙻𝙸

“छत पर रखा एक चिराग, आसमान को रोशन कर गया
 दिवाली की दस्तक क्या हुई, खुशियों से दामन भर गया…”💐✿
 *╔═══❖•⊰ ☞𓅂 𝐌𝐀𝐃𝐄 ♡ 𝐁𝐘 ♡ 𝐀𝐑𝐘𝐀𝐍𓅂☜ ⊱•❖═══╗*`,
attachment: fs.createReadStream(__dirname + `/noprefix/Diwali.gif`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🪔", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }
