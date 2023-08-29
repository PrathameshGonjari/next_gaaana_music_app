import type { Meta, Story } from "@storybook/react";
import MusicCard from ".";
import PlaceHolderImage from "@/assets/images/imageplaceholder.png";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

export default {
  title: "components/MusicCard",
  component: MusicCard,
  parameters: {
    layout: "centered",
    nextjs: {
      appDirectory: true,
    },
  },
  tags: ["autodocs"],
  argTypes: {},
} as Meta;

const music = {
  _id: "",
  artworkUrl100: PlaceHolderImage.src,
  trackName: "Track Name",
  artistName: "Artist Name",
  trackId: 0,
  country: "",
  longDescription: "",
  shortDescription: "",
  collectionName: "",
  previewUrl: "",
};

const Template: Story = () => (
  <Provider store={store}>
    <MusicCard
      id={music._id}
      image={music.artworkUrl100}
      AlbumTitle={music.trackName}
      AlbumSubTitle={music.artistName}
      music={music}
    />
  </Provider>
);

export const DefaultMusicCard = Template.bind({});
