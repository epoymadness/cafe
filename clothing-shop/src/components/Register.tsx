import React, { useState } from "react";
import { Builder } from "../types/Register";

export default function Register() {
  const [firstname, setFirstname] = useState<string>("");
  const [lastname, setLastname] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const register = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newUser = new Builder()
      .setFirstname(firstname)
      .setLastname(lastname)
      .setUsername(username)
      .setPassword(password)
      .setEmail(email)
      .build();
    console.log(newUser);
  };

  return (
    <div>
      <form onSubmit={register}>
        <input
          type="text"
          placeholder="firstname"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
          className="text-text"
        />
        <input
          type="text"
          placeholder="lastname"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
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

        <button type="submit">Register</button>
      </form>
    </div>
  );
}
