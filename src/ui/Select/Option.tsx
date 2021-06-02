import {JSX} from 'preact';
import {ExtendComponentProps} from '../../utils/component';

type OptionProps = ExtendComponentProps<JSX.IntrinsicElements['option'], {

}>;

export function Option({
    ...props
}: OptionProps): JSX.Element {
    return (
        <option {...props} />
    );
}
