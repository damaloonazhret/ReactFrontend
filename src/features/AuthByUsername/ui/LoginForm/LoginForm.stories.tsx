import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storyBook/StoreDecorator/StoreDecorator';
import LoginForm from './LoginForm';

const meta = {
    title: 'features/LoginForm',
    component: LoginForm,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
};
Primary.decorators = [StoreDecorator({
    loginForm: { username: '123', password: 'asd' },
})];

export const withError: Story = {
    args: {},
};
withError.decorators = [StoreDecorator({
    loginForm: { username: '123', password: 'asd', error: 'ERROR' },
})];

export const Loading: Story = {
    args: {},
};
Loading.decorators = [StoreDecorator({
    loginForm: { isLoading: true },
})];
