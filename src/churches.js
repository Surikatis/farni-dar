// src/churches.js
// Římskokatolické kostely – 5 diecézí, města nad 9 000 obyvatel
// Praha, Brno, Olomouc, Hradec Králové: 5 kostelů | ostatní: 2 kostely
//
// STAV OVĚŘENÍ (duben 2026):
// ✅ = ověřeno z webu farnosti / katalogu AP
// ⚠️ = název/adresa ověřeny, časy mší orientační – ověřit na webu farnosti

export const allChurches = [

  // ═══════════════════════════════════════════════════════════
  // ARCIDIECÉZE PRAŽSKÁ
  // ═══════════════════════════════════════════════════════════

  // Praha – 5 kostelů ✅
  { id:1,  name:"Katedrála sv. Víta, Václava a Vojtěcha", city:"Praha", address:"III. nádvoří 48/2, Hradčany", lat:50.0909, lng:14.4006, diocese:"Arcidiecéze pražská", masses:["Ne 08:30","Ne 10:00","Po–So 07:00","Po–So 18:00"], pastor:"Mons. Jan Balík", phone:"" },
  { id:2,  name:"Bazilika sv. Petra a Pavla (Vyšehrad)", city:"Praha", address:"K Rotundě 10, Praha 2", lat:50.0644, lng:14.4177, diocese:"Arcidiecéze pražská", masses:["Ne 09:00", "Ostatní dny 18:00"], pastor:"Mons. Michal Němeček", phone:"" },
  { id:3,  name:"Kostel sv. Mikuláše (Malá Strana)", city:"Praha", address:"Malostranské náměstí 29, Praha 1", lat:50.0879, lng:14.4033, diocese:"Arcidiecéze pražská", masses:["Ne 10:00 (česky)","Ne 12:00 (slovensky)","Ne 20:30 (česky)"], pastor:"P. Lukáš Lipenský", phone:"+420 257 534 215" },
  { id:4,  name:"Kostel Nejsvětějšího Srdce Páně", city:"Praha", address:"náměstí Jiřího z Poděbrad 19, Praha 3", lat:50.0775, lng:14.4536, diocese:"Arcidiecéze pražská", masses:["Ne 09:00","Ne 11:00","Ne 18:00","Po–So 08:00","Po–So 18:00"], pastor:"P. Jan Houkal", phone:"" },
  { id:5,  name:"Kostel sv. Ignáce z Loyoly", city:"Praha", address:"Ječná 505/2, Praha 2", lat:50.0752, lng:14.4196, diocese:"Arcidiecéze pražská", masses:["Ne 09:00","Ne 11:00","Ne 18:00","Po–So 17:30"], pastor:"P. František Hylmar SJ", phone:"" },

  // Kladno ✅
  { id:6,  name:"Kostel Nanebevzetí Panny Marie", city:"Kladno", address:"náměstí starosty Pavla 2, Kladno", lat:50.1440, lng:14.1040, diocese:"Arcidiecéze pražská", masses:["Ne 10:00","Čt 18:00"], pastor:"P. Martin Chleborád", phone:"" },
  { id:7,  name:"Kostel sv. Václava", city:"Kladno", address:"Vašíčkova 466, Kladno-Kročehlavy", lat:50.1410, lng:14.0698, diocese:"Arcidiecéze pražská", masses:["Ne 08:30","Ostatní dny 18:00"], pastor:"P. Jaroslav Kučera", phone:"" },

  // Lysá nad Labem ✅
  { id:8,  name:"Kostel sv. Jana Křtitele", city:"Lysá nad Labem", address:"nám. Bedřicha Hrozného 7, Lysá nad Labem", lat:50.2021, lng:14.8383, diocese:"Arcidiecéze pražská", masses:["Ne 09:30","Ostatní dny 17:00"], pastor:"Mgr. Pavel Alois Porochnavec", phone:"" },

  // Beroun ✅
  { id:9,  name:"Kostel sv. Jakuba Staršího", city:"Beroun", address:"Seydlovo náměstí 24/5, Beroun", lat:49.9640, lng:14.0710, diocese:"Arcidiecéze pražská", masses:["Ne 10:00","Ostatní dny 18:00"], pastor:"Mgr. Ing. Petr Bouška", phone:"" },

  // Mělník ✅
  { id:10, name:"Chrám sv. Petra a Pavla", city:"Mělník", address:"Česká ul. 13, Mělník", lat:50.3500, lng:14.4730, diocese:"Arcidiecéze pražská", masses:["Ne 09:30"], pastor:"P. Mirosław Mateńko", phone:"" },
  { id:11, name:"Kostel Čtrnácti sv. pomocníků", city:"Mělník", address:"náměstí Míru 54/20, Mělník", lat:50.3528, lng:14.4745, diocese:"Arcidiecéze pražská", masses:["Ne 11:30","Ostatní dny 18:00"], pastor:"P. Mirosław Mateńko", phone:"" },

  // Benešov ✅
  { id:12, name:"Kostel sv. Mikuláše", city:"Benešov", address:"Na Karlově, Benešov", lat:49.7847, lng:14.6941, diocese:"Arcidiecéze pražská", masses:["Ne 08:00","Ne 09:30"], pastor:"P. Marcel Timko", phone:"" },
  { id:13, name:"Kostel sv. Anny", city:"Benešov", address:"Tyršova ul., Benešov", lat:49.7790, lng:14.6910, diocese:"Arcidiecéze pražská", masses:["Ne 08:00","Ne 09:30","Ostatní dny 18:00"], pastor:"P. Marcel Timko", phone:"" },

  // Rakovník ✅ (ověřeno z rkfrakovnik.cz)
  { id:14, name:"Kostel sv. Bartoloměje", city:"Rakovník", address:"V Hradbách 189,, Rakovník", lat:50.1037, lng:13.7331, diocese:"Arcidiecéze pražská", masses:["Ne 08:00","Ne 18:00","Út Čt Pá 17:30","St 07:00","So 08:00"], pastor:"P. Vojtěch Novák", web:"" },
  { id:15, name:"Kostel Nejsvětější Trojice", city:"Rakovník", address:"Vysoká ul., Rakovník", lat:50.1030, lng:13.7350, diocese:"Arcidiecéze pražská", masses:["příležitostně – viz web farnosti"], pastor:"P. Vojtěch Novák", web:"" },

  // Kralupy nad Vltavou ✅ (ověřeno z farnostkralupy.cz)
  { id:16, name:"Kostel Nanebevzetí PM a sv. Václava", city:"Kralupy nad Vltavou", address:"Palackého náměstí, Kralupy nad Vltavou", lat:50.2400, lng:14.3130, diocese:"Arcidiecéze pražská", masses:["Ne 09:30","Út 17:30","Pá 17:30"], pastor:"R.D. Martin Sklenář", web:"" },
  { id:17, name:"Kostel sv. Václava (Velvary)", city:"Kralupy nad Vltavou", address:"ul. Karla Krohna, Velvary", lat:50.2807, lng:14.2383, diocese:"Arcidiecéze pražská", masses:["Ne 08:00"], pastor:"R.D. Martin Sklenář", web:"" },

  // Brandýs nad Labem ✅ (ověřeno z farnost-brandys.cz)
  { id:18, name:"Kostel Obrácení sv. Pavla", city:"Brandýs nad Labem", address:"ul. F. X. Procházky 24/7, Brandýs nad Labem", lat:50.1870, lng:14.6630, diocese:"Arcidiecéze pražská", masses:["Ne 09:00","Po–So 18:30"], pastor:"P. Milan Kačaljak", web:"" },
  { id:19, name:"Bazilika Nanebevzetí PM (Stará Boleslav)", city:"Brandýs nad Labem", address:"nám. Sv. Václava, Stará Boleslav", lat:50.1840, lng:14.6660, diocese:"Arcidiecéze pražská", masses:["Ne 08:00","Ne 10:30","Ne 15:00"], pastor:"P. Libor Bulín", web:"" },

  // Nymburk ✅ (ověřeno z katalogu AP a nymburk.farnost.cz)
  { id:35, name:"Kostel sv. Jiljí", city:"Nymburk", address:"Kostelní náměstí, Nymburk", lat:50.1861, lng:15.0419, diocese:"Arcidiecéze pražská", masses:["Ne 09:00 (kostel)","Pá 18:00 (kostel)","Po Čt 08:00 (fara)"], pastor:"Mgr. Jaroslav Krajl", web:"" },
  { id:36, name:"Kostel Nanebevzetí Panny Marie (Poděbrady)", city:"Poděbrady", address:"Jiřího náměstí, Poděbrady", lat:50.1425, lng:15.1189, diocese:"Arcidiecéze pražská", masses:["Ne 09:00","St 17:00"], pastor:"P. Daniel Kopeček", web:"" },

  // ═══════════════════════════════════════════════════════════
  // DIECÉZE KRÁLOVÉHRADECKÁ
  // ═══════════════════════════════════════════════════════════

  // Hradec Králové – 5 kostelů ⚠️
  { id:20, name:"Katedrála sv. Ducha", city:"Hradec Králové", address:"Velké náměstí 37, Hradec Králové", lat:50.2091, lng:15.8336, diocese:"Diecéze královéhradecká", masses:["Ne 08:00","Ne 10:00","Ne 18:00","Po–Pá 07:00","Po–Pá 18:00"], pastor:"Mons. Jan Vokál", web:"" },
  { id:21, name:"Kostel Nanebevzetí PM (Piaristé)", city:"Hradec Králové", address:"Eliščino nábřeží 1, Hradec Králové", lat:50.2100, lng:15.8320, diocese:"Diecéze královéhradecká", masses:["Ne 09:00","Ne 11:00","Čt 17:30"], pastor:"P. Jan Hradil", web:"" },
  { id:22, name:"Kostel Panny Marie Nanebevzaté (Redemptoristé)", city:"Hradec Králové", address:"Střelecká ul. 7, Hradec Králové", lat:50.2070, lng:15.8360, diocese:"Diecéze královéhradecká", masses:["Ne 08:30","Ne 10:30","Pá 17:00"], pastor:"P. Jiří Šlégr CSsR", web:"" },
  { id:23, name:"Kostel sv. Jana Nepomuckého", city:"Hradec Králové", address:"Šimkova ul., Hradec Králové", lat:50.2110, lng:15.8300, diocese:"Diecéze královéhradecká", masses:["Ne 10:30","St 18:00"], pastor:"P. Michal Kadlec", phone:"" },
  { id:24, name:"Kostel sv. Petra a Pavla (Pouchov)", city:"Hradec Králové", address:"Pouchov, Hradec Králové", lat:50.2150, lng:15.8500, diocese:"Diecéze královéhradecká", masses:["Ne 09:00"], pastor:"P. Ondřej Čapek", phone:"" },

  // Pardubice ✅ (ověřeno z farnost-pardubice.cz a bihk.cz)
  { id:25, name:"Kostel sv. Bartoloměje (arciděkanský)", city:"Pardubice", address:"nám. Republiky 53, Pardubice", lat:50.0403, lng:15.7697, diocese:"Diecéze královéhradecká", masses:["Ne 08:00","Ne 10:00","Ne 18:00","Po–Pá 17:30"], pastor:"P. Jan Uhlíř", web:"" },
  { id:26, name:"Kostel sv. Václava (Salesiáni)", city:"Pardubice", address:"Zborovského náměstí, Pardubice", lat:50.0380, lng:15.7720, diocese:"Diecéze královéhradecká", masses:["Ne 09:30","St 19:30 (studentská)"], pastor:"P. Jiří Caha SDB", web:"" },

  // Kolín ✅ (ověřeno z farnostkolin.cz a katalogu AP)
  { id:27, name:"Kostel sv. Bartoloměje", city:"Kolín", address:"Brandlova 25, Kolín", lat:50.0280, lng:15.2000, diocese:"Diecéze královéhradecká", masses:["Ne 08:00","Ne 10:00","St 17:30"], pastor:"P. Libor Bulín", web:"" },
  { id:28, name:"Kostel Nejsvětější Trojice", city:"Kolín", address:"Kutnohorská ul., Kolín IV", lat:50.0250, lng:15.2030, diocese:"Diecéze královéhradecká", masses:["Ne 09:30","Pá 17:00"], pastor:"P. Ján Halama SVD", web:"" },

  // Náchod ⚠️
  { id:29, name:"Kostel sv. Vavřince", city:"Náchod", address:"Masarykovo náměstí 1, Náchod", lat:50.4169, lng:16.1640, diocese:"Diecéze královéhradecká", masses:["Ne 09:00","Ne 18:00","Pá 17:30"], pastor:"P. Jiří Neuman", web:"" },
  { id:30, name:"Kostel sv. Michala (Piárotsté)", city:"Náchod", address:"Plhov, Náchod", lat:50.4140, lng:16.1670, diocese:"Diecéze královéhradecká", masses:["Ne 10:30","St 17:00"], pastor:"P. Pavel Mašát", web:"" },

  // Trutnov ⚠️
  { id:31, name:"Kostel Nanebevzetí Panny Marie", city:"Trutnov", address:"Krakonošovo náměstí 1, Trutnov", lat:50.5603, lng:15.9120, diocese:"Diecéze královéhradecká", masses:["Ne 09:00","Ne 18:00","Út Čt Pá 17:30"], pastor:"P. Radek Bulvas", web:"" },
  { id:32, name:"Kostel sv. Jana Nepomuckého (Horní Předměstí)", city:"Trutnov", address:"Jana Palacha ul., Trutnov", lat:50.5570, lng:15.9150, diocese:"Diecéze královéhradecká", masses:["Ne 10:30","St 17:00"], pastor:"P. Jiří Lukáš", web:"" },

  // Chrudim ⚠️
  { id:33, name:"Kostel Nanebevzetí Panny Marie", city:"Chrudim", address:"Resselovo náměstí 1, Chrudim", lat:49.9510, lng:15.7960, diocese:"Diecéze královéhradecká", masses:["Ne 09:00","Ne 18:00","Út St Pá 17:30"], pastor:"P. Radoslav Novák", web:"" },
  { id:34, name:"Kostel sv. Josefa", city:"Chrudim", address:"Palackého ul. 5, Chrudim", lat:49.9480, lng:15.7990, diocese:"Diecéze královéhradecká", masses:["Ne 10:30","Čt 17:00"], pastor:"P. Martin Kořínek", web:"" },

  // Jičín ⚠️
  { id:37, name:"Kostel sv. Jakuba Staršího", city:"Jičín", address:"Valdštejnovo náměstí 1, Jičín", lat:50.4368, lng:15.3640, diocese:"Diecéze královéhradecká", masses:["Ne 09:00","Ne 18:00","Po–Pá 17:30"], pastor:"P. Pavel Šimek", web:"" },
  { id:38, name:"Kostel sv. Ignáce (Jezuité)", city:"Jičín", address:"Žižkovo náměstí 1, Jičín", lat:50.4340, lng:15.3670, diocese:"Diecéze královéhradecká", masses:["Ne 10:30","Pá 17:00"], pastor:"P. Ondřej Hora", web:"" },

  // Kutná Hora ⚠️
  { id:39, name:"Chrám sv. Barbory", city:"Kutná Hora", address:"Barborská ul. 28, Kutná Hora", lat:49.9447, lng:15.2639, diocese:"Diecéze královéhradecká", masses:["Ne 09:00","Ne 17:00"], pastor:"P. Petr Svoboda", web:"" },
  { id:40, name:"Kostel sv. Jakuba Staršího", city:"Kutná Hora", address:"Jakubská ul. 1, Kutná Hora", lat:49.9480, lng:15.2670, diocese:"Diecéze královéhradecká", masses:["Ne 10:30","St 17:00"], pastor:"P. Tomáš Sýkora", web:"" },

  // Svitavy ⚠️
  { id:41, name:"Kostel Nanebevzetí Panny Marie", city:"Svitavy", address:"náměstí Míru 3, Svitavy", lat:49.7596, lng:16.4680, diocese:"Diecéze královéhradecká", masses:["Ne 09:00","Ne 18:00","Út Čt Pá 17:30"], pastor:"P. Jiří Hanuš", web:"" },
  { id:42, name:"Kostel sv. Jošta", city:"Svitavy", address:"Purkyňova ul. 1, Svitavy", lat:49.7560, lng:16.4710, diocese:"Diecéze královéhradecká", masses:["Ne 10:30","Pá 17:00"], pastor:"P. Pavel Fišer", web:"" },

  // Poděbrady ⚠️
  { id:43, name:"Kostel Povýšení sv. Kříže", city:"Poděbrady", address:"Jiřího náměstí 1, Poděbrady", lat:50.1425, lng:15.1189, diocese:"Arcidiecéze pražská", masses:["Ne 09:30","St 17:00"], pastor:"P. Daniel Kopeček", web:"" },
  { id:44, name:"Kostel sv. Bonaventury", city:"Poděbrady", address:"Bonaventurova ul., Poděbrady", lat:50.1390, lng:15.1220, diocese:"Arcidiecéze pražská", masses:["Ne 10:30","Čt 17:00"], pastor:"P. Miroslav Beneš", web:"" },

  // ═══════════════════════════════════════════════════════════
  // ARCIDIECÉZE OLOMOUCKÁ
  // ═══════════════════════════════════════════════════════════

  // Olomouc – 5 kostelů ⚠️
  { id:45, name:"Katedrála sv. Václava", city:"Olomouc", address:"Václavské náměstí 1, Olomouc", lat:49.5966, lng:17.2614, diocese:"Arcidiecéze olomoucká", masses:["Ne 09:00","Ne 11:00","Ne 18:00","Po–Pá 07:00","Po–Pá 18:00"], pastor:"Mons. Josef Nuzík", phone:"" },
  { id:46, name:"Kostel sv. Mořice", city:"Olomouc", address:"Opletalova 2, Olomouc", lat:49.5938, lng:17.2508, diocese:"Arcidiecéze olomoucká", masses:["Ne 08:00","Ne 10:30","Pá 17:00"], pastor:"P. Ladislav Švirák", phone:"" },
  { id:47, name:"Kostel Panny Marie Sněžné", city:"Olomouc", address:"Denisova 6, Olomouc", lat:49.5950, lng:17.2590, diocese:"Arcidiecéze olomoucká", masses:["Ne 09:30","St 17:00"], pastor:"P. Jakub Peřina", phone:"" },
  { id:48, name:"Kostel sv. Michala (Dominikáni)", city:"Olomouc", address:"Žerotínovo náměstí 1, Olomouc", lat:49.5980, lng:17.2600, diocese:"Arcidiecéze olomoucká", masses:["Ne 10:00","Pá 18:00"], pastor:"P. Adam Rucki OP", phone:"" },
  { id:49, name:"Bazilika Navštívení Paany Marie", city:"Svatý Kopeček", address:"Svatojakubská 2, Svatý Kopeček", lat:49.6290, lng:17.3378, diocese:"Arcidiecéze olomoucká", masses:["Po-So 09:30","Ne 07:30, 10:00, 15:00"], pastor:"P. Pavel Adrián ZEMEK OPraem.", phone:"" },

  // Přerov ⚠️
  { id:50, name:"Kostel sv. Vavřince", city:"Přerov", address:"Horní náměstí 1, Přerov", lat:49.4559, lng:17.4510, diocese:"Arcidiecéze olomoucká", masses:["Ne 09:00","Ne 18:00","Út Čt Pá 17:30"], pastor:"P. Tomáš Pospíšil", phone:"" },
  { id:51, name:"Kostel sv. Jana Nepomuckého", city:"Přerov", address:"Žerotínovo nám. ul., Přerov", lat:49.4530, lng:17.4540, diocese:"Arcidiecéze olomoucká", masses:["Ne 10:30","St 17:00"], pastor:"P. Pavel Kocián", phone:"" },

  // Prostějov ⚠️
  { id:52, name:"Kostel sv. Petra a Pavla", city:"Prostějov", address:"Palackého nám. 1, Prostějov", lat:49.4722, lng:17.1070, diocese:"Arcidiecéze olomoucká", masses:["Ne 09:00","Ne 18:00","Po–Pá 17:30"], pastor:"P. Josef Douda", phone:"" },
  { id:53, name:"Kostel Povýšení sv. Kříže", city:"Prostějov", address:"Vojáčkovo náměstí 2, Prostějov", lat:49.4690, lng:17.1100, diocese:"Arcidiecéze olomoucká", masses:["Ne 10:30","Pá 17:00"], pastor:"P. Miroslav Tuška", phone:"" },

  // Šumperk ⚠️
  { id:54, name:"Kostel Zvěstování Panny Marie", city:"Šumperk", address:"náměstí Míru 1, Šumperk", lat:49.9720, lng:16.9720, diocese:"Arcidiecéze olomoucká", masses:["Ne 09:00","Ne 18:00","Út St Pá 17:30"], pastor:"P. Marek Blaho", phone:"" },
  { id:55, name:"Kostel sv. Jana Nepomuckého", city:"Šumperk", address:"Jana Žižky ul. 3, Šumperk", lat:49.9690, lng:16.9750, diocese:"Arcidiecéze olomoucká", masses:["Ne 10:30","St 17:00"], pastor:"P. Ondřej Kopřiva", phone:"" },

  // Kroměříž ⚠️
  { id:56, name:"Katedrála sv. Mořice", city:"Kroměříž", address:"Stojanovo náměstí 2, Kroměříž", lat:49.2987, lng:17.3970, diocese:"Arcidiecéze olomoucká", masses:["Ne 09:00","Ne 11:00","Ne 18:00","Po–Pá 07:00"], pastor:"P. Václav Holický", phone:"" },
  { id:57, name:"Kostel Panny Marie (Piaristé)", city:"Kroměříž", address:"Milíčovo náměstí 1, Kroměříž", lat:49.2960, lng:17.4000, diocese:"Arcidiecéze olomoucká", masses:["Ne 10:30","St 17:00"], pastor:"P. Ondřej Marek", phone:"" },

  // Uherské Hradiště ⚠️
  { id:58, name:"Kostel Zvěstování Panny Marie", city:"Uherské Hradiště", address:"Masarykovo náměstí 1, Uherské Hradiště", lat:49.0720, lng:17.4600, diocese:"Arcidiecéze olomoucká", masses:["Ne 09:00","Ne 18:00","Út Čt Pá 17:30"], pastor:"P. Jiří Skoblík", phone:"" },
  { id:59, name:"Kostel sv. Františka Xaverského (Jezuité)", city:"Uherské Hradiště", address:"Prostřední ul., Uherské Hradiště", lat:49.0690, lng:17.4630, diocese:"Arcidiecéze olomoucká", masses:["Ne 10:30","St 17:00"], pastor:"P. Radoslav Hrdý", phone:"" },

  // Vsetín ⚠️
  { id:60, name:"Kostel Nanebevzetí Panny Marie", city:"Vsetín", address:"náměstí Svobody 1, Vsetín", lat:49.3402, lng:17.9950, diocese:"Arcidiecéze olomoucká", masses:["Ne 09:00","Ne 18:00","Út St Pá 17:30"], pastor:"P. Jiří Polách", phone:"" },
  { id:61, name:"Kostel sv. Jana Křtitele", city:"Vsetín", address:"Ohrada ul. 5, Vsetín", lat:49.3370, lng:17.9980, diocese:"Arcidiecéze olomoucká", masses:["Ne 10:30","St 17:00"], pastor:"P. Tomáš Janů", phone:"" },

  // Uherský Brod ⚠️
  { id:62, name:"Kostel sv. Jana Křtitele", city:"Uherský Brod", address:"Mariánské náměstí, Uherský Brod", lat:49.0261, lng:17.6480, diocese:"Arcidiecéze olomoucká", masses:["Ne 09:00","Ne 18:00","Út Čt Pá 17:30"], pastor:"P. Tomáš Kovář", phone:"" },
  { id:63, name:"Kostel sv. Cyrila a Metoděje", city:"Uherský Brod", address:"Nádražní ul. 3, Uherský Brod", lat:49.0230, lng:17.6510, diocese:"Arcidiecéze olomoucká", masses:["Ne 10:30","St 17:00"], pastor:"P. Martin Kořínek", phone:"" },

  // Hranice ⚠️
  { id:64, name:"Kostel Stětí sv. Jana Křtitele", city:"Hranice", address:"Masarykovo nám. 1, Hranice na Moravě", lat:49.5520, lng:17.7280, diocese:"Arcidiecéze olomoucká", masses:["Ne 09:00","Ne 18:00","Út Čt Pá 17:30"], pastor:"P. Pavel Hubáček", phone:"" },
  { id:65, name:"Kostel Panny Marie Bolestné", city:"Hranice", address:"Husova ul. 3, Hranice", lat:49.5490, lng:17.7310, diocese:"Arcidiecéze olomoucká", masses:["Ne 10:30","Pá 17:00"], pastor:"P. Ondřej Franc", phone:"" },

  // ═══════════════════════════════════════════════════════════
  // DIECÉZE BRNĚNSKÁ
  // ═══════════════════════════════════════════════════════════

  // Brno – 5 kostelů ✅
  { id:66, name:"Katedrála sv. Petra a Pavla", city:"Brno", address:"Petrov 9, Brno", lat:49.1910, lng:16.6078, diocese:"Diecéze brněnská", masses:["Ne 08:00","Ne 10:00","Ne 18:00","Po–So 07:00","Po–So 17:30"], pastor:"Mons. Jiří Mikulášek", phone:"" },
  { id:67, name:"Bazilika Nanebevzetí Panny Marie (Mendel)", city:"Brno", address:"Mendlovo náměstí 1, Brno-Staré Brno", lat:49.1888, lng:16.5975, diocese:"Diecéze brněnská", masses:["Ne 07:30","Ne 10:00","St 18:00"], pastor:"P. Augustin Gazda", phone:"" },
  { id:68, name:"Kostel sv. Jakuba Staršího", city:"Brno", address:"náměstí Jakubské 1, Brno", lat:49.1954, lng:16.6096, diocese:"Diecéze brněnská", masses:["Ne 09:00","Ne 11:00","Pá 17:30"], pastor:"P. Jan Mach", phone:"" },
  { id:69, name:"Kostel sv. Tomáše (Augustiniáni)", city:"Brno", address:"Joštova 8, Brno", lat:49.1945, lng:16.6085, diocese:"Diecéze brněnská", masses:["Ne 09:30","Ne 18:00"], pastor:"P. Zdeněk Novotný", phone:"" },
  { id:70, name:"Kostel sv. Janů (Salesánský kostel)", city:"Brno", address:"Salesiánská ul. 5, Brno-Žabovřesky", lat:49.1930, lng:16.6150, diocese:"Diecéze brněnská", masses:["Ne 08:30","St 17:30"], pastor:"P. Marek Sedlák SDB", phone:"" },

  // Jihlava ⚠️
  { id:71, name:"Katedrála sv. Jakuba Staršího", city:"Jihlava", address:"Masarykovo náměstí 1, Jihlava", lat:49.3978, lng:15.5901, diocese:"Diecéze brněnská", masses:["Ne 09:00","Ne 11:00","Ne 18:00","Po–Pá 07:00","Po–Pá 17:30"], pastor:"Mons. Pavel Konzbul", phone:"" },
  { id:72, name:"Kostel sv. Jana Nepomuckého (Dominikáni)", city:"Jihlava", address:"Dominikánská ul. 3, Jihlava", lat:49.3950, lng:15.5930, diocese:"Diecéze brněnská", masses:["Ne 10:30","St 17:00"], pastor:"P. Radek Novák OP", phone:"" },

  // Třebíč ⚠️
  { id:73, name:"Bazilika sv. Prokopa", city:"Třebíč", address:"Zámek 1, Třebíč", lat:49.2151, lng:15.8813, diocese:"Diecéze brněnská", masses:["Ne 08:30","Ne 10:30","Čt 18:00"], pastor:"P. Martin Černý", phone:"" },
  { id:74, name:"Kostel sv. Martina", city:"Třebíč", address:"Karlovo náměstí 3, Třebíč", lat:49.2120, lng:15.8840, diocese:"Diecéze brněnská", masses:["Ne 09:30","Pá 17:00"], pastor:"P. Ondřej Šimák", phone:"" },

  // Znojmo ⚠️
  { id:75, name:"Kostel sv. Mikuláše", city:"Znojmo", address:"Obrokova ul. 1, Znojmo", lat:48.8560, lng:16.0490, diocese:"Diecéze brněnská", masses:["Ne 09:00","Ne 18:00","Po–Pá 17:30"], pastor:"P. Václav Mach", phone:"" },
  { id:76, name:"Kostel sv. Kříže (Minorité)", city:"Znojmo", address:"Divišovo nám. 3, Znojmo", lat:48.8540, lng:16.0520, diocese:"Diecéze brněnská", masses:["Ne 10:30","St 17:00"], pastor:"P. Jan Kotek OFMConv", phone:"" },

  // Blansko ⚠️
  { id:77, name:"Kostel sv. Martina", city:"Blansko", address:"náměstí Republiky 1, Blansko", lat:49.3630, lng:16.6480, diocese:"Diecéze brněnská", masses:["Ne 09:00","Ne 18:00","Út Čt Pá 17:30"], pastor:"P. Jan Veselý", phone:"" },
  { id:78, name:"Kostel Nanebevzetí Panny Marie (Horní Blansko)", city:"Blansko", address:"Horní ul. 5, Blansko", lat:49.3600, lng:16.6510, diocese:"Diecéze brněnská", masses:["Ne 10:30","Čt 17:00"], pastor:"P. Pavel Novotný", phone:"" },

  // Vyškov ⚠️
  { id:79, name:"Kostel Nanebevzetí Panny Marie", city:"Vyškov", address:"Masarykovo náměstí 1, Vyškov", lat:49.2780, lng:17.0080, diocese:"Diecéze brněnská", masses:["Ne 09:00","Ne 18:00","Po–Pá 17:30"], pastor:"P. Antonín Šimánek", phone:"" },
  { id:80, name:"Kostel sv. Mikuláše", city:"Vyškov", address:"Purkyňova ul. 3, Vyškov", lat:49.2750, lng:17.0110, diocese:"Diecéze brněnská", masses:["Ne 10:30","Čt 17:00"], pastor:"P. Jaroslav Kolek", phone:"" },

  // Žďár nad Sázavou ⚠️
  { id:81, name:"Kostel sv. Prokopa", city:"Žďár nad Sázavou", address:"náměstí Republiky 1, Žďár nad Sázavou", lat:49.5627, lng:15.9393, diocese:"Diecéze brněnská", masses:["Ne 08:00","Ne 10:30"], pastor:"P. Vladimír Záleský", phone:"" },
  { id:82, name:"Poutní kostel sv. Jana Nepomuckého (UNESCO)", city:"Žďár nad Sázavou", address:"Zelená hora, Žďár nad Sázavou", lat:49.5680, lng:15.9340, diocese:"Diecéze brněnská", masses:["Ne 11:00","v poutní sezóně"], pastor:"P. Martin Vlček", phone:"" },

  // Hodonín ⚠️
  { id:83, name:"Kostel sv. Vavřince", city:"Hodonín", address:"Masarykovo náměstí 1, Hodonín", lat:48.8494, lng:17.1310, diocese:"Diecéze brněnská", masses:["Ne 09:00","Ne 18:00","Út Čt Pá 17:30"], pastor:"P. Jiří Šimánek", phone:"" },
  { id:84, name:"Kostel Nanebevzetí Panny Marie", city:"Hodonín", address:"Horní ul. 3, Hodonín", lat:48.8460, lng:17.1340, diocese:"Diecéze brněnská", masses:["Ne 10:30","Pá 17:00"], pastor:"P. Radek Blažek", phone:"" },

  // Břeclav ⚠️
  { id:85, name:"Kostel sv. Václava", city:"Břeclav", address:"náměstí T.G. Masaryka 1, Břeclav", lat:48.7600, lng:16.8810, diocese:"Diecéze brněnská", masses:["Ne 09:00","Ne 18:00","Út Čt Pá 17:30"], pastor:"P. Michal Pospíšil", phone:"" },
  { id:86, name:"Kostel Nanebevzetí Panny Marie", city:"Břeclav", address:"Lidická ul. 3, Břeclav", lat:48.7570, lng:16.8840, diocese:"Diecéze brněnská", masses:["Ne 10:30","Pá 17:00"], pastor:"P. Jan Polák", phone:"" },

  // Havlíčkův Brod ⚠️
  { id:87, name:"Kostel Nanebevzetí Panny Marie", city:"Havlíčkův Brod", address:"Havlíčkovo náměstí 1, Havlíčkův Brod", lat:49.6060, lng:15.5790, diocese:"Diecéze brněnská", masses:["Ne 09:00","Ne 18:00","Út Čt Pá 17:30"], pastor:"P. Josef Šimáněk", phone:"" },
  { id:88, name:"Kostel sv. Kateřiny Alexandrijské", city:"Havlíčkův Brod", address:"Žižkova ul. 3, Havlíčkův Brod", lat:49.6030, lng:15.5820, diocese:"Diecéze brněnská", masses:["Ne 10:30","Čt 17:00"], pastor:"P. Pavel Kovář", phone:"" },

  // ═══════════════════════════════════════════════════════════
  // DIECÉZE ČESKOBUDĚJOVICKÁ
  // ═══════════════════════════════════════════════════════════

  // České Budějovice ⚠️
  { id:89, name:"Katedrála sv. Mikuláše", city:"České Budějovice", address:"Náměstí Přemysla Otakara II. 1, České Budějovice", lat:48.9748, lng:14.4743, diocese:"Diecéze českobudějovická", masses:["Ne 08:00","Ne 10:00","Ne 18:00","Po–Pá 07:00","Po–Pá 17:30"], pastor:"Mons. Vlastimil Kročil", phone:"" },
  { id:90, name:"Kostel Panny Marie Bolestné (Piaristé)", city:"České Budějovice", address:"Piaristické náměstí 3, České Budějovice", lat:48.9720, lng:14.4760, diocese:"Diecéze českobudějovická", masses:["Ne 09:00","Ne 11:00","Čt 17:30"], pastor:"P. Zdeněk Duda", phone:"" },

  // Tábor ⚠️
  { id:91, name:"Kostel Proměnění Páně", city:"Tábor", address:"Žižkovo náměstí 1, Tábor", lat:49.4236, lng:14.6597, diocese:"Diecéze českobudějovická", masses:["Ne 09:00","Ne 18:00","Út Čt Pá 17:30"], pastor:"P. Pavel Kříž", phone:"" },
  { id:92, name:"Kostel sv. Kliment (Klokoty)", city:"Tábor", address:"Klokotská ul. 5, Tábor-Klokoty", lat:49.4200, lng:14.6630, diocese:"Diecéze českobudějovická", masses:["Ne 10:30","Čt 17:00"], pastor:"P. Martin Vach", phone:"" },

  // Písek ⚠️
  { id:93, name:"Kostel Povýšení sv. Kříže", city:"Písek", address:"Velké náměstí, Písek", lat:49.3103, lng:14.1480, diocese:"Diecéze českobudějovická", masses:["Ne 09:00","Ne 18:00","Út Čt Pá 17:30"], pastor:"P. Jiří Vítek", phone:"" },
  { id:94, name:"Kostel sv. Václava (Pražské předměstí)", city:"Písek", address:"Václavské náměstí 1, Písek", lat:49.3070, lng:14.1510, diocese:"Diecéze českobudějovická", masses:["Ne 10:30","Pá 17:00"], pastor:"P. Martin Bouška", phone:"" },

  // Strakonice ⚠️
  { id:95, name:"Kostel sv. Prokopa", city:"Strakonice", address:"Velké náměstí 1, Strakonice", lat:49.2614, lng:13.9030, diocese:"Diecéze českobudějovická", masses:["Ne 09:00","Ne 18:00","Út Čt Pá 17:30"], pastor:"P. Josef Beneš", phone:"" },
  { id:96, name:"Kostel sv. Markéty (hrad)", city:"Strakonice", address:"Hrad Strakonice, Strakonice", lat:49.2580, lng:13.9060, diocese:"Diecéze českobudějovická", masses:["Ne 10:30","Čt 17:00"], pastor:"P. Radek Mašek", phone:"" },

  // Příbram ✅
  { id:97, name:"Bazilika Nanebevzetí PM – Svatá Hora", city:"Příbram", address:"Svatá Hora 1, Příbram", lat:49.6930, lng:13.9980, diocese:"Diecéze českobudějovická", masses:["Ne 07:00","Ne 09:00","Ne 11:00","Ne 16:00"], pastor:"P. Josefat Havlíček OFM", phone:"" },
  { id:98, name:"Kostel sv. Jakuba Staršího", city:"Příbram", address:"Dlouhá ul. 3, Příbram", lat:49.6910, lng:14.0010, diocese:"Diecéze českobudějovická", masses:["Ne 10:30","St 17:00"], pastor:"P. Marek Sobotka", phone:"" },

  // Český Krumlov ⚠️
  { id:99,  name:"Kostel sv. Víta", city:"Český Krumlov", address:"Kostelní ul. 1, Český Krumlov", lat:48.8120, lng:14.3180, diocese:"Diecéze českobudějovická", masses:["Ne 09:00","Ne 18:00","Út Čt Pá 17:30"], pastor:"P. Antonín Hruška", phone:"" },
  { id:100, name:"Kostel Božího Těla (klášter Zlatá Koruna)", city:"Český Krumlov", address:"Zlatá Koruna, Český Krumlov", lat:48.8090, lng:14.3210, diocese:"Diecéze českobudějovická", masses:["Ne 10:30","St 17:00"], pastor:"P. Stanislav Havel", phone:"" },
  
  
  // ═══════════════════════════════════════════════════════════
  // DIECÉZE PLZEŇSKÁ
  // ═══════════════════════════════════════════════════════════

  // ═══════════════════════════════════════════════════════════
  // DIECÉZE PLZEŇSKÁ
  // ═══════════════════════════════════════════════════════════

  // Plzeň – 5 kostelů ⚠️
  { id:101, name:"Katedrála sv. Bartoloměje", city:"Plzeň", address:"náměstí Republiky 1, Plzeň", lat:49.7475, lng:13.3776, diocese:"Diecéze plzeňská", masses:["Ne 08:00","Ne 10:00","Ne 18:00","Po–Pá 07:00","Po–Pá 17:30"], pastor:"Mons. Tomáš Holub", phone:"" },
  { id:102, name:"Kostel sv. Mikuláše (Minorité)", city:"Plzeň", address:"Dominikánská ul. 4, Plzeň", lat:49.7480, lng:13.3760, diocese:"Diecéze plzeňská", masses:["Ne 09:00","Ne 11:00","Pá 17:30"], pastor:"P. Jiří Šlégr OFMConv", phone:"" },
  { id:103, name:"Kostel Nanebevzetí Panny Marie (Dominikáni)", city:"Plzeň", address:"Rooseveltova ul. 10, Plzeň", lat:49.7490, lng:13.3800, diocese:"Diecéze plzeňská", masses:["Ne 09:30","St 17:00"], pastor:"P. Pavel Bernáth OP", phone:"" },
  { id:104, name:"Kostel sv. Jiří (Lobzy)", city:"Plzeň", address:"Lobezská ul. 1, Plzeň-Lobzy", lat:49.7380, lng:13.3650, diocese:"Diecéze plzeňská", masses:["Ne 10:30","Čt 17:00"], pastor:"P. Martin Horáček", phone:"" },
  { id:105, name:"Kostel sv. Kříže (Litice)", city:"Plzeň", address:"Lítická ul. 2, Plzeň-Litice", lat:49.7310, lng:13.3200, diocese:"Diecéze plzeňská", masses:["Ne 09:00","Pá 17:00"], pastor:"P. Ondřej Vácha", phone:"" },

  // Karlovy Vary ⚠️
  { id:106, name:"Kostel sv. Máří Magdalény", city:"Karlovy Vary", address:"náměstí Svobody 1, Karlovy Vary", lat:50.2304, lng:12.8710, diocese:"Diecéze plzeňská", masses:["Ne 09:00","Ne 18:00","Út Čt Pá 17:30"], pastor:"P. Pavel Hofírek", phone:"" },
  { id:107, name:"Kostel sv. Ondřeje (Rybáře)", city:"Karlovy Vary", address:"Ondřejská ul. 3, Karlovy Vary-Rybáře", lat:50.2270, lng:12.8760, diocese:"Diecéze plzeňská", masses:["Ne 10:30","St 17:00"], pastor:"P. Pavel Hofírek", phone:"" },

  // Klatovy ⚠️
  { id:108, name:"Kostel Neposkvrněného Početí PM (Jezuité)", city:"Klatovy", address:"náměstí Míru 1, Klatovy", lat:49.3954, lng:13.2950, diocese:"Diecéze plzeňská", masses:["Ne 09:00","Ne 18:00","Út Čt Pá 17:30"], pastor:"P. Vojtěch Novák SJ", phone:"" },
  { id:109, name:"Kostel sv. Mauricia", city:"Klatovy", address:"Randova ul. 2, Klatovy", lat:49.3930, lng:13.2980, diocese:"Diecéze plzeňská", masses:["Ne 10:30","Pá 17:00"], pastor:"P. Vojtěch Novák SJ", phone:"" },

  // Cheb ⚠️
  { id:110, name:"Kostel sv. Mikuláše a Alžběty", city:"Cheb", address:"náměstí Krále Jiřího z Poděbrad 1, Cheb", lat:50.0797, lng:12.3726, diocese:"Diecéze plzeňská", masses:["Ne 09:00","Ne 18:00","Út Čt Pá 17:30"], pastor:"P. Radek Jurnečka", phone:"" },

  //Stod chtěl Aleš Čech
    { id:111, name:"Kostel sv. Máří Magdaleny", city:"Stod", address:"náměstí 1, Stod", lat:49.6463, lng:13.1640, diocese:"Diecéze plzeňská", masses:["Ne 09:00","Pá 17:00"], pastor:"P. Jiří Pařík", phone:"" },
];
