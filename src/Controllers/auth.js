import React, { useEffect } from "react";
import { useState } from "react";

import { useDispatch } from "react-redux";
import "../Css/css.css";
import {
  addLocation,
  userRole,
  userName,
  user,
  userId,
} from "../Redux/actions";
import AuthComponent from "../Components/auth";
import "react-responsive-modal/styles.css";


const Auth = () => {
  const dispatch = useDispatch();
  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState("");

  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  useEffect(() => {
    window.history.pushState("", "", "/");
  }, []);

  const onSubmitHandler = (UserName, Password) => {
    const payload = {
      UserName,
      Password,
    };
    fetch(`http://localhost:8080/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then(async (res) => {
        try {
          const jsonRes = await res.json();

          if (res.status !== 200) {
            setIsError(true);
            setMessage(jsonRes.message);
            onOpenModal();
          } else {
            setIsError(false);
            setMessage(jsonRes.message);
            console.log(jsonRes)
            dispatch(userRole(jsonRes.UserRole));
            dispatch(user(payload.UserName));
            dispatch(userName(jsonRes.Name));
            dispatch(userId(jsonRes.userId));
          }
        } catch (err) {
          onOpenModal();
        }
      })
      .catch((err) => {
        console.log(err);
        onOpenModal();
      });
  };

  return (
    <AuthComponent
      onSubmitHandler={onSubmitHandler}
      onOpenModal={onOpenModal}
      onCloseModal={onCloseModal}
      open={open}
      isError={isError}
      message={message}
    />
  );
};
export default Auth;
