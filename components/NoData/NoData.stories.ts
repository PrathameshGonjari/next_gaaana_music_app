import type { Meta } from "@storybook/react";
import NoData from ".";

const meta = {
  title: "components/NoData",
  component: NoData,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof NoData>;

export default meta;

export const Default = {
  args: {},
};
