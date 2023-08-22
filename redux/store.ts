import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import userappreducer from "./features/auth-slice";
import musicappreducer from "./features/music-slice";
import toastappreducer from "./features/toast-slice";

export const store = configureStore({
  reducer: {
    userappreducer,
    musicappreducer,
    toastappreducer,
  },
});

export type Rootstate = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<Rootstate> = useSelector;
