import {render} from 'preact';

import {rawContext} from './context';
import {Root} from './features/Root';
import {IndexPage} from './pages/IndexPage';

function GenericReactPage() {
    return (
        <Root Content={IndexPage} />
    );
}

const rootElement = document.getElementById(rawContext.rootContainerId);
render(
    <GenericReactPage />,
    rootElement
);
