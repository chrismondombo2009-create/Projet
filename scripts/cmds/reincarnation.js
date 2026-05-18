const fs = require("fs-extra");

module.exports = {
	config: {
		name: "reincarnation",
		version: "1.1",
		author: "chris st",
		countDown: 5,
		role: 2,
		description: {
			vi: "Khởi động lại bot",
			en: "Restart bot"
		},
		category: "Owner",
		guide: {
			vi: "   {pn}: Khởi động lại bot",
			en: "   {pn}: Restart minato"
		}
	},

	langs: {
		vi: {
			restartting: "🔄 | Đang khởi động lại bot..."
		},
		en: {
			restartting: "🔄 | 𝚁é𝚒𝚗𝚌𝚊𝚛𝚗𝚊𝚝𝚒𝚘𝚗 𝚍𝚎 𝙼𝚒𝚗𝚊𝚝𝚘 𝚎𝚗 𝚌𝚘𝚞𝚛𝚜..."
		}
	},

	onLoad: function ({ api }) {
		const pathFile = `${__dirname}/tmp/restart.txt`;
		if (fs.existsSync(pathFile)) {
			const [tid, time] = fs.readFileSync(pathFile, "utf-8").split(" ");
			api.sendMessage(`✅ | 𝙼𝚒𝚗𝚊𝚝𝚘 𝚛é𝚒𝚗𝚌𝚊𝚛𝚗é\n⏰ | 𝚃𝚎𝚖𝚙𝚜: ${(Date.now() - time) / 1000}s`, tid);
			fs.unlinkSync(pathFile);
		}
	},

	onStart: async function ({ message, event, getLang }) {
		const pathFile = `${__dirname}/tmp/restart.txt`;
		fs.writeFileSync(pathFile, `${event.threadID} ${Date.now()}`);
		await message.reply(getLang("restartting"));
		process.exit(2);
	}
};
