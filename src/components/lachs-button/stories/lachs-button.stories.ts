export default {
    // this creates a ‘Components’ folder and a ‘MyComponent’ subfolder
    title: 'Components/Button',
};

const Template = (args) => `<lachs-button type="${args.type}" label="${args.label}" ></lachs-button>`;

export const Example = Template.bind({});
Example.args = {
  type: 'primary',
  label: 'Start',
};