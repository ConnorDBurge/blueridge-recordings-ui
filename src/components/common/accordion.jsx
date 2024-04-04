import { useState, useRef, useEffect } from "react";
import { ChevronDownIcon } from "@/components/icons";

export default function Accordion({ children, header }) {
  const [accordionOpen, setAccordionOpen] = useState(false);
  const accordionRef = useRef(null);

  // Event handler to close the accordion if click is outside its bounds
  const handleClickOutside = (event) => {
    if (accordionRef.current && !accordionRef.current.contains(event.target)) {
      setAccordionOpen(false);
    }
  };

  useEffect(() => {
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={accordionRef} onMouseLeave={() => setAccordionOpen(false)}>
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex justify-between w-full group/acc"
      >
        <div
          className={`group-hover/acc:text-colors-secondary ${
            accordionOpen ? "text-colors-secondary" : "text-white"
          }`}
        >
          {header}
        </div>
        <ChevronDownIcon
          className={`w-6 h-6 transition-transform duration-300 ease-in-out group-hover/acc:fill-colors-secondary ${
            accordionOpen ? "rotate-180 fill-colors-secondary" : ""
          }`}
        />
      </button>
      <div
        className={`transition-all duration-500 ease-in-out ${
          accordionOpen ? "max-h-screen" : "max-h-0"
        } overflow-hidden`}
      >
        {children}
      </div>
    </div>
  );
}
