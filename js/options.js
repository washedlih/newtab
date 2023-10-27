const input = document.querySelector('input');

chrome.storage.local.get(['url'], (result) => {
  result.url && (input.value = result.url);
});

document.querySelector('form').onsubmit = () => {
  chrome.storage.local.set({ url: input.value });
  window.close();
};
