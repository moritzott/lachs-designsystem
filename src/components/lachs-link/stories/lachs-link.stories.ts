import type { StoryObj, Meta } from '@storybook/html';


const meta: Meta = {
    component: 'lachs-link',
    title: 'Components/Atoms/Link/All Stories'
};

export default meta;

type Story = StoryObj;


export const Primary: Story = {
    render: (args) => (
        `<lachs-link>${args.text}</lachs-link>`
    ),
    argTypes: {
        primary: { control: 'boolean'},
        text: { control: 'text'}
    },
    args: {
        primary: true,
        text: 'Hallo',
    },
    name: 'Primary',
}

export const Secondary: Story = {
    args: {
        text: 'Hallo',
    },
    render: (args) => (
        `<lachs-link>${args.text}</lachs-link>`
    ),
    name: 'Secondary',
}