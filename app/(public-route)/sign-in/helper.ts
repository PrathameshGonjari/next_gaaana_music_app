"use client";
import * as Yup from "yup";

export const initialState = {
  email: "",
  password: "",
};

export const signInValitaion = Yup.object().shape({
  email: Yup.string().email().required("Please Enter User Email"),
  password: Yup.string().required("Please Enter Password"),
});
