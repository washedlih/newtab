chrome.runtime.onInstalled.addListener((details) => {
  details === 'install' && chrome.runtime.openOptionsPage();
});
