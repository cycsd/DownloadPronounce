import { render } from 'solid-js/web';
import App from './Demo/app';

export function Webster(word: string) {
    const audio_json_structure = JSON.parse(document.querySelector('script[type="application/ld+json"]').innerHTML);
    const audio_url = audio_json_structure[4].contentURL;
    const target_element_class = ".word-syllables-prons-header-content";//".word-syllables-prons-header-content"
    const targets = document.querySelectorAll(target_element_class);

    targets.forEach((target:HTMLElement, index) => {
        const insert_element = document.createElement("div");
        insert_element.style.display = 'inline-block';
        target.insertAdjacentElement('beforeend', insert_element);
        render(() => <App audio_src={audio_url} word_text={word} />, insert_element);

    })
}