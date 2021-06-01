import {forwardRef, FocusEvent} from 'react';
import style9 from 'style9';
import {extractOrigin} from '../../utils/url';

import {CommonInputProps} from './types';

// eslint-disable-next-line react/display-name
export const UrlInput = forwardRef<HTMLInputElement, CommonInputProps>(({
    htmlInputStyles,
    value,
    onChange: onChangeCallback,
    onBlur: onBlurCallback,
    onValueChange,
    ...props
}: CommonInputProps, htmlInputRef) => {
    const onBlur = (event: FocusEvent<HTMLInputElement>) => {
        onValueChange(extractOrigin(value));
        onBlurCallback && onBlurCallback(event);
    };

    return (
        <input
            ref={htmlInputRef}
            type="url"
            role="url"
            name="url"
            value={value}
            className={style9(...htmlInputStyles)}
            onChange={onChangeCallback}
            onBlur={onBlur}
            {...props}
        />
    );
});
