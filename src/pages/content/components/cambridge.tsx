import { render } from 'solid-js/web';
import App from './Demo/app';

export function Cambridge(word:string) {
    const audio_paraent_span_class = ".daud";
    const target_element_class = ".dpron-i"
    const spans = document.querySelectorAll(audio_paraent_span_class);
    const targets = document.querySelectorAll(target_element_class);

    targets.forEach((place, index) => {
        const audio_source = spans[index]
            .querySelector('audio')
            .querySelector('source');
        ;
        const insert_element = document.createElement("div");
        insert_element.style.display = 'inline-block';
        place.insertAdjacentElement('afterbegin', insert_element);
        render(() => <App audio_src={audio_source.src} word_text={word} />, insert_element);

    })
}