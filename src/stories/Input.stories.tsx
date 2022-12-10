import React from "react";
import InputContainer from "./Input"

interface Props {
  id: string,
  placeholder?: string,
  onAdd: (arg0?: string) => void,
  disabled?: boolean,
}

export default {
  title: "Input",
  component: InputContainer
}

const Template = (args: Props) => <InputContainer {...args}/>;

export const InputWithPlaceholder = Template.bind({});
InputWithPlaceholder.args = {
  id: InputWithPlaceholder,
  placeholder: "Frozen pasta cooked in just 5 minutes",
}

export const DisabledInput = Template.bind({});
DisabledInput.args = {
  id: DisabledInput,
  disabled: true,
}