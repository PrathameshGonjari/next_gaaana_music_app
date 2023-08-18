import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import userappreducer from "./features/auth-slice";
import musicappreducer from "./features/music-slice";

export const store = configureStore({
  reducer: {
    userappreducer,
    musicappreducer,
  },
});

export type Rootstate = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<Rootstate> = useSelector;
