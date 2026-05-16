const axios = require("axios");

module.exports = {
  config: {
    name: "delete",
    aliases: ["d"],
    version: "2.0",
    author: "MarianCross",
    description: "Supprime un fichier commande directement depuis GitHub",
    usage: "delete <nom_fichier>",
    category: "admin",
    role: 2
  },

  async handleCommand({ message, args }) {
    const commandName = args[0];
    if (!commandName) {
      return message.reply("Spécifie le nom de la commande à supprimer (sans extension).");
    }

    const fileName = commandName.endsWith(".js") ? commandName : `${commandName}.js`;

    // Config GitHub
    const GITHUB_TOKEN = "";//ajoute ton token github.
    const REPO_OWNER = "chrisst";//ajoute ton nom d'utilisateur.
    const REPO_NAME = "minato";//ajoute le nom de ton bot.
    const BRANCH = "main";
    const GITHUB_PATH = `scripts/cmds/${fileName}`;
    const apiUrl = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${GITHUB_PATH}`;

    try {
      const { data } = await axios.get(apiUrl, {
        headers: { Authorization: `token ${GITHUB_TOKEN}` }
      });

      const sha = data.sha;

      await axios.delete(apiUrl, {
        headers: {
          Authorization: `token ${GITHUB_TOKEN}`,
          "Content-Type": "application/json"
        },
        data: {
          message: `Suppression automatique de ${fileName}`,
          sha,
          branch: BRANCH
        }
      });

      return message.reply(`Commande \`${fileName}\` supprimée de GitHub.`);
    } catch (err) {
      console.error("Erreur GitHub:", err.response?.data || err.message);
      return message.reply(`Erreur lors de la suppression : ${err.response?.data?.message || err.message}`);
    }
  },

  onStart(params) {
    return this.handleCommand(params);
  }
};
