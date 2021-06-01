import {render} from 'react-dom';

import {IndexPage} from './pages/IndexPage';

const context = process.env.CONTEXT as unknown as {
    rootContainerId: string,
    routes: Record<string, {
        pageLocalPath: string,
    }>,
};

const rootElement = document.getElementById(context.rootContainerId);

render(<IndexPage />, rootElement);
