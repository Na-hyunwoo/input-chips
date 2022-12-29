import React from "react";
import Chip from "./Chip";
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Chip',
  component: Chip,
} as ComponentMeta<typeof Chip>;

const Template: ComponentStory<typeof Chip> = (args) => <Chip {...args} />;

export const Default = Template.bind({});
Default.args = {
  keyword: "Chip"
};
