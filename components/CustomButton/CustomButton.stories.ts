import type { Meta, StoryObj } from "@storybook/react";
import CustomButton from ".";
import { BUTTON_TYPE } from "./helper";

const meta = {
  title: "components/CustomButton",
  component: CustomButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof CustomButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    type: BUTTON_TYPE.PRIMARY,
    children: "Button",
  },
};

export const Secondary: Story = {
  args: {
    type: BUTTON_TYPE.SECONDARY,
    children: "Button",
  },
};

export const Disabled: Story = {
  args: {
    disable: true,
    children: "Button",
  },
};
