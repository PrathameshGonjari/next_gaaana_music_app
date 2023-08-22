import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isViewToast: false,
  message: "",
} as ToastState;

export const handleToast = (
  state: ToastState,
  action: PayloadAction<ToastState>
) => {
  const isToast = action.payload;
  return {
    ...state,
    ...isToast,
  };
};

export const toast = createSlice({
  name: "toast",
  initialState,
  reducers: {
    isShowToast: handleToast,
  },
});

export const { isShowToast } = toast.actions;
export default toast.reducer;
