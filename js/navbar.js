if (BOOK == "books") {
} else {
	HEADER.appendChild(LISTLINK);
	LISTLINK.setAttribute("href", "./books.html");
	LISTLINK.innerHTML = mainlist;
}

//my maſterpiece
chapitres = document.getElementsByClassName("chapter");
size = chapitres.length;

//ðis function create a liſt of liſts of ten items each
function makelist() {
	list = document.createElement("li");
	MAINLIST.appendChild(list);
	list.setAttribute("class", "title");
	number = document.createElement("a");
	list.appendChild(number);
	sublist = document.createElement("ul");
	list.appendChild(sublist);
	if (10 * j <= size) {
		sublistname = i + " - " + 10 * j;
	} else {
		sublistname = i + " - " + size;
	}
	number.innerHTML = sublistname;
}

//ðis functions create the items ðat will be put by tens by the aboveſaid function
function makeitem() {
	menuitem = document.createElement("li");
	menuitem.setAttribute("class", "roll");
	link = document.createElement("a");
	sublist.appendChild(menuitem);
	menuitem.appendChild(link);
	link.setAttribute("href", "#" + BOOK + "-" + i);
	link.innerHTML = i;
	i++;
}

//ðis is a ſwitch for if ðere is only one chapter, to determine ðe language ðat will be used in the "nochapter" item
switch (LANG) {
	case "fr":
		nochapter = "chapitre unique";
		break;
	case "en":
		nochapter = "no chapter";
		break;
	case "la":
		nochapter = "caput unicum";
		break;
	case "egy":
		nochapter = "-";
		break;
}

//if only one, ðe aboveſaid ſwitch is triggered
if (size == 1) {
	list = document.createElement("li");
	MAINLIST.appendChild(list);
	list.setAttribute("class", "title");
	number = document.createElement("a");
	list.appendChild(number);
	number.innerHTML = nochapter;
} else {
	//in any oðer case, ðis baby comes into action, a mix of ðe two firſt functions of ðis ſcript. and if you don't underſtand it, juſt conſider it's magic.
	while (i <= size) {
		//until it reaches ðe total of anchors (ſize),
		y++; //initialises ðe counter of ten,
		if (y == 1) {
			//for each new pack of ten initialised,
			makelist(); //create ðe pack,
			j++; //for each new pack,
		} //ðen,
		makeitem(i); //fill it wið ðe liſt items and,
		if (y == 10) {
			y = 0;
		} //ƕen reaching 10, go back to 0, making a new pack if needed.
	}
}
