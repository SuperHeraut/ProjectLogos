//indices
let i = 1;
let j = 1;
let y = 0;
// other vars
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

//constants
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

//this switch impacts the footer content
switch (VERSION) {
	case "aelf":
		shortversion = "Traduction Liturgique de la Bible";
		footercontent1 = "pour la traduction liturgique de la Bible:";
		footerlink = document.createElement("a");
		footerlink.setAttribute("href", "http://www.aelf.org");
		footerlink.innerHTML = "AELF";
		footercontent2 = "tous droits r&eacute;serv&eacute;s";
		footercontent = footercontent1 + " " + footerlink.outerHTML + ", " + footercontent2;
		break;
	default:
		shortversion = "";
		footercontent = "";
};

// the following determine the browser tab
switch (LANG){
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
// this switch also determines the title displayed on tab, also determined by language. DO NOT TOUCH!!!
book = "book";
switch (BOOK) {
	case "ps-001-050":
		shorttitle = bookps1;
		break;
	case "ps-051-100":
		shorttitle = bookps2;
		break;
	case "ps-101-150":
		shorttitle = bookps3;
		break;
	case "books":
		shorttitle = booklist;
	default:
		window[book] = book;
		shorttitle = book + BOOK;
		break
}
console.log(shorttitle);
console.log(window[shorttitle]);
const BOOKMARK = shorttitle + " - " + shortversion;