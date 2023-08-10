import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type AuthState = {
  isAuth: boolean;
  username: string;
  token: string;
};

type InitialState = {
  value: AuthState;
};

const initialState = {
  value: {
    isAuth: false,
    username: "",
    token: "",
  } as AuthState,
} as InitialState;

const handleLogOut = () => initialState;
const handleLogIn = (_: unknown, action: PayloadAction<AuthState>) => {
  return {
    value: {
      isAuth: action.payload.isAuth,
      username: action.payload.username,
      token: action.payload.token,
    },
  };
};

export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut: handleLogOut,
    logIn: handleLogIn,
  },
});

export const { logIn, logOut } = auth.actions;
export default auth.reducer;
