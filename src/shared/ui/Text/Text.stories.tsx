import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextTheme } from './Text';

const meta = {
    title: 'shared/Text',
    component: Text,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        title: 'Tutle loasdftlbukh',
        text: 'lorem asdqwedsfg  sdfgsdfg sdfg ',
    },
};

export const Error: Story = {
    args: {
        title: 'Tutle loasdftlbukh',
        text: 'lorem asdqwedsfg  sdfgsdfg sdfg ',
        theme: TextTheme.ERROR,
    },
};

export const onlyTitle: Story = {
    args: {
        title: 'Tutle loasdftlbukh',
    },
};

export const onlyText: Story = {
    args: {
        text: 'lorem asdqwedsfg  sdfgsdfg sdfg ',
    },
};

export const PrimaryDark: Story = {
    args: {
        title: 'Tutle loasdftlbukh',
        text: 'lorem asdqwedsfg  sdfgsdfg sdfg ',
    },
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTitleDark: Story = {
    args: {
        title: 'Tutle loasdftlbukh',
    },
};
onlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTextDark: Story = {
    args: {
        text: 'lorem asdqwedsfg  sdfgsdfg sdfg ',
    },
};
onlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];
