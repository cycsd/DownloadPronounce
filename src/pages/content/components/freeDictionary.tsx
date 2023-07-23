import { render } from 'solid-js/web';
import App from './Demo/app';

export function FreeDictionary(word: string) {
    const audios_css = [".snd-icon-US", ".snd-icon-UK", ".snd-icon-plain"];
    const audios = audios_css.map(css => document.querySelector(css));

    audios.forEach((audio: HTMLElement, index) => {
        const url = `https:${audio.getAttribute('onclick').split("'")[1]}`;
        const insert_element = document.createElement("div");
        insert_element.style.display = 'inline-block';
        audio.insertAdjacentElement('afterend', insert_element);
        render(() => <App audio_src={url} word_text={word} />, insert_element);

    })
}