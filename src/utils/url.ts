function parseUrl(url: string): URL | void {
    let urlToParse = url;
    if (!url.startsWith('https://')) urlToParse =  `https://${url}`;

    try {
        return new URL(urlToParse);
        // eslint-disable-next-line no-empty
    } catch (e: unknown) {}
}

export function extractHost(url: string): string {
    return parseUrl(url)?.host ?? url;
}

export function extractOrigin(url: string): string {
    return parseUrl(url)?.origin ?? url;
}
