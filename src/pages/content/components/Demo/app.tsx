import copy from "@src/assets/img/copy.svg";
import download from "@src/assets/img/download.svg";
import "@src/styles/index.css";

const App = (props: { audio_src: string, word_text: string }) => {
  const onCopyClick = () => {
    navigator.clipboard.writeText(props.audio_src);
  };
  return (
    <div class="inline-block">
      <button onclick={onCopyClick}>
        <img
          src={chrome.runtime.getURL(copy)}
          alt="copy"
        />
      </button>
      <a href={props.audio_src} download={props.word_text}>
        <img
          src={chrome.runtime.getURL(download)}
          alt="download"
        />
      </a>
    </div>
  );
};

export default App;
