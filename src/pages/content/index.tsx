import { GetCurrentWebSite, SupportWebsite, cambridge, freeDictionary, webster } from '../utils/domain';
import { GetLastSegmentOfUrl } from '../utils/util';
import { Cambridge } from './components/cambridge';
import { FreeDictionary } from './components/freeDictionary';
import { Webster } from './components/webster';

interface Process {
    website: SupportWebsite,
    run: (word: string) => void,
}
const curr_web = GetCurrentWebSite();
const word = GetLastSegmentOfUrl(location.href).split('?')[0];
const processes: Process[] = [
    {
        website: cambridge,
        run: Cambridge,
    }, {
        website: webster,
        run: Webster,
    },{
        website: freeDictionary,
        run: FreeDictionary,
    }];

processes.find(proc => proc.website.domain === curr_web.domain)?.run(word);




