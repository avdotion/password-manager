import {render} from 'react-dom';

import {rawContext} from './context';
import {Root} from './features/Root';
import {IndexPage} from './pages/IndexPage';


const rootElement = document.getElementById(rawContext.rootContainerId);

function GenericReactPage() {
    return (
        <Root Content={IndexPage} />
    );
}

render(
    <GenericReactPage />,
    rootElement
);
