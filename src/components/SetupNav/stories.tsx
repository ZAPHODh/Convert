import { Story } from '@storybook/react/types-6-0';
import { SetupNav } from '.';

export default {
  title: 'SetupNav',
  component: SetupNav,
};

export const Template: Story = (args) => {
  return (
    <div>
      <SetupNav {...args} />
    </div>
  );
};
