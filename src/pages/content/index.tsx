import { SupportWebsite, SupportWebsites } from '../utils/domain';
import { GetLastSegmentOfUrl } from '../utils/util';
import { Cambridge } from './components/cambridge';

interface Combridge {
    webtag: 'cambridge'
}

const web = SupportWebsites.find(web => location.href.includes(web.domain));
const word = GetLastSegmentOfUrl(location.href);
const run = (web: SupportWebsite, word: string) => {
    switch (web.domain) {
        case 'dictionary.cambridge.org':
            Cambridge(word);
            break;
    }
}

run(web, word);



