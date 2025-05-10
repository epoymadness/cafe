import Login from "./Login.tsx";
import { useToken } from "../context/TokenContext.tsx";
import { useEffect } from "react";

export default function Home() {
  const { token } = useToken();

  useEffect(() => {
    fetch("http://localhost:5000/cutiepie", {
      method: "get",
      headers: {
        Authorization: `Bearer ${token.accessToken}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  }, [token]);

  return (
    <div className="bg-gray-900 w-full h-screen border-0 text-white">
      <Login />
    </div>
  );
}
