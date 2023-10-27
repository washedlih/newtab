const input = document.querySelector('input');

chrome.storage.local.get(['url'], (result) => {
  result.url && (input.value = result.url);
});

document.querySelector('button').onclick = () => {
  const newUrl = input.value;
  chrome.storage.local.set({ url: newUrl });
  window.close();
};
