"use client"
import { TextField } from "@mui/material";
import React, { ChangeEvent, FC } from "react";

declare interface InputFieldType {
  id: string;
  label: string;
  value: string;
  handleChange: (e: ChangeEventType) => void;
  type?: "password" | "number" | "email";
}

const InputField: FC<InputFieldType> = ({
  id,
  label,
  value,
  handleChange,
  type,
}) => {
  return (
    <TextField
      required
      onChange={handleChange}
      id={id}
      value={value}
      label={label}
      type={type}
    />
  );
};

export default InputField;
