const { createCanvas } = require("canvas");
const {
	writeFileSync,
	createReadStream,
	existsSync,
	mkdirSync
} = require("fs-extra");

const path = require("path");

module.exports = {

	config: {
		name: "balance",
		aliases: ["bal"],
		version: "2.0",
		author: "NTKhang + Derla Kiritö",
		countDown: 5,
		role: 0,

		description: {
			vi: "xem số tiền hiện có",
			en: "view your balance"
		},

		category: "game",

		guide: {
			vi:
				"   {pn}: xem tiền"
				+ "\n   {pn} <@tag>: xem tiền người khác",

			en:
				"   {pn}: view money"
				+ "\n   {pn} <@tag>: view tagged user money"
		}
	},

	langs: {
		vi: {
			money: "Bạn đang có %1$",
			moneyOf: "%1 đang có %2$"
		},

		en: {
			money: "You have %1$",
			moneyOf: "%1 has %2$"
		}
	},

	onStart: async function ({
		message,
		usersData,
		event,
		getLang
	}) {

		// Création dossier cache
		const cachePath =
			path.join(__dirname, "cache");

		if (!existsSync(cachePath)) {
			mkdirSync(cachePath);
		}

		// Si quelqu’un est mentionné
		if (Object.keys(event.mentions).length > 0) {

			const uids =
				Object.keys(event.mentions);

			for (const uid of uids) {

				// Argent utilisateur
				const userMoney =
					await usersData.get(uid, "money");

				// Nom utilisateur
				const userName =
					event.mentions[uid].replace("@", "");

				// Création canvas
				const canvas =
					createCanvas(1400, 750);

				const ctx =
					canvas.getContext("2d");

				// Fond dégradé
				const gradient =
					ctx.createLinearGradient(
						0,
						0,
						1400,
						750
					);

				gradient.addColorStop(0, "#0f172a");
				gradient.addColorStop(1, "#1e293b");

				ctx.fillStyle = gradient;

				ctx.fillRect(
					0,
					0,
					canvas.width,
					canvas.height
				);

				// Bordure cyan
				ctx.strokeStyle = "#00e5ff";
				ctx.lineWidth = 10;

				ctx.strokeRect(
					20,
					20,
					1360,
					710
				);

				// Glow
				ctx.shadowColor = "#00e5ff";
				ctx.shadowBlur = 30;

				// Titre
				ctx.fillStyle = "#ffffff";
				ctx.font = "bold 60px Sans";

				ctx.fillText(
					"💳 DIGITAL WALLET",
					70,
					100
				);

				// Nom
				ctx.fillStyle = "#00e5ff";
				ctx.font = "bold 50px Sans";

				ctx.fillText(
					userName,
					80,
					250
				);

				// ID
				ctx.fillStyle = "#cccccc";
				ctx.font = "30px Sans";

				ctx.fillText(
					`ID : ${uid}`,
					80,
					310
				);

				// Argent
				ctx.fillStyle = "#00ff99";
				ctx.font = "bold 95px Sans";

				ctx.fillText(
					`${userMoney}$`,
					450,
					200
				);

				// Texte banque
				ctx.fillStyle = "#ffffff";
				ctx.font = "35px Sans";

				ctx.fillText(
					"Secure Online Banking",
					80,
					430
				);

				// Barre argent
				ctx.fillStyle = "#333333";

				ctx.fillRect(
					80,
					500,
					550,
					40
				);

				// Calcul progression
				let progress =
					Math.min(userMoney / 100000, 1);

				ctx.fillStyle = "#00ff99";

				ctx.fillRect(
					80,
					500,
					550 * progress,
					40
				);

				// Pourcentage
				ctx.fillStyle = "#ffffff";
				ctx.font = "28px Sans";

				ctx.fillText(
					`${Math.floor(progress * 100)}%`,
					300,
					530
				);

				// Cercle décoration
				ctx.beginPath();

				ctx.arc(
					1120,
					320,
					140,
					0,
					Math.PI * 2
				);

				ctx.closePath();

				ctx.fillStyle = "#00e5ff";
				ctx.fill();

				// Cercle intérieur
				ctx.beginPath();

				ctx.arc(
					1120,
					320,
					125,
					0,
					Math.PI * 2
				);

				ctx.closePath();

				ctx.fillStyle = "#111827";
				ctx.fill();

				// Emoji
				ctx.font = "110px Sans";
				ctx.fillStyle = "#ffffff";

				ctx.fillText(
					"💰",
					1065,
					360
				);

				// Footer
				ctx.font = "26px Sans";
				ctx.fillStyle = "#bbbbbb";

				ctx.fillText(
					"Digital Economy System • GoatBot",
					70,
					680
				);

				// Sauvegarde image
				const imgPath =
					path.join(
						cachePath,
						`balance_${uid}.png`
					);

				writeFileSync(
					imgPath,
					canvas.toBuffer()
				);

				// Envoie image
				return message.reply({
					body: getLang(
						"moneyOf",
						userName,
						userMoney
					),

					attachment:
						createReadStream(imgPath)
				});
			}
		}

		// Données utilisateur principal
		const userData =
			await usersData.get(event.senderID);

		// Nom utilisateur
		const userName =
			event.senderID;

		// Création canvas
		const canvas =
			createCanvas(1400, 750);

		const ctx =
			canvas.getContext("2d");

		// Fond
		const gradient =
			ctx.createLinearGradient(
				0,
				0,
				1400,
				750
			);

		gradient.addColorStop(0, "#111827");
		gradient.addColorStop(1, "#1f2937");

		ctx.fillStyle = gradient;

		ctx.fillRect(
			0,
			0,
			canvas.width,
			canvas.height
		);

		// Bordure violette
		ctx.strokeStyle = "#a855f7";
		ctx.lineWidth = 10;

		ctx.strokeRect(
			20,
			20,
			1360,
			710
		);

		// Glow
		ctx.shadowColor = "#a855f7";
		ctx.shadowBlur = 30;

		// Titre
		ctx.fillStyle = "#ffffff";
		ctx.font = "bold 65px Sans";

		ctx.fillText(
			"🏦 PREMIUM BALANCE",
			70,
			100
		);

		// Argent
		ctx.fillStyle = "#a855f7";
		ctx.font = "bold 100px Sans";

		ctx.fillText(
			`${userData.money}$`,
			420,
			220
		);

		// Nom
		ctx.fillStyle = "#ffffff";
		ctx.font = "bold 50px Sans";

		ctx.fillText(
			"Account Owner",
			80,
			280
		);

		// Texte secondaire
		ctx.fillStyle = "#cccccc";
		ctx.font = "30px Sans";

		ctx.fillText(
			"Unlimited Transactions • VIP Access",
			80,
			340
		);

		// Barre progression
		ctx.fillStyle = "#2f2f2f";

		ctx.fillRect(
			80,
			450,
			600,
			45
		);

		// Progression
		let progress =
			Math.min(userData.money / 100000, 1);

		ctx.fillStyle = "#a855f7";

		ctx.fillRect(
			80,
			450,
			600 * progress,
			45
		);

		// Pourcentage
		ctx.fillStyle = "#ffffff";
		ctx.font = "30px Sans";

		ctx.fillText(
			`${Math.floor(progress * 100)}%`,
			320,
			482
		);

		// Cercle décoration
		ctx.beginPath();

		ctx.arc(
			1120,
			300,
			150,
			0,
			Math.PI * 2
		);

		ctx.closePath();

		ctx.fillStyle = "#a855f7";
		ctx.fill();

		// Cercle intérieur
		ctx.beginPath();

		ctx.arc(
			1120,
			300,
			135,
			0,
			Math.PI * 2
		);

		ctx.closePath();

		ctx.fillStyle = "#0f172a";
		ctx.fill();

		// Icône
		ctx.font = "120px Sans";
		ctx.fillStyle = "#ffffff";

		ctx.fillText(
			"🏆",
			1060,
			345
		);

		// Footer
		ctx.font = "26px Sans";
		ctx.fillStyle = "#bbbbbb";

		ctx.fillText(
			"Premium Banking Interface • GoatBot",
			70,
			680
		);

		// Sauvegarde image
		const imgPath =
			path.join(
				cachePath,
				`balance_${event.senderID}.png`
			);

		writeFileSync(
			imgPath,
			canvas.toBuffer()
		);

		// Envoie image
		return message.reply({
			body: getLang(
				"money",
				userData.money
			),

			attachment:
				createReadStream(imgPath)
		});
	}
};
