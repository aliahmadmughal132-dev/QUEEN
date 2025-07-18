 const fs = require("fs");
module.exports.config = {
	name: "Ahad",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Ahad", 
	description: "no prefix",
	commandCategory: "No command marks needed",
	usages: "...",
    cooldowns: 100, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("owner") ||
     react.includes("Ahad") || 
react.includes("ahad")) {
		var msg = {
				body: "★𝗢𝘄𝗻𝗲𝗿 + 𝗠𝗮𝗱𝗲 𝗕𝘆★\n\n✦𝐀𝐇𝐀𝐃 𝐌𝐔𝐆𝐇𝐀𝐋✦\n\n★★᭄𝐎𝐰𝐧𝐞𝐫 𝐩𝐫𝐨𝐟𝐢𝐥𝐞 𝐋𝐢𝐧𝐤 :\n\n✦ https://www.facebook.com/share/1JRgmFfzkQ/ ✦ \n𝗝𝗼𝗶𝗻 𝗢𝘂𝗿 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸 𝗽𝗮𝗴𝗲 \n 𝗬𝗼𝘂𝗿𝘀 𝗱𝗿𝗲𝗮𝗺𝘀 https://www.facebook.com/share/19CczaPCKE/`",
				attachment: fs.createReadStream(__dirname + `/noprefix/kk1.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("📷", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

    }
