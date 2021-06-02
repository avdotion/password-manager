function parseUrl(url: string): URL | undefined {
    let urlToParse = url;
    if (!url.startsWith('https://')) urlToParse =  `https://${url}`;

    try {
        return new URL(urlToParse);
        // eslint-disable-next-line no-empty
    } catch (e: unknown) {}
}

export function extractHost(url: string): string {
    const parsedUrl = parseUrl(url);
    return parsedUrl != null ? parsedUrl?.host : url;
}

export function extractOrigin(url: string): string {
    const parsedUrl = parseUrl(url);
    return parsedUrl != null ? parsedUrl?.origin : url;
}
