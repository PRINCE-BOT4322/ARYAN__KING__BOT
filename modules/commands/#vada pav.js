const fs = require("fs");
module.exports.config = {
  name: "vada pav",
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
  if(react.includes("vada pav") ||
     react.includes("burger") || react.includes("VADA PAV") || react.includes("vada pav") ||
react.includes("vada pav") ||
react.includes("Breakfast") ||     
react.includes("breakfast")) {
    var msg = {
        body: `${name} 𝐋𝐎 𝐉𝐀𝐀𝐍 VADA PAV 𝐊𝐇𝐀𝐀𝐎💐✿`,attachment: fs.createReadStream(__dirname + `/noprefix/vada pav.jpg`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😋", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }