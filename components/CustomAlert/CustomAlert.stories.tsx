import React from "react";
import { Provider } from "react-redux";
import CustomAlert from ".";
import { Meta, Story } from "@storybook/react";
import { store } from "@/redux/store";

export default {
  title: "Components/CustomAlert",
  component: CustomAlert,
} as Meta;

// Template for Storybook stories
const Template: Story = () => (
  <Provider store={store}>
    <CustomAlert />
  </Provider>
);

export const DefaultToast = Template.bind({});
DefaultToast.args = {};

export const SuccessToast = Template.bind({});
SuccessToast.args = {
  isViewToast: true,
  message: "Success message",
  type: "success",
};

export const ErrorToast = Template.bind({});
ErrorToast.args = {
  isViewToast: true,
  message: "Error message",
  type: "error",
};
