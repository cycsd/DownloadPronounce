import { GetCurrentWebSite, SupportWebsite } from '../utils/domain';
import { GetLastSegmentOfUrl } from '../utils/util';
import { Cambridge } from './components/cambridge';
import { Webster } from './components/webster';


const web = GetCurrentWebSite();
const word = GetLastSegmentOfUrl(location.href).split('?')[0];
const run = (web: SupportWebsite, word: string) => {
    switch (web.domain) {
        case 'dictionary.cambridge.org':
            Cambridge(word);
            break;
        case 'www.merriam-webster.com':
            Webster(word);
    }
}

run(web, word);



