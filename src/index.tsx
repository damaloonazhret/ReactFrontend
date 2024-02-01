// old version react
// import { render } from 'react-dom';
// import App from 'app/App';
// import { BrowserRouter } from 'react-router-dom';
// import { ThemeProvider } from 'app/providers/ThemeProvider';
// import 'app/styles/index.scss';
//
// import 'shared/config/i18n/i18n';
// import { ErrorBoundary } from 'app/providers/ErrorBoundary';
// import { StoreProvider } from 'app/providers/StoreProvider';
//
// render(
//     <StoreProvider>
//         <BrowserRouter>
//             <ErrorBoundary>
//                 <ThemeProvider>
//                     <App />
//                 </ThemeProvider>
//             </ErrorBoundary>
//         </BrowserRouter>
//     </StoreProvider>,
//     document.getElementById('root'),
// );
// import App from 'app/App';
// import { BrowserRouter } from 'react-router-dom';
// import { ThemeProvider } from 'app/providers/ThemeProvider';
// import 'app/styles/index.scss';
//
// import 'shared/config/i18n/i18n';
// import { ErrorBoundary } from 'app/providers/ErrorBoundary';
// import { StoreProvider } from 'app/providers/StoreProvider';
// import { createRoot } from 'react-dom/client';
//
// const rootElement = document.getElementById('root');
// const root = createRoot(rootElement);
//
// root.render(
//     <StoreProvider>
//         <BrowserRouter>
//             <ErrorBoundary>
//                 <ThemeProvider>
//                     <App />
//                 </ThemeProvider>
//             </ErrorBoundary>
//         </BrowserRouter>
//     </StoreProvider>,
// );
import App from 'app/App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import 'app/styles/index.scss';

import 'shared/config/i18n/i18n';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { StoreProvider } from 'app/providers/StoreProvider';
import ReactDOM from 'react-dom/client';

// const rootElement = document.getElementById('root');
// const root = createRoot(rootElement);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <StoreProvider>
        <BrowserRouter>
            <ErrorBoundary>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </BrowserRouter>
    </StoreProvider>,
);
