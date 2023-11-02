async function updateTab() {
  const result = await chrome.storage.local.get(['url']);
  await chrome.tabs.update({ url: result.url });
}

updateTab();
