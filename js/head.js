// head meta infos
CHARSET.setAttribute("charset", "UTF-8");

VP.setAttribute("name", "viewport");
VP.setAttribute("content", "width=device-width, initial-scale=1.0");

FAVICON.setAttribute("rel","icon");
FAVICON.setAttribute("type","image/x-icon");
FAVICON.setAttribute("href","../../img/favicon.ico");

TITLE.innerHTML= BOOKMARK;

HEAD.appendChild(CHARSET);
HEAD.appendChild(VP);
HEAD.appendChild(FAVICON);
HEAD.appendChild(TITLE);

// head link css
RESET.setAttribute("rel", "stylesheet");
RESET.setAttribute("href", "../../css/reset.css");

STYLE.setAttribute("rel", "stylesheet");
STYLE.setAttribute("href", "../../css/style.css");

HEAD.appendChild(RESET);
HEAD.appendChild(STYLE);