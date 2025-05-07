import React, { useState } from "react";
import { Builder } from "../types/Form";

export default function Register() {
  const [name, setName] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [role, setRole] = useState<string>("");

  const register = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newUser = new Builder()
      .setName(name)
      .setUsername(username)
      .setPassword(password)
      .setEmail(email)
      .setRole(role)
      .build();

    fetch("http://localhost:5000/saveuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser.toJSON()),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => console.log("Response from server:", data))
      .catch((err) => console.error("Fetch error:", err));
  };

  return (
    <div>
      <form onSubmit={register}>
        <input
          type="text"
          placeholder="full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="text-text"
        />
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="text-text"
        />
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="text-text"
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="text-text"
        />
        <input
          type="text"
          placeholder="key"
          value={role}
          className="text-text"
          onChange={(e) => setRole(e.target.value)}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
