import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./style.css";
import Navbar from "./components/Navbar";
import Places from "./components/Places";
import data from "./data";

export default function App() {
  const places = data.map((item) => {
    return <Places key={item.id} {...item} />;
  });

  return (
    <div>
      <Navbar />
      {places}
    </div>
  );
}
