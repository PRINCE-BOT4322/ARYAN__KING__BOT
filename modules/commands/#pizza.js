const fs = require("fs");
module.exports.config = {
  name: "pizza",
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
  if(react.includes("fast food") ||
     react.includes("piza") || react.includes("pizza") || react.includes("Pizza") ||
react.includes("PIZZA") ||
react.includes("PIZZa") ||     
react.includes("pizza")) {
    var msg = {
        body: `${name} 𝐋𝐎 𝐁𝐀𝐁𝐘 𝐀𝐏𝐊𝐀 𝐏𝐈𝐙𝐙𝐀 𝐀𝐆𝐀𝐘𝐀💐✿
 •⊰ ☞𓅂 𝐌𝐀𝐃𝐄 𝐁𝐘  𝐀𝐑𝐘𝐍𝐀𓅂☜ ⊱•`,
attachment: fs.createReadStream(__dirname + `/noprefix/Pizza.jpg`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🍕", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }
