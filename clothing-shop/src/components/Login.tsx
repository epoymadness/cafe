import { useState } from "react";
import { Builder } from "../types/login";

export default function Login() {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const loginUser = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const user = new Builder()
      .setUsername(userName)
      .setPassword(password)
      .build();
    console.log(user);
  };

  return (
    <div>
      <form onSubmit={loginUser}>
        <input
          type="text"
          placeholder="username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className="text-text"
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="text-text"
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}
