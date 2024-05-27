book = document.querySelector("body").attributes[0].nodeValue;
chapitres = document.getElementsByClassName("chapter");
size = chapitres.length;


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

function makeitem(){
	menuitem = document.createElement("li");
	menuitem.setAttribute("class", "roll");
	link = document.createElement("a");
	sublist.appendChild(menuitem);
	menuitem.appendChild(link);
	link.setAttribute("href","#" + book + "-" + i);
	link.innerHTML = i;
	i++;
};

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
}

if(size == 1) {
	list = document.createElement("li");
	MAINLIST.appendChild(list);
	list.setAttribute("class", "title");
	number = document.createElement("a");
	list.appendChild(number);
	number.innerHTML = nochapter;
} else {
	while(i <= size){
		y++;
		if(y == 1){
			makelist();
			j++;
		};
		makeitem(i);
		if(y == 10){
			y = 0;
		};
	};
};