import {forwardRef} from 'react';
import style9 from 'style9';

import {CommonInputProps} from './types';

// eslint-disable-next-line react/display-name
export const TextInput = forwardRef<HTMLInputElement, CommonInputProps>(({
    htmlInputStyles,
    ...props
}: CommonInputProps, htmlInputRef) => {
    return (
        <input
            ref={htmlInputRef}
            className={style9(...htmlInputStyles)}
            {...props}
        />
    );
});
