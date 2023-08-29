import type { Meta } from "@storybook/react";
import SearchBar from ".";

const meta = {
  title: "components/SearchBar",
  component: SearchBar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof SearchBar>;

export default meta;

export const Default = {
  args: {
    onFilterChange: (event: ChangeEventType) => {
      return event;
    },
    filter: { term: "" },
  },
};
