import React from "react";

import { ElementSymbol } from "../elementSymbol/elementSymbol.jsx";
import { StyledTable } from "./table.js";

export const Table = ({ elements, setCurrentElement }) => {
  return (
    <StyledTable>
      {elements.map((element) => {
        return (
          <ElementSymbol
            key={element.number}
            element={element}
            setCurrentElement={setCurrentElement}
          />
        );
      })}
    </StyledTable>
  );
};
