const fs = require("fs");
module.exports.config = {
  name: "taime",
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
  if(react.includes("ayaan") ||
     react.includes("Ayaan") || react.includes("Ayaan Khan") || react.includes("@ayaan khan") ||
react.includes("@Ayaan khan") ||
react.includes("AYAAN KHAN") ||     
react.includes("AYAAN")) {
    var msg = {
        body: `${name}  BABU AYAAN KHANA BANANE M BUSY HAU UNHE DISTRUB NA KARO💐✿`,attachment: fs.createReadStream(__dirname + `/noprefix/Ayan.gif`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🙃", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }