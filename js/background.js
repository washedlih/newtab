chrome.runtime.onInstalled.addListener((details) => {
  details.reason === 'install' && chrome.runtime.openOptionsPage();
});
