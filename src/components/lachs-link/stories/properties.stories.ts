import type { StoryObj, Meta } from '@storybook/html';


const meta: Meta = {
    component: 'lachs-link',
    title: 'Components/Atoms/Link/Properties'
};

export default meta;

type Story = StoryObj;

export const Example: Story = {
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
    name: 'Example',
}
