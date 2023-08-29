import type { Meta } from "@storybook/react";
import NavigationBar from ".";

const meta = {
  title: "components/NavigationBAr",
  component: NavigationBar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof NavigationBar>;

export default meta;

export const Default = {
  args: {},
};
