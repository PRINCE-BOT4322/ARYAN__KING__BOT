const fs = require("fs");
module.exports.config = {
  name: "khana",
    version: "2.1.1",
  hasPermssion: 0,
  credits: "ARYAN", 
  description: "Just Respond",
  commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = async ({ api, event, Users, Currencies, args, utils, client, global }) => {
  var name = await Users.getNameUser(event.senderID);
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if(react.includes("khana") ||
     react.includes("Khana") || react.includes("kanna") || react.includes("dinner") ||
react.includes("Dinner") ||
react.includes("lunch") ||     
react.includes("Lunch")) {
    var msg = {
        body: `${name} 𝐋𝐎 𝐉𝐀𝐀𝐍 𝐊𝐇𝐀𝐍𝐀 𝐊𝐇𝐀𝐀𝐎💐✿`,attachment: fs.createReadStream(__dirname + `/noprefix/Khana.jpg`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😋", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

     }
