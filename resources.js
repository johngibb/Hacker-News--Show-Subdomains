var getLocalUrl = function(url, success){
	chrome.extension.sendRequest({getLocalUrl: url}, success);
}