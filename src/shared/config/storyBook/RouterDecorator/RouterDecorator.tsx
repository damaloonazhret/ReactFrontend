import 'app/styles/index.scss';
import { BrowserRouter } from 'react-router-dom';
import { ReactNode } from 'react';

export const RouterDecorator = (story: () => ReactNode) => (
    <BrowserRouter>
        {story()}
    </BrowserRouter>
);
