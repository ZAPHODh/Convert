import { Story } from '@storybook/react/types-6-0';
import { Language } from '.';

export default {
  title: 'Language',
  component: Language,
};
export const Template: Story = (args) => {
  return (
    <div>
      <Language {...args} />
    </div>
  );
};
