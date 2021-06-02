import {WordArray} from 'crypto-es/lib/core';
import {MD5} from 'crypto-es/lib/md5';
import {SHA3} from 'crypto-es/lib/sha3';
import {SHA256} from 'crypto-es/lib/sha256';
import {SHA512} from 'crypto-es/lib/sha512';
import {RIPEMD160} from 'crypto-es/lib/ripemd160';

import {Base64} from 'crypto-es/lib/enc-base64';

export const stringToNumber = (value: string): number => {
    let result = 0;
    for (let i = 0; i < value.length; ++i) {
        result += value.charCodeAt(i) * i;
    }
    return result;
};

export const md5 = (value: string): WordArray => MD5(value);
export const sha3 = (value: string): WordArray => SHA3(value);
export const sha256 = (value: string): WordArray => SHA256(value);
export const sha512 = (value: string): WordArray => SHA512(value);
export const ripemd160 = (value: string): WordArray => RIPEMD160(value);

export const base64 = (value: WordArray): string => value.toString(Base64);

export const escapeBase64 = (value: string): string =>
    value
        .replace(/=+$/, '')
        .replace(/\+/g, '-')
        .replace(/\//g, '_');

