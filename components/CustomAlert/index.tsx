"use client";
import { Alert, Snackbar, Stack } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { isShowToast } from "@/redux/features/toast-slice";

const CustomAlert = () => {
  const { isViewToast, message, type } = useSelector(
    (state: AppReducerState) => state.toastappreducer
  );

  const dispatch = useDispatch();

  const handleClose = () => {
    const errorToast = {
      isViewToast: false,
      message: "",
    } as ToastState;
    dispatch(isShowToast(errorToast));
  };
  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        open={isViewToast}
        autoHideDuration={2000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity={type}>
          {message}
        </Alert>
      </Snackbar>
    </Stack>
  );
};

export default CustomAlert;
