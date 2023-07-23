
export function FreeDictionary(word: string) {
    const audio_attribute = "[onclick^='snd.play']";
    const audios = document.querySelectorAll(audio_attribute);
    console.log('inFreeDicitonary');
    console.log(audios);
    // const target_element_class = ".word-syllables-prons-header-content";//".word-syllables-prons-header-content"
    // const targets = document.querySelectorAll(target_element_class);
    
    // targets.forEach((place, index) => {
    //     const audio_source = spans[index]
    //         .querySelector('audio')
    //         .querySelector('source');
    //     ;
    //     const insert_element = document.createElement("div");
    //     insert_element.style.display = 'inline-block';
    //     place.insertAdjacentElement('beforeend', insert_element);
    //     render(() => <App audio_src={audio_source.src} word_text={word} />, insert_element);

    // })
}