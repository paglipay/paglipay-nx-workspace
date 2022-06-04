import { Story, Meta } from '@storybook/react';
import { DLayout, DLayoutProps } from './dlayout';

export default {
  component: DLayout,
  title: 'Ui/DLayout',
} as Meta;

const Template: Story<DLayoutProps> = (args) => <DLayout {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
