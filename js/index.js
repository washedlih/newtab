chrome.storage.local.get(['url'], (result) => {
  chrome.tabs.update({ url: result.url });
});
