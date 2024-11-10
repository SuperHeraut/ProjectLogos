//indices
let i = 1;
let j = 1;
let y = 0;

// oðer vars
let a;
let book;
let bookid;
let chapitres;
let copyright;
let footercontent;
let footercontent1;
let footercontent2;
let footerlink;
let link;
let list;
let mainlist;
let maintitle;
let maintitlefiller;
let menuitem;
let next;
let nochapter;
let number;
let size;
let shorttitle;
let shortversion;
let sublist;
let sublistname;

// book vars
let booklist;
let bookgn;
let bookex;
let booklv;
let booknb;
let bookdt;
let bookjos;
let bookjg;
let bookrt;
let book1s;
let book2s;
let book1r;
let book2r;
let book1ch;
let book2ch;
let bookesd;
let bookne;
let booktb;
let bookjdt;
let bookest;
let book1m;
let book2m;
let bookjb;
let bookpr;
let bookqo;
let bookct;
let booksg;
let booksi;
let bookps1;
let bookps2;
let bookps3;
let bookis;
let bookjr;
let bookla;
let bookba;
let bookez;
let bookda;
let bookos;
let bookjl;
let bookam;
let bookab;
let bookjon;
let bookmi;
let bookna;
let bookha;
let bookso;
let bookag;
let bookza;
let bookml;
let bookmt;
let bookmc;
let booklc;
let bookjn;
let bookac;
let bookrm;
let book1co;
let book2co;
let bookga;
let bookep;
let bookph;
let bookcol;
let book1th;
let book2th;
let book1tm;
let book2tm;
let booktt;
let bookphm;
let bookhe;
let bookjc;
let book1p;
let book2p;
let book1jn;
let book2jn;
let book3jn;
let bookjd;
let bookap;

//conſtants
const HEAD = document.querySelector("head");
const CHARSET = document.createElement("meta");
const VP = document.createElement("meta");
const RESET = document.createElement("link");
const STYLE = document.createElement("link");
const BACK = document.createElement("a");
const PAGEURL = location.pathname.split("/");
const LANG = PAGEURL[PAGEURL.length - 3];
const VERSION = PAGEURL[PAGEURL.length - 2];
const BOOK = PAGEURL[PAGEURL.length - 1].split(".")[0];
const HTML = document.querySelector("html");
const HEADER = document.querySelector("header");
const LISTLINK = document.createElement("a");
const NAVBAR = document.createElement("nav");
const MAINLIST = document.createElement("ul");
const FOOTER = document.querySelector("footer");
const INFOOTER = document.createElement("span");
const TITLE = document.createElement("title");
const FAVICON = document.createElement("link");

bookid = document.querySelector("body").setAttribute("id", BOOK);
HTML.setAttribute("lang", LANG);
HEADER.appendChild(NAVBAR);
NAVBAR.appendChild(MAINLIST);
MAINLIST.setAttribute("id", "menu");
FOOTER.appendChild(INFOOTER);

if (LANG == "egy") {
	BODY.setAttribute("class", "hieroglyph vertext");
}

//ðis ſwitch impacts ðe footer content
switch (VERSION) {
	case "aelf":
		shortversion = "Traduction Liturgique de la Bible";
		footercontent1 = "pour la traduction liturgique de la Bible:";
		footerlink = document.createElement("a");
		footerlink.setAttribute("href", "http://www.aelf.org");
		footerlink.innerHTML = "AELF";
		footercontent2 = "tous droits r&eacute;serv&eacute;s";
		footercontent =
			footercontent1 + " " + footerlink.outerHTML + ", " + footercontent2;
		break;
	default:
		shortversion = "";
		footercontent = "";
}

// ðe following determine the browser tab
switch (LANG) {
	case "fr":
		mainlist = "Liste des livres";
		booklist = "Bible";
		bookgn = "Gen&egrave;se";
		bookex = "Exode";
		booklv = "L&eacute;vitique";
		booknb = "Nombres";
		bookdt = "Deut&eacute;ronome";
		bookjos = "Josu&eacute;";
		bookjg = "Juges";
		bookrt = "Ruth";
		book1s = "1 Samuel";
		book2s = "2 Samuel";
		book1r = "1 Rois";
		book2r = "2 Rois";
		book1ch = "1 Chroniques";
		book2ch = "2 Chroniques";
		bookesd = "Esdras";
		bookne = "N&eacute;h&eacute;mie";
		booktb = "Tobie";
		bookjdt = "Judith";
		bookest = "Esther";
		book1m = "1 Makkabim";
		book2m = "2 Makkabim";
		bookjb = "Job";
		bookpr = "Proverbes";
		bookqo = "Eccl&eacute;siaste";
		bookct = "Cantique des Cantiques";
		booksg = "Sagesse";
		booksi = "Siracide";
		bookps1 = "Ps 1-50";
		bookps2 = "Ps 51-100";
		bookps3 = "Ps 101-150";
		bookis = "Isa&iuml;e";
		bookjr = "J&eacute;r&eacute;mie";
		bookla = "Lamentations";
		bookba = "Baruch";
		bookez = "&Eacute;z&eacute;quiel";
		bookda = "Daniel";
		bookos = "Hoch&eacute;e";
		bookjl = "Jo&euml;l";
		bookam = "Amos";
		bookab = "Abdias";
		bookjon = "Jonas";
		bookmi = "Micah";
		bookna = "Nahum";
		bookha = "Habaquq";
		bookso = "Tsophonias";
		bookag = "Hagga&iuml;";
		bookza = "Zakarias";
		bookml = "Malaki";
		bookmt = "Matthieu";
		bookmc = "Marc";
		booklc = "Luc";
		bookjn = "Jean";
		bookac = "Actes des Ap&ocirc;tres";
		bookrm = "Romains";
		book1co = "1 Corinthiens";
		book2co = "2 Corinthiens";
		bookga = "Galates";
		bookep = "&Eacute;ph&eacute;siens";
		bookph = "Philippiens";
		bookcol = "Colossiens";
		book1th = "1 Thessaloniciens";
		book2th = "2 Thessaloniciens";
		book1tm = "1 Timoth&eacute;e";
		book2tm = "2 Timoth&eacute;e";
		booktt = "Titus";
		bookphm = "Phil&eacute;mon";
		bookhe = "H&eacute;breux";
		bookjc = "Jacques";
		book1p = "1 Pierre";
		book2p = "2 Pierre";
		book1jn = "1 Jean";
		book2jn = "2 Jean";
		book3jn = "3 Jean";
		bookjd = "Jude";
		bookap = "Apocalypse";
		break;

	case "en":
		bookgn = "";
		bookgn = "";
		bookex = "";
		booklv = "";
		booknb = "";
		bookdt = "";
		bookjos = "";
		bookjg = "";
		bookrt = "";
		book1s = "";
		book2s = "";
		book1r = "";
		book2r = "";
		book1ch = "";
		book2ch = "";
		bookesd = "";
		bookne = "";
		booktb = "";
		bookjdt = "";
		bookest = "";
		book1m = "";
		book2m = "";
		bookjb = "";
		bookpr = "";
		bookqo = "";
		bookct = "";
		booksg = "";
		booksi = "";
		bookps1 = "";
		bookps2 = "";
		bookps3 = "";
		bookis = "";
		bookjr = "";
		bookla = "";
		bookba = "";
		bookez = "";
		bookda = "";
		bookos = "";
		bookjl = "";
		bookam = "";
		bookab = "";
		bookjon = "";
		bookmi = "";
		bookna = "";
		bookha = "";
		bookso = "";
		bookag = "";
		bookza = "";
		bookml = "";
		bookmt = "";
		bookmc = "";
		booklc = "";
		bookjn = "";
		bookac = "";
		bookrm = "";
		book1co = "";
		book2co = "";
		bookga = "";
		bookep = "";
		bookph = "";
		bookcol = "";
		book1th = "";
		book2th = "";
		book1tm = "";
		book2tm = "";
		booktt = "";
		bookphm = "";
		bookhe = "";
		bookjc = "";
		book1p = "";
		book2p = "";
		book1jn = "";
		book2jn = "";
		book3jn = "";
		bookjd = "";
		bookap = "";
		break;
}
// ðis ſwitch alſo determines ðe title diſplayed on tab, alſo determined by language. DO NOȜT TOUCH!!!
// if poſsible, iȝ'd like to reduce it in a more ſimple form ſome day.
switch (BOOK) {
	case "gn":
		shorttitle = bookgn;
		break;
	case "ex":
		shorttitle = bookex;
		break;
	case "lv":
		shorttitle = booklv;
		break;
	case "nb":
		shorttitle = booknb;
		break;
	case "dt":
		shorttitle = bookdt;
		break;
	case "jos":
		shorttitle = bookjos;
		break;
	case "jg":
		shorttitle = bookjg;
		break;
	case "rt":
		shorttitle = bookrt;
		break;
	case "1s":
		shorttitle = book1s;
		break;
	case "2s":
		shorttitle = book2s;
		break;
	case "1r":
		shorttitle = book1r;
		break;
	case "2r":
		shorttitle = book2r;
		break;
	case "1ch":
		shorttitle = book1ch;
		break;
	case "2ch":
		shorttitle = book2ch;
		break;
	case "esd":
		shorttitle = bookesd;
		break;
	case "ne":
		shorttitle = bookne;
		break;
	case "tb":
		shorttitle = booktb;
		break;
	case "jdt":
		shorttitle = bookjdt;
		break;
	case "est":
		shorttitle = bookest;
		break;
	case "1m":
		shorttitle = book1m;
		break;
	case "2m":
		shorttitle = book2m;
		break;
	case "jb":
		shorttitle = bookjb;
		break;
	case "pr":
		shorttitle = bookpr;
		break;
	case "qo":
		shorttitle = bookqo;
		break;
	case "ct":
		shorttitle = bookct;
		break;
	case "sg":
		shorttitle = booksg;
		break;
	case "si":
		shorttitle = booksi;
		break;
	case "ps-001-050":
		shorttitle = bookps1;
		break;
	case "ps-051-100":
		shorttitle = bookps2;
		break;
	case "ps-101-150":
		shorttitle = bookps3;
		break;
	case "is":
		shorttitle = bookis;
		break;
	case "jr":
		shorttitle = bookjr;
		break;
	case "la":
		shorttitle = bookla;
		break;
	case "ba":
		shorttitle = bookba;
		break;
	case "ez":
		shorttitle = bookez;
		break;
	case "da":
		shorttitle = bookda;
		break;
	case "os":
		shorttitle = bookos;
		break;
	case "jl":
		shorttitle = bookjl;
		break;
	case "am":
		shorttitle = bookam;
		break;
	case "ab":
		shorttitle = bookab;
		break;
	case "jon":
		shorttitle = bookjon;
		break;
	case "mi":
		shorttitle = bookmi;
		break;
	case "na":
		shorttitle = bookna;
		break;
	case "ha":
		shorttitle = bookha;
		break;
	case "so":
		shorttitle = bookso;
		break;
	case "ag":
		shorttitle = bookag;
		break;
	case "za":
		shorttitle = bookza;
		break;
	case "ml":
		shorttitle = bookml;
		break;
	case "mt":
		shorttitle = bookmt;
		break;
	case "mc":
		shorttitle = bookmc;
		break;
	case "lc":
		shorttitle = booklc;
		break;
	case "jn":
		shorttitle = bookjn;
		break;
	case "ac":
		shorttitle = bookac;
		break;
	case "rm":
		shorttitle = bookrm;
		break;
	case "1co":
		shorttitle = book1co;
		break;
	case "2co":
		shorttitle = book2co;
		break;
	case "ga":
		shorttitle = bookga;
		break;
	case "ep":
		shorttitle = bookep;
		break;
	case "ph":
		shorttitle = bookph;
		break;
	case "col":
		shorttitle = bookcol;
		break;
	case "1th":
		shorttitle = book1th;
		break;
	case "2th":
		shorttitle = book2th;
		break;
	case "1tm":
		shorttitle = book1tm;
		break;
	case "2tm":
		shorttitle = book2tm;
		break;
	case "tt":
		shorttitle = booktt;
		break;
	case "phm":
		shorttitle = bookphm;
		break;
	case "he":
		shorttitle = bookhe;
		break;
	case "jc":
		shorttitle = bookjc;
		break;
	case "1p":
		shorttitle = book1p;
		break;
	case "2p":
		shorttitle = book2p;
		break;
	case "1jn":
		shorttitle = book1jn;
		break;
	case "2jn":
		shorttitle = book2jn;
		break;
	case "3jn":
		shorttitle = book3jn;
		break;
	case "jd":
		shorttitle = bookjd;
		break;
	case "ap":
		shorttitle = bookap;
		break;
	case "books":
		shorttitle = booklist;
		break;
	default:
		shorttitle = book + BOOK;
		break;
}
const BOOKMARK = shorttitle + " - " + shortversion;
