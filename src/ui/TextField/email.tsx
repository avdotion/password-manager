import {forwardRef} from 'react';
import style9 from 'style9';

import {CommonInputProps} from './types';

// eslint-disable-next-line react/display-name
export const EmailInput = forwardRef<HTMLInputElement, CommonInputProps>(({
    htmlInputStyles,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onValueChange,
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
