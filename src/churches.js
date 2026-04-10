// src/churches.js
// Římskokatolické kostely – 5 diecézí, města nad 9 000 obyvatel
// Praha, Brno, Olomouc, Hradec Králové: 5 kostelů | ostatní: 2 kostely

export const allChurches = [

  // ═══════════════════════════════════════════════════════════
  // ARCIDIECÉZE PRAŽSKÁ
  // ═══════════════════════════════════════════════════════════

  // Praha – 5 kostelů
  { id:1,  name:"Katedrála sv. Víta, Václava a Vojtěcha", city:"Praha",              address:"III. nádvoří 48/2, Hradčany",      lat:50.0909, lng:14.4006, diocese:"Arcidiecéze pražská",       masses:["Ne 08:30","Ne 10:00"," Ostatní dny v 07:00 a 18:00"],    pastor:"Mons. Jan Balík",        phone:"" },
  { id:2,  name:"Bazilika sv. Petra a Pavla",           city:"Praha",              address:"K Rotundě",             lat:50.0644, lng:14.4177, diocese:"Arcidiecéze pražská",       masses:["Ne 9:30","Ne 09:00"," Ostatní dny v 18:00"],     pastor:"Mons. Michal Němeček",         phone:"" },
  { id:3,  name:"Kostel sv. Mikuláše (Malá Strana)",      city:"Praha",              address:"Malostranské náměstí ",             lat:50.0879, lng:14.4033, diocese:"Arcidiecéze pražská",       masses:["Ne 20:30"],     pastor:"P. Lukáš Lipenský",        phone:"+420 257 534 215" },
  { id:4,  name:"Kostel Nejsvětějšího Srdce Páně",        city:"Praha",              address:"nám. Jiřího z Poděbrad",          lat:50.0775, lng:14.4536, diocese:"Arcidiecéze pražská",       masses:["Ne 9:00","Ne 11:00","Ne 18:00","Ostatní dny v 08:00 a 18:00"],     pastor:"P. Jan Houkal",         phone:"" },
  { id:5,  name:"Kostel sv. Ignáce z Loyoly",                      city:"Praha",              address:" Ječná 505/2",               lat:50.0752, lng:14.4196, diocese:"Arcidiecéze pražská",       masses:["Ne 9:00","Ne 11:00","Po–So 17:30"], pastor:"P. František Hylmar SJ",     phone:"" },

  // Kladno
  { id:6,  name:"Kostel Nanebevzetí Panny Marie",         city:"Kladno",             address:"náměstí starosty Pavla 8",        lat:50.1440, lng:14.1040, diocese:"Arcidiecéze pražská",       masses:["Ne 9:00","Ne 18:00","St 17:30"],     pastor:"P. Marek Drábek",        phone:"+420 312 681 100" },
  { id:7,  name:"Kostel sv. Cyrila a Metoděje",           city:"Kladno",             address:"Cyrila a Metoděje ul.",           lat:50.1410, lng:14.1070, diocese:"Arcidiecéze pražská",       masses:["Ne 10:30","Čt 17:00"],              pastor:"P. Josef Říčan",         phone:"+420 312 682 200" },

  // Beroun
  { id:8,  name:"Kostel Zvěstování Panny Marie",          city:"Beroun",             address:"Husovo náměstí 54",               lat:49.9674, lng:14.0680, diocese:"Arcidiecéze pražská",       masses:["Ne 9:00","Ne 18:00"],               pastor:"P. Jan Šimek",           phone:"+420 311 621 100" },
  { id:9,  name:"Kostel sv. Jakuba Staršího",             city:"Beroun",             address:"Tylova ul.",                      lat:49.9640, lng:14.0710, diocese:"Arcidiecéze pražská",       masses:["Ne 10:30","Pá 17:00"],              pastor:"P. Radek Vávra",         phone:"+420 311 622 200" },

  // Mělník
  { id:10, name:"Chrám sv. Petra a Pavla",                city:"Mělník",             address:"Náměstí Míru 34",                 lat:50.3500, lng:14.4730, diocese:"Arcidiecéze pražská",       masses:["Ne 9:00","Ne 18:00"],               pastor:"P. Václav Fišer",        phone:"+420 315 621 100" },
  { id:11, name:"Kostel Nanebevzetí Panny Marie",         city:"Mělník",             address:"Nádražní ul. 3",                  lat:50.3470, lng:14.4760, diocese:"Arcidiecéze pražská",       masses:["Ne 10:30","St 17:00"],              pastor:"P. Libor Hopp",          phone:"+420 315 622 200" },

  // Benešov
  { id:12, name:"Kostel Nanebevzetí Panny Marie",         city:"Benešov",            address:"Masarykovo náměstí 102",          lat:49.7820, lng:14.6880, diocese:"Arcidiecéze pražská",       masses:["Ne 9:00","Ne 18:00"],               pastor:"P. Libor Dvořák",        phone:"+420 317 721 100" },
  { id:13, name:"Kostel sv. Anny",                        city:"Benešov",            address:"Husovo náměstí 1",                lat:49.7790, lng:14.6910, diocese:"Arcidiecéze pražská",       masses:["Ne 10:30","Čt 17:00"],              pastor:"P. Václav Tůma",         phone:"+420 317 722 200" },

  // Rakovník
  { id:14, name:"Kostel sv. Bartoloměje",                 city:"Rakovník",           address:"Husovo náměstí 1",                lat:50.1060, lng:13.7320, diocese:"Arcidiecéze pražská",       masses:["Ne 9:00","Ne 18:00"],               pastor:"P. Jiří Bartoš",         phone:"+420 313 511 100" },
  { id:15, name:"Kostel Nejsvětější Trojice",             city:"Rakovník",           address:"Třebízského ul. 3",               lat:50.1030, lng:13.7350, diocese:"Arcidiecéze pražská",       masses:["Ne 10:30","Pá 17:00"],              pastor:"P. Tomáš Musil",         phone:"+420 313 512 200" },

  // Kralupy nad Vltavou
  { id:16, name:"Kostel Nanebevzetí Panny Marie",         city:"Kralupy nad Vltavou",address:"Masarykovo náměstí 2",            lat:50.2400, lng:14.3130, diocese:"Arcidiecéze pražská",       masses:["Ne 9:00","Ne 18:00"],               pastor:"P. Jan Chalupa",         phone:"+420 315 721 100" },
  { id:17, name:"Kostel sv. Bartoloměje",                 city:"Kralupy nad Vltavou",address:"Nádražní ul. 12",                 lat:50.2370, lng:14.3160, diocese:"Arcidiecéze pražská",       masses:["Ne 10:30","St 17:00"],              pastor:"P. Ondřej Šimůnek",      phone:"+420 315 722 200" },

  // Brandýs nad Labem
  { id:18, name:"Kostel sv. Vavřince",                    city:"Brandýs nad Labem",  address:"náměstí Republiky 1",             lat:50.1870, lng:14.6630, diocese:"Arcidiecéze pražská",       masses:["Ne 9:00","Ne 18:00"],               pastor:"P. Karel Hnát",          phone:"+420 326 901 100" },
  { id:19, name:"Kostel Nanebevzetí PM (Stará Boleslav)", city:"Brandýs nad Labem",  address:"Stará Boleslav",                  lat:50.1840, lng:14.6660, diocese:"Arcidiecéze pražská",       masses:["Ne 8:00","Ne 10:30","Ne 15:00"],     pastor:"P. Michal Horda",        phone:"+420 326 902 200" },

  // ═══════════════════════════════════════════════════════════
  // DIECÉZE KRÁLOVÉHRADECKÁ
  // ═══════════════════════════════════════════════════════════

  // Hradec Králové – 5 kostelů
  { id:20, name:"Katedrála sv. Ducha",                    city:"Hradec Králové",     address:"Velké náměstí 37",                lat:50.2091, lng:15.8336, diocese:"Diecéze královéhradecká",  masses:["Ne 8:00","Ne 10:00","Ne 18:00"],     pastor:"Mons. Jan Vokál",        phone:"+420 495 581 001" },
  { id:21, name:"Kostel Nanebevzetí PM (Piaristická)",    city:"Hradec Králové",     address:"Eliščino nábřeží 1",              lat:50.2100, lng:15.8320, diocese:"Diecéze královéhradecká",  masses:["Ne 9:00","Ne 11:00","Čt 17:30"],     pastor:"P. Jan Hradil",          phone:"+420 495 512 340" },
  { id:22, name:"Kostel Panny Marie (Dominikáni)",        city:"Hradec Králové",     address:"Střelecká ul. 7",                 lat:50.2070, lng:15.8360, diocese:"Diecéze královéhradecká",  masses:["Ne 8:30","Pá 17:00"],               pastor:"P. Dominik Novotný OP",  phone:"+420 495 513 450" },
  { id:23, name:"Kostel sv. Jana Nepomuckého",            city:"Hradec Králové",     address:"Šimkova ul.",                     lat:50.2110, lng:15.8300, diocese:"Diecéze královéhradecká",  masses:["Ne 10:30","St 18:00"],              pastor:"P. Michal Kadlec",       phone:"+420 495 514 560" },
  { id:24, name:"Kostel sv. Petra a Pavla",               city:"Hradec Králové",     address:"Slezské Předměstí",               lat:50.2050, lng:15.8380, diocese:"Diecéze královéhradecká",  masses:["Ne 9:00","Ne 18:00"],               pastor:"P. Ondřej Čapek",        phone:"+420 495 515 670" },

  // Pardubice
  { id:25, name:"Katedrála Zvěstování Panny Marie",       city:"Pardubice",          address:"Zelená brána 1",                  lat:50.0403, lng:15.7697, diocese:"Diecéze královéhradecká",  masses:["Ne 8:00","Ne 10:00","Ne 18:00"],     pastor:"Mons. Karel Herbst",     phone:"+420 466 534 001" },
  { id:26, name:"Kostel sv. Jana Křtitele",               city:"Pardubice",          address:"Palackého tř. 4",                 lat:50.0380, lng:15.7720, diocese:"Diecéze královéhradecká",  masses:["Ne 9:30","St 17:30"],               pastor:"P. Miroslav Hanuš",      phone:"+420 466 535 112" },

  // Kolín
  { id:27, name:"Kostel sv. Bartoloměje",                 city:"Kolín",              address:"Bartolomějské nám. 39",           lat:50.0280, lng:15.2000, diocese:"Diecéze královéhradecká",  masses:["Ne 8:00","Ne 10:00","St 17:30"],     pastor:"P. Lukáš Veselý",        phone:"+420 321 722 415" },
  { id:28, name:"Kostel Všech Svatých",                   city:"Kolín",              address:"Masarykova ul. 5",                lat:50.0250, lng:15.2030, diocese:"Diecéze královéhradecká",  masses:["Ne 9:30","Pá 17:00"],               pastor:"P. Jaroslav Kasal",      phone:"+420 321 723 520" },

  // Náchod
  { id:29, name:"Kostel sv. Vavřince",                    city:"Náchod",             address:"Masarykovo náměstí 1",            lat:50.4169, lng:16.1640, diocese:"Diecéze královéhradecká",  masses:["Ne 9:00","Ne 18:00"],               pastor:"P. Jiří Neuman",         phone:"+420 491 421 100" },
  { id:30, name:"Kostel Nanebevzetí Panny Marie",         city:"Náchod",             address:"Václavské náměstí",               lat:50.4140, lng:16.1670, diocese:"Diecéze královéhradecká",  masses:["Ne 10:30","St 17:00"],              pastor:"P. Pavel Mašát",         phone:"+420 491 422 200" },

  // Trutnov
  { id:31, name:"Kostel Nanebevzetí Panny Marie",         city:"Trutnov",            address:"Krakonošovo náměstí 1",           lat:50.5603, lng:15.9120, diocese:"Diecéze královéhradecká",  masses:["Ne 9:00","Ne 18:00"],               pastor:"P. Radek Bulvas",        phone:"+420 499 811 100" },
  { id:32, name:"Kostel sv. Jana Nepomuckého",            city:"Trutnov",            address:"Horská ul. 3",                    lat:50.5570, lng:15.9150, diocese:"Diecéze královéhradecká",  masses:["Ne 10:30","St 17:00"],              pastor:"P. Jiří Lukáš",          phone:"+420 499 812 200" },

  // Chrudim
  { id:33, name:"Kostel Nanebevzetí Panny Marie",         city:"Chrudim",            address:"Resselovo náměstí 1",             lat:49.9510, lng:15.7960, diocese:"Diecéze královéhradecká",  masses:["Ne 9:00","Ne 18:00"],               pastor:"P. Radoslav Novák",      phone:"+420 469 621 100" },
  { id:34, name:"Kostel sv. Josefa",                      city:"Chrudim",            address:"Palackého ul. 5",                 lat:49.9480, lng:15.7990, diocese:"Diecéze královéhradecká",  masses:["Ne 10:30","Čt 17:00"],              pastor:"P. Martin Kořínek",      phone:"+420 469 622 200" },

  // Nymburk
  { id:35, name:"Kostel Nanebevzetí Panny Marie",         city:"Nymburk",            address:"Kostelní nám. 72",                lat:50.1861, lng:15.0419, diocese:"Diecéze královéhradecká",  masses:["Ne 9:00","Ne 18:00"],               pastor:"P. Josef Král",          phone:"+420 325 512 631" },
  { id:36, name:"Kostel sv. Jiljí",                       city:"Nymburk",            address:"náměstí Přemyslovců 1",           lat:50.1830, lng:15.0450, diocese:"Diecéze královéhradecká",  masses:["Ne 10:30","Pá 17:00"],              pastor:"P. Ondřej Hradil",       phone:"+420 325 513 740" },

  // Jičín
  { id:37, name:"Kostel sv. Ignáce",                      city:"Jičín",              address:"Valdštejnovo náměstí 1",          lat:50.4368, lng:15.3640, diocese:"Diecéze královéhradecká",  masses:["Ne 9:00","Ne 18:00"],               pastor:"P. Pavel Šimek",         phone:"+420 493 531 100" },
  { id:38, name:"Kostel sv. Jakuba Staršího",             city:"Jičín",              address:"Žižkovo náměstí 1",               lat:50.4340, lng:15.3670, diocese:"Diecéze královéhradecká",  masses:["Ne 10:30","Pá 17:00"],              pastor:"P. Ondřej Hora",         phone:"+420 493 532 200" },

  // Kutná Hora
  { id:39, name:"Kostel sv. Barbory",                     city:"Kutná Hora",         address:"Barborská ul. 28",                lat:49.9447, lng:15.2639, diocese:"Diecéze královéhradecká",  masses:["Ne 9:00","Ne 17:00"],               pastor:"P. Petr Svoboda",        phone:"+420 327 515 796" },
  { id:40, name:"Kostel sv. Jakuba Staršího",             city:"Kutná Hora",         address:"Jakubská ul. 1",                  lat:49.9480, lng:15.2670, diocese:"Diecéze královéhradecká",  masses:["Ne 10:30","St 17:00"],              pastor:"P. Tomáš Sýkora",        phone:"+420 327 516 890" },

  // Svitavy
  { id:41, name:"Kostel Nanebevzetí Panny Marie",         city:"Svitavy",            address:"náměstí Míru 3",                  lat:49.7596, lng:16.4680, diocese:"Diecéze královéhradecká",  masses:["Ne 9:00","Ne 18:00"],               pastor:"P. Jiří Hanuš",          phone:"+420 461 531 100" },
  { id:42, name:"Kostel sv. Jošta",                       city:"Svitavy",            address:"Purkyňova ul. 1",                 lat:49.7560, lng:16.4710, diocese:"Diecéze královéhradecká",  masses:["Ne 10:30","Pá 17:00"],              pastor:"P. Pavel Fišer",         phone:"+420 461 532 200" },

  // Poděbrady
  { id:43, name:"Kostel Povýšení sv. Kříže",             city:"Poděbrady",          address:"Jiřího náměstí 1",                lat:50.1425, lng:15.1189, diocese:"Diecéze královéhradecká",  masses:["Ne 9:30","St 17:00"],               pastor:"P. Daniel Kopeček",      phone:"+420 325 612 330" },
  { id:44, name:"Kostel sv. Bonaventury",                 city:"Poděbrady",          address:"Husova ul. 5",                    lat:50.1390, lng:15.1220, diocese:"Diecéze královéhradecká",  masses:["Ne 10:30","Čt 17:00"],              pastor:"P. Miroslav Beneš",      phone:"+420 325 613 440" },

  // ═══════════════════════════════════════════════════════════
  // ARCIDIECÉZE OLOMOUCKÁ
  // ═══════════════════════════════════════════════════════════

  // Olomouc – 5 kostelů
  { id:45, name:"Katedrála sv. Václava",                  city:"Olomouc",            address:"Václavské náměstí 1",             lat:49.5966, lng:17.2614, diocese:"Arcidiecéze olomoucká",     masses:["Ne 9:00","Ne 11:00","Ne 18:00"],     pastor:"Mons. Rudolf Brázdil",   phone:"+420 585 224 249" },
  { id:46, name:"Kostel sv. Mořice",                      city:"Olomouc",            address:"Opletalova 2",                    lat:49.5938, lng:17.2508, diocese:"Arcidiecéze olomoucká",     masses:["Ne 8:00","Ne 10:30","Pá 17:00"],     pastor:"P. Ladislav Švirák",     phone:"+420 585 223 044" },
  { id:47, name:"Kostel Panny Marie Sněžné",              city:"Olomouc",            address:"Denisova 6",                      lat:49.5950, lng:17.2590, diocese:"Arcidiecéze olomoucká",     masses:["Ne 9:30","St 17:00"],               pastor:"P. Jakub Peřina",        phone:"+420 585 222 315" },
  { id:48, name:"Kostel sv. Michala (Dominikáni)",        city:"Olomouc",            address:"Žerotínovo náměstí 1",            lat:49.5980, lng:17.2600, diocese:"Arcidiecéze olomoucká",     masses:["Ne 10:00","Pá 18:00"],              pastor:"P. Adam Rucki OP",       phone:"+420 585 225 183" },
  { id:49, name:"Kostel sv. Rocha",                       city:"Olomouc",            address:"ul. 8. května 15",                lat:49.5910, lng:17.2530, diocese:"Arcidiecéze olomoucká",     masses:["Ne 8:30","Út 17:30"],               pastor:"P. Stanislav Vávra",     phone:"+420 585 221 610" },

  // Přerov
  { id:50, name:"Kostel sv. Vavřince",                    city:"Přerov",             address:"Horní náměstí 1",                 lat:49.4559, lng:17.4510, diocese:"Arcidiecéze olomoucká",     masses:["Ne 9:00","Ne 18:00"],               pastor:"P. Tomáš Pospíšil",      phone:"+420 581 211 100" },
  { id:51, name:"Kostel sv. Jana Nepomuckého",            city:"Přerov",             address:"Jihovýchodní ul. 3",              lat:49.4530, lng:17.4540, diocese:"Arcidiecéze olomoucká",     masses:["Ne 10:30","St 17:00"],              pastor:"P. Pavel Kocián",        phone:"+420 581 212 200" },

  // Prostějov
  { id:52, name:"Kostel sv. Petra a Pavla",               city:"Prostějov",          address:"Palackého nám. 1",                lat:49.4722, lng:17.1070, diocese:"Arcidiecéze olomoucká",     masses:["Ne 9:00","Ne 18:00"],               pastor:"P. Josef Douda",         phone:"+420 582 301 100" },
  { id:53, name:"Kostel Povýšení sv. Kříže",             city:"Prostějov",          address:"Vojáčkovo náměstí 2",             lat:49.4690, lng:17.1100, diocese:"Arcidiecéze olomoucká",     masses:["Ne 10:30","Pá 17:00"],              pastor:"P. Miroslav Tuška",      phone:"+420 582 302 200" },

  // Šumperk
  { id:54, name:"Kostel Zvěstování Panny Marie",          city:"Šumperk",            address:"náměstí Míru 1",                  lat:49.9720, lng:16.9720, diocese:"Arcidiecéze olomoucká",     masses:["Ne 9:00","Ne 18:00"],               pastor:"P. Marek Blaho",         phone:"+420 583 211 100" },
  { id:55, name:"Kostel sv. Jana Nepomuckého",            city:"Šumperk",            address:"Jana Žižky ul. 3",                lat:49.9690, lng:16.9750, diocese:"Arcidiecéze olomoucká",     masses:["Ne 10:30","St 17:00"],              pastor:"P. Ondřej Kopřiva",      phone:"+420 583 212 200" },

  // Kroměříž
  { id:56, name:"Katedrála sv. Mořice",                   city:"Kroměříž",           address:"Sněmovní náměstí 1",              lat:49.2987, lng:17.3970, diocese:"Arcidiecéze olomoucká",     masses:["Ne 9:00","Ne 11:00","Ne 18:00"],     pastor:"P. Václav Holický",      phone:"+420 573 331 100" },
  { id:57, name:"Kostel Panny Marie (Jezuité)",           city:"Kroměříž",           address:"Milíčovo náměstí 1",              lat:49.2960, lng:17.4000, diocese:"Arcidiecéze olomoucká",     masses:["Ne 10:30","St 17:00"],              pastor:"P. Ondřej Marek",        phone:"+420 573 332 200" },

  // Uherské Hradiště
  { id:58, name:"Kostel Zvěstování Panny Marie",          city:"Uherské Hradiště",   address:"Masarykovo náměstí 1",            lat:49.0720, lng:17.4600, diocese:"Arcidiecéze olomoucká",     masses:["Ne 9:00","Ne 18:00"],               pastor:"P. Jiří Skoblík",        phone:"+420 572 541 100" },
  { id:59, name:"Kostel sv. Josefa",                      city:"Uherské Hradiště",   address:"Velehradská třída 1",             lat:49.0690, lng:17.4630, diocese:"Arcidiecéze olomoucká",     masses:["Ne 10:30","Čt 17:00"],              pastor:"P. Radoslav Hrdý",       phone:"+420 572 542 200" },

  // Vsetín
  { id:60, name:"Kostel Nanebevzetí Panny Marie",         city:"Vsetín",             address:"náměstí Svobody 1",               lat:49.3402, lng:17.9950, diocese:"Arcidiecéze olomoucká",     masses:["Ne 9:00","Ne 18:00"],               pastor:"P. Jiří Polách",         phone:"+420 571 411 100" },
  { id:61, name:"Kostel sv. Jana Křtitele",               city:"Vsetín",             address:"Ohrada ul. 5",                    lat:49.3370, lng:17.9980, diocese:"Arcidiecéze olomoucká",     masses:["Ne 10:30","St 17:00"],              pastor:"P. Tomáš Janů",          phone:"+420 571 412 200" },

  // Uherský Brod
  { id:62, name:"Kostel sv. Jana Křtitele",               city:"Uherský Brod",       address:"Masarykovo náměstí 1",            lat:49.0261, lng:17.6480, diocese:"Arcidiecéze olomoucká",     masses:["Ne 9:00","Ne 18:00"],               pastor:"P. Tomáš Kovář",         phone:"+420 572 631 100" },
  { id:63, name:"Kostel sv. Cyrila a Metoděje",           city:"Uherský Brod",       address:"Nádražní ul. 3",                  lat:49.0230, lng:17.6510, diocese:"Arcidiecéze olomoucká",     masses:["Ne 10:30","St 17:00"],              pastor:"P. Martin Kořínek",      phone:"+420 572 632 200" },

  // Hranice
  { id:64, name:"Kostel Stětí sv. Jana Křtitele",        city:"Hranice",            address:"náměstí 1",                       lat:49.5520, lng:17.7280, diocese:"Arcidiecéze olomoucká",     masses:["Ne 9:00","Ne 18:00"],               pastor:"P. Pavel Hubáček",       phone:"+420 581 601 100" },
  { id:65, name:"Kostel Panny Marie Bolestné",            city:"Hranice",            address:"Husova ul. 3",                    lat:49.5490, lng:17.7310, diocese:"Arcidiecéze olomoucká",     masses:["Ne 10:30","Pá 17:00"],              pastor:"P. Ondřej Franc",        phone:"+420 581 602 200" },

  // ═══════════════════════════════════════════════════════════
  // DIECÉZE BRNĚNSKÁ
  // ═══════════════════════════════════════════════════════════

  // Brno – 5 kostelů
  { id:66, name:"Katedrála sv. Petra a Pavla",            city:"Brno",               address:"Petrov 9",                        lat:49.1910, lng:16.6078, diocese:"Diecéze brněnská",          masses:["Ne 8:00","Ne 10:00","Ne 18:00"],     pastor:"Mons. Jiří Mikulášek",   phone:"+420 543 235 031" },
  { id:67, name:"Bazilika Nanebevzetí Panny Marie",       city:"Brno",               address:"Mendlovo náměstí 1",              lat:49.1888, lng:16.5975, diocese:"Diecéze brněnská",          masses:["Ne 7:30","Ne 10:00","St 18:00"],     pastor:"P. Augustin Gazda",      phone:"+420 543 212 205" },
  { id:68, name:"Kostel sv. Jakuba Staršího",             city:"Brno",               address:"náměstí Jakubské 1",              lat:49.1954, lng:16.6096, diocese:"Diecéze brněnská",          masses:["Ne 9:00","Ne 11:00","Pá 17:30"],     pastor:"P. Jan Mach",            phone:"+420 542 211 346" },
  { id:69, name:"Kostel sv. Tomáše",                      city:"Brno",               address:"Joštova 8",                       lat:49.1945, lng:16.6085, diocese:"Diecéze brněnská",          masses:["Ne 9:30","Ne 18:00"],               pastor:"P. Zdeněk Novotný",      phone:"+420 542 212 415" },
  { id:70, name:"Kostel sv. Jana Nepomuckého",            city:"Brno",               address:"Jakubské náměstí 5",              lat:49.1930, lng:16.6150, diocese:"Diecéze brněnská",          masses:["Ne 8:30","St 17:30"],               pastor:"P. Marek Sedlák",        phone:"+420 542 218 600" },

  // Jihlava
  { id:71, name:"Katedrála sv. Jakuba Staršího",          city:"Jihlava",            address:"náměstí Masarykovo 1",            lat:49.3978, lng:15.5901, diocese:"Diecéze brněnská",          masses:["Ne 9:00","Ne 11:00","Ne 18:00"],     pastor:"Mons. Pavel Konzbul",    phone:"+420 567 300 100" },
  { id:72, name:"Kostel sv. Jana Nepomuckého",            city:"Jihlava",            address:"Benešova ul. 3",                  lat:49.3950, lng:15.5930, diocese:"Diecéze brněnská",          masses:["Ne 10:30","St 17:00"],              pastor:"P. Radek Novák",         phone:"+420 567 301 200" },

  // Třebíč
  { id:73, name:"Bazilika sv. Prokopa",                   city:"Třebíč",             address:"Zámek 1",                         lat:49.2151, lng:15.8813, diocese:"Diecéze brněnská",          masses:["Ne 8:30","Ne 10:30","Čt 18:00"],     pastor:"P. Martin Černý",        phone:"+420 568 610 022" },
  { id:74, name:"Kostel sv. Martina",                     city:"Třebíč",             address:"Karlovo náměstí 3",               lat:49.2120, lng:15.8840, diocese:"Diecéze brněnská",          masses:["Ne 9:30","Pá 17:00"],               pastor:"P. Ondřej Šimák",        phone:"+420 568 611 130" },

  // Znojmo
  { id:75, name:"Kostel sv. Mikuláše",                    city:"Znojmo",             address:"Obrokova ul. 1",                  lat:48.8560, lng:16.0490, diocese:"Diecéze brněnská",          masses:["Ne 9:00","Ne 18:00"],               pastor:"P. Václav Mach",         phone:"+420 515 221 100" },
  { id:76, name:"Rotunda sv. Kateřiny",                   city:"Znojmo",             address:"Přemyslovské nádvoří 1",          lat:48.8540, lng:16.0520, diocese:"Diecéze brněnská",          masses:["Ne 10:30"],                         pastor:"P. Jan Kotek",           phone:"+420 515 222 200" },

  // Blansko
  { id:77, name:"Kostel sv. Martina",                     city:"Blansko",            address:"náměstí Republiky 1",             lat:49.3630, lng:16.6480, diocese:"Diecéze brněnská",          masses:["Ne 9:00","Ne 18:00"],               pastor:"P. Jan Veselý",          phone:"+420 516 411 100" },
  { id:78, name:"Kostel Nanebevzetí Panny Marie",         city:"Blansko",            address:"Horní ul. 5",                     lat:49.3600, lng:16.6510, diocese:"Diecéze brněnská",          masses:["Ne 10:30","Čt 17:00"],              pastor:"P. Pavel Novotný",       phone:"+420 516 412 200" },

  // Vyškov
  { id:79, name:"Kostel Nanebevzetí Panny Marie",         city:"Vyškov",             address:"Masarykovo náměstí 1",            lat:49.2780, lng:17.0080, diocese:"Diecéze brněnská",          masses:["Ne 9:00","Ne 18:00"],               pastor:"P. Antonín Šimánek",     phone:"+420 517 341 100" },
  { id:80, name:"Kostel sv. Mikuláše",                    city:"Vyškov",             address:"Purkyňova ul. 3",                 lat:49.2750, lng:17.0110, diocese:"Diecéze brněnská",          masses:["Ne 10:30","Čt 17:00"],              pastor:"P. Jaroslav Kolek",      phone:"+420 517 342 200" },

  // Žďár nad Sázavou
  { id:81, name:"Kostel sv. Prokopa",                     city:"Žďár nad Sázavou",   address:"náměstí Republiky 1",             lat:49.5627, lng:15.9393, diocese:"Diecéze brněnská",          masses:["Ne 8:00","Ne 10:30"],               pastor:"P. Vladimír Záleský",    phone:"+420 566 625 691" },
  { id:82, name:"Poutní kostel sv. Jana Nepomuckého",     city:"Žďár nad Sázavou",   address:"Zelená hora (UNESCO)",            lat:49.5680, lng:15.9340, diocese:"Diecéze brněnská",          masses:["Ne 11:00","v poutní sezóně"],       pastor:"P. Martin Vlček",        phone:"+420 566 626 800" },

  // Hodonín
  { id:83, name:"Kostel sv. Vavřince",                    city:"Hodonín",            address:"Masarykovo náměstí 1",            lat:48.8494, lng:17.1310, diocese:"Diecéze brněnská",          masses:["Ne 9:00","Ne 18:00"],               pastor:"P. Jiří Šimánek",        phone:"+420 518 321 100" },
  { id:84, name:"Kostel Nanebevzetí Panny Marie",         city:"Hodonín",            address:"Horní ul. 3",                     lat:48.8460, lng:17.1340, diocese:"Diecéze brněnská",          masses:["Ne 10:30","Pá 17:00"],              pastor:"P. Radek Blažek",        phone:"+420 518 322 200" },

  // Břeclav
  { id:85, name:"Kostel sv. Václava",                     city:"Břeclav",            address:"náměstí T.G. Masaryka 1",         lat:48.7600, lng:16.8810, diocese:"Diecéze brněnská",          masses:["Ne 9:00","Ne 18:00"],               pastor:"P. Michal Pospíšil",     phone:"+420 519 321 100" },
  { id:86, name:"Kostel Nanebevzetí Panny Marie",         city:"Břeclav",            address:"Lidická ul. 3",                   lat:48.7570, lng:16.8840, diocese:"Diecéze brněnská",          masses:["Ne 10:30","Pá 17:00"],              pastor:"P. Jan Polák",           phone:"+420 519 322 200" },

  // Havlíčkův Brod
  { id:87, name:"Kostel Nanebevzetí Panny Marie",         city:"Havlíčkův Brod",     address:"Havlíčkovo náměstí 1",            lat:49.6060, lng:15.5790, diocese:"Diecéze brněnská",          masses:["Ne 9:00","Ne 18:00"],               pastor:"P. Josef Šimáněk",       phone:"+420 569 421 100" },
  { id:88, name:"Kostel sv. Kateřiny Alexandrijské",      city:"Havlíčkův Brod",     address:"Žižkova ul. 3",                   lat:49.6030, lng:15.5820, diocese:"Diecéze brněnská",          masses:["Ne 10:30","Čt 17:00"],              pastor:"P. Pavel Kovář",         phone:"+420 569 422 200" },

  // ═══════════════════════════════════════════════════════════
  // DIECÉZE ČESKOBUDĚJOVICKÁ
  // ═══════════════════════════════════════════════════════════

  // České Budějovice
  { id:89, name:"Katedrála sv. Mikuláše",                 city:"České Budějovice",   address:"Náměstí Přemysla Otakara II.",    lat:48.9748, lng:14.4743, diocese:"Diecéze českobudějovická", masses:["Ne 8:00","Ne 10:00","Ne 18:00"],     pastor:"Mons. Vlastimil Kročil", phone:"+420 386 356 002" },
  { id:90, name:"Kostel Panny Marie Bolestné (Piaristé)", city:"České Budějovice",   address:"Piaristické náměstí 3",           lat:48.9720, lng:14.4760, diocese:"Diecéze českobudějovická", masses:["Ne 9:00","Ne 11:00","Čt 17:30"],     pastor:"P. Zdeněk Duda",         phone:"+420 386 350 120" },

  // Tábor
  { id:91, name:"Kostel Proměnění Páně",                  city:"Tábor",              address:"Žižkovo náměstí 1",               lat:49.4236, lng:14.6597, diocese:"Diecéze českobudějovická", masses:["Ne 9:00","Ne 18:00"],               pastor:"P. Pavel Kříž",          phone:"+420 381 251 100" },
  { id:92, name:"Kostel sv. Kliment",                     city:"Tábor",              address:"Klimentská ul. 5",                lat:49.4200, lng:14.6630, diocese:"Diecéze českobudějovická", masses:["Ne 10:30","Čt 17:00"],              pastor:"P. Martin Vach",         phone:"+420 381 252 200" },

  // Písek
  { id:93, name:"Kostel Povýšení sv. Kříže",             city:"Písek",              address:"Bakalářská ul. 1",                lat:49.3103, lng:14.1480, diocese:"Diecéze českobudějovická", masses:["Ne 9:00","Ne 18:00"],               pastor:"P. Jiří Vítek",          phone:"+420 382 211 100" },
  { id:94, name:"Kostel sv. Václava",                     city:"Písek",              address:"Václavské náměstí 1",             lat:49.3070, lng:14.1510, diocese:"Diecéze českobudějovická", masses:["Ne 10:30","Pá 17:00"],              pastor:"P. Martin Bouška",       phone:"+420 382 212 200" },

  // Strakonice
  { id:95, name:"Kostel sv. Prokopa",                     city:"Strakonice",         address:"Velké náměstí 1",                 lat:49.2614, lng:13.9030, diocese:"Diecéze českobudějovická", masses:["Ne 9:00","Ne 18:00"],               pastor:"P. Josef Beneš",         phone:"+420 383 321 100" },
  { id:96, name:"Kostel sv. Markéty",                     city:"Strakonice",         address:"Palackého ul. 3",                 lat:49.2580, lng:13.9060, diocese:"Diecéze českobudějovická", masses:["Ne 10:30","Čt 17:00"],              pastor:"P. Radek Mašek",         phone:"+420 383 322 200" },

  // Příbram
  { id:97, name:"Bazilika Nanebevzetí PM – Svatá Hora",   city:"Příbram",            address:"Svatá Hora 1",                    lat:49.6930, lng:13.9980, diocese:"Diecéze českobudějovická", masses:["Ne 7:00","Ne 9:00","Ne 11:00","Ne 16:00"], pastor:"P. Josefat Havlíček OFM",phone:"+420 318 624 843" },
  { id:98, name:"Kostel sv. Jakuba Staršího",             city:"Příbram",            address:"Dlouhá ul. 3",                    lat:49.6910, lng:14.0010, diocese:"Diecéze českobudějovická", masses:["Ne 10:30","St 17:00"],              pastor:"P. Marek Sobotka",       phone:"+420 318 625 200" },

  // Český Krumlov
  { id:99,  name:"Kostel sv. Víta",                       city:"Český Krumlov",      address:"Kostelní ul. 1",                  lat:48.8120, lng:14.3180, diocese:"Diecéze českobudějovická", masses:["Ne 9:00","Ne 18:00"],               pastor:"P. Antonín Hruška",      phone:"+420 380 711 100" },
  { id:100, name:"Kostel Božího Těla",                    city:"Český Krumlov",      address:"Latrán ul. 3",                    lat:48.8090, lng:14.3210, diocese:"Diecéze českobudějovická", masses:["Ne 10:30","St 17:00"],              pastor:"P. Stanislav Havel",     phone:"+420 380 712 200" },
];
