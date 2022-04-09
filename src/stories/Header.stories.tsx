import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import HumburgerButton from "../components/header/hamburgerButton/HumburgerButton";
import Header from "../components/header/Header";
//import { Header } from "./Header";

export default {
  title: "Header",
  component: Header,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

// export const LoggedIn = Template.bind({});
// LoggedIn.args = {
//   user: {
//     name: "Jane Doe",
//   },
// };

// export const LoggedOut = Template.bind({});
// LoggedOut.args = {};

//export const Humburger = () => <HumburgerButton />;
export const Humburger = Template.bind({});
Humburger.args = {};
