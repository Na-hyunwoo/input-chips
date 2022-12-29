import React from "react"
import Title from "./Title";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Title",
  component: Title
} as ComponentMeta<typeof Title>

const Template: ComponentStory<typeof Title> = (args) => <Title {...args} />;

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
  id: "Enter Keyword", 
  title: "Enter Keyword"
}

export const TitleWithTip = Template.bind({});
TitleWithTip.args = {
  id: "Enter Keyword", 
  title: "Enter Keyword", 
  tip: "After writing keywords one by one, press Enter."
}

export const None = Template.bind({});
None.args = {}