import { useEffect, useState } from "react";
import Progressbar from "./components/Progressbar";
import "./styles.css";

export default function App() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setValue((val) => val + 1);
    }, 100);
  }, []);

  return (
    <div className="app">
      <span>Progress Bar</span>
      <Progressbar value={value} />
    </div>
  );
}
