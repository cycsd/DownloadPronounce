async function getCurrentTab() {
    let queryOptions = { active: true, lastFocusedWindow: true };
    // `tab` will either be a `tabs.Tab` instance or `undefined`.
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab;
  }

  async function getHistory() {
    let queryOptions = {text: '', maxResults: 10};
    // `tab` will either be a `tabs.Tab` instance or `undefined`.
    let [tab] = await chrome.history.search(queryOptions);
    return tab;
  }

  function GetLastSegmentOfUrl(urlPath:string){
    return urlPath.substring(urlPath.lastIndexOf('/') + 1);
  }

  export { GetLastSegmentOfUrl, getCurrentTab, getHistory };

