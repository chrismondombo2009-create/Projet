module.exports = {
	onlyadminbox: {
		description: "activer/désactiver le mode où seul l'administrateur du groupe peut utiliser le bot",
		guide: "   {pn} [on | off]",
		text: {
			turnedOn: "Le mode 'seul l'administrateur du groupe peut utiliser le bot' est activé",
			turnedOff: "Le mode 'seul l'administrateur du groupe peut utiliser le bot' est désactivé",
			syntaxError: "Erreur de syntaxe : utilisez seulement {pn} on ou {pn} off"
		}
	},
	adduser: {
		description: "Ajouter un utilisateur à votre groupe de discussion",
		guide: "   {pn} [lien du profil | uid]",
		text: {
			alreadyInGroup: "Déjà dans le groupe",
			successAdd: "- %1 membres ajoutés au groupe avec succès",
			failedAdd: "- Échec de l'ajout de %1 membres au groupe",
			approve: "- %1 membres ajoutés à la liste d'approbation",
			invalidLink: "Veuillez saisir un lien Facebook valide",
			cannotGetUid: "Impossible d'obtenir l'uid de cet utilisateur",
			linkNotExist: "Cette URL de profil n'existe pas",
			cannotAddUser: "Le bot est bloqué ou cet utilisateur bloque l'ajout par des inconnus"
		}
	},
	admin: {
		description: "Ajouter, retirer, modifier le rôle d'administrateur",
		guide: "   {pn} [add | -a] <uid>: Ajouter le rôle admin à un utilisateur\n\t  {pn} [remove | -r] <uid>: Retirer le rôle admin d'un utilisateur\n\t  {pn} [list | -l]: Lister tous les administrateurs",
		text: {
			added: "✅ | Rôle admin ajouté à %1 utilisateurs :\n%2",
			alreadyAdmin: "\n⚠️ | %1 utilisateurs sont déjà administrateurs :\n%2",
			missingIdAdd: "⚠️ | Veuillez entrer l'ID ou taguer un utilisateur pour lui attribuer le rôle admin",
			removed: "✅ | Rôle admin retiré de %1 utilisateurs :\n%2",
			notAdmin: "⚠️ | %1 utilisateurs n'ont pas le rôle admin :\n%2",
			missingIdRemove: "⚠️ | Veuillez entrer l'ID ou taguer un utilisateur pour retirer le rôle admin",
			listAdmin: "👑 | Liste des administrateurs :\n%1"
		}
	},
	adminonly: {
		description: "activer/désactiver le mode où seul l'admin peut utiliser le bot",
		guide: "{pn} [on | off]",
		text: {
			turnedOn: "Le mode 'seul l'admin peut utiliser le bot' est activé",
			turnedOff: "Le mode 'seul l'admin peut utiliser le bot' est désactivé",
			syntaxError: "Erreur de syntaxe : utilisez seulement {pn} on ou {pn} off"
		}
	},
	all: {
		description: "Taguer tous les membres de votre groupe",
		guide: "{pn} [contenu | vide]"
	},
	anime: {
		description: "Image d'anime aléatoire",
		guide: "{pn} <endpoint>\n   Liste des endpoints : neko, kitsune, hug, pat, waifu, cry, kiss, slap, smug, punch",
		text: {
			loading: "Génération de l'image, veuillez patienter...",
			error: "Une erreur est survenue, veuillez réessayer plus tard"
		}
	},
	antichangeinfobox: {
		description: "Activer/désactiver l'anti-changement d'infos du groupe",
		guide: "   {pn} avt [on | off]: anti-changement d'avatar du groupe\n   {pn} name [on | off]: anti-changement du nom du groupe\n   {pn} theme [on | off]: anti-changement du thème du groupe\n   {pn} emoji [on | off]: anti-changement de l'emoji du groupe",
		text: {
			antiChangeAvatarOn: "Protection contre le changement d'avatar activée",
			antiChangeAvatarOff: "Protection contre le changement d'avatar désactivée",
			missingAvt: "Vous n'avez pas défini d'avatar pour le groupe",
			antiChangeNameOn: "Protection contre le changement de nom activée",
			antiChangeNameOff: "Protection contre le changement de nom désactivée",
			antiChangeThemeOn: "Protection contre le changement de thème activée",
			antiChangeThemeOff: "Protection contre le changement de thème désactivée",
			antiChangeEmojiOn: "Protection contre le changement d'emoji activée",
			antiChangeEmojiOff: "Protection contre le changement d'emoji désactivée",
			antiChangeAvatarAlreadyOn: "La protection contre le changement d'avatar est déjà activée",
			antiChangeNameAlreadyOn: "La protection contre le changement de nom est déjà activée",
			antiChangeThemeAlreadyOn: "La protection contre le changement de thème est déjà activée",
			antiChangeEmojiAlreadyOn: "La protection contre le changement d'emoji est déjà activée"
		}
	},
	appstore: {
		description: "Rechercher une application sur l'appstore",
		text: {
			missingKeyword: "Vous n'avez entré aucun mot-clé",
			noResult: "Aucun résultat trouvé pour le mot-clé %1"
		}
	},
	autosetname: {
		description: "Changer automatiquement le surnom du nouveau membre",
		guide: "   {pn} set <surnom>: configurer le surnom automatique, avec des raccourcis :\n   + {userName}: nom du nouveau membre\n   + {userID}: identifiant du membre\n   Exemple :\n    {pn} set {userName} 🚀\n\n   {pn} [on | off]: activer/désactiver cette fonctionnalité\n\n   {pn} [view | info]: afficher la configuration actuelle",
		text: {
			missingConfig: "Veuillez entrer la configuration requise",
			configSuccess: "La configuration a été enregistrée avec succès",
			currentConfig: "La configuration autoSetName actuelle de votre groupe est :\n%1",
			notSetConfig: "Votre groupe n'a pas défini la configuration autoSetName",
			syntaxError: "Erreur de syntaxe : uniquement \"{pn} on\" ou \"{pn} off\" sont valides",
			turnOnSuccess: "La fonctionnalité autoSetName a été activée",
			turnOffSuccess: "La fonctionnalité autoSetName a été désactivée",
			error: "Une erreur s'est produite. Essayez de désactiver le lien d'invitation du groupe et réessayez plus tard"
		}
	},
	avatar: {
		description: "Créer un avatar d'anime avec une signature",
		guide: "{p}{n} <id ou nom du personnage> | <texte de fond> | <signature> | <nom de couleur ou code hex>\n{p}{n} help : voir comment utiliser cette commande",
		text: {
			initImage: "Génération de l'image, veuillez patienter...",
			invalidCharacter: "Il n'y a actuellement que %1 personnages dans le système, veuillez saisir un id inférieur",
			notFoundCharacter: "Aucun personnage nommé %1 trouvé dans la liste",
			errorGetCharacter: "Erreur lors de la récupération des données du personnage :\n%1: %2",
			success: "✅ Votre avatar\nPersonnage: %1\nID: %2\nTexte de fond: %3\nSignature: %4\nCouleur: %5",
			defaultColor: "par défaut",
			error: "Une erreur est survenue\n%1: %2"
		}
	},
	badwords: {
		description: "Activer/désactiver/ajouter/supprimer l'avertissement pour mots interdits, après 2 infractions, l'utilisateur sera expulsé",
		guide: "   {pn} add <mots>: ajouter des mots interdits (plusieurs mots séparés par , ou |)\n   {pn} delete <mots>: supprimer des mots interdits\n   {pn} list <hide | vide>: afficher la liste (\"hide\" pour masquer)\n   {pn} unwarn [<userID> | <@tag>]: retirer un avertissement\n   {pn} on: activer l'avertissement\n   {pn} off: désactiver l'avertissement",
		text: {
			onText: "activé",
			offText: "désactivé",
			onlyAdmin: "⚠️ | Seuls les administrateurs peuvent ajouter des mots interdits à la liste",
			missingWords: "⚠️ | Vous n'avez pas saisi les mots interdits",
			addedSuccess: "✅ | %1 mots interdits ajoutés à la liste",
			alreadyExist: "❌ | %1 mots existaient déjà dans la liste : %2",
			tooShort: "⚠️ | %1 mots trop courts (<2 caractères) : %2",
			onlyAdmin2: "⚠️ | Seuls les administrateurs peuvent supprimer des mots interdits de la liste",
			missingWords2: "⚠️ | Vous n'avez pas saisi les mots à supprimer",
			deletedSuccess: "✅ | %1 mots interdits supprimés de la liste",
			notExist: "❌ | %1 mots n'existaient pas dans la liste : %2",
			emptyList: "⚠️ | La liste des mots interdits de votre groupe est vide",
			badWordsList: "📑 | Liste des mots interdits de votre groupe : %1",
			onlyAdmin3: "⚠️ | Seuls les administrateurs peuvent %1 cette fonctionnalité",
			turnedOnOrOff: "✅ | L'avertissement sur les mots interdits a été %1",
			onlyAdmin4: "⚠️ | Seuls les administrateurs peuvent supprimer l'avertissement des mots interdits",
			missingTarget: "⚠️ | Vous n'avez pas saisi d'identifiant ou tagué d'utilisateur",
			notWarned: "⚠️ | L'utilisateur %1 n'a pas été averti pour mots interdits",
			removedWarn: "✅ | Un avertissement retiré pour l'utilisateur %1 | %2",
			warned: "⚠️ | Mot interdit \"%1\" détecté dans votre message, si vous recommencez vous serez expulsé du groupe.",
			warned2: "⚠️ | Mot interdit \"%1\" détecté dans votre message, c'est votre 2ème infraction, vous serez expulsé du groupe.",
			needAdmin: "Le bot a besoin des droits administrateur pour expulser des membres",
			unwarned: "✅ | Avertissement retiré pour l'utilisateur %1 | %2"
		}
	},
	balance: {
		description: "voir votre argent ou celui de la personne taguée",
		guide: "   {pn}: voir votre argent\n   {pn} <@tag>: voir l'argent de la personne taguée",
		text: {
			money: "Vous avez %1$",
			moneyOf: "%1 a %2$"
		}
	},
	batslap: {
		description: "Image batslap",
		text: {
			noTag: "Vous devez taguer la personne que vous souhaitez gifler"
		}
	},
	busy: {
		description: "activer le mode 'ne pas déranger', le bot vous notifiera si vous êtes tagué",
		guide: "   {pn} [vide | <raison>]: activer le mode ne pas déranger\n   {pn} off: désactiver le mode ne pas déranger",
		text: {
			turnedOff: "✅ | Mode ne pas déranger désactivé",
			turnedOn: "✅ | Mode ne pas déranger activé",
			turnedOnWithReason: "✅ | Mode ne pas déranger activé pour la raison : %1",
			alreadyOn: "L'utilisateur %1 est actuellement occupé",
			alreadyOnWithReason: "L'utilisateur %1 est actuellement occupé pour la raison : %2"
		}
	},
	callad: {
		description: "envoyer un rapport, retour, bug,... à l'administrateur du bot",
		guide: "   {pn} <message>",
		text: {
			missingMessage: "Veuillez saisir le message à envoyer à l'admin",
			sendByGroup: "\n- Envoyé depuis le groupe : %1\n- ID du fil : %2",
			sendByUser: "\n- Envoyé par l'utilisateur",
			content: "\n\nContenu :\n─────────────────\n%1\n─────────────────\nRépondez à ce message pour envoyer un message à l'utilisateur",
			success: "Votre message a été envoyé à l'administrateur avec succès !",
			reply: "📍 Réponse de l'admin %1 :\n─────────────────\n%2\n─────────────────\nRépondez à ce message pour continuer la conversation avec l'admin",
			replySuccess: "Votre réponse a été envoyée à l'administrateur avec succès !",
			feedback: "📝 Retour de l'utilisateur %1 :\n- ID utilisateur : %2%3\n\nContenu :\n─────────────────\n%4\n─────────────────\nRépondez à ce message pour envoyer un message à l'utilisateur",
			replyUserSuccess: "Votre réponse a été envoyée à l'utilisateur avec succès !"
		}
	},
	cmd: {
		description: "Gérer vos fichiers de commandes",
		guide: "{pn} load <nom de la commande>\n{pn} loadAll\n{pn} install <url> <nom du fichier> : Télécharger et installer une commande depuis une url (raw)",
		text: {
			missingFileName: "⚠️ | Veuillez entrer le nom de la commande à recharger",
			loaded: "✅ | Commande \"%1\" chargée avec succès",
			loadedError: "❌ | Échec du chargement de la commande \"%1\"\n%2: %3",
			loadedSuccess: "✅ | Chargement de la commande \"%1\" réussi",
			loadedFail: "❌ | Échec du chargement de \"%1\"\n%2",
			missingCommandNameUnload: "⚠️ | Veuillez entrer le nom de la commande à décharger",
			unloaded: "✅ | Commande \"%1\" déchargée avec succès",
			unloadedError: "❌ | Échec du déchargement de la commande \"%1\"\n%2: %3",
			missingUrlCodeOrFileName: "⚠️ | Veuillez entrer l'url ou le code et le nom du fichier de la commande à installer",
			missingUrlOrCode: "⚠️ | Veuillez entrer l'url ou le code de la commande à installer",
			missingFileNameInstall: "⚠️ | Veuillez entrer le nom du fichier de sauvegarde (avec extension .js)",
			invalidUrlOrCode: "⚠️ | Impossible d'obtenir le code de la commande",
			alreadExist: "⚠️ | Le fichier de commande existe déjà, voulez-vous vraiment l'écraser ?\nRéagissez à ce message pour continuer",
			installed: "✅ | Commande \"%1\" installée avec succès, fichier enregistré à %2",
			installedError: "❌ | Échec de l'installation de la commande \"%1\"\n%2: %3",
			missingFile: "⚠️ | Fichier de commande \"%1\" non trouvé",
			invalidFileName: "⚠️ | Nom de fichier de commande invalide",
			unloadedFile: "✅ | Commande \"%1\" déchargée"
		}
	},
	count: {
		description: "Voir le nombre de messages de tous les membres ou de vous-même (depuis l'ajout du bot)",
		guide: "   {pn} : voir votre nombre de messages\n   {pn} @tag : voir le nombre de messages des personnes taguées\n   {pn} all : voir le nombre de messages de tous les membres",
		text: {
			count: "Nombre de messages des membres :",
			endMessage: "Ceux qui n'apparaissent pas dans la liste n'ont envoyé aucun message.",
			page: "Page [%1/%2]",
			reply: "Répondez à ce message avec le numéro de page pour voir plus",
			result: "%1 classé %2 avec %3 messages",
			yourResult: "Vous êtes classé %1 et avez envoyé %2 messages dans ce groupe",
			invalidPage: "Numéro de page invalide"
		}
	},	
customrankcard: {
		description: "Personnaliser votre carte de rang",
		guide: {
			body: "   {pn} [maincolor | subcolor | linecolor | progresscolor | alphasubcolor | textcolor | namecolor | expcolor | rankcolor | levelcolor | reset] <valeur>"
				+ "\n   Où : "
				+ "\n  + maincolor | background <valeur> : couleur principale du fond de la carte"
				+ "\n  + subcolor <valeur> : couleur secondaire"
				+ "\n  + linecolor <valeur> : couleur de la ligne séparatrice"
				+ "\n  + expbarcolor <valeur> : couleur de la barre d'expérience"
				+ "\n  + progresscolor <valeur> : couleur de progression de l'expérience"
				+ "\n  + alphasubcolor <valeur> : opacité du fond secondaire (de 0 à 1)"
				+ "\n  + textcolor <valeur> : couleur du texte"
				+ "\n  + namecolor <valeur> : couleur du nom"
				+ "\n  + expcolor <valeur> : couleur de l'expérience"
				+ "\n  + rankcolor <valeur> : couleur du rang"
				+ "\n  + levelcolor <valeur> : couleur du niveau"
				+ "\n    • <valeur> peut être un code hexadécimal, rgb, rgba, dégradé (chaque couleur séparée par un espace) ou une url d'image"
				+ "\n    • Pour un dégradé, entrez plusieurs couleurs séparées par un espace"
				+ "\n   {pn} reset : réinitialiser tout par défaut"
				+ "\n   Exemple :"
				+ "\n    {pn} maincolor #fff000"
				+ "\n    {pn} subcolor rgba(255,136,86,0.4)"
				+ "\n    {pn} reset",
			attachment: {
				[`${process.cwd()}/scripts/cmds/assets/guide/customrankcard_1.jpg`]: "https://i.ibb.co/BZ2Qgs1/image.png",
				[`${process.cwd()}/scripts/cmds/assets/guide/customrankcard_2.png`]: "https://i.ibb.co/wy1ZHHL/image.png"
			}
		},
		text: {
			invalidImage: "Url d'image invalide, veuillez choisir une url d'image (jpg, jpeg, png, gif). Vous pouvez télécharger une image sur https://imgbb.com/ et choisir \"get direct link\" pour obtenir l'url directe.",
			invalidAttachment: "Fichier joint invalide, veuillez choisir un fichier image",
			invalidColor: "Code couleur invalide, veuillez choisir un code hexadécimal (6 chiffres) ou un code couleur rgba",
			notSupportImage: "L'image par url n'est pas supportée pour l'option \"%1\"",
			success: "Vos modifications ont été enregistrées, voici un aperçu",
			reseted: "Tous les paramètres ont été réinitialisés par défaut",
			invalidAlpha: "Veuillez choisir un nombre entre 0 et 1"
		}
	},
	dhbc: {
		description: "jouer au jeu 'devine le mot'",
		guide: "{pn}",
		text: {
			reply: "Veuillez répondre à ce message avec la réponse\n%1",
			isSong: "Ceci est le nom de la chanson de l'artiste %1",
			notPlayer: "⚠️ Vous n'êtes pas le joueur de cette question",
			correct: "🎉 Félicitations, vous avez répondu correctement et gagné %1$",
			wrong: "⚠️ Mauvaise réponse"
		}
	},
	emojimix: {
		description: "Mixer deux emojis ensemble",
		guide: "   {pn} <emoji1> <emoji2>\n   Exemple :  {pn} 🤣 🥰"
	},
	eval: {
		description: "Tester du code rapidement",
		guide: "{pn} <code à tester>",
		text: {
			error: "❌ Une erreur est survenue :"
		}
	},
	event: {
		description: "Gérer vos fichiers de commandes d'événement",
		guide: "{pn} load <nom de la commande>\n{pn} loadAll\n{pn} install <url> <nom du fichier> : Télécharger et charger une commande événementielle, url = chemin du fichier (raw)",
		text: {
			missingFileName: "⚠️ | Veuillez entrer le nom de la commande à recharger",
			loaded: "✅ | Commande d'événement \"%1\" chargée avec succès",
			loadedError: "❌ | Échec du chargement de la commande d'événement \"%1\"\n%2: %3",
			loadedSuccess: "✅ | \"%1\" commande d'événement chargée avec succès",
			loadedFail: "❌ | Échec du chargement de la commande d'événement \"%1\"\n%2",
			missingCommandNameUnload: "⚠️ | Veuillez entrer le nom de la commande à décharger",
			unloaded: "✅ | Commande d'événement \"%1\" déchargée avec succès",
			unloadedError: "❌ | Échec du déchargement de la commande d'événement \"%1\"\n%2: %3",
			missingUrlCodeOrFileName: "⚠️ | Veuillez entrer l'url ou le code et le nom du fichier à installer",
			missingUrlOrCode: "⚠️ | Veuillez entrer l'url ou le code de la commande événementielle à installer",
			missingFileNameInstall: "⚠️ | Veuillez entrer le nom du fichier à sauvegarder (avec extension .js)",
			invalidUrlOrCode: "⚠️ | Impossible d'obtenir le code de la commande",
			alreadExist: "⚠️ | Le fichier existe déjà, souhaitez-vous vraiment écraser l'ancien ?\nRéagissez à ce message pour continuer",
			installed: "✅ | Commande d'événement \"%1\" installée avec succès, fichier enregistré à %2",
			installedError: "❌ | Échec de l'installation de la commande d'événement \"%1\"\n%2: %3",
			missingFile: "⚠️ | Fichier \"%1\" non trouvé",
			invalidFileName: "⚠️ | Nom de fichier invalide",
			unloadedFile: "✅ | Commande \"%1\" déchargée"
		}
	},
	filteruser: {
		description: "Filtrer les membres du groupe selon le nombre de messages ou les comptes verrouillés",
		guide: "   {pn} [<nombre de messages> | die]",
		text: {
			needAdmin: "⚠️ | Veuillez ajouter le bot comme administrateur du groupe pour utiliser cette commande",
			confirm: "⚠️ | Êtes-vous sûr de vouloir supprimer les membres ayant moins de %1 messages ?\nRéagissez à ce message pour confirmer",
			kickByBlock: "✅ | %1 membres aux comptes verrouillés supprimés avec succès",
			kickByMsg: "✅ | %1 membres ayant moins de %2 messages supprimés avec succès",
			kickError: "❌ | Une erreur s'est produite, impossible de supprimer %1 membres :\n%2",
			noBlock: "✅ | Aucun compte verrouillé parmi les membres",
			noMsg: "✅ | Aucun membre avec moins de %1 messages"
		}
	},
	getfbstate: {
		description: "Obtenir l'état actuel de fbstate",
		guide: "{pn}",
		text: {
			success: "fbstate envoyé, veuillez vérifier le message privé du bot"
		}
	},
	grouptag: {
		description: "Taguer les membres par groupe",
		guide: "   {pn} add <nomDuGroupeTag> <@tags>: ajouter un nouveau groupe de tag ou des membres à un groupe de tag\n   Exemple:\n    {pn} TEAM1 @tag1 @tag2\n\n   {pn} del <nomDuGroupeTag> <@tags>: retirer des membres d'un groupe de tag\n   Exemple:\n    {pn} del TEAM1 @tag1 @tag2\n\n   {pn} remove <nomDuGroupeTag>: supprimer un groupe de tag\n   Exemple:\n    {pn} remove TEAM1\n\n   {pn} rename <nomDuGroupeTag> | <nouveauNomDuGroupeTag>: renommer un groupe de tag\n\n   {pn} [list | all]: afficher la liste des groupes de tag du chat\n\n   {pn} info <nomDuGroupeTag>: afficher les infos d'un groupe de tag",
		text: {
			noGroupTagName: "Veuillez saisir le nom du groupe de tag",
			noMention: "Vous n'avez tagué aucun membre à ajouter au groupe de tag",
			addedSuccess: "Membres ajoutés :\n%1\ndans le groupe de tag \"%2\"",
			addedSuccess2: "Groupe de tag \"%1\" créé avec les membres :\n%2",
			existedInGroupTag: "Membres déjà présents dans le groupe de tag \"%2\" :\n%1",
			notExistedInGroupTag: "Membres non présents dans le groupe de tag \"%2\" :\n%1",
			noExistedGroupTag: "Le groupe de tag \"%1\" n'existe pas dans votre chat",
			noExistedGroupTag2: "Votre chat n'a aucun groupe de tag",
			noMentionDel: "Veuillez taguer les membres à retirer du groupe de tag \"%1\"",
			deletedSuccess: "Membres supprimés :\n%1\ndu groupe de tag \"%2\"",
			deletedSuccess2: "Groupe de tag \"%1\" supprimé",
			tagged: "Tag groupe \"%1\" :\n%2",
			noGroupTagName2: "Veuillez entrer l'ancien nom et le nouveau nom du groupe de tag, séparés par \"|\"",
			renamedSuccess: "Groupe de tag renommé de \"%1\" à \"%2\"",
			infoGroupTag: "📑 | Nom du groupe : \"%1\"\n👥 | Nombre de membres : %2\n👨‍👩‍👧‍👦 | Liste des membres :\n %3"
		}
	},
	help: {
		description: "Afficher l'utilisation des commandes",
		guide: "{pn} [vide | <numéro de page> | <nom de la commande>]",
		text: {
			help: "╭─────────────⭓\n%1\n├─────⭔\n│ Page [ %2/%3 ]\n│ Actuellement, le bot a %4 commandes utilisables\n│ » Tapez %5help <page> pour voir la liste des commandes\n│ » Tapez %5help pour voir le détail d'une commande\n├────────⭔\n│ %6\n╰─────────────⭓",
			help2: "%1├───────⭔\n│ » Le bot possède actuellement %2 commandes utilisables\n│ » Tapez %3help <nom de la commande> pour voir son utilisation\n│ %4\n╰─────────────⭓",
			commandNotFound: "Commande \"%1\" inexistante",
			getInfoCommand: "╭── NOM ────⭓\n│ %1\n├── INFOS\n│ Description : %2\n│ Autres noms : %3\n│ Alias dans votre groupe : %4\n│ Version : %5\n│ Rôle : %6\n│ Cooldown : %7s\n│ Auteur : %8\n├── Utilisation\n%9\n├── Notes\n│ Le contenu dans <XXXXX> peut être changé\n│ Le contenu dans [a|b|c] signifie a ou b ou c\n╰──────⭔",
			doNotHave: "Aucun",
			roleText0: "0 (Tous les utilisateurs)",
			roleText1: "1 (Admins du groupe)",
			roleText2: "2 (Admin du bot)",
			roleText0setRole: "0 (défini, tous les utilisateurs)",
			roleText1setRole: "1 (défini, admins du groupe)",
			pageNotFound: "Page %1 inexistante"
		}
	},
	kick: {
		description: "Expulser un membre du groupe",
		guide: "{pn} @tags : expulser les membres tagués"
	},
	loadconfig: {
		description: "Recharger la configuration du bot"
	},
	moon: {
		description: "voir l'image de la lune pour la nuit choisie (jj/mm/aaaa)",
		guide: "  {pn} <jour/mois/année>\n   {pn} <jour/mois/année> <légende>",
		text: {
			invalidDateFormat: "Veuillez saisir une date valide au format JJ/MM/AAAA",
			error: "Une erreur est survenue lors de la récupération de l'image de la lune pour %1",
			invalidDate: "%1 n'est pas une date valide",
			caption: "- Image de la lune le %1"
		}
	},
	notification: {
		description: "Envoyer une notification de l'admin à tous les groupes",
		guide: "{pn} <message>",
		text: {
			missingMessage: "Veuillez saisir le message à envoyer à tous les groupes",
			notification: "Notification de l'admin du bot à tous les groupes (ne pas répondre à ce message)",
			sendingNotification: "Début de l'envoi de la notification à %1 groupes",
			sentNotification: "✅ Notification envoyée avec succès à %1 groupes",
			errorSendingNotification: "Une erreur est survenue pour %1 groupes :\n %2"
		}
	},
	prefix: {
		description: "Changer le préfixe du bot dans votre groupe ou pour tout le bot (admin bot uniquement)",
		guide: "   {pn} <nouveau préfixe> : changer le préfixe dans votre groupe\n   Exemple :\n    {pn} #\n\n   {pn} <nouveau préfixe> -g : changer le préfixe global (admin bot uniquement)\n   Exemple :\n    {pn} # -g\n\n   {pn} reset : réinitialiser le préfixe par défaut dans votre groupe",
		text: {
			reset: "Votre préfixe a été réinitialisé : %1",
			onlyAdmin: "Seul un admin peut changer le préfixe global du bot",
			confirmGlobal: "Veuillez réagir à ce message pour confirmer le changement du préfixe global",
			confirmThisThread: "Veuillez réagir à ce message pour confirmer le changement du préfixe dans votre groupe",
			successGlobal: "Préfixe global changé en : %1",
			successThisThread: "Préfixe de votre groupe changé en : %1",
			myPrefix: "🌐 Préfixe global : %1\n🛸 Préfixe de votre groupe : %2"
		}
	},
	rank: {
		description: "Voir votre niveau ou celui de la personne taguée. Vous pouvez taguer plusieurs personnes"
	},
	rankup: {
		description: "Activer/désactiver la notification de montée de niveau",
		guide: "{pn} [on | off]",
		text: {
			syntaxError: "Erreur de syntaxe, utilisez seulement {pn} on ou {pn} off",
			turnedOn: "Notification de montée de niveau activée",
			turnedOff: "Notification de montée de niveau désactivée",
			notiMessage: "🎉🎉 Félicitations, vous avez atteint le niveau %1"
		}
	},
	refresh: {
		description: "Rafraîchir les informations du groupe ou d'un utilisateur",
		guide: "   {pn} [thread | group] : rafraîchir les infos de votre groupe\n   {pn} group <threadID> : rafraîchir les infos du groupe par ID\n\n   {pn} user : rafraîchir vos infos\n   {pn} user [<userID> | @tag] : rafraîchir les infos d'un utilisateur par ID",
		text: {
			refreshMyThreadSuccess: "✅ | Infos de votre groupe rafraîchies avec succès !",
			refreshThreadTargetSuccess: "✅ | Infos du groupe %1 rafraîchies avec succès !"
		}
	},
	rules: {
		description: "Créer/voir/ajouter/modifier/changer la position/supprimer les règles de votre groupe",
		guide: "   {pn} [add | -a] <règle à ajouter> : ajouter une règle au groupe.\n   {pn} : voir les règles du groupe.\n   {pn} [edit | -e] <n> <nouveau contenu> : modifier la règle numéro n.\n   {pn} [move | -m] <stt1> <stt2> : échanger la position des règles <stt1> et <stt2>.\n   {pn} [delete | -d] <n> : supprimer la règle numéro n.\n   {pn} [remove | -r] : supprimer toutes les règles du groupe.\n\n   Exemple :\n    {pn} add ne pas spammer\n    {pn} move 1 3\n    {pn} -e 1 ne pas spammer dans le groupe\n    {pn} -r"
	},
	sendnoti: {
		description: "Créer et envoyer une notification aux groupes que vous gérez",
		guide: "   {pn} create <nomGroupe> : créer un groupe de notification\n   Exemple :\n    {pn} create TEAM1\n\n   {pn} add <nomGroupe> : ajouter ce groupe au groupe de notification <nomGroupe> (vous devez être admin de ce groupe)\n   Exemple :\n    {pn} add TEAM1\n\n   {pn} delete : retirer ce groupe du groupe de notification <nomGroupe> (vous devez être le créateur)\n   Exemple :\n    {pn} delete TEAM1\n\n   {pn} send <nomGroupe> | <message> : envoyer une notification à tous les groupes du groupe de notification <nomGroupe> (vous devez être admin de ces groupes)\n   Exemple :\n    {pn} remove TEAM1\n\n   {pn} remove <nomGroupe> : supprimer le groupe de notification (créateur uniquement)\n   Exemple :\n    {pn} remove TEAM1",
		text: {
			missingGroupName: "Veuillez saisir le nom du groupe de notification",
			groupNameExists: "Le groupe de notification nommé %1 existe déjà, veuillez choisir un autre nom",
			createdGroup: "Groupe de notification créé avec succès :\n- Nom : %1\n- ID : %2",
			missingGroupNameToAdd: "Veuillez saisir le nom du groupe de notification auquel ajouter ce groupe",
			groupNameNotExists: "Vous n'avez pas créé/géré de groupe nommé : %1",
			notAdmin: "Vous n'êtes pas admin de ce groupe",
			added: "Ce groupe a été ajouté au groupe de notification : %1",
			missingGroupNameToDelete: "Veuillez saisir le nom du groupe de notification à retirer",
			notInGroup: "Ce groupe n'est pas dans le groupe de notification %1",
			deleted: "Ce groupe a été retiré du groupe de notification : %1",
			failed: "Échec de l'envoi de la notification à %1 groupes : \n%2",
			missingGroupNameToRemove: "Veuillez saisir le nom du groupe de notification à supprimer",
			removed: "Groupe de notification supprimé : %1",
			missingGroupNameToSend: "Veuillez saisir le nom du groupe de notification pour envoyer un message",
			groupIsEmpty: "Le groupe de notification \"%1\" est vide",
			sending: "Envoi de la notification à %1 groupes",
			success: "Notification envoyée à %1 groupes dans le groupe \"%2\" avec succès",
			notAdminOfGroup: "Vous n'êtes pas admin de ce groupe",
			missingGroupNameToView: "Veuillez saisir le nom du groupe de notification à consulter",
			groupInfo: "- Nom : %1\n - ID : %2\n - Créé le : %3\n%4 ",
			groupInfoHasGroup: "- Groupes inclus : \n%1",
			noGroup: "Vous n'avez créé/géré aucun groupe de notification"
		}
	},
	setalias: {
		description: "Ajouter un alias à une commande dans votre groupe",
		guide: "  Cette commande permet d'ajouter/retirer un alias à une commande dans votre groupe\n   {pn} add <alias> <commande> : ajouter un alias\n   {pn} add <alias> <commande> -g : alias global (admin bot uniquement)\nExemple:\n    {pn} add ctrk customrankcard\n\n   {pn} [remove | rm] <alias> <commande> : retirer un alias\n   {pn} [remove | rm] <alias> <commande> -g : retirer un alias global (admin bot uniquement)\nExemple:\n    {pn} rm ctrk customrankcard\n\n   {pn} list : lister tous les alias du groupe\n   {pn} list -g : lister tous les alias globaux"
	},
	setavt: {
		description: "Changer l'avatar du bot",
		text: {
			cannotGetImage: "❌ | Erreur lors de la récupération de l'url de l'image",
			invalidImageFormat: "❌ | Format d'image invalide",
			changedAvatar: "✅ | Avatar du bot changé avec succès"
		}
	},
	setlang: {
		description: "Définir la langue par défaut du bot dans ce chat ou globalement",
		guide: "   {pn} <code langue ISO 639-1>\n   Exemple :    {pn} en    {pn} fr    {pn} ja",
		text: {
			setLangForAll: "Langue par défaut définie pour tous les chats : %1",
			setLangForCurrent: "Langue par défaut définie pour ce chat : %1",
			noPermission: "Seul un admin bot peut utiliser cette commande"
		}
	},
	setleave: {
		description: "Modifier le texte ou activer/désactiver le message d'au revoir",
		guide: {
			body: "   {pn} on : activer le message d'au revoir\n   {pn} off : désactiver le message d'au revoir\n   {pn} text [<contenu> | reset] : modifier ou réinitialiser le texte, raccourcis disponibles :\n  + {userName} : nom du membre qui quitte\n  + {userNameTag} : nom du membre (tag)\n  + {boxName} : nom du groupe\n  + {type} : leave/kicked by admin\n  + {session} : session du jour\n\n   Exemple :\n    {pn} text {userName} a {type} le groupe, à bientôt 🤧\n\n   Répondez ou envoyez un fichier avec {pn} file : pour ajouter une pièce jointe (image, vidéo, audio)\n\nExemple:\n   {pn} file reset : réinitialiser la pièce jointe",
			attachment: {
				[`${process.cwd()}/scripts/cmds/assets/guide/setleave/setleave_en_1.png`]: "https://i.ibb.co/2FKJHJr/guide1.png"
			}
		},
		text: {
			missingContent: "Veuillez saisir le contenu",
			edited: "Contenu du message d'au revoir modifié en :\n%1",
			reseted: "Message d'au revoir réinitialisé",
			noFile: "Aucune pièce jointe à réinitialiser",
			resetedFile: "Pièce jointe réinitialisée avec succès",
			missingFile: "Veuillez répondre avec une image/vidéo/audio",
			addedFile: "%1 fichier joint ajouté à votre message d'au revoir"
		}
	},
	setname: {
		description: "Changer le surnom de tous les membres ou des membres tagués selon un format",
		guide: {
			body: "   {pn} <surnom> : changer votre surnom\n   {pn} @tags <surnom> : changer le surnom des membres tagués\n   {pn} all <surnom> : changer le surnom de tous les membres\n\nRaccourcis disponibles :\n   + {userName} : nom du membre\n   + {userID} : ID du membre\n\n   Exemple : (voir image)",
			attachment: {
				[`${process.cwd()}/scripts/cmds/assets/guide/setname_1.png`]: "https://i.ibb.co/gFh23zb/guide1.png",
				[`${process.cwd()}/scripts/cmds/assets/guide/setname_2.png`]: "https://i.ibb.co/BNWHKgj/guide2.png"
			}
		},
		text: {
			error: "Une erreur est survenue, essayez de désactiver le lien d'invitation du groupe et réessayez"
		}
	},
	setrole: {
		description: "Modifier le rôle d'une commande (commandes avec rôle < 2)",
		guide: "   {pn} <nomCommande> <nouveau rôle> : définir un nouveau rôle\n   Où :\n   + <nomCommande> : nom de la commande\n   + <nouveau rôle> : 0 = tous, 1 = admin uniquement, default = réinitialiser\n   Exemple :\n    {pn} rank 1\n    {pn} rank 0\n    {pn} rank default\n—————\n   {pn} [viewrole|view|show] : voir les rôles modifiés",
		text: {
			noEditedCommand: "✅ Aucun rôle de commande modifié dans votre groupe",
			editedCommand: "⚠️ Commandes modifiées :\n",
			noPermission: "❗ Seul un admin peut utiliser cette commande",
			commandNotFound: "Commande \"%1\" non trouvée",
			noChangeRole: "❗ Impossible de changer le rôle de la commande \"%1\"",
			resetRole: "Rôle de la commande \"%1\" réinitialisé",
			changedRole: "Rôle de la commande \"%1\" changé en %2"
		}
	},
	setwelcome: {
		description: "Modifier le message de bienvenue lors d'une nouvelle arrivée",
		guide: {
			body: "   {pn} text [<contenu> | reset] : modifier ou réinitialiser le message, raccourcis :\n  + {userName} : nom du nouveau membre\n  + {userNameTag} : nom du nouveau membre (tag)\n  + {boxName} : nom du groupe\n  + {multiple} : toi | vous\n  + {session} : session du jour\n\n   Exemple :\n    {pn} text Hello {userName}, bienvenue dans {boxName}, bonne journée {multiple}\n\n   Répondez ou envoyez un fichier avec {pn} file : pour ajouter une pièce jointe (image, vidéo, audio)\n\n   Exemple :\n    {pn} file reset : supprimer la pièce jointe",
			attachment: {
				[`${process.cwd()}/scripts/cmds/assets/guide/setwelcome/setwelcome_en_1.png`]: "https://i.ibb.co/vsCz0ks/setwelcome-en-1.png"
			}
		},
		text: {
			missingContent: "Veuillez saisir le contenu du message de bienvenue",
			edited: "Contenu du message de bienvenue modifié : %1",
			reseted: "Message de bienvenue réinitialisé",
			noFile: "Aucune pièce jointe à supprimer",
			resetedFile: "Pièce jointe supprimée avec succès",
			missingFile: "Veuillez répondre avec une image/vidéo/audio",
			addedFile: "%1 fichier joint ajouté au message de bienvenue"
		}
	},
	shortcut: {
		description: "Ajouter un raccourci pour votre message dans le groupe",
		text: {
			missingContent: 'Veuillez saisir le contenu du message',
			shortcutExists: 'Le raccourci "%1" existe déjà, réagissez pour remplacer le contenu',
			shortcutExistsByOther: 'Le raccourci %1 a été créé par un autre membre, essayez un autre mot-clé',
			added: 'Raccourci ajouté %1 => %2',
			addedAttachment: ' avec %1 pièce(s) jointe(s)',
			missingKey: 'Veuillez saisir le mot-clé du raccourci à supprimer',
			notFound: 'Aucun raccourci trouvé pour le mot-clé %1 dans ce groupe',
			onlyAdmin: 'Seuls les admins peuvent supprimer les raccourcis des autres',
			deleted: 'Raccourci %1 supprimé',
			empty: 'Aucun raccourci ajouté dans ce groupe',
			message: 'Message',
			attachment: 'Pièce jointe',
			list: 'Liste de vos raccourcis',
			onlyAdminRemoveAll: 'Seuls les admins peuvent tout supprimer',
			confirmRemoveAll: 'Êtes-vous sûr de vouloir supprimer tous les raccourcis ? (réagissez pour confirmer)',
			removedAll: 'Tous les raccourcis ont été supprimés dans votre groupe'
		}
	},
	simsimi: {
		description: "Discuter avec simsimi",
		guide: "   {pn} [on | off] : activer/désactiver simsimi\n\n   {pn} <mot> : discuter\n   Exemple :\n    {pn} salut",
		text: {
			turnedOn: "Simsimi activé avec succès !",
			turnedOff: "Simsimi désactivé avec succès !",
			chatting: "Discussion avec simsimi...",
			error: "Simsimi est occupé, réessayez plus tard"
		}
	},
	sorthelp: {
		description: "Trier la liste d'aide",
		guide: "{pn} [name | category]",
		text: {
			savedName: "Tri par nom enregistré",
			savedCategory: "Tri par catégorie enregistré"
		}
	},
	thread: {
		description: "Gérer les groupes dans le système du bot",
		guide: "   {pn} [find | -f | search | -s] <nom à trouver> : chercher un groupe par nom\n   {pn} [find | -f | search | -s] [-j | joined] <nom> : chercher groupes où le bot est présent\n   {pn} [ban | -b] [<tid> | vide] <raison> : bannir un groupe par id ou le groupe actuel\n   Exemple :\n    {pn} ban 3950898668362484 spam bot\n    {pn} ban spam trop\n    {pn} unban [<tid> | vide] : débannir un groupe",
		text: {
			noPermission: "Vous n'avez pas la permission d'utiliser cette fonction",
			found: "🔎 %1 groupe(s) trouvé(s) correspondant au mot-clé \"%3\" :\n%3",
			notFound: "❌ Aucun groupe trouvé pour \"%1\"",
			hasBanned: "Groupe [%1 | %2] déjà banni :\n» Raison : %3\n» Date : %4",
			banned: "Groupe [%1 | %2] banni.\n» Raison : %3\n» Date : %4",
			notBanned: "Groupe [%1 | %2] non banni",
			unbanned: "Groupe [%1 | %2] débanni",
			missingReason: "La raison du bannissement ne peut pas être vide",
			info: "» ID : %1\n» Nom : %2\n» Date de création : %3\n» Membres : %4\n» Garçons : %5\n» Filles : %6\n» Messages : %7%8"
		}
	},
	tid: {
		description: "Voir l'ID du groupe",
		guide: "{pn}"
	},
	tik: {
		description: "Télécharger vidéo/slide (image), audio depuis tiktok",
		guide: "   {pn} [video|-v|v] <url> : télécharger vidéo/slide\n   {pn} [audio|-a|a] <url> : télécharger audio",
		text: {
			invalidUrl: "Veuillez saisir une url tiktok valide",
			downloadingVideo: "Téléchargement vidéo : %1...",
			downloadedSlide: "Slide téléchargée : %1\n%2",
			downloadedVideo: "Vidéo téléchargée : %1\nUrl : %2",
			downloadingAudio: "Téléchargement audio : %1...",
			downloadedAudio: "Audio téléchargée : %1"
		}
	},
	trigger: {
		description: "Image 'triggered'",
		guide: "{pn} [@tag | vide]"
	},
	uid: {
		description: "Voir l'id Facebook d'un utilisateur",
		guide: "   {pn} : voir votre id Facebook\n   {pn} @tag : voir l'id des personnes taguées\n   {pn} <lien profil> : voir l'id depuis le lien profil",
		text: {
			syntaxError: "Veuillez taguer la personne ou laissez vide pour voir votre propre id"
		}
	},
	unsend: {
		description: "Supprimer le message du bot",
		guide: "répondez au message à supprimer et lancez la commande {pn}",
		text: {
			syntaxError: "Veuillez répondre au message à supprimer"
		}
	},
	user: {
		description: "Gérer les utilisateurs dans le système du bot",
		guide: "   {pn} [find | -f | search | -s] <nom à trouver> : chercher un utilisateur\n\n   {pn} [ban | -b] [<uid> | @tag | réponse] <raison> : bannir un utilisateur\n\n   {pn} unban [<uid> | @tag | réponse] : débannir un utilisateur",
		text: {
			noUserFound: "❌ Aucun utilisateur trouvé pour \"%1\"",
			userFound: "🔎 %1 utilisateur(s) trouvé(s) pour \"%2\" :\n%3",
			uidRequired: "Uid à bannir manquant, entrez uid ou tag ou répondez à un message",
			reasonRequired: "Raison du bannissement manquante, entrez uid ou tag ou répondez à un message",
			userHasBanned: "Utilisateur [%1 | %2] déjà banni :\n» Raison : %3\n» Date : %4",
			userBanned: "Utilisateur [%1 | %2] banni :\n» Raison : %3\n» Date : %4",
			uidRequiredUnban: "Uid à débannir manquant",
			userNotBanned: "Utilisateur [%1 | %2] non banni",
			userUnbanned: "Utilisateur [%1 | %2] débanni"
		}
	},
	videofb: {
		description: "Télécharger une vidéo/story Facebook (publique)",
		guide: "   {pn} <url vidéo/story> : télécharger une vidéo Facebook",
		text: {
			missingUrl: "Veuillez saisir l'url de la vidéo/story Facebook",
			error: "Erreur lors du téléchargement de la vidéo",
			downloading: "Téléchargement de la vidéo...",
			tooLarge: "Désolé, la vidéo dépasse 83Mo"
		}
	},
	warn: {
		description: "Avertir un membre, 3 avertissements = bannissement",
		guide: "   {pn} @tag <raison> : avertir\n   {pn} list : liste des avertis\n   {pn} listban : liste des bannis\n   {pn} info [@tag | <uid> | vide] : voir les infos d'avertissement\n   {pn} unban <uid> : débannir\n   {pn} unwarn <uid> [<num avertissement> | vide] : retirer un avertissement\n   {pn} warn reset : tout réinitialiser\n⚠️ Bot doit être admin pour bannir automatiquement",
		text: {
			list: "Liste des membres avertis :\n%1\n\nPour voir les détails, utilisez \"%2warn info [@tag | <uid> | vide]\"",
			listBan: "Liste des membres bannis (3 avertissements) :\n%1",
			listEmpty: "Aucun membre averti",
			listBanEmpty: "Aucun membre banni",
			invalidUid: "Veuillez saisir un uid valide",
			noData: "Aucune donnée",
			noPermission: "❌ Seuls les admins du groupe peuvent débannir",
			invalidUid2: "⚠️ Veuillez saisir un uid valide",
			notBanned: "⚠️ L'utilisateur %1 n'est pas banni",
			unbanSuccess: "✅ %1 [%2] a été débanni et peut rejoindre le groupe",
			noPermission2: "❌ Seuls les admins du groupe peuvent retirer un avertissement",
			invalidUid3: "⚠️ Entrez un uid ou taguez la personne à désavertir",
			noData2: "⚠️ Pas d'avertissement pour l'utilisateur %1",
			notEnoughWarn: "❌ Utilisateur %1 n'a que %2 avertissements",
			unwarnSuccess: "✅ %1ᵉ avertissement retiré pour [%2 | %3]",
			noPermission3: "❌ Seuls les admins du groupe peuvent réinitialiser les avertissements",
			resetWarnSuccess: "✅ Données d'avertissement réinitialisées",
			noPermission4: "❌ Seuls les admins peuvent avertir",
			invalidUid4: "⚠️ Taguer ou répondre au message de la personne à avertir",
			warnSuccess: "⚠️ %1 avertissement(s) pour %2\n- Uid : %3\n- Raison : %4\n- Date : %5\nAprès 3 avertissements, cette personne sera bannie. Pour débannir : \"%6warn unban <uid>\"",
			noPermission5: "⚠️ Le bot doit être admin pour bannir",
			warnSuccess2: "⚠️ %1 avertissement(s) pour %2\n- Uid : %3\n- Raison : %4\n- Date : %5\nEncore %6 avant bannissement",
			hasBanned: "⚠️ Déjà bannis (3 avertissements) :\n%1",
			failedKick: "⚠️ Erreur lors du bannissement :\n%1"
		}
	},
	weather: {
		description: "voir la météo actuelle et les prévisions sur 5 jours",
		guide: "{pn} <lieu>",
		text: {
			syntaxError: "Veuillez saisir un lieu",
			notFound: "Lieu non trouvé : %1",
			error: "Erreur : %1",
			today: "Météo aujourd'hui :\n%1\n🌡 Temp. min-max %2°C - %3°C\n🌡 Ressenti %4°C - %5°C\n🌅 Lever du soleil %6\n🌄 Coucher du soleil %7\n🌃 Lever de lune %8\n🏙️ Coucher de lune %9\n🌞 Jour : %10\n🌙 Nuit : %11"
		}
	},
	ytb: {
		description: "Télécharger vidéo, audio ou voir infos vidéo YouTube",
		guide: "   {pn} [video|-v] [<nom>|<url>] : télécharger vidéo\n   {pn} [audio|-a] [<nom>|<url>] : télécharger audio\n   {pn} [info|-i] [<nom>|<url>] : voir infos\n   Exemple :\n    {pn} -v Fallen Kingdom\n    {pn} -a Fallen Kingdom\n    {pn} -i Fallen Kingdom",
		text: {
			error: "Erreur : %1",
			noResult: "Aucun résultat pour le mot-clé %1",
			choose: "%1Répondez par le numéro pour choisir ou n'importe quoi pour annuler",
			downloading: "Téléchargement de la vidéo %1",
			noVideo: "Aucune vidéo trouvée de moins de 83Mo",
			downloadingAudio: "Téléchargement de l'audio %1",
			noAudio: "Aucun audio trouvé de moins de 26Mo",
			info: "💠 Titre : %1\n🏪 Chaîne : %2\n👨‍👩‍👧‍👦 Abonnés : %3\n⏱ Durée : %4\n👀 Vues : %5\n👍 J'aime : %6\n🆙 Date : %7\n🔠 ID : %8\n🔗 Lien : %9",
			listChapter: "\n📖 Liste des chapitres : %1\n"
		}
	}
};