const fs = require("fs-extra");
const path = require("path");
const { createCanvas } = require("canvas");
const { exec } = require("child_process");
const { promisify } = require("util");

const execAsync = promisify(exec);

module.exports = {
    config: {
        name: "reincarnation",
        version: "2.0",
        author: "chris st (amélioré par Ismael)",
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
            restartting: "🔄 | Reincarnation of minato in progress..."
        }
    },

    onLoad: function ({ api }) {
        const pathFile = `${__dirname}/tmp/restart.txt`;
        if (fs.existsSync(pathFile)) {
            const [tid, time] = fs.readFileSync(pathFile, "utf-8").split(" ");
            api.sendMessage(
                `╭─⌾🌿 𝙼𝙸𝙽𝙰𝚃𝙾 𝚁𝙴𝙱𝙾𝚁𝙽 🌿\n` +
                `│ ✅ 𝚁𝚎𝚒𝚗𝚌𝚊𝚛𝚗𝚊𝚝𝚒𝚘𝚗 𝚛é𝚞𝚜𝚜𝚒𝚎 !\n` +
                `│ ⏰ 𝚃𝚎𝚖𝚙𝚜: ${((Date.now() - time) / 1000).toFixed(2)}s\n` +
                `│ 🥷 𝙼𝚒𝚗𝚊𝚝𝚘 𝚎𝚜𝚝 𝚍𝚎 𝚛𝚎𝚝𝚘𝚞𝚛 !\n` +
                `╰──────────⌾`,
                tid
            );
            fs.unlinkSync(pathFile);
        }
    },

    onStart: async function ({ message, event, getLang, api }) {
        const pathFile = `${__dirname}/tmp/restart.txt`;
        
        const fullLines = [
            "╭─⌾🌿 𝙼𝙸𝙽𝙰𝚃𝙾 𝚁É𝙸𝙽𝙲𝙰𝚁𝙽𝙰𝚃𝙸𝙾𝙽 🌿",
            "│ 🔄 𝚁𝚎𝚗𝚊𝚒𝚜𝚜𝚊𝚗𝚌𝚎 𝚎𝚗 𝚌𝚘𝚞𝚛𝚜...",
            "│ ⏳ 𝚅𝚎𝚞𝚒𝚕𝚕𝚎𝚣 𝚙𝚊𝚝𝚒𝚎𝚗𝚝𝚎𝚛...",
            "╰──────────⌾"
        ];
        
        const fullText = fullLines.join("\n");
        const frames = [];
        
        for (let i = 1; i <= fullText.length; i++) {
            const partialText = fullText.substring(0, i);
            const lines = partialText.split("\n");
            
            const canvas = createCanvas(500, 200);
            const ctx = canvas.getContext("2d");
            
            const gradient = ctx.createLinearGradient(0, 0, 500, 200);
            gradient.addColorStop(0, "#0a0a1a");
            gradient.addColorStop(0.5, "#1a1a2e");
            gradient.addColorStop(1, "#0f3460");
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, 500, 200);
            
            ctx.strokeStyle = "#d4af37";
            ctx.lineWidth = 2;
            ctx.strokeRect(5, 5, 490, 190);
            
            ctx.fillStyle = "#ffd700";
            ctx.font = "bold 14px 'Courier New'";
            ctx.fillText(lines[0] || "", 30, 45);
            
            if (lines[1]) {
                ctx.fillStyle = "#fff";
                ctx.font = "12px 'Courier New'";
                ctx.fillText(lines[1], 30, 100);
            }
            
            if (lines[2]) {
                ctx.fillStyle = "#aaa";
                ctx.font = "12px 'Courier New'";
                ctx.fillText(lines[2], 30, 140);
            }
            
            if (lines[3]) {
                ctx.fillStyle = "#666";
                ctx.font = "10px 'Courier New'";
                ctx.fillText(lines[3], 30, 175);
            }
            
            frames.push(canvas.toBuffer());
        }
        
        const framePaths = [];
        for (let f = 0; f < frames.length; f++) {
            const framePath = path.join(__dirname, `reincarnation_frame_${f}.png`);
            fs.writeFileSync(framePath, frames[f]);
            framePaths.push(framePath);
        }
        
        const gifPath = path.join(__dirname, `reincarnation_${event.threadID}.gif`);
        try {
            await execAsync(`ffmpeg -framerate 15 -i ${path.join(__dirname, "reincarnation_frame_%d.png")} -vf "scale=500:200:flags=lanczos,split[s0][s1];[s0]palettegen[p];[s1][p]paletteuse" -y ${gifPath}`);
        } catch (e) {
            console.error("ffmpeg error:", e);
        }
        
        for (const fp of framePaths) {
            fs.unlinkSync(fp);
        }
        
        if (fs.existsSync(gifPath)) {
            await message.reply({ attachment: fs.createReadStream(gifPath) });
            fs.unlinkSync(gifPath);
        } else {
            await message.reply(
                `╭─⌾🌿 𝙼𝙸𝙽𝙰𝚃𝙾 𝚁É𝙸𝙽𝙲𝙰𝚁𝙽𝙰𝚃𝙸𝙾𝙽 🌿\n` +
                `│ 🔄 𝚁𝚎𝚗𝚊𝚒𝚜𝚜𝚊𝚗𝚌𝚎 𝚎𝚗 𝚌𝚘𝚞𝚛𝚜...\n` +
                `│ ⏳ 𝚅𝚎𝚞𝚒𝚕𝚕𝚎𝚣 𝚙𝚊𝚝𝚒𝚎𝚗𝚝𝚎𝚛...\n` +
                `╰──────────⌾`
            );
        }
        
        fs.writeFileSync(pathFile, `${event.threadID} ${Date.now()}`);
        process.exit(2);
    }
};
