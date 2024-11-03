if (BOOK == "books") {
} else {
	HEADER.appendChild(LISTLINK);
	LISTLINK.setAttribute("href", "./books.html");
	LISTLINK.innerHTML = mainlist;
}

//my masterpiece
chapitres = document.getElementsByClassName("chapter");
size = chapitres.length;

//this function creat a list of lists of ten items each
function makelist(){
	list = document.createElement("li");
	MAINLIST.appendChild(list);
	list.setAttribute("class", "title");
	number = document.createElement("a");
	list.appendChild(number);
	sublist = document.createElement("ul");
	list.appendChild(sublist);
	if(10 * j <= size){
		sublistname = i + " - " + 10 * j;
	}else{
		sublistname = i + " - " + size;
	};
	number.innerHTML = sublistname;
};

//this functions creat the items that will be put by tens by the abovesaid function
function makeitem(){
	menuitem = document.createElement("li");
	menuitem.setAttribute("class", "roll");
	link = document.createElement("a");
	sublist.appendChild(menuitem);
	menuitem.appendChild(link);
	link.setAttribute("href","#" + BOOK + "-" + i);
	link.innerHTML = i;
	i++;
};

//this is a switch for if there is only one chapter, to determine the language that will be used in the nochapter item
switch(LANG){
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
};

//if only one, the abovesaid switch is triggered
if(size == 1) {
	list = document.createElement("li");
	MAINLIST.appendChild(list);
	list.setAttribute("class", "title");
	number = document.createElement("a");
	list.appendChild(number);
	number.innerHTML = nochapter;
} else { //in any other case, this baby comes into action, a mix of the two first functions of this script. and if you don't understand it, just consider it's magic.
	while(i <= size){ //until i reaches the total of anchors (size),
		y++; //initialises the counter of ten,
		if(y == 1){ //for each new pack of ten initialised,
			makelist(); //create the pack,
			j++;  //for each new pack,
		}; //then,
		makeitem(i); //fill it with the list items and,
		if(y == 10){
			y = 0;
		};//when reaching 10, go back to 0, making a new pack if needed.
	};
};