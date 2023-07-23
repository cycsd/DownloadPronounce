import "@src/styles/index.css";
import { For, Show, createResource } from 'solid-js';
import { GetSupportUrls, SupportWebsites } from '../utils/domain';
import { GetLastSegmentOfUrl } from '../utils/util';

const Popup = () => {
  const getTabs = async () => {
    const urls = GetSupportUrls();
    const tabs = await chrome.tabs.query({ url: urls });
    return tabs;
  }
  const [tabs] = createResource(getTabs);
  const focusTab = (tab: chrome.tabs.Tab) => {
    chrome.tabs.update(tab.id, { active: true });
  }

  const getHistory = async () => {
    const histories = await chrome.history.search({ text: '' });
    return histories.filter(
      his => SupportWebsites.some(web => his.url.includes(web.domain))
    );
  }
  const [histories, { mutate: setHistories }] = createResource(getHistory);


  const openNewTab = (urlPath: string) => {
    chrome.tabs.create({ url: urlPath })
  }
  return (
    <div>
      <For each={tabs()}>{
        (tab) => <div class=' grid grid-cols-1 col-span-4 overflow-auto'>
          <div onclick={e => focusTab(tab)} class='hover:bg-sky-700  hover:text-white p-5'>
            <span class='text-xl font-black'>
              {GetLastSegmentOfUrl(tab.url)}
            </span>
            <span class='text-base text-orange-500'>
              {`  : ${SupportWebsites.find(web => tab.url.includes(web.domain))?.name}`}
            </span>
          </div>
        </div>
      }
      </For>
      <Show when={histories.state === 'ready'} fallback={<p>onLoading....</p>}>
        <>
          <For each={histories().filter(h => !tabs().some(tab => tab.url === h.url))}>{
            (his) => <div class=' grid grid-cols-1 col-span-4 overflow-auto'>
              <div onclick={e => openNewTab(his.url)} class='hover:bg-sky-700  hover:text-white p-5'>
                <span class='text-xl font-black'>
                  {GetLastSegmentOfUrl(his.url)}
                </span>
                <span class='text-base text-orange-500'>
                  {`  : ${SupportWebsites.find(web => his.url.includes(web.domain))?.name}`}
                </span>
              </div>
            </div>
          }
          </For>
        </>
      </Show>
    </div>
  );
};

export default Popup;
