// head meta infos
const HEAD = document.querySelector("head");

const CHARSET = document.createElement("meta");
	CHARSET.setAttribute("charset", "UTF-8");

const VP = document.createElement("meta");
	VP.setAttribute("name", "viewport");
	VP.setAttribute("content", "width=device-width, initial-scale=1.0");

HEAD.appendChild(CHARSET);
HEAD.appendChild(VP);

// head link css
const RESET = document.createElement("link");
	RESET.setAttribute("rel", "stylesheet");
	RESET.setAttribute("href", "../../reset.css");

const STYLE = document.createElement("link");
	STYLE.setAttribute("rel", "stylesheet");
	STYLE.setAttribute("href", "../../style.css");

HEAD.appendChild(RESET);
HEAD.appendChild(STYLE);

// inserting the whole script
const BODY = document.querySelector("body");

const VARS = document.createElement("script");
	VARS.setAttribute("src", "../../variables.js");

const NBR = document.createElement("script");
	NBR.setAttribute("src", "../../navbar.js");

const FTR = document.createElement("script");
	FTR.setAttribute("src", "../../footer.js");

BODY.appendChild(VARS);
BODY.appendChild(NBR);
BODY.appendChild(FTR);