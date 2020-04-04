function loadCSS(filename){
	console.log("exec load css")
	var link = document.createElement("link");
	link.href = chrome.extension.getURL(filename);
	link.type = "text/css";
	link.rel = "stylesheet";
	document.getElementsByTagName("html")[0].appendChild(link);
}


chrome.storage.sync.get(['switch'], (res) => {
	switch( res.switch ){
		case false:
		break;
		case true:
		default:
			loadCSS("style/fix-filter.css")
		break;
	}
});