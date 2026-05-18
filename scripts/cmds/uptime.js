 const os = require('os');
const moment = require('moment-timezone');

module.exports = {
    config: {
        name: "uptime",
        aliases: ["upt", "up"],
        version: "1.0",
        author: "chrisst",
        role: 0,
        shortDescription: {
            en: "Displays bot uptime, system information, and current time in Cameroon."
        },
        longDescription: {
            en: "Displays bot uptime, system information, CPU speed, storage usage, RAM usage, and current time in Cameroon."
        },
        category: "system",
        guide: {
            en: "Use {p}uptime to display bot uptime, system information, and current time in Cameroon."
        }
    },
    onStart: async function ({ api, event, prefix }) {
        try {
            const botUptime = process.uptime();
            const serverUptime = os.uptime(); // Get server uptime

            // Format bot uptime
            const botDays = Math.floor(botUptime / 86400);
            const botHours = Math.floor((botUptime % 86400) / 3600);
            const botMinutes = Math.floor((botUptime % 3600) / 60);
            const botSeconds = Math.floor(botUptime % 60);

            const botUptimeString = `\n│🌀🪵${botDays} 𝙹𝚘𝚞𝚛🌀🪵\n│🎶✨${botHours} 𝙷𝚎𝚞𝚛𝚎🌀🪵\n│🌀🪵${botMinutes} 𝙼𝚒𝚗𝚞𝚝𝚎𝚜🌀🪵\n│🌀🪵${botSeconds} 𝚂𝚎𝚌𝚘𝚗𝚍𝚎𝚜🌀🪵`;

            // Format server uptime
            const serverDays = Math.floor(serverUptime / 86400);
            const serverHours = Math.floor((serverUptime % 86400) / 3600);
            const serverMinutes = Math.floor((serverUptime % 3600) / 60);
            const serverSeconds = Math.floor(serverUptime % 60);

            const serverUptimeString = `│🥷🪵${serverDays} 𝙹𝚘𝚞𝚛🥷🪵\n│🥷🪵${serverHours} 𝙷𝚎𝚞𝚛𝚎🥷🪵\n│🥷🪵${serverMinutes} 𝙼𝚒𝚗𝚞𝚝𝚎𝚜🥷🪵\n│🥷🪵${serverSeconds} 𝚂𝚎𝚌𝚘𝚗𝚍𝚎𝚜🥷🪵`;

            const totalMem = os.totalmem() / (1024 * 1024 * 1024);
            const freeMem = os.freemem() / (1024 * 1024 * 1024);
            const usedMem = totalMem - freeMem;
            const speed = os.cpus()[0].speed;

            const totalStorage = os.totalmem() / (1024 * 1024 * 1024);
            const usedStorage = usedMem;

            const systemStatus = "🌀| 𝙱𝚘𝚗 𝚜𝚢𝚜𝚝è𝚖𝚎";

            // Set timezone to Cameroon (Africa/Douala)
            const cameroonTimezone = 'Africa/Douala';
            const now = moment().tz(cameroonTimezone);
            const currentTime = now.format('【YYYY-MM-DD】  〖HH:mm:ss〗');

            api.sendMessage(`╭─⌾🪵𝙼𝙸𝙽𝙰𝚃𝙾 𝙽𝙰𝙼𝙸𝙺𝙰𝚉𝙴 🌀\n│𝙽𝚘𝚖:➣ 𝙲𝚑𝚛𝚒𝚜 𝚜𝚝〈 な\n│𝙿𝚛𝚎𝚏𝚒𝚡 𝚜𝚢𝚜𝚝è𝚖𝚎: ${prefix}\n│𝙿𝚛𝚘𝚙𝚛𝚒é𝚝𝚊𝚒𝚛𝚎:𝙲𝙷𝚁𝙸𝚂 𝚂𝚃\n╰─────────⌾\n╭─⌾⏰𝗕𝗢𝗧 𝗨𝗣𝗧𝗜𝗠𝗘⏰ ${botUptimeString}\n╰─────────⌾\n╭─⌾⏰𝗦𝗘𝗥𝗩𝗘𝗥 𝗨𝗣𝗧𝗜𝗠𝗘⏰\n${serverUptimeString}\n╰─────────⌾\n╭─⌾🟢𝗖𝗔𝗣𝗔𝗖𝗜𝗧𝗬🟢\n│𝐒𝐩𝐞𝐞𝐝📶: ${speed} ko/s\n│𝐒𝐭𝐨𝐜𝐤𝐚𝐠𝐞💽: ${usedStorage.toFixed(2)}/${totalStorage.toFixed(2)} GB\n│𝐑𝐀𝐌💾: ${usedMem.toFixed(2)}/${totalMem.toFixed(2)} GB\n│${systemStatus}\n╰────────⌾\n╭─⌾📅🕰️ 𝐓𝐢𝐦𝐞 🕰️📅\n│${currentTime}\n╰─────────⌾`, event.threadID);

        } catch (error) {
            console.error(error);
            api.sendMessage(`🥷| 𝙼𝚊𝚞𝚟𝚊𝚒𝚜 𝚜𝚢𝚜𝚝è𝚖𝚎: An error occurred while retrieving data. ${error.message}`, event.threadID);

            if (module.exports.config.author !== "𝙲𝚑𝚛𝚒𝚜 𝚜𝚝") {
                return api.sendMessage("❌| 𝚃𝚊𝚗𝚝 𝚚𝚞𝚎 𝚟𝚘𝚞𝚜 𝚗'𝚊𝚞𝚛𝚎𝚣 𝚙𝚊𝚜 𝚛𝚎𝚖𝚒𝚜 𝚕𝚎 𝚗𝚘𝚖 𝚍𝚞 𝚌𝚛é𝚊𝚝𝚎𝚞𝚛 𝚍𝚎 𝚌𝚎𝚝𝚝𝚎 𝚌𝚘𝚖𝚖𝚊𝚗𝚍𝚎... 𝚌𝚎𝚕𝚕𝚎-𝚌𝚒 𝚌𝚎𝚜𝚜𝚎𝚛𝚊 𝚍𝚎 𝚏𝚘𝚗𝚌𝚝𝚒𝚘𝚗𝚗𝚎𝚛 !🛠️⚙️", event.threadID);
            }
        }
    }
};
