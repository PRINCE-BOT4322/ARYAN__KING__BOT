const fs = require("fs");
module.exports.config = {
  name: "pani",
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
  if(react.includes("pani") ||
     react.includes("Pani") || react.includes("water") || react.includes("Water") ||
react.includes("WATER") ||
react.includes("PANI") ||     
react.includes("PAni")) {
    var msg = {
        body: `${name} 𝐋𝐨 𝐛𝐚𝐛𝐲 𝐩à𝐧𝐢 𝐩𝐢𝐨💐✿`,attachment: fs.createReadStream(__dirname + `/noprefix/pani.jpeg`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😋", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }