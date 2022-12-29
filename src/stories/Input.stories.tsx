import React from "react";
import InputContainer from "./Input";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Input",
  component: InputContainer,
} as ComponentMeta<typeof InputContainer>;

const Template: ComponentStory<typeof InputContainer> = (args) => (
  <InputContainer {...args} />
);

export const InputWithPlaceholder = Template.bind({});
InputWithPlaceholder.args = {
  id: "InputWithPlaceholder",
  placeholder: "Cookies I made and baked for you",
};

export const DisabledInput = Template.bind({});
DisabledInput.args = {
  id: "DisabledInput",
  disabled: true,
  placeholder: "Cookies I made and baked for you",
};
