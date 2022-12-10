import React from "react";
import styled from "styled-components";
import ChipGroup from "./ChipGroup";

interface Props {
  keywords: string[],
}

export default {
  title: "ChipGroup",
  component: ChipGroup
}

const Template = (args: Props) => <ChipGroup {...args}/>;
  
export const MultiChips = Template.bind({});
MultiChips.args = {
  keywords: ["Chip1", "Chip2", "Chip3"]
};





