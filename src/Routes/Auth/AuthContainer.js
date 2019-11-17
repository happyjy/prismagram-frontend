import React, { useState } from "react";
import { useMutation } from "react-apollo-hooks";
import { toast } from "react-toastify";
import useInput from "../../Hooks/useInput";
import AuthPresenter from "./AuthPresenter";
import { LOG_IN, CREATE_ACCOUNT, CONFIRM_SECRET, LOCAL_LOG_IN } from "./AuthQueries";

export default () => {
  //#POINT0 useState, useInput
  const [action, setAction] = useState("logIn");
  const username = useInput("");
  const firstName = useInput("");
  const lastName = useInput("");
  const secret = useInput("");
  const email = useInput("okwoyjy@naver.com");
  
  //#POINT1: useMutation으로 통신하기 (prisma?)
  // userMutation return value : [createAccountMutation, {loading}]
  const [requestSecretMutation] = useMutation(LOG_IN, {
    variables: { email: email.value }
  });

  const [createAccountMutation] = useMutation(CREATE_ACCOUNT, {
    variables: {
      email: email.value,
      username: username.value,
      firstName: firstName.value,
      lastName: lastName.value
    }
  });

  const [confirmSecretMutation] = useMutation(CONFIRM_SECRET, {
    variables: {
      email: email.value,
      secret: secret.value
    }
  })

  const [localLogInMutation] = useMutation(LOCAL_LOG_IN);

  //#POINT2: sync function에  await key word사용으로 비동기 처리 
  const onSubmit = async e => {
    e.preventDefault();
    if (action === "logIn") {
      if (email !== "") {
        try {
          const {
            data: { requestSecret }
          } = await requestSecretMutation();
          console.log( requestSecret );
          if(!requestSecret){
            toast.error("You don't have an account yet, create one");
            setTimeout(() => setAction("signUp"), 500);
          } else {
            toast.success("Check your inbox for your login secret");
            setAction("confirm");
          }
        } catch {
          toast.error("Can't request secret, try again");
        }
      } else {
        toast.error("Email is required");
      }
    } else if (action === "signUp") {
      if (email.value !== "" &&
        username.value !== "" &&
        firstName.value !== "" &&
        lastName.value !== "") {

        try {
          const {
            data: { createAccount }
          } = await createAccountMutation();

          console.log("### createAccount: ", createAccount);
          if (!createAccount){
            toast.error("Can't create account");
          } else {
            toast.success("Account created! Log In now");
            setTimeout(() => setAction("logIn"), 3000);
          }
        } catch(e) {
          console.log(e.message);
          toast.error(e.message);
        }
      } else {
        toast.error("all field are required");
      }
    } else if (action === "confirm") {
      if (secret.value !== "") {
        try {
          const {
            data: {confirmSecret: token }
          } = await confirmSecretMutation();
          console.log("### IN Authcontainer.js > confirmSecret > token: ", token);

          if (token !== "" && token !== undefined) {
            localLogInMutation({ variables: { token } });
          } else {
            throw Error();
          }
        } catch {
          toast.error("Can't confirm secret, check again");
        }
      }
    }
  };
  
  // console.log("### IN AuthContainer > action: ", action);
  // console.log("### IN AuthContainer > email: ", email);
  
  return (
    <AuthPresenter
      setAction={setAction}
      action={action}
      username={username}
      firstName={firstName}
      lastName={lastName}
      email={email}
      secret={secret}
      onSubmit={onSubmit}
    />
  );
};

