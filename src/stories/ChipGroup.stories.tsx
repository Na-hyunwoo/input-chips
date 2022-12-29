import React from "react";
import ChipGroup from "./ChipGroup";
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: "ChipGroup",
  component: ChipGroup
} as ComponentMeta<typeof ChipGroup>

const Template: ComponentStory<typeof ChipGroup> =  (args) => <ChipGroup {...args}/>;
  
export const MultiChips = Template.bind({});
MultiChips.args = {
  keywords: ["Chip1", "Chip2", "Chip3"]
};






