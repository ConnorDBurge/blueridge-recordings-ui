"use client";

import React, { useState, useEffect } from "react";

export default function SearchInput() {
  const placeholders = [
    "Find the perfect microphone",
    "Discover studio mixers",
    "Stream like a pro",
  ];
  const [placeholder, setPlaceholder] = useState();
  const [index, setIndex] = useState(0);
  const [typing, setTyping] = useState(true);
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const updateText = () => {
      setTimeout(
        () => {
          if (typing) {
            setPosition((prevPosition) => prevPosition + 1);
            if (position === placeholders[index].length) {
              setTimeout(() => setTyping(false), 2000);
            }
          } else {
            setPosition((prevPosition) => prevPosition - 1);
            if (position === Math.floor(placeholders[index].length * 0.2)) {
              setTyping(true);
              setIndex((prevIndex) => (prevIndex + 1) % placeholders.length);
              setPosition(0);
            }
          }
          setPlaceholder(placeholders[index].substring(0, position));
        },
        typing ? 100 : 60
      );
    };
    updateText();
  }, [position, typing, index]);

  return (
    <input
      id="search"
      name="search"
      autoComplete="off"
      className="block h-[43px] w-full rounded-md border border-transparent m-0 bg-colors-tertiary ml-8 mt-1 py-1.5 pt-2 pl-14 pr-3 text-white placeholder:text-base placeholder:text-gray-400 focus:text-gray-300 focus:border-gray-400 focus:ring-0 sm:leading-6 transition-colors duration-300"
      placeholder={placeholder}
    />
  );
}
