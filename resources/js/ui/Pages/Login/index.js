import React, { useState } from "react";
import { useHistory } from "react-router-dom";

// Import hook useDispatch từ react-redux và action updateUsername từ userSlice
import { useDispatch } from "react-redux";
import { updateUsername } from "../../Store/userSlice";

function Login() {
  const [username, setUsername] = useState("");
  const history = useHistory();

  const dispatch = useDispatch();

  function handleLogin() {
    // Dispatch action updateUsername vào store, action này có payload (dữ liệu đi kèm) là username
    dispatch(updateUsername(username));

    history.push("/dashboard");
  }

  return (
      <h1>Login Page</h1>
  );

}

export default Login;