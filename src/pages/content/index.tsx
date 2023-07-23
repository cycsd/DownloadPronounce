import { Cambridge } from './components/cambridge';

interface Combridge {
    webtag: 'cambridge'
}


const word = location.href.substring(location.href.lastIndexOf('/') + 1);
Cambridge(word);



