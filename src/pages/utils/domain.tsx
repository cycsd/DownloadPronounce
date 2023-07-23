
interface CambridgeInfo {
    domain: 'dictionary.cambridge.org',
    name: 'Cambridge'
}
const defaultCambridgeInfo: CambridgeInfo =
{
    domain: 'dictionary.cambridge.org',
    name: 'Cambridge'
}
interface FreeDictionaryInfo {
    domain: 'www.thefreedictionary.com',
    name: 'FreeDictionary'
}
const defaultFreeDictionaryInfo: FreeDictionaryInfo =
{
    domain: 'www.thefreedictionary.com',
    name: 'FreeDictionary'
}
const support_htp = ['http', 'https']
type SupportWebsite = CambridgeInfo | FreeDictionaryInfo;

const SupportWebsites: SupportWebsite[] = [defaultCambridgeInfo, defaultFreeDictionaryInfo];
function GetSupportUrls(): string[] {
    return SupportWebsites.flatMap(
        (web) => support_htp.map(htp => `${htp}://${web.domain}/*`));
}
export { GetSupportUrls, SupportWebsites }
export type { SupportWebsite }
//["http://dictionary.cambridge.org/*", "https://dictionary.cambridge.org/*","https://www.merriam-webster.com/*"];