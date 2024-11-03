// inserting the whole script
const BODY = document.querySelector("body");

const VARS = document.createElement("script");
	VARS.setAttribute("src", "../../js/variables.js");

const HDP = document.createElement("script");
	HDP.setAttribute("src", "../../js/head.js");

const NBR = document.createElement("script");
	NBR.setAttribute("src", "../../js/navbar.js");

const FTR = document.createElement("script");
	FTR.setAttribute("src", "../../js/footer.js");

BODY.appendChild(VARS);
BODY.appendChild(HDP);
BODY.appendChild(NBR);
BODY.appendChild(FTR);