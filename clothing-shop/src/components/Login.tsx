import { useState } from "react";
import { Builder } from "../types/Form";
import { useToken } from "../context/TokenContext";

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { setToken } = useToken();

  const loginUser = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const user = new Builder().setEmail(email).setPassword(password).build();

    fetch("http://localhost:5000/loginuser", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user.getAuthenticated()),
    })
      .then((res) => res.json())
      .then((res) =>
        setToken({
          accessToken: res.accessToken,
          refreshToken: res.refreshToken,
        })
      )
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form onSubmit={loginUser}>
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
