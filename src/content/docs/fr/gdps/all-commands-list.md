---
title: Liste de Toutes les Commandes
description: Toutes les commandes que vous pouvez utiliser sur un GDPS utilisant la fork GMDprivateServer de MegaSa1nt
---

Voici toutes les commandes utilisables sur un GDPS utilisant la [fork GMDprivateServer de MegaSa1nt](https://github.com/MegaSa1nt/GMDprivateServer/tree/master) !

*Certaines commandes ont des arguments optionnels qui ne seront pas listés ici pour des raisons de simplicité.*

## Commandes pour les niveaux
Ces commandes peuvent être utilisées dans les commentaires d'un niveau !

### Rating
| Commande | Permission | Description |
| --- | --- | --- |
| `!rate` / `!r <difficulté> <étoiles> <pièces> <feature>` | `commandRate` | Rate le niveau. `difficulté`: `auto`, `easy`, `normal`, `hard`, `harder`, `insane`, ou `demon`. `pièces`: `1` = activé, `0` = désactivé. `feature`: `0` = rate seulement, `1` = featured, `2` = epic, `3` = legendary, `4` = mythic. |
| `!unrate` / `!unr` | `commandRate` | Unrate le niveau complètement. |
| `!send <difficulté> <étoiles> <feature>` | `actionSuggestRating` | Suggère le niveau. `difficulté`: `auto`, `easy`, `normal`, `hard`, `harder`, `insane`, ou `demon`. `feature`: `0` = rate seulement, `1` = featured, `2` = epic, `3` = legendary, `4` = mythic. |
| `!unsend` | `actionSuggestRating` | Désuggère le niveau complètement. |

### Feature
| Commande | Permission | Description |
| --- | --- | --- |
| `!feature` / `!f` | `commandFeature` | Met le niveau en featured. |
| `!epic` | `commandEpic` | Rend le niveau epic. |
| `!legendary` | `commandEpic` | Rend le niveau legendary. |
| `!mythic` | `commandEpic` | Rend le niveau mythic. |
| `!unfeature` | `commandFeature` | Retire le featured. |
| `!unepic` | `commandEpic` | Retire l'epic. |
| `!unlegendary` | `commandEpic` | Retire le legendary. |
| `!unmythic` | `commandEpic` | Retire le mythic. |

### Daily
| Commande | Permission | Description |
| --- | --- | --- |
| `!daily` / `!da` | `commandDaily` | Fait du niveau le prochain niveau journalier. |
| `!weekly` / `!w` | `commandWeekly` | Fait du niveau le prochain niveau hebdomadaire. |
| `!event` / `!ev <minutes> <ID récompense> <quantité>` | `commandEvent` | Fait du niveau le prochain niveau event pour une durée définie. Pour ajouter d'autres récompenses: `!event <minutes> <ID récompense> <quantité> <ID récompense> <quantité>...` [IDs des récompenses](#récompenses). |

### Coins & Creator Points
| Commande | Permission | Description |
| --- | --- | --- |
| `!verifycoins` / `!vc` | `commandVerify` | Active l'obtention des pièces du niveau. |
| `!unverifycoins` | `commandVerify` | Déactive l'obtention des pièces du niveau. |
| `!sharecp <nom d'utilisateur>` | `commandSharecpOwn` / `commandSharecpAll` | Partage les creator points du niveau avec un autre joueur |

### Gestion
| Commande | Permission | Description |
| --- | --- | --- |
| `!setacc` / `!sa <nom d'utilisateur/ID du compte>` | `commandSetacc` | Change le créateur du niveau. |
| `!lockUpdating` / `!lu` | `commandLockUpdating` | Empêche le créateur de niveau de le mettre à jour. |
| `!unlockUpdating` / `!unlu` | `commandLockUpdating` | Permet à nouveau au créateur du niveau de le mettre à jour. |
| `!rename` / `!re <name>` | `commandRenameOwn` / `commandRenameAll` | Renomme le niveau. |
| `!description` / `!desc <description>` | `commandDescriptionOwn` / `commandDescriptionAll` | Change la description du niveau. |
| `!song` / `!s <ID du son>` | `commandSongOwn` / `commandSongAll` | Change le son du niveau. |
| `!public` / `!pub` | `commandPublicOwn` / `commandPublicAll` | Rend le niveau public. |
| `!unlist` | `commandUnlistOwn` / `commandUnlistAll` | Déliste le niveau. |
| `!ldm` | `commandLdmOwn` / `commandLdmAll` | Active le LDM sur le niveau. |
| `!unldm` | `commandLdmOwn` / `commandLdmAll` | Désactive le LDM sur le niveau. |
| `!password` / `!pass` / `!p <6 chiffres>` | `commandPassOwn` / `commandPassAll` | Change le mot de passe de copie du niveau. Envoyez `000000` pour l'enlever. |
| `!lockComments` / `!lc` | `commandLockCommentsOwn` / `commandLockCommentsAll` | Empêche de commenter sur le niveau. |
| `!unlockComments` / `!unlc` | `commandLockCommentsOwn` / `commandLockCommentsAll` | Permet à nouveau de commenter sur le niveau. |
| `!delete` / `!delet` / `!d` | `commandDelete` | Supprime le niveau. |

![Example de commande de niveau](../../../../assets/gdps/all-commands-list/level-command-example.webp)

## Commandes pour les listes
Ces commandes peuvent être utilisées dans les commentaires d'une liste !

### Rating & Feature
| Commande | Permission | Description |
| --- | --- | --- |
| `!rate` / `!r <récompense> <difficulté> <featured> <quantité>` | `commandRate` | Rate la liste. `difficulté`: `auto`, `easy`, `normal`, `hard`, `harder`, `insane`, ou `demon`. `featured`: `0` = rate seulement, `1` = featured. `quantité`: nombre de niveau à battre pour avoir la/les récompense(s). Avec seulement `actionSuggestRating`, la liste est suggérée à la place. [IDs des récompenses](#récompenses). |
| `!feature` / `!f` | `commandFeature` | Met le niveau en featured. |
| `!unfeature` | `commandFeature` | Retire le featured. |

### Gestion
| Commande | Permission | Description |
| --- | --- | --- |
| `!rename` / `!re <nom>` | `commandRenameOwn` / `commandRenameAll` | Renomme la liste. |
| `!description` / `!desc <description>` | `commandDescriptionOwn` / `commandDescriptionAll` | Change la description de la liste. |
| `!setacc` / `!sa <nom d'utilisateur/ID du compte>` | `commandSetacc` | Change le créateur de la liste. |
| `!unlist` | `commandUnlistOwn` / `commandUnlistAll` | Déliste la liste. Utilisez `!unlist 0` pour la rendre publique, `!unlist 1` pour que seuls les amis puissent la voir. |
| `!lockComments` / `!lc` | `commandLockCommentsOwn` / `commandLockCommentsAll` | Empêche de commenter sur la liste. |
| `!unlockComments` / `!unlc` | `commandLockCommentsOwn` / `commandLockCommentsAll` | Permet à nouveau de commenter sur la liste. |
| `!delete` / `!d` | `commandDelete` | Supprime la liste. |

![Example de commande de liste](../../../../assets/gdps/all-commands-list/list-command-example.webp)

## Commandes de Profil
Ces commandes peuvent être utilisées dans les commentaires de votre profile ! Fonctionne seulement si le GDPS supporte l'association de votre compte Discord.

| Commande | Description |
| --- | --- |
| `!discord link <discord ID>` | Démarre le processus d'association et vous envoie un code à 4 chiffres. |
| `!discord accept <code>` | Associe votre compte Discord si le code est valide. |
| `!discord unlink` | Désassocie votre compte Discord de votre profil. |

![Example de commande de profil](../../../../assets/gdps/all-commands-list/profile-command-example.webp)

## Récompenses
Voici les IDs pour chaque récompense possible.

### Récompenses Shard
| ID | Reward |
| --- | --- |
| **1** | Fire Shard |
| **2** | Ice Shard |
| **3** | Poison Shard |
| **4** | Shadow Shard |
| **5** | Lava Shard |
| **10** | Earth Shard |
| **11** | Blood Shard |
| **12** | Metal Shard |
| **13** | Light Shard |
| **14** | Soul Shard |

### Récompenses Icon
| ID | Reward |
| --- | --- |
| **1001** | Cube |
| **1002** | Color 1 |
| **1003** | Color 2 |
| **1004** | Ship |
| **1005** | Ball |
| **1006** | UFO |
| **1007** | Wave (Dart) |
| **1008** | Robot |
| **1009** | Spider |
| **1010** | Trail |
| **1011** | Death Effect |
| **1013** | Swing |
| **1014** | Jetpack |
| **1015** | Ship fire |

### Autres Récompenses
| ID | Reward |
| --- | --- |
| **6** | Demon Key |
| **7** | Orbes |
| **8** | Diamants |
| **15** | Gold Key |
| **1012** | Items (keys, paths, gemmes, music hack, etc.) |

-----

*Dernièrement mis à jour : 14 Juillet 2026*