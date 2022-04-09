import { useState, useEffect } from "react";

export default function useMouse() {
  const [pos, setPos] = useState({
    x: 0,
    y: 0
  });

  const update = (e) => {
    setPos({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener('mousemove', update);

    return () => window.removeEventListener('mousemouse', update);
  }, []);

  return pos;
}