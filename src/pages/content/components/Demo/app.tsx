import copy from "@src/assets/img/copy.svg";
import "@src/styles/index.css";

const App = () => {
  return (
    <div class="inline-block">
          <img
            src={chrome.runtime.getURL(copy)}
            alt="download"
          />
    </div>
  );
};

export default App;
