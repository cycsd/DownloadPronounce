import { render } from "solid-js/web";
import App from "./components/Demo/app";

const places = document.querySelectorAll(".dpron-i");

//root.id = "extension-root";
places.forEach(place => {
    const temp = document.createElement("div");
    console.log("uk element");
    console.log(place);
    place.insertAdjacentElement('afterbegin', temp);
    render(() => <App />, temp);

})

