import { useEffect, useState } from "react";
import Login from "./Login.tsx";

export default function Home() {
  const [name, setName] = useState<string>("");

  useEffect(() => {
    fetch("http://localhost:5000/cutiepie")
      .then((res) => res.json())
      .then((result) => setName(result.message))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="bg-gray-900 w-full h-screen border-0 text-white">
      <p className="text-white">{name}</p>
      <Login />
    </div>
  );
}
