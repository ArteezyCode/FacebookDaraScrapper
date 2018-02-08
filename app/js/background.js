var CWS_LICENSE_API_URL = 'https://www.googleapis.com/chromewebstore/v1.1/userlicenses/';
var req = new XMLHttpRequest();

var license;

chrome.identity.getAuthToken({
  'interactive': false
}, function(token) {
  if (chrome.runtime.lastError) {
    alert("Error");
  } else {
    // console.log(chrome.runtime.id);
    req.open('GET', CWS_LICENSE_API_URL + chrome.runtime.id);
    req.setRequestHeader('Authorization', 'Bearer ' + token);
    req.onreadystatechange = function() {
      if (req.readyState == 4) {
        license = JSON.parse(req.responseText);
        // console.log(license);
      }
    }
    req.send();
  }
});


chrome.runtime.onMessage.addListener(function(response,sender,sendResponse){
    // console.log(response);
    
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {license: license.accessLevel}, function(response) {
        // console.log(response.farewell);
      });
    });
  })