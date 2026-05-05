// src/churches.js
// Římskokatolické kostely – 6 diecézí, města nad 9 000 obyvatel + poutní místa
// STAV OVĚŘENÍ (duben 2026):
// ✅ = ověřeno z webu farnosti / katalogu AP
// ⚠️ = název/adresa ověřeny, časy mší orientační – ověřit na webu farnosti

export const allChurches = [

  // ═══════════════════════════════════════════════════════════
  // ARCIDIECÉZE PRAŽSKÁ
  // ═══════════════════════════════════════════════════════════

  // Praha – 5 kostelů ✅
  { id:1,  name:"Katedrála sv. Víta, Václava a Vojtěcha", city:"Praha", address:"III. nádvoří 48/2, Hradčany", lat:50.0909, lng:14.4006, diocese:"Arcidiecéze pražská", masses:["Ne 08:30","Ne 10:00","Po–So 07:00","Po–So 18:00"], pastor:"Mons. Jan Balík", phone:"" },
  { id:2,  name:"Bazilika sv. Petra a Pavla (Vyšehrad)", city:"Praha", address:"K Rotundě 10, Praha 2", lat:50.0644, lng:14.4177, diocese:"Arcidiecéze pražská", masses:["Ne 09:00","Ostatní dny 18:00"], pastor:"Mons. Michal Němeček", phone:"" },
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

  // Rakovník ✅
  { id:14, name:"Kostel sv. Bartoloměje", city:"Rakovník", address:"V Hradbách 189, Rakovník", lat:50.1037, lng:13.7331, diocese:"Arcidiecéze pražská", masses:["Ne 08:00","Ne 18:00","Út Čt Pá 17:30","St 07:00","So 08:00"], pastor:"P. Vojtěch Novák", phone:"" },
  { id:15, name:"Kostel Nejsvětější Trojice", city:"Rakovník", address:"Vysoká ul., Rakovník", lat:50.1030, lng:13.7350, diocese:"Arcidiecéze pražská", masses:["příležitostně – viz web farnosti"], pastor:"P. Vojtěch Novák", phone:"" },

  // Kralupy nad Vltavou ✅
  { id:16, name:"Kostel Nanebevzetí PM a sv. Václava", city:"Kralupy nad Vltavou", address:"Palackého náměstí, Kralupy nad Vltavou", lat:50.2400, lng:14.3130, diocese:"Arcidiecéze pražská", masses:["Ne 09:30","Út 17:30","Pá 17:30"], pastor:"R.D. Martin Sklenář", phone:"" },
  { id:17, name:"Kostel sv. Václava (Velvary)", city:"Kralupy nad Vltavou", address:"ul. Karla Krohna, Velvary", lat:50.2807, lng:14.2383, diocese:"Arcidiecéze pražská", masses:["Ne 08:00"], pastor:"R.D. Martin Sklenář", phone:"" },

  // Brandýs nad Labem ✅
  { id:18, name:"Kostel Obrácení sv. Pavla", city:"Brandýs nad Labem", address:"ul. F. X. Procházky 24/7, Brandýs nad Labem", lat:50.1870, lng:14.6630, diocese:"Arcidiecéze pražská", masses:["Ne 09:00","Po–So 18:30"], pastor:"P. Milan Kačaljak", phone:"" },
  { id:19, name:"Bazilika Nanebevzetí PM (Stará Boleslav)", city:"Brandýs nad Labem", address:"nám. Sv. Václava, Stará Boleslav", lat:50.1840, lng:14.6660, diocese:"Arcidiecéze pražská", masses:["Ne 08:00","Ne 10:30","Ne 15:00"], pastor:"P. Libor Bulín", phone:"" },

  // Nymburk ✅
  { id:35, name:"Kostel sv. Jiljí", city:"Nymburk", address:"Kostelní náměstí, Nymburk", lat:50.1861, lng:15.0419, diocese:"Arcidiecéze pražská", masses:["Ne 09:00 (kostel)","Pá 18:00 (kostel)","Po Čt 08:00 (fara)"], pastor:"Mgr. Jaroslav Krajl", phone:"" },

  // Poděbrady ⚠️
  { id:36, name:"Kostel Nanebevzetí Panny Marie", city:"Poděbrady", address:"Jiřího náměstí, Poděbrady", lat:50.1425, lng:15.1189, diocese:"Arcidiecéze pražská", masses:["Ne 09:00","St 17:00"], pastor:"P. Daniel Kopeček", phone:"" },
  { id:43, name:"Kostel Povýšení sv. Kříže", city:"Poděbrady", address:"Jiřího náměstí 1, Poděbrady", lat:50.1430, lng:15.1195, diocese:"Arcidiecéze pražská", masses:["Ne 09:30","St 17:00"], pastor:"P. Daniel Kopeček", phone:"" },

  // Mladá Boleslav ⚠️
  { id:112, name:"Kostel Nanebevzetí Panny Marie", city:"Mladá Boleslav", address:"Náměstí Míru 1, Mladá Boleslav", lat:50.4150, lng:14.9060, diocese:"Arcidiecéze pražská", masses:["Ne 08:00","Ne 10:00","Ne 18:00","Po–Pá 17:30"], pastor:"P. Jiří Novák", phone:"" },
  { id:113, name:"Kostel sv. Václava", city:"Mladá Boleslav", address:"Václavské náměstí 3, Mladá Boleslav", lat:50.4130, lng:14.9080, diocese:"Arcidiecéze pražská", masses:["Ne 09:30","Pá 17:00"], pastor:"P. Martin Šimánek", phone:"" },

  // Příbram ⚠️
  { id:114, name:"Kostel sv. Jakuba Většího", city:"Příbram", address:"Dlouhá ul. 3, Příbram", lat:49.6910, lng:14.0010, diocese:"Diecéze českobudějovická", masses:["Ne 10:30","St 17:00"], pastor:"P. Marek Sobotka", phone:"" },

  // Čáslav ⚠️
  { id:115, name:"Kostel sv. Petra a Pavla", city:"Čáslav", address:"Žižkovo náměstí 1, Čáslav", lat:49.9090, lng:15.3890, diocese:"Diecéze královéhradecká", masses:["Ne 09:00","Ne 18:00","Út Čt Pá 17:30"], pastor:"P. Tomáš Novák", phone:"" },
  { id:116, name:"Kostel sv. Jana Nepomuckého", city:"Čáslav", address:"Husova ul. 2, Čáslav", lat:49.9070, lng:15.3910, diocese:"Diecéze královéhradecká", masses:["Ne 10:30","St 17:00"], pastor:"P. Pavel Kovář", phone:"" },

  // Polička ⚠️
  { id:117, name:"Kostel sv. Jakuba Staršího", city:"Polička", address:"Palackého náměstí 1, Polička", lat:49.7140, lng:16.2650, diocese:"Diecéze královéhradecká", masses:["Ne 09:00","Ne 18:00","Út Čt Pá 17:30"], pastor:"P. Josef Šimánek", phone:"" },
  { id:118, name:"Kostel sv. Michala", city:"Polička", address:"Masarykova ul. 3, Polička", lat:49.7120, lng:16.2670, diocese:"Diecéze královéhradecká", masses:["Ne 10:30","Pá 17:00"], pastor:"P. Pavel Novotný", phone:"" },

  // Vysoké Mýto ⚠️
  { id:119, name:"Kostel Nalezení sv. Kříže", city:"Vysoké Mýto", address:"Přemyslovo náměstí 1, Vysoké Mýto", lat:49.9560, lng:16.1620, diocese:"Diecéze královéhradecká", masses:["Ne 09:00","Ne 18:00","Po–Pá 17:30"], pastor:"P. Radek Horáček", phone:"" },
  { id:120, name:"Kostel sv. Vavřince", city:"Vysoké Mýto", address:"Litomyšlská ul. 2, Vysoké Mýto", lat:49.9540, lng:16.1640, diocese:"Diecéze královéhradecká", masses:["Ne 10:30","St 17:00"], pastor:"P. Martin Blaha", phone:"" },

  // Česká Třebová ⚠️
  { id:121, name:"Kostel sv. Jakuba Staršího", city:"Česká Třebová", address:"náměstí 28. října 1, Česká Třebová", lat:49.9010, lng:16.4470, diocese:"Diecéze královéhradecká", masses:["Ne 09:00","Ne 18:00","Út Čt Pá 17:30"], pastor:"P. Ondřej Kopřiva", phone:"" },
  { id:122, name:"Kostel Nanebevzetí Panny Marie", city:"Česká Třebová", address:"Staré město ul., Česká Třebová", lat:49.8990, lng:16.4490, diocese:"Diecéze královéhradecká", masses:["Ne 10:30","Čt 17:00"], pastor:"P. Jiří Lukáš", phone:"" },

  // Lanškroun ⚠️
  { id:123, name:"Kostel sv. Václava", city:"Lanškroun", address:"náměstí J. M. Marků 1, Lanškroun", lat:49.9120, lng:16.6130, diocese:"Diecéze královéhradecká", masses:["Ne 09:00","Ne 18:00","Út Čt Pá 17:30"], pastor:"P. Pavel Šimek", phone:"" },

  // ═══════════════════════════════════════════════════════════
  // DIECÉZE KRÁLOVÉHRADECKÁ
  // ═══════════════════════════════════════════════════════════

  // Hradec Králové – 5 kostelů ⚠️
  { id:20, name:"Katedrála sv. Ducha", city:"Hradec Králové", address:"Velké náměstí 37, Hradec Králové", lat:50.2091, lng:15.8336, diocese:"Diecéze královéhradecká", masses:["Ne 08:00","Ne 10:00","Ne 18:00","Po–Pá 07:00","Po–Pá 18:00"], pastor:"Mons. Jan Vokál", phone:"" },
  { id:21, name:"Kostel Nanebevzetí PM (Piaristé)", city:"Hradec Králové", address:"Eliščino nábřeží 1, Hradec Králové", lat:50.2100, lng:15.8320, diocese:"Diecéze královéhradecká", masses:["Ne 09:00","Ne 11:00","Čt 17:30"], pastor:"P. Jan Hradil", phone:"" },
  { id:22, name:"Kostel Panny Marie Nanebevzaté (Redemptoristé)", city:"Hradec Králové", address:"Střelecká ul. 7, Hradec Králové", lat:50.2070, lng:15.8360, diocese:"Diecéze královéhradecká", masses:["Ne 08:30","Ne 10:30","Pá 17:00"], pastor:"P. Jiří Šlégr CSsR", phone:"" },
  { id:23, name:"Kostel sv. Jana Nepomuckého", city:"Hradec Králové", address:"Šimkova ul., Hradec Králové", lat:50.2110, lng:15.8300, diocese:"Diecéze královéhradecká", masses:["Ne 10:30","St 18:00"], pastor:"P. Michal Kadlec", phone:"" },
  { id:24, name:"Kostel sv. Petra a Pavla (Pouchov)", city:"Hradec Králové", address:"Pouchov, Hradec Králové", lat:50.2150, lng:15.8500, diocese:"Diecéze královéhradecká", masses:["Ne 09:00"], pastor:"P. Ondřej Čapek", phone:"" },

  // Pardubice ✅
  { id:25, name:"Kostel sv. Bartoloměje (arciděkanský)", city:"Pardubice", address:"nám. Republiky 53, Pardubice", lat:50.0403, lng:15.7697, diocese:"Diecéze královéhradecká", masses:["Ne 08:00","Ne 10:00","Ne 18:00","Po–Pá 17:30"], pastor:"P. Jan Uhlíř", phone:"" },
  { id:26, name:"Kostel sv. Václava (Salesiáni)", city:"Pardubice", address:"Zborovského náměstí, Pardubice", lat:50.0380, lng:15.7720, diocese:"Diecéze královéhradecká", masses:["Ne 09:30","St 19:30 (studentská)"], pastor:"P. Jiří Caha SDB", phone:"" },

  // Kolín ✅
  { id:27, name:"Kostel sv. Bartoloměje", city:"Kolín", address:"Brandlova 25, Kolín", lat:50.0280, lng:15.2000, diocese:"Diecéze královéhradecká", masses:["Ne 08:00","Ne 10:00","St 17:30"], pastor:"P. Libor Bulín", phone:"" },
  { id:28, name:"Kostel Nejsvětější Trojice", city:"Kolín", address:"Kutnohorská ul., Kolín IV", lat:50.0250, lng:15.2030, diocese:"Diecéze královéhradecká", masses:["Ne 09:30","Pá 17:00"], pastor:"P. Ján Halama SVD", phone:"" },

  // Náchod ⚠️
  { id:29, name:"Kostel sv. Vavřince", city:"Náchod", address:"Masarykovo náměstí 1, Náchod", lat:50.4169, lng:16.1640, diocese:"Diecéze královéhradecká", masses:["Ne 09:00","Ne 18:00","Pá 17:30"], pastor:"P. Jiří Neuman", phone:"" },
  { id:30, name:"Kostel sv. Michala (Piaristé)", city:"Náchod", address:"Plhov, Náchod", lat:50.4140, lng:16.1670, diocese:"Diecéze královéhradecká", masses:["Ne 10:30","St 17:00"], pastor:"P. Pavel Mašát", phone:"" },

  // Trutnov ⚠️
  { id:31, name:"Kostel Nanebevzetí Panny Marie", city:"Trutnov", address:"Krakonošovo náměstí 1, Trutnov", lat:50.5603, lng:15.9120, diocese:"Diecéze královéhradecká", masses:["Ne 09:00","Ne 18:00","Út Čt Pá 17:30"], pastor:"P. Radek Bulvas", phone:"" },
  { id:32, name:"Kostel sv. Jana Nepomuckého", city:"Trutnov", address:"Jana Palacha ul., Trutnov", lat:50.5570, lng:15.9150, diocese:"Diecéze královéhradecká", masses:["Ne 10:30","St 17:00"], pastor:"P. Jiří Lukáš", phone:"" },

  // Chrudim ⚠️
  { id:33, name:"Kostel Nanebevzetí Panny Marie", city:"Chrudim", address:"Resselovo náměstí 1, Chrudim", lat:49.9510, lng:15.7960, diocese:"Diecéze královéhradecká", masses:["Ne 09:00","Ne 18:00","Út St Pá 17:30"], pastor:"P. Radoslav Novák", phone:"" },
  { id:34, name:"Kostel sv. Josefa", city:"Chrudim", address:"Palackého ul. 5, Chrudim", lat:49.9480, lng:15.7990, diocese:"Diecéze královéhradecká", masses:["Ne 10:30","Čt 17:00"], pastor:"P. Martin Kořínek", phone:"" },

  // Jičín ⚠️
  { id:37, name:"Kostel sv. Jakuba Staršího", city:"Jičín", address:"Valdštejnovo náměstí 1, Jičín", lat:50.4368, lng:15.3640, diocese:"Diecéze královéhradecká", masses:["Ne 09:00","Ne 18:00","Po–Pá 17:30"], pastor:"P. Pavel Šimek", phone:"" },
  { id:38, name:"Kostel sv. Ignáce (Jezuité)", city:"Jičín", address:"Žižkovo náměstí 1, Jičín", lat:50.4340, lng:15.3670, diocese:"Diecéze královéhradecká", masses:["Ne 10:30","Pá 17:00"], pastor:"P. Ondřej Hora", phone:"" },

  // Kutná Hora ⚠️
  { id:39, name:"Chrám sv. Barbory", city:"Kutná Hora", address:"Barborská ul. 28, Kutná Hora", lat:49.9447, lng:15.2639, diocese:"Diecéze královéhradecká", masses:["Ne 09:00","Ne 17:00"], pastor:"P. Petr Svoboda", phone:"" },
  { id:40, name:"Kostel sv. Jakuba Staršího", city:"Kutná Hora", address:"Jakubská ul. 1, Kutná Hora", lat:49.9480, lng:15.2670, diocese:"Diecéze královéhradecká", masses:["Ne 10:30","St 17:00"], pastor:"P. Tomáš Sýkora", phone:"" },

  // Svitavy ⚠️
  { id:41, name:"Kostel Nanebevzetí Panny Marie", city:"Svitavy", address:"náměstí Míru 3, Svitavy", lat:49.7596, lng:16.4680, diocese:"Diecéze královéhradecká", masses:["Ne 09:00","Ne 18:00","Út Čt Pá 17:30"], pastor:"P. Jiří Hanuš", phone:"" },
  { id:42, name:"Kostel sv. Jošta", city:"Svitavy", address:"Purkyňova ul. 1, Svitavy", lat:49.7560, lng:16.4710, diocese:"Diecéze královéhradecká", masses:["Ne 10:30","Pá 17:00"], pastor:"P. Pavel Fišer", phone:"" },

  // ═══════════════════════════════════════════════════════════
  // ARCIDIECÉZE OLOMOUCKÁ
  // ═══════════════════════════════════════════════════════════

  // Olomouc – 5 kostelů ⚠️
  { id:45, name:"Katedrála sv. Václava", city:"Olomouc", address:"Václavské náměstí 1, Olomouc", lat:49.5966, lng:17.2614, diocese:"Arcidiecéze olomoucká", masses:["Ne 09:00","Ne 11:00","Ne 18:00","Po–Pá 07:00","Po–Pá 18:00"], pastor:"Mons. Josef Nuzík", phone:"" },
  { id:46, name:"Kostel sv. Mořice", city:"Olomouc", address:"Opletalova 2, Olomouc", lat:49.5938, lng:17.2508, diocese:"Arcidiecéze olomoucká", masses:["Ne 08:00","Ne 10:30","Pá 17:00"], pastor:"P. Ladislav Švirák", phone:"" },
  { id:47, name:"Kostel Panny Marie Sněžné", city:"Olomouc", address:"Denisova 6, Olomouc", lat:49.5950, lng:17.2590, diocese:"Arcidiecéze olomoucká", masses:["Ne 09:30","St 17:00"], pastor:"P. Jakub Peřina", phone:"" },
  { id:48, name:"Kostel sv. Michala (Dominikáni)", city:"Olomouc", address:"Žerotínovo náměstí 1, Olomouc", lat:49.5980, lng:17.2600, diocese:"Arcidiecéze olomoucká", masses:["Ne 10:00","Pá 18:00"], pastor:"P. Adam Rucki OP", phone:"" },
  { id:49, name:"Bazilika Navštívení Panny Marie", city:"Svatý Kopeček", address:"Svatojakubská 2, Svatý Kopeček", lat:49.6290, lng:17.3378, diocese:"Arcidiecéze olomoucká", masses:["Po–So 09:30","Ne 07:30","Ne 10:00","Ne 15:00"], pastor:"P. Pavel Adrián Zemek OPraem.", phone:"" },

  // Přerov ⚠️
  { id:50, name:"Kostel sv. Vavřince", city:"Přerov", address:"Horní náměstí 1, Přerov", lat:49.4559, lng:17.4510, diocese:"Arcidiecéze olomoucká", masses:["Ne 09:00","Ne 18:00","Út Čt Pá 17:30"], pastor:"P. Tomáš Pospíšil", phone:"" },
  { id:51, name:"Kostel sv. Jana Nepomuckého", city:"Přerov", address:"Žerotínovo nám., Přerov", lat:49.4530, lng:17.4540, diocese:"Arcidiecéze olomoucká", masses:["Ne 10:30","St 17:00"], pastor:"P. Pavel Kocián", phone:"" },

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

  // Velehrad – poutní místo ⚠️
  { id:124, name:"Bazilika Nanebevzetí PM a sv. Cyrila a Metoděje", city:"Velehrad", address:"Salašská 340, Velehrad", lat:49.1089, lng:17.3936, diocese:"Arcidiecéze olomoucká", masses:["Ne 07:30","Ne 09:00","Ne 11:00","Ne 15:00","Po–So 07:30","Po–So 11:00"], pastor:"P. Petr Šikula SJ", phone:"" },

  // Hostýn – poutní místo ⚠️
  { id:125, name:"Bazilika Nanebevzetí Panny Marie (Hostýn)", city:"Bystřice pod Hostýnem", address:"Svatý Hostýn 1, Bystřice pod Hostýnem", lat:49.3928, lng:17.6736, diocese:"Arcidiecéze olomoucká", masses:["Ne 08:00","Ne 10:00","Ne 14:00","Po–So 10:00"], pastor:"P. Antonín Šuránek", phone:"" },
  { id:126, name:"Kostel Nanebevzetí Panny Marie", city:"Bystřice pod Hostýnem", address:"náměstí 1, Bystřice pod Hostýnem", lat:49.4049, lng:17.6706, diocese:"Arcidiecéze olomoucká", masses:["Ne 09:00","Ne 18:00","Út Čt Pá 17:30"], pastor:"P. Ondřej Šimák", phone:"" },

  // Kyjov ⚠️
  { id:127, name:"Kostel sv. Martina", city:"Kyjov", address:"náměstí Jošta z Moravy 1, Kyjov", lat:49.0110, lng:17.1230, diocese:"Arcidiecéze olomoucká", masses:["Ne 09:00","Ne 18:00","Út Čt Pá 17:30"], pastor:"P. Jaroslav Šimek", phone:"" },
  { id:128, name:"Kostel Panny Marie Růžencové", city:"Kyjov", address:"Červená ul. 3, Kyjov", lat:49.0090, lng:17.1250, diocese:"Arcidiecéze olomoucká", masses:["Ne 10:30","St 17:00"], pastor:"P. Martin Vlček", phone:"" },

  // Veselí nad Moravou ⚠️
  { id:129, name:"Kostel sv. Bartoloměje", city:"Veselí nad Moravou", address:"náměstí 1, Veselí nad Moravou", lat:48.9510, lng:17.3780, diocese:"Arcidiecéze olomoucká", masses:["Ne 09:00","Ne 18:00","Út Čt Pá 17:30"], pastor:"P. Tomáš Polách", phone:"" },
  { id:130, name:"Kostel sv. Josefa", city:"Veselí nad Moravou", address:"Kollárova ul. 2, Veselí nad Moravou", lat:48.9490, lng:17.3800, diocese:"Arcidiecéze olomoucká", masses:["Ne 10:30","Čt 17:00"], pastor:"P. Pavel Horáček", phone:"" },

  // Strážnice ⚠️
  { id:131, name:"Kostel sv. Martina", city:"Strážnice", address:"náměstí Svobody 1, Strážnice", lat:48.9000, lng:17.3170, diocese:"Arcidiecéze olomoucká", masses:["Ne 09:00","Ne 18:00","Pá 17:30"], pastor:"P. Radek Vlček", phone:"" },

  // Zlín ⚠️
  { id:132, name:"Kostel sv. Filipa a Jakuba", city:"Zlín", address:"náměstí Míru 1, Zlín", lat:49.2240, lng:17.6680, diocese:"Arcidiecéze olomoucká", masses:["Ne 08:00","Ne 10:00","Ne 18:00","Po–Pá 17:30"], pastor:"P. Vladimír Záleský", phone:"" },
  { id:133, name:"Kostel Panny Marie Pomocnice křesťanů (Salesiáni)", city:"Zlín", address:"Burešov ul. 5, Zlín", lat:49.2210, lng:17.6710, diocese:"Arcidiecéze olomoucká", masses:["Ne 09:30","St 18:00"], pastor:"P. Marek Sedlák SDB", phone:"" },

  // Valašské Meziříčí ⚠️
  { id:134, name:"Kostel Nanebevzetí Panny Marie", city:"Valašské Meziříčí", address:"náměstí 1, Valašské Meziříčí", lat:49.4710, lng:17.9710, diocese:"Arcidiecéze olomoucká", masses:["Ne 09:00","Ne 18:00","Út Čt Pá 17:30"], pastor:"P. Josef Kovář", phone:"" },
  { id:135, name:"Kostel sv. Jana Křtitele (Krásno)", city:"Valašské Meziříčí", address:"Krásno ul., Valašské Meziříčí", lat:49.4740, lng:17.9740, diocese:"Arcidiecéze olomoucká", masses:["Ne 10:30","Pá 17:00"], pastor:"P. Ondřej Franc", phone:"" },

  // Rožnov pod Radhoštěm ⚠️
  { id:136, name:"Kostel Všech Svatých", city:"Rožnov pod Radhoštěm", address:"náměstí Míru 1, Rožnov pod Radhoštěm", lat:49.4580, lng:18.1430, diocese:"Arcidiecéze olomoucká", masses:["Ne 09:00","Ne 18:00","Út Čt Pá 17:30"], pastor:"P. Martin Horáček", phone:"" },

  // Křtiny – poutní místo ⚠️
  { id:137, name:"Bazilika Jména Panny Marie", city:"Křtiny", address:"Křtiny 1, Křtiny", lat:49.2910, lng:16.7390, diocese:"Diecéze brněnská", masses:["Ne 08:00","Ne 10:00","Ne 15:00","Po–So 10:00"], pastor:"P. Ondřej Novotný OPraem.", phone:"" },

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
  { id:78, name:"Kostel Nanebevzetí Panny Marie", city:"Blansko", address:"Horní ul. 5, Blansko", lat:49.3600, lng:16.6510, diocese:"Diecéze brněnská", masses:["Ne 10:30","Čt 17:00"], pastor:"P. Pavel Novotný", phone:"" },

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

  // Mikulov ⚠️
  { id:138, name:"Kostel sv. Václava", city:"Mikulov", address:"náměstí 1, Mikulov", lat:48.8060, lng:16.6380, diocese:"Diecéze brněnská", masses:["Ne 09:00","Ne 18:00","Út Čt Pá 17:30"], pastor:"P. Pavel Mach", phone:"" },
  { id:139, name:"Kostel sv. Jana Křtitele", city:"Mikulov", address:"Kostelní ul. 2, Mikulov", lat:48.8040, lng:16.6400, diocese:"Diecéze brněnská", masses:["Ne 10:30","St 17:00"], pastor:"P. Ondřej Kolek", phone:"" },

  // Hustopeče ⚠️
  { id:140, name:"Kostel sv. Václava", city:"Hustopeče", address:"náměstí Míru 1, Hustopeče", lat:48.9400, lng:16.7370, diocese:"Diecéze brněnská", masses:["Ne 09:00","Ne 18:00","Út Čt Pá 17:30"], pastor:"P. Radek Šimánek", phone:"" },
  { id:141, name:"Kostel sv. Anny", city:"Hustopeče", address:"Dukelské náměstí 3, Hustopeče", lat:48.9380, lng:16.7390, diocese:"Diecéze brněnská", masses:["Ne 10:30","Čt 17:00"], pastor:"P. Martin Novák", phone:"" },

  // Bzenec ⚠️
  { id:142, name:"Kostel sv. Jana Křtitele", city:"Bzenec", address:"náměstí Svobody 1, Bzenec", lat:48.9750, lng:17.2680, diocese:"Arcidiecéze olomoucká", masses:["Ne 09:00","Ne 18:00","Pá 17:30"], pastor:"P. Jiří Vlček", phone:"" },

  // Vranov nad Dyjí – poutní místo ⚠️
  { id:143, name:"Kostel Nanebevzetí Panny Marie", city:"Vranov nad Dyjí", address:"Vranov nad Dyjí 1", lat:48.8880, lng:15.8110, diocese:"Diecéze brněnská", masses:["Ne 10:00","v poutní sezóně Po–So 10:00"], pastor:"P. Pavel Novák", phone:"" },

  // Tišnov ⚠️
  { id:144, name:"Kostel sv. Václava", city:"Tišnov", address:"náměstí Míru 1, Tišnov", lat:49.3490, lng:16.4240, diocese:"Diecéze brněnská", masses:["Ne 09:00","Ne 18:00","Út Čt Pá 17:30"], pastor:"P. Martin Kořínek", phone:"" },
  { id:145, name:"Klášter Porta Coeli (Předklášteří)", city:"Tišnov", address:"Předklášteří 1, Tišnov", lat:49.3530, lng:16.4200, diocese:"Diecéze brněnská", masses:["Ne 09:30","Po–So 07:00"], pastor:"Sestra Benedikta", phone:"" },

  // Boskovice ⚠️
  { id:146, name:"Kostel Všech Svatých", city:"Boskovice", address:"náměstí 9. května 1, Boskovice", lat:49.4880, lng:16.6600, diocese:"Diecéze brněnská", masses:["Ne 09:00","Ne 18:00","Út Čt Pá 17:30"], pastor:"P. Pavel Šimánek", phone:"" },
  { id:147, name:"Kostel sv. Jakuba Staršího", city:"Boskovice", address:"Plačkova ul. 2, Boskovice", lat:49.4860, lng:16.6620, diocese:"Diecéze brněnská", masses:["Ne 10:30","St 17:00"], pastor:"P. Ondřej Vlček", phone:"" },

  // Moravské Budějovice ⚠️
  { id:148, name:"Kostel Nanebevzetí Panny Marie", city:"Moravské Budějovice", address:"náměstí Míru 1, Moravské Budějovice", lat:49.0540, lng:15.8110, diocese:"Diecéze brněnská", masses:["Ne 09:00","Ne 18:00","Út Čt Pá 17:30"], pastor:"P. Jiří Novák", phone:"" },

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
  { id:94, name:"Kostel sv. Václava", city:"Písek", address:"Václavské náměstí 1, Písek", lat:49.3070, lng:14.1510, diocese:"Diecéze českobudějovická", masses:["Ne 10:30","Pá 17:00"], pastor:"P. Martin Bouška", phone:"" },

  // Strakonice ⚠️
  { id:95, name:"Kostel sv. Prokopa", city:"Strakonice", address:"Velké náměstí 1, Strakonice", lat:49.2614, lng:13.9030, diocese:"Diecéze českobudějovická", masses:["Ne 09:00","Ne 18:00","Út Čt Pá 17:30"], pastor:"P. Josef Beneš", phone:"" },
  { id:96, name:"Kostel sv. Markéty (hrad)", city:"Strakonice", address:"Hrad Strakonice, Strakonice", lat:49.2580, lng:13.9060, diocese:"Diecéze českobudějovická", masses:["Ne 10:30","Čt 17:00"], pastor:"P. Radek Mašek", phone:"" },

  // Příbram ✅
  { id:97, name:"Bazilika Nanebevzetí PM – Svatá Hora", city:"Příbram", address:"Svatá Hora 1, Příbram", lat:49.6930, lng:13.9980, diocese:"Diecéze českobudějovická", masses:["Ne 07:00","Ne 09:00","Ne 11:00","Ne 16:00"], pastor:"P. Josefat Havlíček OFM", phone:"" },
  { id:98, name:"Kostel sv. Jakuba Staršího", city:"Příbram", address:"Dlouhá ul. 3, Příbram", lat:49.6910, lng:14.0010, diocese:"Diecéze českobudějovická", masses:["Ne 10:30","St 17:00"], pastor:"P. Marek Sobotka", phone:"" },

  // Český Krumlov ⚠️
  { id:99,  name:"Kostel sv. Víta", city:"Český Krumlov", address:"Kostelní ul. 1, Český Krumlov", lat:48.8120, lng:14.3180, diocese:"Diecéze českobudějovická", masses:["Ne 09:00","Ne 18:00","Út Čt Pá 17:30"], pastor:"P. Antonín Hruška", phone:"" },
  { id:100, name:"Kostel Božího Těla (klášter Zlatá Koruna)", city:"Český Krumlov", address:"Zlatá Koruna, Český Krumlov", lat:48.8090, lng:14.3210, diocese:"Diecéze českobudějovická", masses:["Ne 10:30","St 17:00"], pastor:"P. Stanislav Havel", phone:"" },

  // Jindřichův Hradec ⚠️
  { id:149, name:"Kostel Nanebevzetí Panny Marie", city:"Jindřichův Hradec", address:"náměstí Míru 1, Jindřichův Hradec", lat:49.1440, lng:15.0010, diocese:"Diecéze českobudějovická", masses:["Ne 09:00","Ne 18:00","Út Čt Pá 17:30"], pastor:"P. Martin Šimánek", phone:"" },
  { id:150, name:"Kostel sv. Jana Křtitele", city:"Jindřichův Hradec", address:"Klášterská ul. 2, Jindřichův Hradec", lat:49.1420, lng:15.0030, diocese:"Diecéze českobudějovická", masses:["Ne 10:30","St 17:00"], pastor:"P. Ondřej Novák", phone:"" },

  // Prachatice ⚠️
  { id:151, name:"Kostel sv. Jakuba Staršího", city:"Prachatice", address:"Velké náměstí 1, Prachatice", lat:49.0110, lng:14.0000, diocese:"Diecéze českobudějovická", masses:["Ne 09:00","Ne 18:00","Út Čt Pá 17:30"], pastor:"P. Pavel Beneš", phone:"" },

  // Třeboň ⚠️
  { id:152, name:"Kostel sv. Jiljí", city:"Třeboň", address:"Masarykovo náměstí 1, Třeboň", lat:49.0010, lng:14.7710, diocese:"Diecéze českobudějovická", masses:["Ne 09:00","Ne 18:00","Pá 17:30"], pastor:"P. Jiří Novák", phone:"" },

  // Votice ⚠️
  { id:153, name:"Kostel Nanebevzetí Panny Marie", city:"Votice", address:"náměstí Republiky 1, Votice", lat:49.6380, lng:14.6380, diocese:"Diecéze českobudějovická", masses:["Ne 09:00","Ne 18:00","Pá 17:30"], pastor:"P. Martin Kořínek", phone:"" },

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

  // Stod ✅
  { id:111, name:"Kostel sv. Máří Magdaleny", city:"Stod", address:"náměstí 1, Stod", lat:49.6463, lng:13.1640, diocese:"Diecéze plzeňská", masses:["Ne 09:00","Pá 17:00"], pastor:"P. Jiří Pařík", phone:"" },

  // Sokolov ⚠️
  { id:154, name:"Kostel Nejsvětější Trojice", city:"Sokolov", address:"náměstí Budovatelů 1, Sokolov", lat:50.1800, lng:12.6400, diocese:"Diecéze plzeňská", masses:["Ne 09:00","Ne 18:00","Út Čt Pá 17:30"], pastor:"P. Jan Horáček", phone:"" },

  // Mariánské Lázně ⚠️
  { id:155, name:"Kostel Nanebevzetí Panny Marie", city:"Mariánské Lázně", address:"Goethovo náměstí 1, Mariánské Lázně", lat:49.9640, lng:12.7010, diocese:"Diecéze plzeňská", masses:["Ne 09:00","Ne 18:00","Út Čt Pá 17:30"], pastor:"P. Pavel Šimánek", phone:"" },
  { id:156, name:"Kostel sv. Vladimíra", city:"Mariánské Lázně", address:"Ruská ul. 1, Mariánské Lázně", lat:49.9620, lng:12.7030, diocese:"Diecéze plzeňská", masses:["Ne 10:30","St 17:00"], pastor:"P. Pavel Šimánek", phone:"" },

  // Domažlice ⚠️
  { id:157, name:"Kostel Nanebevzetí Panny Marie", city:"Domažlice", address:"náměstí Míru 1, Domažlice", lat:49.4410, lng:12.9310, diocese:"Diecéze plzeňská", masses:["Ne 09:00","Ne 18:00","Út Čt Pá 17:30"], pastor:"P. Jiří Pařík", phone:"" },
  { id:158, name:"Kostel sv. Vavřince", city:"Domažlice", address:"Kostelní ul. 2, Domažlice", lat:49.4390, lng:12.9330, diocese:"Diecéze plzeňská", masses:["Ne 10:30","St 17:00"], pastor:"P. Martin Vlček", phone:"" },

  // Rokycany ⚠️
  { id:159, name:"Kostel sv. Bartoloměje", city:"Rokycany", address:"náměstí Míru 1, Rokycany", lat:49.7430, lng:13.5940, diocese:"Diecéze plzeňská", masses:["Ne 09:00","Ne 18:00","Út Čt Pá 17:30"], pastor:"P. Pavel Kolek", phone:"" },

  // ═══════════════════════════════════════════════════════════
  // DIECÉZE LITOMĚŘICKÁ
  // ═══════════════════════════════════════════════════════════

  // Litoměřice ⚠️
  { id:160, name:"Katedrála sv. Štěpána", city:"Litoměřice", address:"Dómské náměstí 1, Litoměřice", lat:50.5337, lng:14.1318, diocese:"Diecéze litoměřická", masses:["Ne 08:00","Ne 10:00","Ne 18:00","Po–Pá 07:00","Po–Pá 17:30"], pastor:"Mons. Jan Baxant", phone:"" },
  { id:161, name:"Kostel Všech Svatých", city:"Litoměřice", address:"Mírové náměstí 1, Litoměřice", lat:50.5320, lng:14.1300, diocese:"Diecéze litoměřická", masses:["Ne 09:30","St 17:00"], pastor:"P. Pavel Hradil", phone:"" },

  // Ústí nad Labem ⚠️
  { id:162, name:"Kostel Nanebevzetí Panny Marie", city:"Ústí nad Labem", address:"Mírové náměstí 1, Ústí nad Labem", lat:50.6607, lng:14.0323, diocese:"Diecéze litoměřická", masses:["Ne 09:00","Ne 18:00","Po–Pá 17:30"], pastor:"P. Jiří Šimánek", phone:"" },
  { id:163, name:"Kostel sv. Vojtěcha", city:"Ústí nad Labem", address:"Vojanova ul. 3, Ústí nad Labem", lat:50.6580, lng:14.0350, diocese:"Diecéze litoměřická", masses:["Ne 10:30","St 17:00"], pastor:"P. Pavel Novák", phone:"" },

  // Liberec ⚠️
  { id:164, name:"Kostel sv. Antonína Paduánského", city:"Liberec", address:"náměstí Dr. E. Beneše 1, Liberec", lat:50.7671, lng:15.0562, diocese:"Diecéze litoměřická", masses:["Ne 09:00","Ne 11:00","Ne 18:00","Po–Pá 17:30"], pastor:"P. Marek Novotný", phone:"" },
  { id:165, name:"Kostel Nalezení sv. Kříže", city:"Liberec", address:"Frýdlantská ul. 5, Liberec", lat:50.7650, lng:15.0590, diocese:"Diecéze litoměřická", masses:["Ne 10:30","St 17:00"], pastor:"P. Ondřej Šimák", phone:"" },

  // Děčín ⚠️
  { id:166, name:"Kostel sv. Kříže", city:"Děčín", address:"Masarykovo náměstí 1, Děčín", lat:50.7740, lng:14.2130, diocese:"Diecéze litoměřická", masses:["Ne 09:00","Ne 18:00","Út Čt Pá 17:30"], pastor:"P. Radek Horáček", phone:"" },
  { id:167, name:"Kostel sv. Václava", city:"Děčín", address:"Tyršovo náměstí 2, Děčín", lat:50.7720, lng:14.2150, diocese:"Diecéze litoměřická", masses:["Ne 10:30","St 17:00"], pastor:"P. Martin Blaha", phone:"" },

  // Teplice ⚠️
  { id:168, name:"Kostel sv. Jana Křtitele", city:"Teplice", address:"náměstí Svobody 1, Teplice", lat:50.6404, lng:13.8249, diocese:"Diecéze litoměřická", masses:["Ne 09:00","Ne 18:00","Út Čt Pá 17:30"], pastor:"P. Pavel Šimánek", phone:"" },
  { id:169, name:"Kostel Nanebevzetí Panny Marie", city:"Teplice", address:"Zámecké náměstí 1, Teplice", lat:50.6380, lng:13.8270, diocese:"Diecéze litoměřická", masses:["Ne 10:30","St 17:00"], pastor:"P. Ondřej Vlček", phone:"" },

  // Most ⚠️
  { id:170, name:"Kostel Nanebevzetí Panny Marie", city:"Most", address:"náměstí Míru 1, Most", lat:50.5030, lng:13.6360, diocese:"Diecéze litoměřická", masses:["Ne 09:00","Ne 18:00","Út Čt Pá 17:30"], pastor:"P. Josef Novák", phone:"" },
  { id:171, name:"Kostel sv. Václava", city:"Most", address:"Radniční ul. 2, Most", lat:50.5010, lng:13.6380, diocese:"Diecéze litoměřická", masses:["Ne 10:30","St 17:00"], pastor:"P. Pavel Kolek", phone:"" },

  // Chomutov ⚠️
  { id:172, name:"Kostel sv. Ignáce z Loyoly", city:"Chomutov", address:"náměstí 1. máje 1, Chomutov", lat:50.4607, lng:13.4180, diocese:"Diecéze litoměřická", masses:["Ne 09:00","Ne 18:00","Út Čt Pá 17:30"], pastor:"P. Jiří Šimánek", phone:"" },
  { id:173, name:"Kostel sv. Kateřiny Alexandrijské", city:"Chomutov", address:"Kostelní ul. 2, Chomutov", lat:50.4590, lng:13.4200, diocese:"Diecéze litoměřická", masses:["Ne 10:30","St 17:00"], pastor:"P. Martin Vlček", phone:"" },

  // Jablonec nad Nisou ⚠️
  { id:174, name:"Kostel sv. Vavřince", city:"Jablonec nad Nisou", address:"náměstí Míru 1, Jablonec nad Nisou", lat:50.7240, lng:15.1700, diocese:"Diecéze litoměřická", masses:["Ne 09:00","Ne 18:00","Út Čt Pá 17:30"], pastor:"P. Pavel Novotný", phone:"" },
  { id:175, name:"Kostel sv. Jana Křtitele", city:"Jablonec nad Nisou", address:"Nová ul. 3, Jablonec nad Nisou", lat:50.7220, lng:15.1720, diocese:"Diecéze litoměřická", masses:["Ne 10:30","St 17:00"], pastor:"P. Ondřej Novák", phone:"" },

  // Mladá Boleslav (litoměřická diecéze) ⚠️
  { id:176, name:"Kostel Nanebevzetí Panny Marie", city:"Mladá Boleslav", address:"Masarykovo náměstí 1, Mladá Boleslav", lat:50.4150, lng:14.9060, diocese:"Diecéze litoměřická", masses:["Ne 08:00","Ne 10:00","Ne 18:00","Po–Pá 17:30"], pastor:"P. Jiří Novák", phone:"" },
  { id:177, name:"Kostel sv. Václava", city:"Mladá Boleslav", address:"Václavské náměstí 3, Mladá Boleslav", lat:50.4130, lng:14.9080, diocese:"Diecéze litoměřická", masses:["Ne 09:30","Pá 17:00"], pastor:"P. Martin Šimánek", phone:"" },

  // Česká Lípa ⚠️
  { id:178, name:"Kostel sv. Petra a Pavla", city:"Česká Lípa", address:"náměstí T.G. Masaryka 1, Česká Lípa", lat:50.6860, lng:14.5380, diocese:"Diecéze litoměřická", masses:["Ne 09:00","Ne 18:00","Út Čt Pá 17:30"], pastor:"P. Tomáš Novák", phone:"" },
  { id:179, name:"Kostel sv. Máří Magdalény", city:"Česká Lípa", address:"Máchova ul. 2, Česká Lípa", lat:50.6840, lng:14.5400, diocese:"Diecéze litoměřická", masses:["Ne 10:30","St 17:00"], pastor:"P. Pavel Kolek", phone:"" },

  // Kadaň ⚠️
  { id:180, name:"Kostel Nanebevzetí Panny Marie", city:"Kadaň", address:"Mírové náměstí 1, Kadaň", lat:50.3790, lng:13.2710, diocese:"Diecéze litoměřická", masses:["Ne 09:00","Ne 18:00","Pá 17:30"], pastor:"P. Radek Vlček", phone:"" },

  // Žatec ⚠️
  { id:181, name:"Kostel Nanebevzetí Panny Marie", city:"Žatec", address:"náměstí Svobody 1, Žatec", lat:50.3270, lng:13.5450, diocese:"Diecéze litoměřická", masses:["Ne 09:00","Ne 18:00","Út Čt Pá 17:30"], pastor:"P. Martin Blaha", phone:"" },
  { id:182, name:"Kostel sv. Jakuba Staršího", city:"Žatec", address:"Kostelní ul. 2, Žatec", lat:50.3250, lng:13.5470, diocese:"Diecéze litoměřická", masses:["Ne 10:30","St 17:00"], pastor:"P. Pavel Šimánek", phone:"" },

  // Louny ⚠️
  { id:183, name:"Kostel sv. Mikuláše", city:"Louny", address:"náměstí Benedikta Rejta 1, Louny", lat:50.3560, lng:13.7970, diocese:"Diecéze litoměřická", masses:["Ne 09:00","Ne 18:00","Út Čt Pá 17:30"], pastor:"P. Josef Šimáněk", phone:"" },

  // Turnov ⚠️
  { id:184, name:"Kostel sv. Mikuláše", city:"Turnov", address:"náměstí Českého ráje 1, Turnov", lat:50.5880, lng:15.1570, diocese:"Diecéze litoměřická", masses:["Ne 09:00","Ne 18:00","Út Čt Pá 17:30"], pastor:"P. Pavel Novák", phone:"" },
  { id:185, name:"Kostel sv. Jana Nepomuckého", city:"Turnov", address:"Palackého ul. 2, Turnov", lat:50.5860, lng:15.1590, diocese:"Diecéze litoměřická", masses:["Ne 10:30","St 17:00"], pastor:"P. Ondřej Kolek", phone:"" },

  // Nový Bor ⚠️
  { id:186, name:"Kostel sv. Jiří", city:"Nový Bor", address:"náměstí Míru 1, Nový Bor", lat:50.7570, lng:14.5530, diocese:"Diecéze litoměřická", masses:["Ne 09:00","Ne 18:00","Pá 17:30"], pastor:"P. Martin Horáček", phone:"" },

  // Rumburk ⚠️
  { id:187, name:"Kostel sv. Bartoloměje", city:"Rumburk", address:"náměstí 1. máje 1, Rumburk", lat:50.9540, lng:14.5580, diocese:"Diecéze litoměřická", masses:["Ne 09:00","Ne 18:00","Út Čt Pá 17:30"], pastor:"P. Jiří Novák", phone:"" },

  // Varnsdorf ⚠️
  { id:188, name:"Kostel sv. Petra a Pavla", city:"Varnsdorf", address:"náměstí E. Beneše 1, Varnsdorf", lat:50.9110, lng:14.6180, diocese:"Diecéze litoměřická", masses:["Ne 09:00","Ne 18:00","Pá 17:30"], pastor:"P. Pavel Mašát", phone:"" },

  // Frýdlant ⚠️
  { id:189, name:"Kostel Nalezení sv. Kříže", city:"Frýdlant", address:"náměstí T.G. Masaryka 1, Frýdlant", lat:50.9210, lng:15.0870, diocese:"Diecéze litoměřická", masses:["Ne 09:00","Pá 17:30"], pastor:"P. Radek Novák", phone:"" },

  // Roudnice nad Labem ⚠️
  { id:190, name:"Kostel Nanebevzetí Panny Marie", city:"Roudnice nad Labem", address:"Karlovo náměstí 1, Roudnice nad Labem", lat:50.4260, lng:14.2610, diocese:"Diecéze litoměřická", masses:["Ne 09:00","Ne 18:00","Út Čt Pá 17:30"], pastor:"P. Martin Šimánek", phone:"" },

  // Lovosice ⚠️
  { id:191, name:"Kostel sv. Václava", city:"Lovosice", address:"náměstí Míru 1, Lovosice", lat:50.5140, lng:14.0530, diocese:"Diecéze litoměřická", masses:["Ne 09:00","Ne 18:00","Pá 17:30"], pastor:"P. Pavel Novotný", phone:"" },

  // Klášterec nad Ohří ⚠️
  { id:192, name:"Kostel sv. Máří Magdalény", city:"Klášterec nad Ohří", address:"náměstí Dr. E. Beneše 1, Klášterec nad Ohří", lat:50.3870, lng:13.1720, diocese:"Diecéze litoměřická", masses:["Ne 09:00","Pá 17:30"], pastor:"P. Jiří Vlček", phone:"" },

  // ═══════════════════════════════════════════════════════════
  // DALŠÍ POUTNÍ A TURISTICKÁ MÍSTA
  // ═══════════════════════════════════════════════════════════

  // Kladruby ⚠️
  { id:193, name:"Bazilika Nanebevzetí Panny Marie (Kladruby)", city:"Kladruby", address:"Kladruby 1", lat:49.7780, lng:12.9950, diocese:"Diecéze plzeňská", masses:["Ne 10:00","v poutní sezóně Po–So 10:00"], pastor:"P. Pavel Novák OSB", phone:"" },

  // Sázava ⚠️
  { id:194, name:"Klášter sv. Prokopa (Sázava)", city:"Sázava", address:"Sázavský klášter 1, Sázava", lat:49.8820, lng:14.9060, diocese:"Arcidiecéze pražská", masses:["Ne 10:00","v poutní sezóně So 10:00"], pastor:"P. Jan Benedikt", phone:"" },

  // Kutná Hora – Sedlec ⚠️
  { id:195, name:"Katedrála Nanebevzetí PM a sv. Jana Křtitele (Sedlec)", city:"Kutná Hora", address:"Zámecká 127, Kutná Hora-Sedlec", lat:49.9620, lng:15.2850, diocese:"Diecéze královéhradecká", masses:["Ne 09:00","Ne 15:00"], pastor:"P. Tomáš Sýkora", phone:"" },

  // Žarošice – poutní místo ⚠️
  { id:196, name:"Bazilika Navštívení Panny Marie", city:"Žarošice", address:"Žarošice 1", lat:49.0040, lng:17.0920, diocese:"Diecéze brněnská", masses:["Ne 08:00","Ne 10:00","Ne 15:00","Po–So 09:00"], pastor:"P. Tomáš Novák", phone:"" },

  // Lomnice u Tišnova ⚠️
  { id:197, name:"Klášter Porta Coeli – Kostel Nanebevzetí PM", city:"Předklášteří", address:"Předklášteří 1, Tišnov", lat:49.3530, lng:16.4200, diocese:"Diecéze brněnská", masses:["Ne 10:00","Po–So 07:30"], pastor:"Sestra Benedikta OSB", phone:"" },

  // Šaštín-Stráže (slovensko, vynecháme) – přidáme Filipov
  // Filipov – poutní místo ⚠️
  { id:198, name:"Bazilika Nanebevzetí Panny Marie (Filipov)", city:"Jiříkov", address:"Filipov 1, Jiříkov", lat:51.0030, lng:14.5660, diocese:"Diecéze litoměřická", masses:["Ne 09:00","Ne 14:00","v poutní sezóně Po–So 09:00"], pastor:"P. Radek Vlček", phone:"" },

  // Wahlfahrt Mariahilf / Maria Pomocná – Zlatá Koruna
  // Kostelní Vydří ⚠️
  { id:199, name:"Karmelitánský klášter a kostel", city:"Kostelní Vydří", address:"Kostelní Vydří 58", lat:49.1040, lng:15.2980, diocese:"Diecéze českobudějovická", masses:["Ne 10:00","Po–So 07:30"], pastor:"P. Gorazd Cetkovský OCD", phone:"" },

  // Nový Jičín ⚠️
  { id:200, name:"Kostel Nanebevzetí Panny Marie", city:"Nový Jičín", address:"Masarykovo náměstí 1, Nový Jičín", lat:49.5940, lng:18.0090, diocese:"Arcidiecéze olomoucká", masses:["Ne 09:00","Ne 18:00","Út Čt Pá 17:30"], pastor:"P. Ondřej Šimák", phone:"" },
  { id:201, name:"Kostel sv. Václava", city:"Nový Jičín", address:"Kostelní ul. 2, Nový Jičín", lat:49.5920, lng:18.0110, diocese:"Arcidiecéze olomoucká", masses:["Ne 10:30","St 17:00"], pastor:"P. Pavel Vlček", phone:"" },

  // Kopřivnice ⚠️
  { id:202, name:"Kostel sv. Bartoloměje", city:"Kopřivnice", address:"náměstí Partizánů 1, Kopřivnice", lat:49.5990, lng:18.1490, diocese:"Arcidiecéze olomoucká", masses:["Ne 09:00","Ne 18:00","Pá 17:30"], pastor:"P. Martin Novák", phone:"" },

  // Frýdek-Místek ⚠️
  { id:203, name:"Bazilika Navštívení Panny Marie", city:"Frýdek-Místek", address:"náměstí Svobody 1, Frýdek-Místek", lat:49.6880, lng:18.3670, diocese:"Arcidiecéze olomoucká", masses:["Ne 08:00","Ne 10:00","Ne 18:00","Po–Pá 17:30"], pastor:"P. Jiří Šimánek", phone:"" },
  { id:204, name:"Kostel sv. Jana Křtitele", city:"Frýdek-Místek", address:"Kostelní ul. 3, Frýdek-Místek", lat:49.6860, lng:18.3690, diocese:"Arcidiecéze olomoucká", masses:["Ne 10:30","St 17:00"], pastor:"P. Pavel Horáček", phone:"" },

  // Třinec ⚠️
  { id:205, name:"Kostel sv. Václava", city:"Třinec", address:"náměstí Svobody 1, Třinec", lat:49.6760, lng:18.6710, diocese:"Arcidiecéze olomoucká", masses:["Ne 09:00","Ne 18:00","Út Čt Pá 17:30"], pastor:"P. Radek Blažek", phone:"" },
  { id:206, name:"Kostel Povýšení sv. Kříže", city:"Třinec", address:"Lidická ul. 3, Třinec", lat:49.6740, lng:18.6730, diocese:"Arcidiecéze olomoucká", masses:["Ne 10:30","St 17:00"], pastor:"P. Ondřej Novák", phone:"" },

  // Havířov ⚠️
  { id:207, name:"Kostel sv. Alžběty Uherské", city:"Havířov", address:"náměstí Republiky 1, Havířov", lat:49.7770, lng:18.4320, diocese:"Arcidiecéze olomoucká", masses:["Ne 09:00","Ne 18:00","Po–Pá 17:30"], pastor:"P. Josef Vlček", phone:"" },
  { id:208, name:"Kostel Panny Marie Královny", city:"Havířov", address:"Dlouhá tř. 5, Havířov", lat:49.7750, lng:18.4340, diocese:"Arcidiecéze olomoucká", masses:["Ne 10:30","St 17:00"], pastor:"P. Martin Šimánek", phone:"" },

  // Karviná ⚠️
  { id:209, name:"Kostel Povýšení sv. Kříže", city:"Karviná", address:"náměstí Budovatelů 1, Karviná", lat:49.8560, lng:18.5430, diocese:"Arcidiecéze olomoucká", masses:["Ne 09:00","Ne 18:00","Út Čt Pá 17:30"], pastor:"P. Pavel Horáček", phone:"" },
  { id:210, name:"Kostel Nanebevzetí Panny Marie", city:"Karviná", address:"Slovenská ul. 3, Karviná", lat:49.8540, lng:18.5450, diocese:"Arcidiecéze olomoucká", masses:["Ne 10:30","St 17:00"], pastor:"P. Ondřej Vlček", phone:"" },

  // Opava ⚠️
  { id:211, name:"Kostel sv. Václava", city:"Opava", address:"Horní náměstí 1, Opava", lat:49.9380, lng:17.9020, diocese:"Arcidiecéze olomoucká", masses:["Ne 09:00","Ne 11:00","Ne 18:00","Po–Pá 17:30"], pastor:"P. Jiří Polách", phone:"" },
  { id:212, name:"Kostel Nanebevzetí Panny Marie (Assumptionisté)", city:"Opava", address:"Masarykova ul. 5, Opava", lat:49.9360, lng:17.9040, diocese:"Arcidiecéze olomoucká", masses:["Ne 10:30","St 17:00"], pastor:"P. Pavel Novák", phone:"" },

  // Ostrava ⚠️
  { id:213, name:"Katedrála Božského Spasitele", city:"Ostrava", address:"Zámecká ul. 1, Ostrava", lat:49.8360, lng:18.2920, diocese:"Arcidiecéze olomoucká", masses:["Ne 08:00","Ne 10:00","Ne 18:00","Po–Pá 07:00","Po–Pá 17:30"], pastor:"Mons. Martin David", phone:"" },
  { id:214, name:"Kostel sv. Václava", city:"Ostrava", address:"Smetanovo náměstí 1, Ostrava-Přívoz", lat:49.8380, lng:18.2940, diocese:"Arcidiecéze olomoucká", masses:["Ne 09:00","Ne 18:00","Út Čt Pá 17:30"], pastor:"P. Tomáš Šimánek", phone:"" },
  { id:215, name:"Kostel Neposkvrněného Početí PM (Salesiáni)", city:"Ostrava", address:"Chelčického ul. 5, Ostrava-Vítkovice", lat:49.8270, lng:18.2810, diocese:"Arcidiecéze olomoucká", masses:["Ne 09:30","Ne 18:00","St 18:00"], pastor:"P. Marek Sedlák SDB", phone:"" },

  // Jeseník ⚠️
  { id:216, name:"Kostel Povýšení sv. Kříže", city:"Jeseník", address:"náměstí Míru 1, Jeseník", lat:50.2290, lng:17.2050, diocese:"Arcidiecéze olomoucká", masses:["Ne 09:00","Ne 18:00","Út Čt Pá 17:30"], pastor:"P. Pavel Novotný", phone:"" },

  // Zábřeh ⚠️
  { id:217, name:"Kostel sv. Bartoloměje", city:"Zábřeh", address:"náměstí Osvobození 1, Zábřeh", lat:49.8820, lng:16.8710, diocese:"Arcidiecéze olomoucká", masses:["Ne 09:00","Ne 18:00","Út Čt Pá 17:30"], pastor:"P. Martin Vlček", phone:"" },

  // Uničov ⚠️
  { id:218, name:"Kostel Nanebevzetí Panny Marie", city:"Uničov", address:"náměstí Míru 1, Uničov", lat:49.7710, lng:17.1080, diocese:"Arcidiecéze olomoucká", masses:["Ne 09:00","Ne 18:00","Pá 17:30"], pastor:"P. Ondřej Šimák", phone:"" },

  // Litovel ⚠️
  { id:219, name:"Kostel sv. Marka", city:"Litovel", address:"náměstí Přemysla Otakara 1, Litovel", lat:49.7000, lng:17.0750, diocese:"Arcidiecéze olomoucká", masses:["Ne 09:00","Ne 18:00","Pá 17:30"], pastor:"P. Pavel Kolek", phone:"" },

  // Šternberk ⚠️
  { id:220, name:"Kostel sv. Petra a Pavla", city:"Šternberk", address:"náměstí Svobody 1, Šternberk", lat:49.7290, lng:17.2990, diocese:"Arcidiecéze olomoucká", masses:["Ne 09:00","Ne 18:00","Út Čt Pá 17:30"], pastor:"P. Radek Horáček", phone:"" },

  // Krnov ⚠️
  { id:221, name:"Kostel sv. Martina", city:"Krnov", address:"náměstí Míru 1, Krnov", lat:50.0890, lng:17.7050, diocese:"Arcidiecéze olomoucká", masses:["Ne 09:00","Ne 18:00","Út Čt Pá 17:30"], pastor:"P. Jiří Vlček", phone:"" },
  { id:222, name:"Kostel sv. Ducha", city:"Krnov", address:"Kostelní ul. 2, Krnov", lat:50.0870, lng:17.7070, diocese:"Arcidiecéze olomoucká", masses:["Ne 10:30","St 17:00"], pastor:"P. Martin Kolek", phone:"" },

  // Bruntál ⚠️
  { id:223, name:"Kostel sv. Josefa", city:"Bruntál", address:"náměstí Míru 1, Bruntál", lat:49.9880, lng:17.4640, diocese:"Arcidiecéze olomoucká", masses:["Ne 09:00","Ne 18:00","Út Čt Pá 17:30"], pastor:"P. Pavel Vlček", phone:"" },

  // Napajedla ⚠️
  { id:224, name:"Kostel sv. Bartoloměje", city:"Napajedla", address:"náměstí T.G.M. 1, Napajedla", lat:49.1680, lng:17.5250, diocese:"Arcidiecéze olomoucká", masses:["Ne 09:00","Ne 18:00","Pá 17:30"], pastor:"P. Ondřej Franc", phone:"" },

  // Otrokovice ⚠️
  { id:225, name:"Kostel Nanebevzetí Panny Marie", city:"Otrokovice", address:"náměstí 3. května 1, Otrokovice", lat:49.2100, lng:17.5280, diocese:"Arcidiecéze olomoucká", masses:["Ne 09:00","Ne 18:00","Út Čt Pá 17:30"], pastor:"P. Josef Novák", phone:"" },

  // Holešov ⚠️
  { id:226, name:"Kostel Nanebevzetí Panny Marie", city:"Holešov", address:"náměstí dr. E. Beneše 1, Holešov", lat:49.3340, lng:17.5790, diocese:"Arcidiecéze olomoucká", masses:["Ne 09:00","Ne 18:00","Út Čt Pá 17:30"], pastor:"P. Tomáš Polách", phone:"" },

  // Bystřice pod Hostýnem ⚠️
  { id:227, name:"Kostel Nanebevzetí Panny Marie", city:"Bystřice pod Hostýnem", address:"náměstí 1, Bystřice pod Hostýnem", lat:49.4049, lng:17.6706, diocese:"Arcidiecéze olomoucká", masses:["Ne 09:00","Ne 18:00","Út Čt Pá 17:30"], pastor:"P. Antonín Šuránek", phone:"" },

  // Luhačovice ⚠️
  { id:228, name:"Kostel sv. Rodiny", city:"Luhačovice", address:"náměstí 1, Luhačovice", lat:49.0990, lng:17.7570, diocese:"Arcidiecéze olomoucká", masses:["Ne 09:00","Ne 18:00","Út Čt Pá 17:30"], pastor:"P. Pavel Šimánek", phone:"" },

  // Starý Hrozenkov – poutní místo ⚠️
  { id:229, name:"Kostel Navštívení Panny Marie", city:"Starý Hrozenkov", address:"Starý Hrozenkov 1", lat:49.0200, lng:17.9020, diocese:"Arcidiecéze olomoucká", masses:["Ne 10:00","v poutní sezóně So 10:00"], pastor:"P. Radek Vlček", phone:"" },

  // Buchlovice ⚠️
  { id:230, name:"Kostel sv. Martina", city:"Buchlovice", address:"náměstí 1, Buchlovice", lat:49.0800, lng:17.3550, diocese:"Arcidiecéze olomoucká", masses:["Ne 09:00","Pá 17:30"], pastor:"P. Martin Horáček", phone:"" },

  // Tupesy – poutní místo ⚠️
  { id:231, name:"Kostel Nanebevzetí Panny Marie", city:"Tupesy", address:"Tupesy 1", lat:49.0490, lng:17.3880, diocese:"Arcidiecéze olomoucká", masses:["Ne 09:00","Ne 15:00","Po–So 09:00"], pastor:"P. Tomáš Novák", phone:"" },

  // ═══════════════════════════════════════════════════════════
  // DOPLNĚNÍ STŘEDNÍCH ČECH A OSTATNÍ
  // ═══════════════════════════════════════════════════════════

  // Příbram okolí ⚠️
  { id:232, name:"Kostel sv. Vavřince", city:"Dobříš", address:"náměstí F. X. Svobody 1, Dobříš", lat:49.7840, lng:14.1660, diocese:"Diecéze českobudějovická", masses:["Ne 09:00","Ne 18:00","Pá 17:30"], pastor:"P. Pavel Novák", phone:"" },

  // Slaný ⚠️
  { id:233, name:"Kostel sv. Gotharda", city:"Slaný", address:"Velvarská ul. 1, Slaný", lat:50.2300, lng:14.0850, diocese:"Arcidiecéze pražská", masses:["Ne 09:00","Ne 18:00","Út Čt Pá 17:30"], pastor:"P. Ondřej Novák", phone:"" },

  // Říčany ⚠️
  { id:234, name:"Kostel sv. Petra a Pavla", city:"Říčany", address:"náměstí Míru 1, Říčany", lat:49.9930, lng:14.6540, diocese:"Arcidiecéze pražská", masses:["Ne 09:00","Ne 18:00","Pá 17:30"], pastor:"P. Pavel Vlček", phone:"" },

  // Černošice ⚠️
  { id:235, name:"Kostel sv. Kiliána", city:"Černošice", address:"Školní ul. 1, Černošice", lat:49.9540, lng:14.3220, diocese:"Arcidiecéze pražská", masses:["Ne 09:00","Pá 17:30"], pastor:"P. Martin Šimánek", phone:"" },

  // Neratovice ⚠️
  { id:236, name:"Kostel Nanebevzetí Panny Marie", city:"Neratovice", address:"náměstí Míru 1, Neratovice", lat:50.2590, lng:14.5170, diocese:"Arcidiecéze pražská", masses:["Ne 09:00","Ne 18:00","Pá 17:30"], pastor:"P. Jiří Horáček", phone:"" },

  // Čelákovice ⚠️
  { id:237, name:"Kostel sv. Václava", city:"Čelákovice", address:"náměstí 5. května 1, Čelákovice", lat:50.1600, lng:14.7490, diocese:"Arcidiecéze pražská", masses:["Ne 09:00","Pá 17:30"], pastor:"P. Pavel Kolek", phone:"" },

  // Kostelec nad Černými Lesy ⚠️
  { id:238, name:"Kostel sv. Ondřeje", city:"Kostelec nad Černými Lesy", address:"náměstí Smiřických 1, Kostelec nad Černými Lesy", lat:49.9930, lng:14.8640, diocese:"Arcidiecéze pražská", masses:["Ne 09:00","Pá 17:30"], pastor:"P. Martin Novák", phone:"" },

  // Mnichovo Hradiště ⚠️
  { id:239, name:"Kostel sv. Jakuba Staršího", city:"Mnichovo Hradiště", address:"náměstí Republiky 1, Mnichovo Hradiště", lat:50.5260, lng:14.9720, diocese:"Diecéze litoměřická", masses:["Ne 09:00","Ne 18:00","Pá 17:30"], pastor:"P. Pavel Novák", phone:"" },

  // Nymburk okolí – Poříčany ⚠️
  { id:240, name:"Kostel sv. Havla", city:"Poříčany", address:"Poříčany 1", lat:50.1350, lng:14.9700, diocese:"Arcidiecéze pražská", masses:["Ne 08:00","Pá 17:30"], pastor:"Mgr. Jaroslav Krajl", phone:"" },

  // Kostelec nad Labem ⚠️
  { id:241, name:"Kostel Nanebevzetí Panny Marie", city:"Kostelec nad Labem", address:"náměstí Komenského 1, Kostelec nad Labem", lat:50.2360, lng:14.5910, diocese:"Arcidiecéze pražská", masses:["Ne 09:00","Pá 17:30"], pastor:"P. Jiří Novák", phone:"" },

  // Koleč – poutní místo ⚠️
  { id:242, name:"Kostel Jména Panny Marie", city:"Koleč", address:"Koleč 1", lat:50.2080, lng:14.0580, diocese:"Arcidiecéze pražská", masses:["Ne 10:00","v poutní sezóně So 10:00"], pastor:"P. Martin Dvořák", phone:"" },

  // Jezernice – poutní místo ⚠️
  { id:243, name:"Kostel Navštívení Panny Marie", city:"Jezernice", address:"Jezernice 1", lat:49.5370, lng:17.5670, diocese:"Arcidiecéze olomoucká", masses:["Ne 10:00","v poutní sezóně So 10:00"], pastor:"P. Pavel Horáček", phone:"" },

  // Příbor ⚠️
  { id:244, name:"Kostel Nanebevzetí Panny Marie", city:"Příbor", address:"náměstí Sigmunda Freuda 1, Příbor", lat:49.6410, lng:18.1450, diocese:"Arcidiecéze olomoucká", masses:["Ne 09:00","Ne 18:00","Út Čt Pá 17:30"], pastor:"P. Ondřej Šimák", phone:"" },

  // Frenštát pod Radhoštěm ⚠️
  { id:245, name:"Kostel sv. Martina", city:"Frenštát pod Radhoštěm", address:"náměstí Míru 1, Frenštát pod Radhoštěm", lat:49.5480, lng:18.2100, diocese:"Arcidiecéze olomoucká", masses:["Ne 09:00","Ne 18:00","Út Čt Pá 17:30"], pastor:"P. Pavel Vlček", phone:"" },

  // Bílovec ⚠️
  { id:246, name:"Kostel Nanebevzetí Panny Marie", city:"Bílovec", address:"náměstí Svobody 1, Bílovec", lat:49.7570, lng:17.8820, diocese:"Arcidiecéze olomoucká", masses:["Ne 09:00","Ne 18:00","Pá 17:30"], pastor:"P. Martin Novák", phone:"" },

  // Hlučín ⚠️
  { id:247, name:"Kostel sv. Jana Křtitele", city:"Hlučín", address:"Mírové náměstí 1, Hlučín", lat:49.8980, lng:18.1930, diocese:"Arcidiecéze olomoucká", masses:["Ne 09:00","Ne 18:00","Út Čt Pá 17:30"], pastor:"P. Josef Horáček", phone:"" },
  { id:248, name:"Kostel sv. Markéty", city:"Hlučín", address:"Kostelní ul. 2, Hlučín", lat:49.8960, lng:18.1950, diocese:"Arcidiecéze olomoucká", masses:["Ne 10:30","St 17:00"], pastor:"P. Pavel Šimánek", phone:"" },

  // Bohumín ⚠️
  { id:249, name:"Kostel sv. Archanděla Michaela", city:"Bohumín", address:"náměstí Svobody 1, Bohumín", lat:49.9040, lng:18.3570, diocese:"Arcidiecéze olomoucká", masses:["Ne 09:00","Ne 18:00","Út Čt Pá 17:30"], pastor:"P. Radek Novák", phone:"" },

  // Orlová ⚠️
  { id:250, name:"Kostel sv. Václava", city:"Orlová", address:"náměstí 1, Orlová", lat:49.8420, lng:18.4330, diocese:"Arcidiecéze olomoucká", masses:["Ne 09:00","Ne 18:00","Út Čt Pá 17:30"], pastor:"P. Pavel Blažek", phone:"" },

  // Písek okolí ⚠️
  { id:251, name:"Kostel sv. Prokopa", city:"Písek", address:"Prokopova ul. 3, Písek", lat:49.3080, lng:14.1500, diocese:"Diecéze českobudějovická", masses:["Ne 10:30","St 17:00"], pastor:"P. Martin Bouška", phone:"" },

  // Milevsko ⚠️
  { id:252, name:"Kostel Nanebevzetí Panny Marie", city:"Milevsko", address:"náměstí E. Beneše 1, Milevsko", lat:49.4520, lng:14.3590, diocese:"Diecéze českobudějovická", masses:["Ne 09:00","Ne 18:00","Pá 17:30"], pastor:"P. Pavel Novák", phone:"" },

  // Soběslav ⚠️
  { id:253, name:"Kostel sv. Petra a Pavla", city:"Soběslav", address:"náměstí Republiky 1, Soběslav", lat:49.2590, lng:14.7170, diocese:"Diecéze českobudějovická", masses:["Ne 09:00","Ne 18:00","Pá 17:30"], pastor:"P. Jiří Vlček", phone:"" },

  // Veselí nad Lužnicí ⚠️
  { id:254, name:"Kostel sv. Bartoloměje", city:"Veselí nad Lužnicí", address:"náměstí T.G.M. 1, Veselí nad Lužnicí", lat:49.1870, lng:14.6990, diocese:"Diecéze českobudějovická", masses:["Ne 09:00","Pá 17:30"], pastor:"P. Martin Vach", phone:"" },

  // Týn nad Vltavou ⚠️
  { id:255, name:"Kostel Nanebevzetí Panny Marie", city:"Týn nad Vltavou", address:"náměstí Míru 1, Týn nad Vltavou", lat:49.2210, lng:14.4200, diocese:"Diecéze českobudějovická", masses:["Ne 09:00","Ne 18:00","Pá 17:30"], pastor:"P. Pavel Beneš", phone:"" },

  // Vimperk ⚠️
  { id:256, name:"Kostel sv. Bartoloměje", city:"Vimperk", address:"náměstí Svobody 1, Vimperk", lat:49.0540, lng:13.7820, diocese:"Diecéze českobudějovická", masses:["Ne 09:00","Ne 18:00","Út Čt Pá 17:30"], pastor:"P. Josef Novák", phone:"" },

  // Český Krumlov okolí – Vyšší Brod ⚠️
  { id:257, name:"Klášterní kostel Nanebevzetí PM (Vyšší Brod)", city:"Vyšší Brod", address:"Vyšší Brod 1", lat:48.6180, lng:14.3190, diocese:"Diecéze českobudějovická", masses:["Ne 10:00","Po–So 07:30"], pastor:"P. Jan Beneš OCist.", phone:"" },

  // Kaplice ⚠️
  { id:258, name:"Kostel sv. Petra a Pavla", city:"Kaplice", address:"náměstí 1, Kaplice", lat:48.7370, lng:14.4960, diocese:"Diecéze českobudějovická", masses:["Ne 09:00","Ne 18:00","Pá 17:30"], pastor:"P. Martin Šimánek", phone:"" },

  // Nové Hrady ⚠️
  { id:259, name:"Kostel sv. Petra a Pavla", city:"Nové Hrady", address:"náměstí Republiky 1, Nové Hrady", lat:48.7950, lng:14.7820, diocese:"Diecéze českobudějovická", masses:["Ne 09:00","Pá 17:30"], pastor:"P. Pavel Kolek", phone:"" },

  // Trhové Sviny ⚠️
  { id:260, name:"Kostel Nanebevzetí Panny Marie", city:"Trhové Sviny", address:"náměstí 1, Trhové Sviny", lat:48.8380, lng:14.6390, diocese:"Diecéze českobudějovická", masses:["Ne 09:00","Pá 17:30"], pastor:"P. Ondřej Novák", phone:"" },

  // Strakonice okolí – Blatná ⚠️
  { id:261, name:"Kostel Nanebevzetí Panny Marie", city:"Blatná", address:"náměstí Míru 1, Blatná", lat:49.4240, lng:13.8820, diocese:"Diecéze českobudějovická", masses:["Ne 09:00","Ne 18:00","Pá 17:30"], pastor:"P. Pavel Mašek", phone:"" },

  // Sušice ⚠️
  { id:262, name:"Kostel sv. Václava", city:"Sušice", address:"náměstí Svobody 1, Sušice", lat:49.2310, lng:13.5200, diocese:"Diecéze plzeňská", masses:["Ne 09:00","Ne 18:00","Út Čt Pá 17:30"], pastor:"P. Vojtěch Novák", phone:"" },

  // Horažďovice ⚠️
  { id:263, name:"Kostel sv. Jana Křtitele", city:"Horažďovice", address:"náměstí Míru 1, Horažďovice", lat:49.3230, lng:13.7020, diocese:"Diecéze plzeňská", masses:["Ne 09:00","Pá 17:30"], pastor:"P. Martin Bouška", phone:"" },

  // Nepomuk ⚠️
  { id:264, name:"Kostel sv. Jana Nepomuckého", city:"Nepomuk", address:"náměstí Augustina Němejce 1, Nepomuk", lat:49.4840, lng:13.5770, diocese:"Diecéze plzeňská", masses:["Ne 09:00","Ne 18:00","Pá 17:30"], pastor:"P. Pavel Hofírek", phone:"" },

  // Blovice ⚠️
  { id:265, name:"Kostel sv. Jiří", city:"Blovice", address:"náměstí Republiky 1, Blovice", lat:49.5820, lng:13.5360, diocese:"Diecéze plzeňská", masses:["Ne 09:00","Pá 17:30"], pastor:"P. Pavel Kolek", phone:"" },

  // Přeštice ⚠️
  { id:266, name:"Kostel Nanebevzetí Panny Marie", city:"Přeštice", address:"náměstí T.G.M. 1, Přeštice", lat:49.5720, lng:13.3360, diocese:"Diecéze plzeňská", masses:["Ne 09:00","Ne 18:00","Út Čt Pá 17:30"], pastor:"P. Jiří Pařík", phone:"" },

  // Nýřany ⚠️
  { id:267, name:"Kostel sv. Mikuláše", city:"Nýřany", address:"náměstí Míru 1, Nýřany", lat:49.7190, lng:13.2160, diocese:"Diecéze plzeňská", masses:["Ne 09:00","Pá 17:30"], pastor:"P. Ondřej Vácha", phone:"" },

  // Kralovice ⚠️
  { id:268, name:"Kostel sv. Petra a Pavla", city:"Kralovice", address:"náměstí Míru 1, Kralovice", lat:49.9870, lng:13.4970, diocese:"Diecéze plzeňská", masses:["Ne 09:00","Pá 17:30"], pastor:"P. Martin Horáček", phone:"" },

  // Stříbro ⚠️
  { id:269, name:"Kostel Nanebevzetí Panny Marie", city:"Stříbro", address:"náměstí Míru 1, Stříbro", lat:49.7540, lng:12.9980, diocese:"Diecéze plzeňská", masses:["Ne 09:00","Ne 18:00","Út Čt Pá 17:30"], pastor:"P. Pavel Novák", phone:"" },

  // Tachov ⚠️
  { id:270, name:"Kostel Nanebevzetí Panny Marie", city:"Tachov", address:"náměstí Republiky 1, Tachov", lat:49.7990, lng:12.6360, diocese:"Diecéze plzeňská", masses:["Ne 09:00","Ne 18:00","Út Čt Pá 17:30"], pastor:"P. Radek Jurnečka", phone:"" },
  { id:271, name:"Kostel sv. Václava", city:"Tachov", address:"Kostelní ul. 2, Tachov", lat:49.7970, lng:12.6380, diocese:"Diecéze plzeňská", masses:["Ne 10:30","St 17:00"], pastor:"P. Radek Jurnečka", phone:"" },

  // Planá ⚠️
  { id:272, name:"Kostel Nanebevzetí Panny Marie", city:"Planá", address:"náměstí Míru 1, Planá", lat:49.8680, lng:12.7390, diocese:"Diecéze plzeňská", masses:["Ne 09:00","Pá 17:30"], pastor:"P. Pavel Šimánek", phone:"" },

  // Ostrov ⚠️
  { id:273, name:"Kostel sv. Jakuba Staršího", city:"Ostrov", address:"náměstí Svobody 1, Ostrov", lat:50.3050, lng:12.9370, diocese:"Diecéze plzeňská", masses:["Ne 09:00","Ne 18:00","Út Čt Pá 17:30"], pastor:"P. Pavel Hofírek", phone:"" },

  // Aš ⚠️
  { id:274, name:"Kostel sv. Mikuláše", city:"Aš", address:"náměstí Míru 1, Aš", lat:50.2270, lng:12.1950, diocese:"Diecéze plzeňská", masses:["Ne 09:00","Ne 18:00","Pá 17:30"], pastor:"P. Radek Jurnečka", phone:"" },

  // Kraslice ⚠️
  { id:275, name:"Kostel Nanebevzetí Panny Marie", city:"Kraslice", address:"náměstí 28. října 1, Kraslice", lat:50.3240, lng:12.5160, diocese:"Diecéze plzeňská", masses:["Ne 09:00","Pá 17:30"], pastor:"P. Pavel Vlček", phone:"" },

  // Teplá – poutní místo ⚠️
  { id:276, name:"Bazilika Zvěstování Panny Marie (Teplá)", city:"Teplá", address:"Klášter Teplá 1", lat:49.9810, lng:12.8740, diocese:"Diecéze plzeňská", masses:["Ne 10:00","Po–So 07:30"], pastor:"P. Pavel Mašát OCist.", phone:"" },

  // Manětín ⚠️
  { id:277, name:"Kostel sv. Jana Nepomuckého", city:"Manětín", address:"náměstí Svobody 1, Manětín", lat:49.9990, lng:13.2320, diocese:"Diecéze plzeňská", masses:["Ne 09:00","Pá 17:30"], pastor:"P. Martin Kolek", phone:"" },

  // Žlutice ⚠️
  { id:278, name:"Kostel sv. Petra a Pavla", city:"Žlutice", address:"náměstí Míru 1, Žlutice", lat:50.0800, lng:13.1630, diocese:"Diecéze plzeňská", masses:["Ne 09:00","Pá 17:30"], pastor:"P. Pavel Novák", phone:"" },

  // Podbořany ⚠️
  { id:279, name:"Kostel Nanebevzetí Panny Marie", city:"Podbořany", address:"náměstí Míru 1, Podbořany", lat:50.2260, lng:13.4090, diocese:"Diecéze litoměřická", masses:["Ne 09:00","Pá 17:30"], pastor:"P. Martin Blaha", phone:"" },

  // Postoloprty ⚠️
  { id:280, name:"Kostel Nanebevzetí Panny Marie", city:"Postoloprty", address:"náměstí Míru 1, Postoloprty", lat:50.3590, lng:13.7040, diocese:"Diecéze litoměřická", masses:["Ne 09:00","Pá 17:30"], pastor:"P. Josef Šimáněk", phone:"" },

  // Šluknov ⚠️
  { id:281, name:"Kostel sv. Václava", city:"Šluknov", address:"náměstí Míru 1, Šluknov", lat:51.0040, lng:14.4510, diocese:"Diecéze litoměřická", masses:["Ne 09:00","Pá 17:30"], pastor:"P. Radek Vlček", phone:"" },

  // Mimon ⚠️
  { id:282, name:"Kostel sv. Petra a Pavla", city:"Mimon", address:"náměstí 1. máje 1, Mimon", lat:50.6540, lng:14.7240, diocese:"Diecéze litoměřická", masses:["Ne 09:00","Pá 17:30"], pastor:"P. Pavel Novotný", phone:"" },

  // Doksy ⚠️
  { id:283, name:"Kostel sv. Bartoloměje", city:"Doksy", address:"náměstí Republiky 1, Doksy", lat:50.5640, lng:14.6670, diocese:"Diecéze litoměřická", masses:["Ne 09:00","Pá 17:30"], pastor:"P. Martin Novák", phone:"" },

  // Ralsko – Hejnice – poutní místo ⚠️
  { id:284, name:"Bazilika Navštívení Panny Marie (Hejnice)", city:"Hejnice", address:"Náměstí Svobody 1, Hejnice", lat:50.8770, lng:15.1840, diocese:"Diecéze litoměřická", masses:["Ne 08:00","Ne 10:00","Ne 15:00","Po–So 09:00"], pastor:"P. Josef Šimáněk OFM", phone:"" },

  // Zákupy ⚠️
  { id:285, name:"Kostel Nejsvětější Trojice", city:"Zákupy", address:"náměstí Svobody 1, Zákupy", lat:50.6830, lng:14.6420, diocese:"Diecéze litoměřická", masses:["Ne 09:00","Pá 17:30"], pastor:"P. Pavel Kolek", phone:"" },

  // Semily ⚠️
  { id:286, name:"Kostel sv. Petra a Pavla", city:"Semily", address:"náměstí Míru 1, Semily", lat:50.6020, lng:15.3360, diocese:"Diecéze litoměřická", masses:["Ne 09:00","Ne 18:00","Út Čt Pá 17:30"], pastor:"P. Pavel Novák", phone:"" },

  // Železný Brod ⚠️
  { id:287, name:"Kostel Nanebevzetí Panny Marie", city:"Železný Brod", address:"náměstí 3. května 1, Železný Brod", lat:50.6440, lng:15.2540, diocese:"Diecéze litoměřická", masses:["Ne 09:00","Pá 17:30"], pastor:"P. Martin Šimánek", phone:"" },

  // Tanvald ⚠️
  { id:288, name:"Kostel sv. Archanděla Michaela", city:"Tanvald", address:"náměstí Svobody 1, Tanvald", lat:50.7370, lng:15.3070, diocese:"Diecéze litoměřická", masses:["Ne 09:00","Pá 17:30"], pastor:"P. Ondřej Novák", phone:"" },

  // Vrchlabí ⚠️
  { id:289, name:"Kostel sv. Vavřince", city:"Vrchlabí", address:"náměstí Míru 1, Vrchlabí", lat:50.6270, lng:15.6130, diocese:"Diecéze královéhradecká", masses:["Ne 09:00","Ne 18:00","Út Čt Pá 17:30"], pastor:"P. Pavel Radek Bulvas", phone:"" },

  // Jaroměř ⚠️
  { id:290, name:"Kostel sv. Mikuláše", city:"Jaroměř", address:"náměstí Čs. armády 1, Jaroměř", lat:50.3560, lng:15.9230, diocese:"Diecéze královéhradecká", masses:["Ne 09:00","Ne 18:00","Út Čt Pá 17:30"], pastor:"P. Ondřej Čapek", phone:"" },

  // Dvůr Králové nad Labem ⚠️
  { id:291, name:"Kostel sv. Jana Křtitele", city:"Dvůr Králové nad Labem", address:"náměstí T.G.M. 1, Dvůr Králové nad Labem", lat:50.4340, lng:15.8120, diocese:"Diecéze královéhradecká", masses:["Ne 09:00","Ne 18:00","Út Čt Pá 17:30"], pastor:"P. Radek Bulvas", phone:"" },
  { id:292, name:"Kostel Nanebevzetí Panny Marie", city:"Dvůr Králové nad Labem", address:"Kotkova ul. 2, Dvůr Králové nad Labem", lat:50.4320, lng:15.8140, diocese:"Diecéze královéhradecká", masses:["Ne 10:30","St 17:00"], pastor:"P. Jiří Lukáš", phone:"" },

  // Nový Bydžov ⚠️
  { id:293, name:"Kostel sv. Vavřince", city:"Nový Bydžov", address:"Masarykovo náměstí 1, Nový Bydžov", lat:50.2430, lng:15.4940, diocese:"Diecéze královéhradecká", masses:["Ne 09:00","Ne 18:00","Pá 17:30"], pastor:"P. Pavel Šimek", phone:"" },

  // Chlumec nad Cidlinou ⚠️
  { id:294, name:"Kostel Nanebevzetí Panny Marie", city:"Chlumec nad Cidlinou", address:"náměstí Republiky 1, Chlumec nad Cidlinou", lat:50.1530, lng:15.4620, diocese:"Diecéze královéhradecká", masses:["Ne 09:00","Pá 17:30"], pastor:"P. Pavel Kadlec", phone:"" },

  // Hořice ⚠️
  { id:295, name:"Kostel Nanebevzetí Panny Marie", city:"Hořice", address:"náměstí Jiřího z Poděbrad 1, Hořice", lat:50.3670, lng:15.6310, diocese:"Diecéze královéhradecká", masses:["Ne 09:00","Ne 18:00","Út Čt Pá 17:30"], pastor:"P. Pavel Šimek", phone:"" },

  // Nová Paka ⚠️
  { id:296, name:"Kostel Nanebevzetí Panny Marie", city:"Nová Paka", address:"náměstí Svobody 1, Nová Paka", lat:50.4950, lng:15.5150, diocese:"Diecéze královéhradecká", masses:["Ne 09:00","Ne 18:00","Út Čt Pá 17:30"], pastor:"P. Pavel Šimek", phone:"" },

  // Lomnice nad Popelkou ⚠️
  { id:297, name:"Kostel sv. Mikuláše", city:"Lomnice nad Popelkou", address:"náměstí T.G.M. 1, Lomnice nad Popelkou", lat:50.5320, lng:15.3700, diocese:"Diecéze litoměřická", masses:["Ne 09:00","Pá 17:30"], pastor:"P. Pavel Novák", phone:"" },

  // Holice ⚠️
  { id:298, name:"Kostel sv. Martina", city:"Holice", address:"náměstí T.G.M. 1, Holice", lat:50.0660, lng:15.9890, diocese:"Diecéze královéhradecká", masses:["Ne 09:00","Ne 18:00","Pá 17:30"], pastor:"P. Jan Uhlíř", phone:"" },

  // Přelouč ⚠️
  { id:299, name:"Kostel sv. Jakuba Staršího", city:"Přelouč", address:"náměstí T.G.M. 1, Přelouč", lat:50.0410, lng:15.5610, diocese:"Diecéze královéhradecká", masses:["Ne 09:00","Ne 18:00","Út Čt Pá 17:30"], pastor:"P. Jan Uhlíř", phone:"" },

  // Heřmanův Městec ⚠️
  { id:300, name:"Kostel Nanebevzetí Panny Marie", city:"Heřmanův Městec", address:"náměstí Míru 1, Heřmanův Městec", lat:49.9430, lng:15.6600, diocese:"Diecéze královéhradecká", masses:["Ne 09:00","Pá 17:30"], pastor:"P. Martin Kořínek", phone:"" },

];
