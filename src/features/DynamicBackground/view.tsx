import {memo} from 'preact/compat';
import {JSX} from 'preact';
import style9 from 'style9';

import {COLORFUL_EMOJIS_ORDERED_LIST} from '../../constants';
import {Frame} from '../../ui/layout/Frame';
import {Text} from '../../ui/Text';
import {choice} from '../../utils/random';
import {times} from '../../utils/syntax';

const dynamicBackgroundStyles = style9.create({
    root: {
        position: 'absolute',
        height: '100%',
        animationName: style9.keyframes({
            from: {
                transform: 'rotate(0deg) translate(0)',
            },
            to: {
                transform: 'rotate(360deg) translate(0)',
            },
        }),
        animationTimingFunction: 'linear',
        animationDuration: '100s',
        animationIterationCount: 'infinite',
        transformOrigin: 'center center',
    },
    emoji: {
        width: 'auto',
        position: 'absolute',
        userSelect: 'none',
        animationName: style9.keyframes({
            from: {
                transform: 'rotate(360deg) translate(0)',
            },
            to: {
                transform: 'rotate(0deg) translate(0)',
            },
        }),
        animationTimingFunction: 'linear',
        animationDuration: '100s',
        animationIterationCount: 'infinite',
        transformOrigin: 'center center',
    },
});

const START = 10;
const END = 32;
const OFF_THE_ROOT = 10;

export const DynamicBackground = memo(function DynamicBackground(): JSX.Element {
    return (
        <Frame
            def="dynamic-background"
            styles={[dynamicBackgroundStyles.root]}
        >
            {times(40, index => {
                const randomEmoji = choice(COLORFUL_EMOJIS_ORDERED_LIST);

                const X = Math.floor(Math.random() * (100 + OFF_THE_ROOT * 2) - OFF_THE_ROOT);
                const Y = Math.floor(Math.random() * (100 + OFF_THE_ROOT * 2) - OFF_THE_ROOT);

                const fontSize = START + (index * Math.floor((END - START) / index));

                return (
                    <Text
                        styles={[dynamicBackgroundStyles.emoji]}
                        style={{
                            fontSize: `${fontSize}px`,
                            top: `${Y}%`,
                            left: `${X}%`,
                            transform: `translateY(-${Y}%) translateX(-${X}%)`,
                        }}
                        key={index}
                        def="floating-emoji"
                    >
                        {randomEmoji}
                    </Text>
                );
            })}
        </Frame>
    );
});
