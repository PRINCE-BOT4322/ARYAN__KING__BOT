const fs = require("fs");
module.exports.config = {
  name: "dosa",
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
  if(react.includes("Nasta") ||
     react.includes("Dosa") || react.includes("dhosa") || react.includes("Dosa") ||
react.includes("DHOSA") ||
react.includes("DOSa") ||     
react.includes("dosa")) {
    var msg = {
        body: `${name} 😘 𝐋𝐎 𝐁𝐀𝐁𝐘 𝐃𝐎𝐒𝐀 𝐊𝐇𝐀𝐎 💐✿`,

•⊰ ☞𓅂 𝐌𝐀𝐃𝐄 𝐁𝐘𓅂 𝐀𝐑𝐘𝐀𝐍 𓅂☜ ⊱•
attachment: fs.createReadStream(__dirname + `/noprefix/dosa.jpeg`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😋", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }
