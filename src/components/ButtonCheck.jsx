import React from "react";

export default function ButtonCheck({ checked, handleCheck }) {
  return (
    <div
      // ternary operator handles checked animation class change and trugers animation
      className={`item-check ${checked ? "item-check--checked" : ""}`}
      onClick={handleCheck}
    >
      <svg
        className="svg"
        viewBox="0 0 53 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          // variants={checkVariants}
          // animate={checked ? "checked" : "unchecked"}
          // style={{ pathLength, opacity }}
          fill="none"
          strokeMiterlimit="10"
          strokeWidth="6"
          d="M1.5 22L16 36.5L51.5 1"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
