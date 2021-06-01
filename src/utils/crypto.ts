import CryptoES from 'crypto-es';

export const stringToNumber = (value: string): number => {
    let result = 0;
    for (let i = 0; i < value.length; ++i) {
        result += value.charCodeAt(i) * i;
    }
    return result;
};

export const md5 = (value: string): CryptoES.lib.WordArray => CryptoES.MD5(value);
export const sha3 = (value: string): CryptoES.lib.WordArray => CryptoES.SHA3(value);
export const base64 = (value: CryptoES.lib.WordArray): string => value.toString(CryptoES.enc.Base64);

export const escapeBase64 = (value: string): string =>
    value
        .replace(/=+$/, '')
        .replace(/\+/g, '-')
        .replace(/\//g, '_');

