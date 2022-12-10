import React from "react"
import Title from "./Title";

interface Props {
  id?: string,
  title?: string,
  tip?: string,
}

export default {
  title: "Title",
  component: Title
}

const Template = (args: Props) => <Title {...args} />;

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