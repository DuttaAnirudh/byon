"use client";

import { useState } from "react";

function TextExpander({ children }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const displayText = isExpanded
    ? children
    : children.split(" ").slice(0, 10).join(" ") + "...";

  if (children.length < 80) return children;

  return (
    <span>
      {displayText}{" "}
      <button
        className="text-color-3 text-xs font-extralight border-b border-color-3 leading-3 pb-1"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? "Show less" : "Show more"}
      </button>
    </span>
  );
}

export default TextExpander;
