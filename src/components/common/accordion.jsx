import { useState, useRef, useEffect } from "react";
import { ChevronDownIcon } from "@components/icons";

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
        className="group/acc flex w-full justify-between"
      >
        <div
          className={`transition-300 mr-1 group-hover/acc:text-secondary
          ${accordionOpen ? "text-secondary" : "text-white"}`}
        >
          {header}
        </div>
        <ChevronDownIcon
          className={`transition-300 group-hover/acc:fill-secondary 
          ${accordionOpen && "rotate-180 fill-secondary"}`}
        />
      </button>
      <div
        className={`transition-500 overflow-hidden
        ${accordionOpen ? "max-h-screen" : "max-h-0"}`}
      >
        {children}
      </div>
    </div>
  );
}
