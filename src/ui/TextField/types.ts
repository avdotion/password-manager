import {Style} from 'style9';
import {ExtendComponentProps} from '../../utils/component';

export type CommonInputProps = ExtendComponentProps<JSX.IntrinsicElements['input'], {
    value: string,
    htmlInputStyles: Style[],
    onValueChange: (value: string) => void,
}>;
