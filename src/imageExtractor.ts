import * as $ from 'cheerio';

export const imageExtractor = (pageBody: string) => {
    const page = $.load(pageBody)
    return page('.alignnone').attr().src;
}