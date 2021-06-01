import {default as browserCopy} from 'copy-to-clipboard';
import {useAtom} from '@reatom/react';

import {Button} from '../../ui/Button';
import {saltedPassword} from '../GeneratedPassword';

export function CopySaltedPasswordButton (): JSX.Element {
    const [saltedPasswordValue] = useAtom(saltedPassword);

    const copyToClipboard = () => {
        browserCopy(saltedPasswordValue);
    };

    return saltedPasswordValue !== ''
        ? (
            <Button variant="action" tabIndex={1} onClick={copyToClipboard}>
                Copy Salted Password
            </Button>
        )
        : (
            <Button variant="action" tabIndex={1} disabled>
                Salt the pass!
            </Button>
        )
    ;
}
