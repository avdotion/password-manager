import {useAtom} from '@reatom/react';
import style9 from 'style9';

import {emojiPrompt} from './context';
import {Text} from '../../ui/Text';

const emojiPromptStyles = style9.create({
    defaults: {
        letterSpacing: 10,
        fontSize: 40,
    },
});

export function EmojiPrompt(): JSX.Element {
    const [emojiPromptValue] = useAtom(emojiPrompt);
    return (
        <Text
            styles={[emojiPromptStyles.defaults]}
            align="center"
            def="emoji-prompt"
        >
            {emojiPromptValue.join(' ')}
        </Text>
    );
}
