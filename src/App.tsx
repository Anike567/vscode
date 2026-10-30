import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/core";
import "./App.css";

function App() {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gray-900 text-white">
      <h1 className="text-3xl font-bold">Welcome to Tauri + React</h1>
    </div>
  );
}

export default App;