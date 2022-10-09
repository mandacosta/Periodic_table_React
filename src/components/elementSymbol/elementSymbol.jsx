import React from "react";
import { StyledSymbol } from "./elementSymbol.js";

export const ElementSymbol = ({ element, setCurrentElement }) => {
  return (
    <StyledSymbol element={element} onClick={() => setCurrentElement(element)}>
      <p>{element.symbol}</p>
      <span>{element.name}</span>
      <span className="atomic_mass">{element.atomic_mass.toFixed(2)}</span>
      <span className="atomic_number">{element.number}</span>
    </StyledSymbol>
  );
};
