import { useState, useEffect } from "react";

export default function useHeroMapLand() {
  const [dots, setDots] = useState([]);

  useEffect(() => {
    let active = true;

    // Instantly fetch the pre-calculated dots (0ms CPU math)
    fetch("/land-dots.json")
      .then((res) => {
        if (!res.ok) throw new Error("Dots not found");
        return res.json();
      })
      .then((data) => {
        if (active) setDots(data);
      })
      .catch((err) => console.error("Failed to load map dots:", err));

    return () => {
      active = false;
    };
  }, []);

  return dots;
}
