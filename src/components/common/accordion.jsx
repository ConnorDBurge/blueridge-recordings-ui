import { useState, useRef, useEffect } from "react";
import { ChevronDownIcon } from "@/components/icons";

export default function Accordion({ children, header }) {
  const [accordionOpen, setAccordionOpen] = useState(false);
  const accordionRef = useRef(null);

  const handleClickOutside = (event) => {
    if (accordionRef.current && !accordionRef.current.contains(event.target)) {
      setAccordionOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
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
          className={`group-hover/acc:text-colors-secondary 
          ${accordionOpen ? "text-colors-secondary" : "text-white"}`}
        >
          {header}
        </div>
        <ChevronDownIcon
          className={`w-6 h-6 transition-300 group-hover/acc:fill-colors-secondary 
          ${accordionOpen && "rotate-180 fill-colors-secondary"}`}
        />
      </button>
      <div
        className={`transition-300 overflow-hidden 
        ${accordionOpen ? "max-h-screen" : "max-h-0"}`}
      >
        {children}
      </div>
    </div>
  );
}
