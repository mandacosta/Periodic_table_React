import React, { useState } from "react";
import { ElementCard } from "../elementCard/elementCard.jsx";
import { Table } from "../table/table.jsx";
import { StyledMain } from "./main.js";
import data from "../../data/PeriodicTableJSON.json";
import { Filters } from "../filters/filters.jsx";

export const Main = () => {
  const [currentElement, setCurrentElement] = useState(null);
  const [elements, setElements] = useState(data.elements);

  return (
    <StyledMain>
      <Filters elements={elements} setElements={setElements} />
      <Table
        elements={elements}
        setElements={setElements}
        currentElement={currentElement}
        setCurrentElement={setCurrentElement}
      />
      {currentElement ? (
        <ElementCard
          currentElement={currentElement}
          setCurrentElement={setCurrentElement}
        />
      ) : (
        <></>
      )}
    </StyledMain>
  );
};
