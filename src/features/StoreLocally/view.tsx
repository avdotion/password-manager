import {useAtom} from '@reatom/react';
import {JSX} from 'preact';
import {storeLocallyObserver} from './context';

export function StoreLocallyConnector(): JSX.Element {
    useAtom(storeLocallyObserver);

    return null;
}
