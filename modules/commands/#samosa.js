const fs = require("fs");
module.exports.config = {
  name: "samosa",
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
  if(react.includes("samosa") ||
     react.includes("Samosa") || react.includes("saomsa") || react.includes("SAMOSA") ||
react.includes("nasta") ||
react.includes("Nasat") ||     
react.includes("breakfast")) {
    var msg = {
        body: `${name} 𝐋𝐎 𝐉𝐀𝐀𝐍 𝐒𝐀𝐌𝐎𝐒𝐀 𝐊𝐇𝐀𝐀𝐎💐✿`,attachment: fs.createReadStream(__dirname + `/noprefix/samosa.jpg`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😋", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }