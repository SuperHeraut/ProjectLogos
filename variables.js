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
let menuitem;
let next;
let nochapter;
let number;
let size;
let sublist;
let sublistname;

//constants
const BACK = document.createElement("a");
const PAGEURL = location.pathname.split("/");
const LANG = PAGEURL[PAGEURL.length - 3];
const VERSION = PAGEURL[PAGEURL.length - 2];
const BOOK = PAGEURL[PAGEURL.length - 1].split(".")[0];
bookid = document.querySelector("body").setAttribute("id", BOOK);
const HTML = document.querySelector("html");
HTML.setAttribute("lang", LANG);
const HEADER = document.querySelector("header");
const NAVBAR = document.createElement("nav");
HEADER.appendChild(NAVBAR);
const MAINLIST = document.createElement("ul");
NAVBAR.appendChild(MAINLIST);
MAINLIST.setAttribute("id", "menu");
const FOOTER = document.querySelector("footer");
const INFOOTER = document.createElement("span");
FOOTER.appendChild(INFOOTER);

console.log(VERSION);

if (LANG == "egy"){
	BODY.setAttribute("class","hieroglyph vertext");
};

switch(VERSION){
	case "aelf":
		footercontent1 = "pour la traduction liturgique de la Bible:";
		footerlink = document.createElement("a");
		footerlink.setAttribute("href", "http://www.aelf.org");
		footerlink.innerHTML = "AELF";
		footercontent2 = "tous droits r&eacute;serv&eacute;s";
		footercontent = footercontent1 + " " + footerlink.outerHTML + ", " + footercontent2;
		break;
	default:
		footercontent = "-";
}