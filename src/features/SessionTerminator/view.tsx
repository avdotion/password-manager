import {JSX} from 'preact';
import {useAtom} from '@reatom/react';
import {Text} from '../../ui/Text';
import {terminationTimeLeft} from './context';

const SECONDS_IN_MINUTE = 60;
function formatTime(time: number) {
    const timeInSeconds = Math.floor(time / 1000);

    const minutes = String(Math.floor(timeInSeconds / SECONDS_IN_MINUTE));
    const seconds = String(timeInSeconds % SECONDS_IN_MINUTE).padStart(2, '0');

    return `${minutes}:${seconds}`;
}

export function SessionTerminator(): JSX.Element {
    const [terminationTimeLeftValue] = useAtom(terminationTimeLeft);

    return (
        <Text align="center">
            {terminationTimeLeftValue > 0
                ? `The session will be terminated in ${formatTime(terminationTimeLeftValue)}`
                : 'The session has been terminated or simply not started'
            }
        </Text>
    );
}
