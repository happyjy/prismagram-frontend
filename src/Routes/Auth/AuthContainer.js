import React, { useState } from "react";
import useInput from "../../Hooks/useInput";
import { useMutation } from "react-apollo-hooks";
import { LOG_IN } from "./AuthQueries";
import AuthPresenter from "./AuthPresenter";

export default () => {
  const [action, setAction] = useState("logIn");
  const username = useInput("");
  const firstName = useInput("");
  const lastName = useInput("");
  const email = useInput("");
  const requestSecret = useMutation(LOG_IN, {
    variables: { email: email.value }
  });
  
  const onLogin = e => {
    e.preventDefault();
    if(email !== ""){
      requestSecret();
    }
  };
  
  console.log("### IN AuthContainer > action: ", action);
  console.log("### IN AuthContainer > email.value: ", email);
  
  return (
    <AuthPresenter
      setAction={setAction}
      action={action}
      username={username}
      firstName={firstName}
      lastName={lastName}
      email={email}
      onLogin={onLogin}
    />
  );
};

