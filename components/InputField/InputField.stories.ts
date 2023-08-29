import type { Meta, StoryObj } from "@storybook/react";
import InputField from ".";

const meta = {
  title: "components/InputField",
  component: InputField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof InputField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    id: "id",
    label: "Input Label",
    value: "test value",
    error: false,
    onBlur: () => {
      return;
    },
  },
};

export const Error: Story = {
  args: {
    id: "id",
    label: "Input Label",
    value: "test value",
    error: true,
    onBlur: () => {
      return;
    },
    errorText: "Error Message"
  },
};


