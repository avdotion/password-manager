import {base64, escapeBase64, md5, sha3} from './utils/crypto';
import {trim} from './utils/syntax';
import {extractHost} from './utils/url';

export const HASH_FUNCTIONS = {md5, sha3} as const;
export type HashFunctionName = keyof typeof HASH_FUNCTIONS;
export type HashFunction = typeof HASH_FUNCTIONS[keyof typeof HASH_FUNCTIONS];
export const DEFAULT_HASH_FUNCTION_NAME: HashFunctionName = 'sha3';

export function saltThePass(
    hashFunction: HashFunction,
    length: number,
    masterPassword: string,
    domainName: string,
    email: string,
): string {
    if (masterPassword === '' && domainName === '' && email === '') {
        return '';
    }

    return trim(
        length,
        escapeBase64(
            base64(
                hashFunction(
                    masterPassword +
                    extractHost(domainName) +
                    email
                )
            )
        )
    );
}
