import type { Meta, StoryObj } from "@storybook/react";
import CustomModal from ".";

const meta = {
  title: "components/CustomModal",
  component: CustomModal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof CustomModal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    visible: false,
    handleCloseModal: () => {
      return;
    },
    children: <div> Modal Content </div>,
  },
};
