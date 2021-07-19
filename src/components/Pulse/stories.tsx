import { Meta, Story } from '@storybook/react/types-6-0';
import { Pulse, PulseProps } from '.';

export default {
  title: 'Pulse',
  component: Pulse,
} as Meta;

export const Template: Story<PulseProps> = (args) => {
  return (
    <div>
      <Pulse {...args} />
    </div>
  );
};
