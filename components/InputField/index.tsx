"use client";
import { InputBaseProps, TextField } from "@mui/material";
import { FC } from "react";

declare interface InputFieldType {
  id: string;
  label: string;
  value: string;
  handleChange: (e: ChangeEventType) => void;
  onBlur: InputBaseProps["onBlur"];
  error: boolean;
  errorText?: string;
  type?: "password" | "number" | "email";
}

const InputField: FC<InputFieldType> = ({
  id,
  label,
  value,
  handleChange,
  onBlur,
  error,
  errorText,
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
      onBlur={onBlur}
      error={error}
      helperText={error && errorText}
    />
  );
};

export default InputField;
