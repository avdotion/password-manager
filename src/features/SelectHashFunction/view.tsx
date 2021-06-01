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
                onChange={onSelect}
                title="Select hash function"
            >
                {keysOf(HASH_FUNCTIONS).map(hashFunctionName => (
                    <Option key={hashFunctionName} value={hashFunctionName}>{hashFunctionName}</Option>
                ))}
            </Select>
        </Label>
    );
}
