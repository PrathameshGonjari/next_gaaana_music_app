"use client";
import { FontStyleRegex, MinSixCharactersRegex, OneNumberRegex, SpecialCharacterRegex } from "@/constants";
import * as Yup from "yup";

export const initialState = {
  email: "",
  password: "",
};

export const signInValitaion = Yup.object().shape({
  email: Yup.string().email().required("Please Enter User Email"),
  password: Yup.string()
    .required("Please Enter Password")
    .min(5, "Your password must be longer than 5 characters.")
    .max(25)
    .matches(MinSixCharactersRegex, "Must Contain 6 Characters")
    .matches(FontStyleRegex,
      "Must Contain One Uppercase, One Lowercase"
    )
    .matches(SpecialCharacterRegex,
      "Must Contain One Special Case Character"
    )
    .matches(OneNumberRegex, "Must Contain One Number"),
});
