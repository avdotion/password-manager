import {declareAtom as atom, Store} from '@reatom/core';
import {SESSION_TIME_TO_TERMINATE} from '../../constants';
import {debounce} from '../../utils/high-order';
import {saltedPassword} from '../GeneratedPassword';
import {domainName, email, masterPassword} from '../PasswordSalting';

export const terminationTimeLeft = atom(
    ($, state = 0) => {
        $(saltedPassword, (currentSaltedPassword) => (store, ctx) => {
            if (currentSaltedPassword === '') {
                store.dispatch(terminationTimeLeft.reset());
            } else {
                ctx.terminate(store);
                store.dispatch(terminationTimeLeft.fill());
            }

            if (ctx.interval != null) {
                clearInterval(ctx.interval);
                ctx.interval = null;
            }

            ctx.interval = setInterval(() => {
                store.dispatch(terminationTimeLeft.dec());
            }, 1000);
        });

        return state;
    },
    {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        reset: (_: void) => 0,
        dec: (_: void, current) => Math.max(current - 1000, 0),
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        fill: (_: void) => SESSION_TIME_TO_TERMINATE,
    },
    {
        createCtx: () => ({
            interval: null as NodeJS.Timeout | null,
            terminate: debounce((store: Store) => {
                return store.dispatch([
                    masterPassword.change(''),
                    domainName.change(''),
                    email.change(''),
                ]);
            }, SESSION_TIME_TO_TERMINATE),
        }),
    }
);
