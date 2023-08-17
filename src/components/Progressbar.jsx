import { useEffect, useState } from "react";

export default function Progressbar({ value = 0 }) {
  const [precent, setPercent] = useState(value);

  useEffect(() => {
    setPercent(Math.min(100, Math.max(value, 0)));
  }, [value]);
  return (
    <div className="progress">
      <span> {precent.toFixed()} % </span>
      <div className="progress-background" style={{}}></div>
    </div>
  );
}
