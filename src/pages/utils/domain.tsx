
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
interface WebsterInfo {
    domain: 'www.merriam-webster.com',
    name: 'Webster'
}
const defaultWebsterInfo: WebsterInfo =
{
    domain: 'www.merriam-webster.com',
    name: 'Webster'
}
const support_htp = ['http', 'https']
type SupportWebsite = CambridgeInfo | FreeDictionaryInfo | WebsterInfo;

const SupportWebsites: SupportWebsite[] = [defaultCambridgeInfo, defaultFreeDictionaryInfo, defaultWebsterInfo];
function GetSupportUrls(): string[] {
    return SupportWebsites.flatMap(
        (web) => support_htp.map(htp => `${htp}://${web.domain}/*`));
}
function GetCurrentWebSite(){
    return SupportWebsites.find(web => location.href.includes(web.domain));
}
export { GetCurrentWebSite, GetSupportUrls, SupportWebsites }
export type { SupportWebsite }
