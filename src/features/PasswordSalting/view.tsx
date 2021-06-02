import {useAtom} from '@reatom/react';
import {JSX} from 'preact';

import {Frame} from '../../ui/layout/Frame';
import {TextField} from '../../ui/TextField';
import {domainName, email, masterPassword} from './context';

export function PasswordSalting(): JSX.Element {
    const [masterPasswordValue, {change: onChangeMasterPassword}] = useAtom(masterPassword);
    const [domainNameValue, {change: onChangeDomainName}] = useAtom(domainName);
    const [emailValue, {change: onChangeEmail}] = useAtom(email);

    return (
        <Frame gap={6}>
            <TextField
                placeholder="Super-Secret Master Password"
                type="password"
                value={masterPasswordValue}
                autoFocus
                tabIndex={1}
                autoComplete="current-password"
                onChange={onChangeMasterPassword}
            />
            <TextField
                placeholder="Domain Name"
                type="url"
                value={domainNameValue}
                tabIndex={1}
                onChange={onChangeDomainName}
            />
            <TextField
                placeholder="E-mail"
                type="email"
                value={emailValue}
                tabIndex={1}
                onChange={onChangeEmail}
            />
        </Frame>
    );
}
