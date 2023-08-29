import type { Meta, StoryObj } from "@storybook/react";
import MediaPlayer from ".";
import PlaceHolderImage from "@/assets/images/imageplaceholder.png";

const meta = {
  title: "components/MediaPlayer",
  component: MediaPlayer,
  parameters: {
    componentSizes: {
      large: {
        name: "Large",
      },
    },
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof MediaPlayer>;

export default meta;

type Story = StoryObj<typeof meta>;

const music = {
  _id: "",
  artworkUrl100: PlaceHolderImage.src,
  trackName: "",
  artistName: "Artist Name",
  trackId: 0,
  country: "",
  longDescription: "",
  shortDescription: "",
  collectionName: "",
  previewUrl: "",
};

export const Primary: Story = {
  args: {
    isPlayMusic: false,
    activeMusic: music,
    handlePlayPause: () => {
      return;
    },
    handleStop: () => {
      return;
    },
  },
};
