const fs = require("fs-extra");
const path = require("path");
const { createCanvas, loadImage } = require("canvas");
const { exec } = require("child_process");
const { promisify } = require("util");

const execAsync = promisify(exec);

module.exports = {
    config: {
        name: "reincarnation",
        version: "2.0",
        author: "chris st",
        countDown: 5,
        role: 2,
        description: {
            vi: "Khởi động lại bot",
            en: "Restart bot with animation"
        },
        category: "Owner",
        guide: {
            vi: "   {pn}: Khởi động lại bot",
            en: "   {pn}: Restart bot"
        }
    },

    langs: {
        vi: {
            restartting: "🔄 | Đang khởi động lại bot..."
        },
        en: {
            restartting: "🔄 | Reincarnation of Hedgehog in progress..."
        }
    },

    onLoad: function ({ api }) {
        const pathFile = `${__dirname}/tmp/restart.txt`;
        if (fs.existsSync(pathFile)) {
            const [tid, time] = fs.readFileSync(pathFile, "utf-8").split(" ");
            api.sendMessage(formatStyledMessage([
                "✅ REINCARNATION RÉUSSIE",
                "━━━━━━━━━━━━━━━━",
                `⏰ Temps: ${((Date.now() - time) / 1000).toFixed(2)}s`
            ]), tid);
            fs.unlinkSync(pathFile);
        }
    },

    onStart: async function ({ message, event, getLang, api }) {
        const pathFile = `${__dirname}/tmp/restart.txt`;
        
        try {
            await api.setMessageReaction("⏰", event.messageID, () => {}, true);

            const loadingMsg = await api.sendMessage({
                body: `╭─────────────•┈┈\n│ 🔄 Reincarnation...\n│ ▱▱▱▱▱▱▱▱▱▱ 0%\n╰─────────────•┈┈`
            }, event.threadID);

            const steps = [
                { percent: 20, bar: '██▱▱▱▱▱▱▱▱' },
                { percent: 40, bar: '████▱▱▱▱▱▱' },
                { percent: 60, bar: '██████▱▱▱▱' },
                { percent: 80, bar: '████████▱▱' },
                { percent: 100, bar: '██████████' }
            ];

            for (const step of steps) {
                await new Promise(resolve => setTimeout(resolve, 800));
                if (api.editMessage) {
                    await api.editMessage(
                        `╭─────────────•┈┈\n│ 🔄 Reincarnation...\n│ ${step.bar} ${step.percent}%\n╰─────────────•┈┈`,
                        loadingMsg.messageID
                    );
                }
            }

            await new Promise(resolve => setTimeout(resolve, 500));

            if (api.unsendMessage) {
                await api.unsendMessage(loadingMsg.messageID);
            }

            fs.writeFileSync(pathFile, `${event.threadID} ${Date.now()}`);
            
            await api.setMessageReaction("✅", event.messageID, () => {}, true);
            
            process.exit(2);
            
        } catch (error) {
            console.error("Reincarnation error:", error);
            fs.writeFileSync(pathFile, `${event.threadID} ${Date.now()}`);
            process.exit(2);
        }
    }
};

function formatStyledMessage(contentLines) {
    let msg = `╭─────────────•┈┈\n`;
    for (let line of contentLines) {
        msg += `│ ${line}\n`;
    }
    msg += `╰─────────────•┈┈`;
    return msg;
}
