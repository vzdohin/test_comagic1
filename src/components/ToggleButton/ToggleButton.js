import React, { useState } from "react";
import "./ToggleButton.css";

const colors = [
  { name: "Красный", hex: "#FF0000" },
  { name: "Зелёный", hex: "#00FF00" },
  { name: "Синий", hex: "#0000FF" },
  { name: "Жёлтый", hex: "#FFFF00" },
  { name: "Фиолетовый", hex: "#800080" },
  { name: "Голубой", hex: "#00FFFF" },
  { name: "Оранжевый", hex: "#FFA500" },
];

function ToggleButton() {
  const getRandomColor = () =>
    colors[Math.floor(Math.random() * colors.length)];
  const [color, setColor] = useState(getRandomColor());

  const changeColor = () => {
    const newColor = getRandomColor();
    setColor(newColor);
  };

  return (
    <button
      className="button "
      style={{ backgroundColor: color.hex }}
      onClick={changeColor}
    >
      {color.name}
    </button>
  );
}

export default ToggleButton;
