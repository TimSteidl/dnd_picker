export interface Source {
  name: string;
  image: string;
  description: string;
  details: boolean;
  englischDescription: string;
  locale: boolean;
}

export const sourceData: Source[] = [
  {
    name: "City of Cats",
    image: "/assets/city_of_cats.png",
    description:
      "Im Süden von Nuria Natal, wo der große Fluss Nuria fließt\n" +
      "verengt sich zu einer Hunderte Meilen langen Schlucht, dem Fluss\n" +
      "Ströme um die monolithischen Knöchel einer 800 Fuß großen Person\n" +
      "Statuen von Göttern. Ihre hoch aufragenden Formen ragen über dem\n" +
      "Fluss, kurz bevor sein Wasser ins Freie mündet\n" +
      "wieder Wüste, die sich am Fuße des Flusses verbreitert und verlangsamt\n" +
      "strahlende Stadt namens Per-Bastet.\n" +
      "Gedeihend, verwirrend und voller hektischem Leben,\n" +
      "Die Stadt der Katzen steht für unbekannte Tausende von Menschen\n" +
      "Jahre am Scheideweg der Southlands. Es ist eine Stadt von\n" +
      "neun Bezirke, neun Pyramiden und neun Leben. Jedes Mal\n" +
      "Die Stadt ist gefallen, sie ist wieder auferstanden, um ihr Lob zu singen\n" +
      "Bastet, die Schutzgöttin, die unter ihren Auserwählten wandelt.\n" +
      "Per-Bastet ist die Stadt der Katzen und Gnolle, des Parfüms\n" +
      "und Tempel, reich an Gold, Mithral und Diamanten\n" +
      "Minen, von Alchemie und Prophezeiung, von importierten Gewürzen\n" +
      "und drakonische Sklavenmärkte und prächtige Bordelle\n" +
      "und brutale Kampfgruben. Mit seinem launenhaften Gönner\n" +
      "Göttin und eine Bevölkerung unzähliger fleischfressender Rassen und\n" +
      "Raubtiere, die Stadt lebt von der Energie ihrer\n" +
      "eigener Mangel an Harmonie.",
    details: true,
    englischDescription:
      "In southern Nuria Natal, where the great River Nuria\n" +
      "narrows into a gorge hundreds of miles long, the river\n" +
      "streams around the monolithic ankles of 800-foot-tall\n" +
      "statues of gods. Their towering forms loom over the\n" +
      "river just before its waters course out into the open\n" +
      "desert again, broadening and slowing at the foot of the\n" +
      "gleaming city called Per-Bastet.\n" +
      "Thriving, bewildering, and roiling with frenetic life,\n" +
      "the City of Cats has stood for unknown thousands of\n" +
      "years at the crossroads of the Southlands. It is a city of\n" +
      "nine districts, nine pyramids, and nine lives. Each time\n" +
      "the city has fallen, it has risen again to sing its praises to\n" +
      "Bastet, the patron goddess who walks among her chosen.\n" +
      "Per-Bastet is the city of cats and gnolls, of perfume\n" +
      "and temples, of abounding gold, mithral, and diamond\n" +
      "mines, of alchemy and prophesy, of imported spice\n" +
      "and draconic slave markets, and of sumptuous brothels\n" +
      "and brutal fighting pits. With its mercurial patron\n" +
      "goddess and a populace of myriad carnivorous races and\n" +
      "predatory species, the city thrives on the energy of its\n" +
      "own lack of harmony.",
    locale: true,
  },
  {
    name: "Beware Yulecat",
    image: "/assets/beware_yulecat.png",
    description:
      "Vorsicht vor dem WeihnachtsfestWeihnachtsfest im Köldhorn 2\n" +
      "Willkommen in Cold Corners, in den gefrorenen Tiefen der Northlands! Hüten Sie sich davor\n" +
      "Yule Cat ist ein saisonales Abenteuer für Charaktere der Stufe 2.\n" +
      "Gelegen im Dorf Köldhorn (Cold Corners) und dem nahegelegenen Gipfel von\n" +
      "Snörfjall (Schneeberg), das Abenteuer beinhaltet Elemente isländischer Legenden\n" +
      "und Monster, mit einigen Hintergrundinformationen, die den Ursprung der Geschichte erklären. Der\n" +
      "Kurz vor einem heftigen Sturm an einem winterlichen Tag kommen Abenteurer im Dorf Köldhorn an\n" +
      "Am Weihnachtsabend stellt sich heraus, dass die Dorfbewohner nicht bereit sind, Unterkunft oder Gastfreundschaft anzubieten. Sie bald\n" +
      "Erfahren Sie, dass die Stadt von der wilden Jólakötturinn – der Weihnachtskatze – besucht werden soll.\n" +
      "der durch die Straßen schleicht und diejenigen verschlingt, die keine neuen Kleider bekommen haben, sowie\n" +
      "diejenigen, die ihnen Schutz bieten.",
    details: true,
    englischDescription:
      "Welcome to Cold Corners, in the frozen depths of the Northlands! Beware the\n" +
      "Yule Cat is a seasonally themed adventure for Tier 2 characters.\n" +
      "Set in the village of Köldhorn (Cold Corners) and the nearby peak of\n" +
      "Snörfjall (Snow Mountain), the adventure incorporates elements of Icelandic legends\n" +
      "and monsters, with some background information explaining the tale’s origins. The\n" +
      "adventurers arrive in the village of Köldhorn just ahead of a fierce storm on a wintery\n" +
      "Yule eve, only to find the villagers unwilling to offer shelter or hospitality. They soon\n" +
      "learn that the town is to be visited by the ferocious Jólakötturinn — the Yule Cat —\n" +
      "who stalks the streets and devours those who haven’t received new clothes, as well as\n" +
      "those who offer them shelter.",
    locale: true,
  },
  {
    name: "Chentoufi Eye",
    image: "/assets/chentoufi_eye.png",
    description:
      "Dieses kurze Abenteuermodul wurde als Sonderangebot für Gary Con XIII entwickelt und soll mehr bieten\n" +
      "Tiefe und Kontext zur großartigen Stadt Chentoufi. Das Abenteuer spielt in der fantastischen WELT von OKKORIM™\n" +
      "[oh-KAW-reem], ein raues Land, in dem nur die Gerissenen und Mächtigen gedeihen. Das Szenario entfaltet sich mit dem\n" +
      "Abenteurer beenden ihr letztes Abenteuer auf großartige filmische Weise, müssen aber im Jahr nach Chentoufi zurückkehren\n" +
      "um sich auszuruhen und zu erholen.",
    details: true,
    englischDescription:
      "This short adventure module was developed as a special offering for Gary Con XIII, and seeks to bring more\n" +
      "depth and context to the great city of Chentoufi. The adventure is set in the fantastic WORLD of OKKORIM™\n" +
      "[oh-KAW-reem], a harsh land where only the cunning and powerful prosper. The scenario unfolds with the\n" +
      "adventurers completing their last adventure in a great cinematic fashion, but must return to Chentoufi in\n" +
      "order to rest and recuperate.",
    locale: true,
  },
  {
    name: "Chentoufi Heart",
    image: "/assets/chentoufi_heart.png",
    description:
      "Dieses kurze Abenteuermodul wurde als Sonderangebot für Gary Con XV entwickelt und setzt die Ereignisse von fort\n" +
      "Folge 1 – Das Auge von Chentoufi. Die Abenteuer finden sich in der fantastischen WELT wieder\n" +
      "OKKORIM™ [oh-KAW-reem], ein raues Land, in dem nur die Schlauen und Mächtigen Erfolg haben. Das Szenario\n" +
      "spielt dort, wo das vorherige Abenteuer aufgehört hat, im unterirdischen Komplex unter dem Akrubulis von\n" +
      "Chentoufi.",
    details: true,
    englischDescription:
      "This short adventure module was developed as a special offering for Gary Con XV, and continues events from\n" +
      "Episode 1 - The Eye of Chentoufi. The adventures will find themselves in the fantastic WORLD of\n" +
      "OKKORIM™ [oh-KAW-reem], a harsh land where only the cunning and powerful prosper. The scenario\n" +
      "unfolds where the previous adventure left off, in the underground complex beneath the Akrubulis of\n" +
      "Chentoufi.",
    locale: true,
  },
  {
    name: "Chentoufi Fate",
    image: "/assets/chentoufi_fate.png",
    description:
      "Diese Serie war ursprünglich als einzelnes Abenteuermodul als besonderes Angebot für Gary konzipiert\n" +
      "Con XIII und versuchte, der großartigen Stadt Chentoufi mehr Tiefe und Kontext zu verleihen. Das Abenteuer ist\n" +
      "spielt in der fantastischen WELT von OKKORIMTM [oh-KAW-reem], einem rauen Land, in dem nur die List und\n" +
      "mächtig gedeihen. Das Szenario entfaltet sich, indem die Abenteurer ihr letztes Abenteuer in einem großartigen Zustand abschließen\n" +
      "Filmmode, muss aber nach Chentoufi zurückkehren, um sich auszuruhen und zu erholen",
    details: true,
    englischDescription:
      "This series was originally thought up as a single adventure module meant as a special offering for Gary\n" +
      "Con XIII, and sought to bring more depth and context to the great city of Chentoufi. The adventure is\n" +
      "set in the fantastic WORLD of OKKORIMTM [oh-KAW-reem], a harsh land where only the cunning and\n" +
      "powerful prosper. The scenario unfolds with the adventurers completing their last adventure in a great\n" +
      "cinematic fashion, but must return to Chentoufi in order to rest and recuperate",
    locale: true,
  },
  {
    name: "Crypt of the Crimson King",
    image: "/assets/crypt_of_the_crimson_king.png",
    description:
      "Das Abenteuer beginnt, als sich ein einsamer Mönch der Gruppe nähert\n" +
      "und bittet sie um Hilfe. Er begleitet sie zu einem Lager\n" +
      "wo der Rest seines Ordens, die Kinder des Crimson King, sind\n" +
      "bleiben. Der Anführer des Ordens, Estabor, verrät das etwas\n" +
      "Extraplanar entkam einem Artefakt im Kloster und zwang ihn\n" +
      "der Befehl zur Flucht. Die Gruppe kann sich die Artikel aus der Auswahl aussuchen\n" +
      "Kloster, wenn sie den Kindern des Crimson King dabei helfen\n" +
      "Räumung ihres Cenobiums..",
    details: true,
    englischDescription:
      "The adventure begins when a lone monk approaches the party\n" +
      "and petitions them for help. He escorts them to an encampment\n" +
      "where the rest of his order, the Children of the Crimson King, are\n" +
      "staying. The leader of the order, Estabor, reveals that something\n" +
      "extraplanar escaped from an artifact in the monastery, forcing\n" +
      "the order to flee. The party can have their pick of items from the\n" +
      "monastery, if they assist the Children of the Crimson King in\n" +
      "clearing out their cenobium",
    locale: true,
  },
  {
    name: "Dwarven Fiasco",
    image: "/assets/dwarven_fiasco.png",
    description:
      "Dieses Abenteuer liegt auf einer Klippe.\n" +
      "Seite Zwergenkloster am nördlichen Rand der Stadt\n" +
      "lisierte Länder, zwischen dem Whisper Vale und der Wildnis der\n" +
      "Gauntswept. Weiter nördlich liegt das Land der Frostriesen.\n" +
      "Seit Jahrhunderten sind der Tempel und die Nachbarstadt Cleft\n" +
      "dienten als Hauptverteidigung gegen die sporadischen Überfälle von\n" +
      "Bestien und monströse Humanoide aus dem Norden. Wie auch immer-\n" +
      "Ver, ein schlecht getimtes kosmisches Ereignis brachte das Kloster in die Krise\n" +
      "Hände eines Zwergen-Lichs. Aufgrund der Launen der Jugend und\n" +
      "Aufgrund der Mattigkeit des Alters ist Cleft weit von der geschäftigen Stadt entfernt\n" +
      "es war einmal. Während Ihre Spieler möglicherweise nicht politisch sind\n" +
      "Champions müssen Cleft in den Hintern treten, hoffentlich-\n" +
      "Sie sind vollständig die Gruppe, die benötigt wird, um den Zwergenlich zu beseitigen\n" +
      "Haeferic von seinem Schlafplatz.",
    details: true,
    englischDescription:
      "This adventure is written for the world of Whisper & Venom\n" +
      "(available from Necromancer Games). It is set in a cliff-\n" +
      "side dwarven monastery at the northern edge of the civi-\n" +
      "lized lands, between the Whisper Vale and the wilds of the\n" +
      "Gauntswept. Farther north is the land of the frost giants.\n" +
      "For centuries, the temple and the neighboring city of Cleft\n" +
      "have stood as the main defense against the sporadic raids of\n" +
      "beasts and monstrous humanoids from the North. Howe-\n" +
      "ver, a poorly timed cosmic event put the monastery in the\n" +
      "hands of a dwarven lich. Due to the vagaries of youth and\n" +
      "the lassitude of age, Cleft is far from the industrious city\n" +
      "it once was. While your players may not be the political\n" +
      "champions required to kick Cleft in the backside, hope-\n" +
      "fully they are the group needed to remove the dwarven lich\n" +
      "Haeferic from his roost.",
    locale: true,
  },
  {
    name: "Enigma in the Maze",
    image: "/assets/enigma_in_the_maze.png",
    description:
      "Im Kern ist Enigma ein einfaches Suchen und Erkunden\n" +
      "Abenteuer. Die PCs erhalten den Schlüssel zum Betreten\n" +
      "Erstes Labyrinth, das Weltlabyrinth, in dem sich alle Labyrinthe befinden\n" +
      "verbinden, an seinem am wenigsten gefährlichen Ort, der ihm am nächsten liegt\n" +
      "Herz. Sie müssen dem Patienten das Heilmittel verabreichen\n" +
      "Irre Labyrinth und gehen, um ihre Feinde zu besiegen\n" +
      "Weg.",
    details: true,
    englischDescription:
      "At its heart, Enigma is a simple seek-and-explore\n" +
      "adventure. The PCs will gain the key to entering the\n" +
      "First Labyrinth, the world maze where all mazes\n" +
      "connect, in its least dangerous location closest to its\n" +
      "Heart. They need to administer the curative to the\n" +
      "mad maze and leave, defeating their enemies on the\n" +
      "way. Sadly, the Heart of Roshgazi is more insane than\n" +
      "even the minotaurs who tend it guessed and, once the\n" +
      "PCs enter its grasp, they find more trouble than they\n" +
      "bargained for as they are taken from one strange maze\n" +
      "to another on their journey to the Heart itself.",
    locale: true,
  },
  {
    name: "Fires of War",
    image: "/assets/fires_of_war.png",
    description:
      "Es beginnt, wenn die Gruppe in einem Militärlager ankommt. Ander\n" +
      "Scorchheart, der das Kommando innehat, informiert sie über die aktuelle Situation\n" +
      "Zustand. Vor ein paar Tagen wurde der gefährliche Zauberer zum Militärdienst eingezogen\n" +
      "Mercy war an einem gescheiterten Fluchtversuch beteiligt\n" +
      "von The Sons of Mercy (einer Splitterfraktion innerhalb der Wehrpflichtigen).\n" +
      "Band namens The Gallows Boys) und war vorübergehend\n" +
      "wechselte zu Anders Einheit. Es kursieren auch Gerüchte, dass der Feind\n" +
      "Söldner der Carrion Company sind unterwegs, angeführt von\n" +
      "brutaler Fel Kade, ein alter Kamerad von Anders, der vermutet wurde\n" +
      "tot und sinnt auf Rache.",
    details: true,
    englischDescription:
      "It begins when the party arrives at a military encampment. Ander\n" +
      "Scorchheart, who holds command, fills them in on the current\n" +
      "state of affairs. A few days ago, the dangerous conscripted sorcerer\n" +
      "Mercy was involved in a failed escape attempt orchestrated\n" +
      "by The Sons of Mercy (a splinter faction within the conscript\n" +
      "band known as The Gallows Boys), and was temporarily\n" +
      "moved to Ander’s unit. Rumors are also brewing that the enemy\n" +
      "mercenaries of Carrion Company are on the move, led by the\n" +
      "brutal Fel Kade, an old comrade of Ander’s, who was presumed\n" +
      "dead, and seeks vengeance.",
    locale: true,
  },
  {
    name: "Forgotten Oasis",
    image: "/assets/forgotten_oasis.png",
    description:
      "Den Reisenden erscheint die Oase in der Wüste\n" +
      "Momente großer Not. Diejenigen, die werden\n" +
      "dehydriert und beginnt möglicherweise zu halluzinieren\n" +
      "beschwören es einfach aufgrund ihres Bedarfs an Nahrung.\n" +
      "nance, und es erweist sich in der Tat als ausgezeichnet\n" +
      "Ort zum Ausruhen.\n" +
      "Palmen erstrecken sich träge über einen See mit Trinkwasser\n" +
      "Wasser. Die unmittelbare Auswirkung besteht darin, dass alle Ebenen entfernt werden\n" +
      "der Erschöpfung durch die Person, die daraus trinkt,\n" +
      "aber 1 Minute später muss ihnen ein DC 17 gelingen\n" +
      "Konstitution rettender Wurf oder eingeschläfert werden und\n" +
      "unter die Oase gezogen",
    details: true,
    englischDescription:
      "The oasis appears to travelers in the desert in\n" +
      "moments of great need. Those who are becoming\n" +
      "dehydrated and beginning to hallucinate might\n" +
      "summon it simply by force of their need for suste-\n" +
      "nance, and it does indeed prove to be an excellent\n" +
      "place to rest to begin with.\n" +
      "Palm trees stretch lazily over a lake with drinkable\n" +
      "water. The immediate effect is to remove all levels\n" +
      "of exhaustion from the person who drinks from it,\n" +
      "but 1 minute later they must succeed on a DC 17\n" +
      "Constitution saving throw or be put to sleep and\n" +
      "pulled beneath the oasis.",
    locale: true,
  },
  {
    name: "Fungus",
    image: "/assets/fungus.png",
    description:
      "Es begann mit einem seltsamen Blitz, der von der Mondoberfläche aus zu sehen war\n" +
      "Sybil. Die Propheten und Orakel schworen, dass dies ein schlechtes Omen sei\n" +
      "Die Katzen redeten mehr als sonst und rannten umher, als ob sie ihre Schwänze hätten\n" +
      "standen in Flammen. Die Orakel hatten jedoch keine Möglichkeit, die Wahrheit zu erfahren\n" +
      "Einige nutzten ihre Magie, um über die Leere dazwischen zu blicken\n" +
      "ihre Welt und der nahe Mond. Alles, was enthüllt wurde, war ein Feld von\n" +
      "zerbrochene Kristalle und nichts weiter. Der Stärkste unter ihnen\n" +
      "nahm nur einen schwachen Strahl aus der tieferen Dunkelheit und den Gedanken wahr\n" +
      "nichts mehr davon. Sie erwachten zum Frühstück, fütterten ihre Katzen,\n" +
      "und machten mit ihrem Leben weiter",
    details: true,
    englischDescription:
      "It began with a strange flash seen from the surface of the moon\n" +
      "Sybil. The prophets and oracles swore this was a bad omen, for\n" +
      "the cats talked more than normal and ran about as if their tails\n" +
      "were on fire. The oracles had no way of knowing the truth, though\n" +
      "some used their magic to see across the void of space between\n" +
      "their world and the near moon. All that was revealed was a field of\n" +
      "shattered crystals and nothing more. The strongest among them\n" +
      "perceived only a faint beam from the deeper darkness and thought\n" +
      "nothing more of it. They awoke to their breakfast, fed their cats,\n" +
      "and moved on with their lives.",
    locale: true,
  },
  {
    name: "Garden of Statuary",
    image: "/assets/garden_of_statuary.png",
    description:
      "Was auch immer die Jahreszeit draußen vor Ihnen war\n" +
      "An diesem Ort angekommen, ist das Innere des Gartens\n" +
      "ewiger Sommer bis hin zum ständigen Summen\n" +
      "von Insekten.\n" +
      "Wenn die Sonne an diesem Ort untergeht,\n" +
      "Glühwürmchen tauchen auf. Jedes winzige Insekt spendet helles Licht\n" +
      "Wenn es leuchtet, leuchtet es bis zu 20 Fuß weit.\n" +
      "Die Lichtung ist mit verschiedenen Pflanzen überfüllt, darunter\n" +
      "mehrere Stonenapper und Charaktere, die\n" +
      "Bestehen Sie einen Wurf auf Weisheit (Wahrnehmung) gegen SG 14\n" +
      "Entdecken Sie humanoide Statuen zwischen einigen\n" +
      "Pflanzen.\n" +
      "Weitere Statuen säumen den Garten weiter innen\n" +
      "präzise Darstellung der Ähnlichkeit von eindeutig\n" +
      "Kreaturen bis ins kleinste Detail.",
    details: true,
    englischDescription:
      "Whatever the season was outside before you\n" +
      "arrived in this place, the inside of the garden is\n" +
      "eternally summer down to the constant buzzing\n" +
      "of insects.\n" +
      "When the sun begins to go down in this place,\n" +
      "fireflies emerge. Each tiny insect sheds bright\n" +
      "light out to 20 feet when it glows.\n" +
      "The glade is crowded by various plants including\n" +
      "several stonesnappers and characters who suc-\n" +
      "ceed on a DC 14 Wisdom (Perception) check\n" +
      "spot humanoid statues between some of the\n" +
      "plants.\n" +
      "More statues dot the garden further inside, each\n" +
      "precisely representing the likeness of distinct\n" +
      "creatures down to the most minute detail.",
    locale: true,
  },
  {
    name: "Gods of the Empires",
    image: "/assets/gods_of_the_empires.png",
    description:
      "More than 3,600 years ago, the Polemarch Oerson led the\n" +
      "Hyperborean Legion into Akados from the far northern continent\n" +
      "of Boros. As the Hyperboreans spread throughout Akados and\n" +
      "then into Libynos, they brought with them the traditions of their\n" +
      "homeland and the worship of their gods. The inhabitants of the\n" +
      "many lands they conquered in time came to venerate some of\n" +
      "these foreign gods. At the same time, the Hyperboreans learned\n" +
      "of the deities of their new domains and on occasion incorporated\n" +
      "some of them into their own imperial pantheon.",
    details: true,
    englischDescription:
      "More than 3,600 years ago, the Polemarch Oerson led the\n" +
      "Hyperborean Legion into Akados from the far northern continent\n" +
      "of Boros. As the Hyperboreans spread throughout Akados and\n" +
      "then into Libynos, they brought with them the traditions of their\n" +
      "homeland and the worship of their gods. The inhabitants of the\n" +
      "many lands they conquered in time came to venerate some of\n" +
      "these foreign gods. At the same time, the Hyperboreans learned\n" +
      "of the deities of their new domains and on occasion incorporated\n" +
      "some of them into their own imperial pantheon.",
    locale: true,
  },
  {
    name: "Heresy",
    image: "/assets/heresy.png",
    description:
      "Heresy of Rot beginnt in der kleinen Stadt Fetterwald, einem Neglec\n" +
      "Eine Siedlung, die schon bessere Tage gesehen hat. Einst ein vertrauenswürdiges Wasser\n" +
      "Für diejenigen, die nach Norden unterwegs sind, scheint es nun eine allmähliche Lücke zu geben\n" +
      "verblassen. Ranches stehen verfallen und verlassen da, während die\n" +
      "Getreidefelder und Wälder sind ohne Axt wild und dicht geworden\n" +
      "um sie zu schneiden. Viele von Fetterwalds Häusern und Ladengeschäften sind es\n" +
      "Im Allgemeinen ist es baufällig und die einst üppigen Felder sind verdorrt.\n" +
      "Die ganze Stadt wirkt trostlos, als wäre sie einfach nur ein einziges Übel\n" +
      "Saison ohne völlige Aufgabe.\n" +
      "Auch wenn Fetterwald sicherlich in Not geraten ist, war es nicht so\n" +
      "immer so. In früheren Zeiten rezitierten Karawanenführer und Reisende\n" +
      "Betrachten Sie es als einen freundlichen, praktikablen Zwischenstopp zum Ausruhen, Nachschub,\n" +
      "und finde einen kalten Krug Bier. Warum also der abrupte Wechsel?",
    details: true,
    englischDescription:
      "Heresy of Rot begins in the small town of Fetterwald, a neglec\n" +
      "ted settlement that has seen better days. Once a trusted water\n" +
      "ing hole for those headed north, it now seems to be gradually\n" +
      "fading away. Ranches stand derelict and abandoned, while the\n" +
      "cornfields and woods have grown wild and thick with no axe\n" +
      "to cut them. Many of Fetterwald’s homes and storefronts are\n" +
      "in general disrepair, and its once lush fields have gone to seed.\n" +
      "The whole town has an air of desolation, as if it’s simply one bad\n" +
      "season away from complete abandonment.\n" +
      "While hardship has surely come to Fetterwald, things were not\n" +
      "always this way. In days past, caravan masters and travelers re\n" +
      "member it as a friendly, viable stopover point to rest, resupply,\n" +
      "and find a cold mug of ale. So why the abrupt change?",
    locale: true,
  },
  {
    name: "Lake of Dust",
    image: "/assets/lake_of_dust.png",
    description:
      "Der Festlandsockel und die lichtlosen Abgründe des tiefen Ozeans sind die\n" +
      "Der natürliche Lebensraum der Sahuagins. Sie schwimmen nur dann Flüsse hinauf, wenn sie es sind\n" +
      "Plünderung von Siedlungen im Landesinneren nach Schätzen und Gefangenen. Sehr selten, z\n" +
      "Aus Gründen, die nur ihren Priesterinnen bekannt sind, etablieren sich Sahuagin manchmal.\n" +
      "Blish kleine religiöse Kolonien in abgelegenen Süßwasserseen. Am wahrscheinlichsten\n" +
      "Der Grund dafür ist, dass es in der Gegend (zumindest in den Augen der Sahuagins) einige davon gibt\n" +
      "unklare Bedeutung für ihre blutrünstige, haifischartige Gottheit.\n" +
      "Dieses Ödland war nicht immer eine Wüste. Vor Jahrhunderten gab es dort Flüsse,\n" +
      "Von Dattelpalmen gesäumte Seen und saisonales Grün. Der Regen\n" +
      "versiegte und die Seen und Flüsse trockneten aus. Jetzt nur noch wenige\n" +
      "Es bleiben karge, weit auseinander liegende Oasen. (Wenn Ihre Charaktere The gespielt haben\n" +
      "Stadt, die Blut tropfte, mit der sie bereits einige Erfahrungen haben\n" +
      "die Gefahr des Ödlandes.)",
    details: true,
    englischDescription:
      "The continental shelf and lightless abysses of the deep ocean are the\n" +
      "sahuagins’ natural habitat. They swim up rivers only when they’re\n" +
      "raiding inland settlements for treasure and prisoners. Very rarely, for\n" +
      "reasons known only to their priestesses, sahuagin sometimes esta-\n" +
      "blish small religious colonies in remote freshwater lakes. The likeliest\n" +
      "reason is that the area has (in the sahuagins’ minds, anyway) some\n" +
      "obscure significance to their bloodthirsty, shark-like deity.\n" +
      "This wasteland wasn’t always a desert. Centuries ago, it had rivers,\n" +
      "lakes fringed with date palms, and seasonal greenery. The rain\n" +
      "petered out, and the lakes and rivers dried up. Now only a few\n" +
      "meager, widely spaced oases remain. (If your characters played The\n" +
      "City that Dripped Blood, they already have some experience with\n" +
      "the danger of the Wasteland.)",
    locale: true,
  },
  {
    name: "Path of the Vanished",
    image: "/assets/path_of_the_vanished.png",
    description:
      "Die PCs sind Teil eines riesigen\n" +
      "Suchen Sie nach der Raider-Basis und beenden Sie ihre Verderbtheiten.\n" +
      "Die PCs finden sich in einem riesigen Gezeitensumpf wieder und stolpern hinein\n" +
      "eine alte, halb versunkene Stadt. Die Stadt bietet eine Vielfalt\n" +
      "von Begegnungen und führt die PCs letztendlich aus der Stadt in die Stadt\n" +
      "Wildnis-Lodge",
    details: true,
    englischDescription:
      "In part one, Legacy of the Vanished, the PCs are part of a massive\n" +
      "search to locate the Raider base and end their depravations (Chapter I).\n" +
      "The PCs find themselves in a massive tidewater swamp and stumble into\n" +
      "an ancient, half-sunken city (Chapter II). The city includes a variety\n" +
      "of encounters and ultimately leads the PCs out of the city and to the\n" +
      "Wilderness Lodge",
    locale: true,
  },
  {
    name: "Rat King's Sewer",
    image: "/assets/rat_kings_sewer.png",
    description:
      "Rat King’s Sewer ist ein Dungeon-Crawl mit einem Mysterium in der Kanalisation\n" +
      "unterhalb der Stadt Eastgate in den Borderlands-Provinzen. Gefunden auf\n" +
      "die Ostseite des Kontinents Akados in der Welt von Frog God\n" +
      "Games‘ Lost Lands, Eastgate ist eine geschäftige Stadt an der Mündung des Flusses\n" +
      "Amrin-Fluss. Dieses Abenteuer ist für Charaktere der Stufe 2 mit einem konzipiert\n" +
      "Gute Mischung aus Kampf-, Zauber- und Fallensuchfähigkeiten. Wie die meisten\n" +
      "Ein Teil des Abenteuers spielt sich in der Kanalisation ab, und fast alles davon in einem\n" +
      "In einem städtischen Umfeld könnten sich wildnisorientierte Charaktere wiederfinden\n" +
      "im Nachteil. Andererseits sind die Abwasserkanäle ein Labyrinth voller Dinge\n" +
      "Art tödlicher Kreaturen, also vielleicht die Fähigkeit, mit Kakerlaken zu sprechen\n" +
      "erweisen sich einfach als nützlich.",
    details: true,
    englischDescription:
      "Rat King’s Sewer is a dungeon crawl with a mystery set in the sewers\n" +
      "beneath the city of Eastgate in the Borderlands Provinces. Found on\n" +
      "the eastern side of the continent of Akados in the world of Frog God\n" +
      "Games’ Lost Lands, Eastgate is a bustling city at the mouth of the\n" +
      "Amrin River. This adventure is designed for Tier 2 characters with a\n" +
      "good mix of combat, spellcasting, and trap-finding abilities. As most\n" +
      "of the adventure takes place in the sewers, and nearly all of it in an\n" +
      "urban setting, wilderness-orientated characters might find themselves\n" +
      "at a disadvantage. Then again, the sewers are a maze filled with all\n" +
      "manner of deadly creatures, so the ability to talk to cockroaches might\n" +
      "just prove useful.",
    locale: true,
  },
  {
    name: "Rule of Three",
    image: "/assets/rule_of_three.png",
    description:
      "Es beginnt damit, dass die Gruppe ein Haus untersucht, das von einem Spuk heimgesucht wird\n" +
      "instabiler und gewalttätiger Geist. Sobald sie sich durchgearbeitet haben\n" +
      "Im Haus erfahren sie, dass der Geist Brennan einst ein Abenteurer war.\n" +
      "dessen Partei ein halbes Jahrhundert zuvor ein tragisches Ende fand. Damals,\n" +
      "Während der Erkundung einiger alter Ruinen bot sich ein mysteriöses Wesen an\n" +
      "Die drei Zauberwirker der Gruppe erhalten Unsterblichkeit, wenn sie das Leben von opfern\n" +
      "einer ihrer Parteifreunde. Brennan floh und ließ den Schurken zurück,\n" +
      "Cadmus, ihrem Schicksal durch die Hände der drei Zauberer.",
    details: true,
    englischDescription:
      "It begins when the party investigates a house haunted by an\n" +
      "unstable and violent ghost. Once they work their way through the\n" +
      "house, they learn that the ghost, Brennan, was once an adventurer,\n" +
      "whose party came to a tragic end half a century earlier. Back then,\n" +
      "while exploring some ancient ruins, a mysterious entity offered the\n" +
      "party’s three spellcasters immortality if they sacrificed the life of\n" +
      "one of their fellow party members. Brennan fled, leaving the rogue,\n" +
      "Cadmus, to their fate at the hands of the three spellcasters.",
    locale: true,
  },
  {
    name: "Search for Darwah's Temple",
    image: "/assets/search_for_darwahs_temple.png",
    description:
      "Willkommen in Okkorim, einem neuen Fantasy-Setting\n" +
      "kommt von Luke Gygax. Dieses Modul ist das\n" +
      "Turniermodul für Gary Con V. Das Szenario\n" +
      "findet in den Blighted Lands statt, tief im Herzen von\n" +
      "Okkorim. Informationen zur Geschichte und Umgebung\n" +
      "ist in diesem Modul enthalten.\n" +
      "Okkorim ist eine raue Umgebung, in der nur die Starken und\n" +
      "List kann erwarten, zu überleben. Es ist ein Ort voller Abenteuer,\n" +
      "arkane Magie, dunkle Macht und tödliche Feinde. Dies zuerst\n" +
      "Abenteuer berührt kurz die Stadt Chentoufi mit\n" +
      "sein Labyrinth politischer Fraktionen und Machenschaften,\n" +
      "dunkle Zauberei, geheime Kulte und kriminelle Organisationen,\n" +
      "und führt die Abenteurer direkt in The Blighted\n" +
      "Land – ein äußerst gefährlicher Ort für Unwissende oder\n" +
      "unachtsam.",
    details: true,
    englischDescription:
      "Welcome to Okkorim, a new fantasy setting\n" +
      "forthcoming from Luke Gygax. This module is the\n" +
      "tournament module for Gary Con V. The scenario\n" +
      "takes place in the Blighted Lands, deep in the heart of\n" +
      "Okkorim. Information on the history and environment\n" +
      "is included with this module.\n" +
      "Okkorim is a harsh setting where only the strong and\n" +
      "cunning can expect to survive. It’s a place of adventure,\n" +
      "arcane magic, dark power, and deadly foes. This first\n" +
      "adventure briefl y touches on the City of Chentoufi with\n" +
      "its labyrinth of political factions and machinations,\n" +
      "dark sorcery, secret cults & criminal organizations,\n" +
      "and leads the adventurers straight into The Blighted\n" +
      "Lands — a most dangerous place for the ignorant or\n" +
      "unwary.",
    locale: true,
  },
  {
    name: "Spears in Ice",
    image: "/assets/spears_in_ice.png",
    description:
      "SPEERE IM EIS - 3\n" +
      "Unsere jungen Helden, neu im Dienst des Jarl Olaf Henrikson\n" +
      "aus Silvermead Hall sind auf einem seltsamen schwimmenden Eisberg gestrandet\n" +
      "in der Nordsee. Zurückgelassen, nachdem böse Magie das weggetragen hat\n" +
      "Jarl und sein Schiff muss diese mutige Gruppe junger Helden erkunden\n" +
      "den Eisberg, tauchen Sie ein in die gefrorene Stadt in seinem Herzen und irgendwie\n" +
      "überleben, bis der Wind des Schicksals aus einer neuen Richtung weht und\n" +
      "lass sie entkommen.",
    details: true,
    englischDescription:
      "Our young heroes, new to the service of the Jarl Olaf Henrikson\n" +
      "of Silvermead Hall, are stranded on a strange iceberg found floating\n" +
      "in the North Sea. Left behind after foul magic carried away the\n" +
      "jarl and his ship, this plucky band of young heroes must explore\n" +
      "the iceberg, delve into the frozen city at its heart, and somehow\n" +
      "survive until the winds of fate blow from a new direction and\n" +
      "allow them to escape",
    locale: true,
  },
  {
    name: "Splinters of Faith",
    image: "/assets/splinters_of_faith.png",
    description:
      "Die Splinters of Faith-Kampagne ist eine Reihe miteinander verbundener Abenteuer, die mit beginnt\n" +
      "ein paar Hühner verschwinden und es kommt schließlich zu einer tödlichen Konfrontation mit\n" +
      "ein wiedererwachter Todespriester. Unterwegs müssen die Charaktere ein Relikt namens neu erschaffen\n" +
      "Zepter des Glaubens, um ihnen zu helfen, wenn sie sich schließlich dem Todespriester stellen.\n" +
      "Diese Kampagne ist darauf ausgelegt, Charaktere vom 1. Level bis zum 14. Level oder höher zu führen.",
    details: true,
    englischDescription: "",
    locale: true,
  },
  {
    name: "Spring Rites",
    image: "/assets/spring_rites.png",
    description:
      "Unsere Helden, bzw. Möchtegern-Helden, sind Gefolgsleute,\n" +
      "Mitläufer und kleinere Verwandte des Jarl Olaf Henrikson. Sie\n" +
      "habe den vergangenen Winter in seinem Haus, Silvermeade Hall, verbracht und\n" +
      "Der Frühling ist auf dem besten Weg. Da er noch keinen Platz in seinem Gefolge gewonnen hatte,\n" +
      "Sie sollten bestrebt sein, dem Jarl zu gefallen und ihn zu beeindrucken. Er ist bekannt\n" +
      "als Ringgeber, jemand, der diejenigen belohnt, die ihm dienen, und sich anzuschließen\n" +
      "sein Gefolge ist ein Zeichen der Ehre und Auszeichnung. Leider alles er\n" +
      "Das Bedürfnis unserer heutigen Helden besteht darin, seine drei Töchter so zu beschützen, wie sie es tun\n" +
      "Pflücken Sie Blumen für das bevorstehende Freya-Fest.\n" +
      "Aus solch bescheidenen Anfängen können große Sagen entstehen.\n" +
      "Das Abenteuer ist für das Spiel der Stufe 1 konzipiert und somit ein gutes Spiel\n" +
      "Einführung in die Nordlande und den Herrn von Eis und Kälte\n" +
      "Serie. Frühlingsriten erfordern Charaktere, die gut sind oder\n" +
      "neutrale Ausrichtungen, obwohl gute Tendenzen in der vorherrschen sollten\n" +
      "Gruppe. Vor allem jemand sollte über Kenntnisse in der Wildnis verfügen\n" +
      "Die Fähigkeit zur Spurensuche wäre für einen Geistlichen im Hügelgrab sehr nützlich\n" +
      "Länder, und ein Druide oder Waldläufer wird der Gruppe helfen, wenn sie möchte\n" +
      "den Waldweg nehmen. Da es sich hierbei natürlich um die Northlands handelt,\n" +
      "Es werden kämpfende Männer und Frauen benötigt. Es gibt eine faire Mischung aus\n" +
      "Erkundung und Kampf, wobei soziale Angelegenheiten an erster Stelle stehen\n" +
      "Drittel der Abenteuer.",
    details: true,
    englischDescription:
      "Our heroes, or would-be heroes as the case may be, are retainers,\n" +
      "hangers-on, and lesser relations of the Jarl Olaf Henrikson. They\n" +
      "have spent the past winter at his home, Silvermeade Hall, and\n" +
      "spring is well on its way. Not yet having won a place in his retinue,\n" +
      "they should be eager to please and impress the jarl. He is known\n" +
      "as a ring-giver, one who rewards those in his service, and to join\n" +
      "his retinue is a mark of honor and distinction. Unfortunately, all he\n" +
      "needs of our heroes today is to guard his three daughters as they\n" +
      "pick flowers for the upcoming feast of Freya.",
    locale: true,
  },
  {
    name: "Tomb of Mercy",
    image: "/assets/tomb_of_mercy.png",
    description:
      "Willkommen im Grab der Barmherzigkeit! Innerhalb dieser Seiten ist\n" +
      "eine einzigartige Variante des Standard-Abenteuers der 5. Edition.\n" +
      "Hier treten die Spieler und der DM in einem Rennen gegeneinander an\n" +
      "Zeit zu sehen, ob die gesamte Menschheit gerettet werden kann, oder ob\n" +
      "teuflische Diener der Hölle können die Welt verderben\n" +
      "ihre eigenen schändlichen Absichten. Besondere Zeitmessung\n" +
      "und Auferstehungsmechaniken sind enthalten, um das zu bewahren\n" +
      "Das Tempo ist spannend und die Handlung bewegend.\n" +
      "Ein paar spezielle Handouts finden Sie unter\n" +
      "Rückseite des Buches, die eine Reihe vorgenerierter Dokumente enthält\n" +
      "Charaktere und ein Kartenspiel, das während des Spiels verwendet wird. Fühlen\n" +
      "Es steht Ihnen frei, Kopien dieser Seiten zur Verwendung während des Jahres anzufertigen\n" +
      "Spiel.\n" +
      "Und jetzt bereiten Sie sich darauf vor, in das längst Vergessene einzutauchen\n" +
      "Grab der Barmherzigkeit!",
    details: true,
    englischDescription:
      "Welcome to the Tomb of Mercy! Within these pages is\n" +
      "a unique twist on the standard 5th-edition adventure.\n" +
      "Here, the players and the DM compete in a race against\n" +
      "time to see if all humanity can be saved, or if the\n" +
      "fiendish servants of the Hells can corrupt the world for\n" +
      "their own nefarious purposes. Special time-keeping\n" +
      "and resurrection mechanics are included to keep the\n" +
      "pace exciting and the plot moving.\n" +
      "A couple of special handouts can be found at the\n" +
      "back of the book that include a set of pre-generated\n" +
      "characters and a deck of cards used during play. Feel\n" +
      "free to make copies of these pages for use during the\n" +
      "game.\n" +
      "And now, prepare to delve into the long-forgotten\n" +
      "Tomb of Mercy!",
    locale: true,
  },
  {
    name: "Tomb of Tiberesh",
    image: "/assets/tomb_of_tiberesh.png",
    description:
      "Ein reisendes Archäologenteam, Golden Falcon\n" +
      "Antiquities (GFA) hat ein geschäftiges Lager aufgebaut\n" +
      "knapp außerhalb des östlichen Randes der Mauern von Per-Bastet\n" +
      "und südlich des Flusses. Diese Wissenschaftler riefen dazu auf\n" +
      "Unterstützung bei der Vermessung von Wohngebieten, Kartierung\n" +
      "Gräber und die Bergung von Relikten und Wertgegenständen\n" +
      "in ihnen. Golden Falcon Antiquities zahlt gut\n" +
      "Für diese Unterstützung danken wir jedem, der diese Arbeit ausübt\n" +
      "gründlich interviewt, um lauernde Dinge auszusortieren\n" +
      "Diebe und Plünderer. Während der Dokumentation der Geschichte von\n" +
      "Die Menschen vor Ort sind für GFA wichtig und haben oberste Priorität\n" +
      "bleibt dabei, aufzudecken, was sich im Inneren der Pyramide von befindet\n" +
      "Tiberesh. GFA sucht eine ganz besondere Gruppe von\n" +
      "Entdecker mit der richtigen Kombination von Talenten, die\n" +
      "wird einem strengen Vertrag in Bezug auf alles zustimmen\n" +
      "sie finden im Inneren der Pyramide.\n" +
      "Während viele Abenteurer nach Ruhm und Reichtum streben\n" +
      "Anu-Asir, GFA wird nur eine Gruppe von Entdeckern behalten\n" +
      "aus Sicherheitsgründen gleichzeitig. Eine Eskorte wird sie sehen\n" +
      "zur Pyramide und schlug dort drei Tage lang unser Lager auf\n" +
      "Sie warten auf ihre Rückkehr und bringen die Gruppe dann zurück\n" +
      "zum Hauptlager der GFA zur Vertragserfüllung\n" +
      "und Verteilung von allem, was aus dem Grab hervorgebracht wurde.\n" +
      "Vorausgesetzt, sie überleben, treffen sich die Abenteurer wieder\n" +
      "mit GFA am Ende des Abenteuers für ein Finale\n" +
      "Interaktion und eine Handlungswende Ihrer Wahl aus dem\n" +
      "Seitenleiste am Ende von Teil 3.",
    details: true,
    englischDescription:
      "A traveling archaeological team, Golden Falcon\n" +
      "Antiquities (GFA), has set up a bustling encampment\n" +
      "just outside the eastern perimeter of Per-Bastet’s walls\n" +
      "and south of the river. These scholars issued a call for\n" +
      "assistance in surveying residential areas, mapping\n" +
      "tombs, and recovering relics and valuables from\n" +
      "within them. Golden Falcon Antiquities pays well\n" +
      "for this assistance, and anyone pursuing these jobs is\n" +
      "thoroughly interviewed in an effort to weed out lurking\n" +
      "thieves and looters. While documenting the history of\n" +
      "the local people is important to GFA, its top priority\n" +
      "remains uncovering what lies inside the Pyramid of\n" +
      "Tiberesh. GFA is seeking a very particular group of\n" +
      "explorers with the right combination of talents who\n" +
      "will agree to a rigorous contract relating to anything\n" +
      "they find inside the pyramid.\n" +
      "While many adventurers seek fame and fortune in\n" +
      "Anu-Asir, GFA will only retain one group of explorers\n" +
      "at a time for security reasons. An escort will see them\n" +
      "to the pyramid and set up camp outside for three days\n" +
      "awaiting their return and then bring the group back\n" +
      "to the main GFA encampment for contract fulfillment\n" +
      "and distribution of anything brought out of the tomb.\n" +
      "Provided they survive, adventurers meet back\n" +
      "with GFA at the end of the adventure for one final\n" +
      "interaction, and a plot twist of your choice from the\n" +
      "sidebar at the end of Part 3.",
    locale: true,
  },
  {
    name: "Triptych",
    image: "/assets/triptych.png",
    description:
      "Ein heiliges Triptychon (dreiteiliges Artefakt) wurde gestohlen\n" +
      "der Tempel der guten Gottheit eines oder mehrerer Charaktere des\n" +
      "Abenteuergruppe. Dieses Relikt ist äußerst mächtig und wenn\n" +
      "intakt, bietet Anhängern der Macht und großen Schutz\n" +
      "Schöpfer des Triptychons. Doch böse Schergen einer rivalisierenden Gottheit, Egramish,\n" +
      "die Göttin des Flüsterns und der Schatten, gestohlen und zerlegt\n" +
      "das Artefakt. Sie versteckten die drei Tafeln an verschiedenen Stellen im Inneren\n" +
      "ihr Reich, der Berg des Flüsterns. Priester des Charakters\n" +
      "Gott versucht verzweifelt, den verlorenen Gegenstand zurückzuholen und den Auserwählten zu drängen\n" +
      "Geistlicher der Gruppe, der diese große und heilige Aufgabe übernehmen soll\n" +
      "Holen Sie sich das Triptychon der Transzendenz zurück",
    details: true,
    englischDescription:
      "A holy triptych (three-paneled artifact) has been stolen from\n" +
      "the temple of the good deity of one or more characters of the\n" +
      "adventuring group. This relic is extremely powerful and, when\n" +
      "intact, offers power and great protection to followers of the\n" +
      "triptych’s creator. However, evil minions of a rival deity, Egramish,\n" +
      "the Goddess of Whispers and Shadows, stole and disassembled\n" +
      "the artifact. They hid the three panels in separate locations within\n" +
      "their domain, the Mountain of Whispers. Priests of the character’s\n" +
      "god are desperate to retrieve the lost item and urge the chosen\n" +
      "cleric of the group to undertake this great and holy quest to\n" +
      "recover the Triptych of Transcendency",
    locale: true,
  },
  {
    name: "Witch of Wilderlands",
    image: "/assets/witch_of_wilderlands.png",
    description:
      "Es beginnt in einer kleinen Stadt, die kürzlich von der Welt abgeschnitten wurde\n" +
      "die zunehmende Gefahr des umliegenden Waldes. Gerüchte gibt es zuhauf\n" +
      "dass eine Frau, die vor einem Monat kurz die Stadt besuchte, ein Übel ist\n" +
      "Hexe, die den Wald verfluchte. Alles, was von ihr bekannt ist, ist\n" +
      "dass sie ging, um Ruinen tief im Wald zu untersuchen, auf der Suche nach einem\n" +
      "mächtiges Artefakt.\n" +
      "Die Partei kann versuchen, sie aufzuspüren oder dem zumindest ein Ende zu bereiten\n" +
      "gefährliche Zauber, die über dem Gebiet liegen. Während sie suchen\n" +
      "Im Wald werden sie von seltsamen Visionen und verwirrenden Stimmen heimgesucht.\n" +
      "sowie von verdrehten Wesen aus morschem Holz; Fäulnis.",
    details: true,
    englischDescription:
      "It begins in a small town, recently cut off from the wider world by\n" +
      "the increasing danger of its surrounding forest. Rumors abound\n" +
      "that a woman who visited town briefly a month ago is an evil\n" +
      "witch, who put a curse on the forest. All that is known of her is\n" +
      "that she left to investigate ruins, deep in the forest, in search of a\n" +
      "powerful artifact.\n" +
      "The party can attempt to seek her out or, at least, put an end to the\n" +
      "dangerous enchantments which lie over the area. As they search\n" +
      "the forest, they are beset by strange visions and confusing voices,\n" +
      "as well as by twisted beings of rotten wood; rot blights.",
    locale: true,
  },
  {
    name: "Wizard's Wake",
    image: "/assets/wizards_wake.png",
    description:
      "Auf allen Seiten vom Rending Reef umgeben\n" +
      "Es ist schwierig, sicher zu den Gylathacean-Inseln zu navigieren\n" +
      "und noch schwieriger zu verlassen. Infolgedessen sie\n" +
      "neigen dazu, sehr isoliert von der Außenwelt zu sein\n" +
      "und nur wenige der Wesen, die dort leben, reisen\n" +
      "weit weg von ihren eigenen Küsten und noch weniger Besucher.\n" +
      "Der Handel von und zu den Inseln ist nahezu unerheblich.\n" +
      "istent. Hin und wieder handelt es sich um eine Schiffbrüchige\n" +
      "integriert sich in die Inseln, ist aber selten dort\n" +
      "Es gibt genügend Überlebende, sodass dies zu einem Problem werden könnte.\n" +
      "Das Leben auf den Gylathaceen ist größtenteils sicher\n" +
      "und still.",
    details: true,
    englischDescription:
      "Surrounded on all sides by the Rending Reef, the\n" +
      "Gylathacean Isles are difficult to navigate to safely\n" +
      "and even more difficult to leave. As a result they\n" +
      "tend to be very isolated from the outside world\n" +
      "with few of the beings who live there travelling\n" +
      "far from their own shores and even fewer visitors.\n" +
      "Trade to and from the islands is almost nonex-\n" +
      "istent. Every so often they a shipwrecked crew\n" +
      "integrates onto the islands, but rarely are there\n" +
      "enough survivors for this to be any sort of issue.\n" +
      "For the most part, life on the Gylathaceans is safe\n" +
      "and quiet.",
    locale: true,
  },
  {
    name: "Zoo Mafia",
    image: "/assets/zoo_mafia.png",
    description:
      "Was ist ein Zoo-Mafia-Rollenspiel?\n" +
      "Es ist ein Rollenspiel, bei dem es darum geht, ein Zootier zu sein, Verbrechen zu begehen und nicht\n" +
      "Lassen Sie die Menschen erkennen, dass Sie mehr als nur Zootiere sind. Alles andere als\n" +
      "Einer der Spieler bildet eine Bande namens Mob. Dass ein anderer Spieler antritt\n" +
      "die Rolle des Tierpflegers. Der Mob wird Jobs annehmen und diese Verbrechen begehen\n" +
      "um ihr Ansehen in der Welt der organisierten Kriminalität zu erhöhen, während der Tierpfleger\n" +
      "erleichtert alles andere.",
    details: true,
    englischDescription:
      "What is Zoo Mafia RPG?\n" +
      "It’s a role-playing game about being a zoo animal, committing crimes and not\n" +
      "letting the humans catch on that you are more than just zoo animals. All but\n" +
      "one of the players form a gang called a mob. That one other player takes on\n" +
      "the role of the Zookeeper. The mob will take on jobs and commit these crimes\n" +
      "to increase their standing in the organized crime world while the Zookeeper\n" +
      "facilitates everything else.",
    locale: true,
  },
];
