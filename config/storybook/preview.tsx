import type { Preview } from '@storybook/react';
// import '!style-loader!css-loader!sass-loader!app/styles/index.scss';
import 'app/styles/index.scss';
import { ThemeDecorator } from '../../src/shared/config/storyBook/ThemeDecorator/ThemeDecorator';
import { Theme } from '../../src/app/providers/ThemeProvider';
import { RouterDecorator } from '../../src/shared/config/storyBook/RouterDecorator/RouterDecorator';
import { TranslationDecorator } from '../../src/shared/config/storyBook/TranslationDecorator/TranslationDecorator';

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
    decorators: [
        ThemeDecorator(Theme.LIGHT),
        RouterDecorator,
        TranslationDecorator,
    ],
};
export default preview;
