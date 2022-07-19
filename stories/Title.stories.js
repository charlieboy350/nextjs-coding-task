import React from "react";
import { Headings } from "../components";

export default {
  title: "Components/Headings",
  component: Headings,
  argTypes: {},
};

const Template = (args) => <Headings {...args} />;
export const title = Template.bind({});
title.args = {
  type: 'h1',
  children: "Heading can be h1, h2, ..., h6",
};
