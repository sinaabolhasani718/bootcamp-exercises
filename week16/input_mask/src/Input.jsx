import { useState, useRef } from "react";
import cities from "./cities.json";
/* eslint-disable react/prop-types */

const Input = ({ hint }) => {
  const [cityInput, setCityInput] = useState("");
  const inputRef = useRef(null);

  const handleChange = (event) => {
    const typed = event.target.value;
    setCityInput(typed);

    if (!typed) return;

    const match = cities.find((city) =>
      city.toLowerCase().startsWith(typed.toLowerCase())
    );

    if (match && typed.length <= cityInput.length) {
      return;
    }

    if (match) {
      setCityInput(match);

      setTimeout(() => {
        if (inputRef.current) {
          inputRef.current.setSelectionRange(typed.length, match.length);
        }
      }, 0);
    }
  };

  return (
    <div className="input">
      <label className={cityInput ? "hidden" : ""} htmlFor="input">
        {hint}
      </label>
      <input
        ref={inputRef}
        type="text"
        id="input"
        value={cityInput}
        onChange={handleChange}
        autoComplete="off"
      />
    </div>
  );
};

export default Input;
