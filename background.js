chrome.runtime.onInstalled.addListener(function (object) {
	if(object.reason==='install')
		chrome.tabs.create({url: "https://sites.google.com/view/crx/youtube-edge2edge-mode"});
});

chrome.webNavigation.onHistoryStateUpdated.addListener(function(details) {
    chrome.tabs.executeScript(null,{file:"content.js"});
	chrome.tabs.insertCSS(null,{file:"app_player.css"});
});