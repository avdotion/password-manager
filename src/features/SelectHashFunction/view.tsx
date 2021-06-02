import {JSX} from 'preact';
import {useAtom} from '@reatom/react';
import {HASH_FUNCTIONS} from '../../salting';
import {Label} from '../../ui/Label';
import {Option, Select} from '../../ui/Select';
import {keysOf} from '../../utils/syntax';
import {hashFunctionName} from './context';

export function SelectHashFunction(): JSX.Element {
    const [hashFunctionNameValue, {change: onSelect}] = useAtom(hashFunctionName);

    return (
        <Label label="Hash function:">
            <Select
                value={hashFunctionNameValue}
                tabIndex={3}
                onChange={onSelect}
            >
                {keysOf(HASH_FUNCTIONS).map(hashFunctionName => (
                    <Option key={hashFunctionName} value={hashFunctionName}>{hashFunctionName}</Option>
                ))}
            </Select>
        </Label>
    );
}
