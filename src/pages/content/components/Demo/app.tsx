import copy from "@src/assets/img/copy.svg";
import "@src/styles/index.css";

const App = (props: { audio_src: string }) => {
  const onCopyClick = () => {
    navigator.clipboard.writeText(props.audio_src);
  };
  return (
    <div class="inline-block">
      <button onclick={onCopyClick}>
        <img
          src={chrome.runtime.getURL(copy)}
          alt="download"
        />
      </button>
    </div>
  );
};

export default App;
