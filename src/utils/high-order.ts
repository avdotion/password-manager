export function debounce<Callback extends (...args) => void>(
    callback: Callback,
    waitFor: number,
    immediate?: boolean
): (...args: Parameters<Callback>) => void {
    let timeout: NodeJS.Timeout | null;

    return function(...args: Parameters<Callback>) {
        timeout && clearTimeout(timeout);
        timeout = setTimeout(() => {
            timeout = null;
            if (!immediate) {
                callback.apply(this, args);
            }
        }, waitFor);

        if (immediate && !timeout) {
            callback.apply(this, args);
        }
    };
}
