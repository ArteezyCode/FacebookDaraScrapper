$(document).ready(function () {
  $('.btn').on('click', function () {
    chrome.storage.sync.set({'work': 'work'});
    chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
      var activeTab = tabs[0];
      chrome.tabs.sendMessage(activeTab.id, {'message': 'reload'});
    });
  });

});


