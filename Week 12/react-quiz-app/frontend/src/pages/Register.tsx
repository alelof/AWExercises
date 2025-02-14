import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { useLoader } from "../context/LoadContext";

export default function Register() {
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const generalContext = useLoader();
  // const BASE_URL = "https://simple-server-rsaniei1991.vercel.app/";
  function submitHandler(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    const requestOption = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    };
    fetch("users/register", requestOption)
      .then((response) => {
        console.log(response);

        if (response.status === 200) {
          navigate("/quiz", { replace: true });
          generalContext?.setMessage("You registered successfully!");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);

        if (data.status === "Error") generalContext?.setError(data.message);
      });
  }

  return (
    <form className="form-control">
      <h1 style={{ textAlign: "center" }}>Register</h1>
      <label>
        Name
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Email
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        Password
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <Button variant="contained" onClick={submitHandler}>
        Sign up!
      </Button>
    </form>
  );
}
