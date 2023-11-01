chrome.storage.local.get(['url']).then(async (result) => {
  await chrome.tabs.update({ url: result.url });
});
