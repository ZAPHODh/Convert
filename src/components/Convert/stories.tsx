import { Meta, Story } from '@storybook/react/types-6-0';
import { Convert, ConvertProps } from '.';

export default {
  title: 'Convert',
  component: Convert,
} as Meta<ConvertProps>;

export const Template: Story<ConvertProps> = (args) => {
  return (
    <div>
      <Convert {...args} />
    </div>
  );
};
