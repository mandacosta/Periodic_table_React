import React from "react";
import { StyledFilters, StyledTitle } from "./filters.js";
import { GiAtom } from "react-icons/gi";
import { BsFillSquareFill } from "react-icons/bs";
import data from "../../data/PeriodicTableJSON.json";

export const Filters = ({ elements, setElements }) => {
  function highLightElements(category) {
    const hiligthedElements = data.elements.map((element) => {
      if (category !== "unknown") {
        if (element.category === category) {
          return { ...element, highligth: "on" };
        } else {
          return element;
        }
      } else {
        if (element.category.includes("unknown")) {
          return { ...element, highligth: "on" };
        } else {
          return element;
        }
      }
    });

    setElements(hiligthedElements);
  }

  function lowLigthAllElements() {
    setElements(data.elements);
  }

  return (
    <>
      <StyledTitle>The Periodic table of Elements</StyledTitle>
      <StyledFilters>
        <p
          onMouseLeave={lowLigthAllElements}
          onMouseEnter={() => highLightElements("diatomic nonmetal")}
        >
          {" "}
          <BsFillSquareFill />
          Diatomic non-metal <GiAtom className="atom" />{" "}
        </p>
        <p
          onMouseLeave={lowLigthAllElements}
          onMouseEnter={() => highLightElements("noble gas")}
        >
          {" "}
          <BsFillSquareFill />
          Noble Gas <GiAtom className="atom" />{" "}
        </p>
        <p
          onMouseLeave={lowLigthAllElements}
          onMouseEnter={() => highLightElements("alkali metal")}
        >
          {" "}
          <BsFillSquareFill />
          Alkali Metal <GiAtom className="atom" />{" "}
        </p>
        <p
          onMouseLeave={lowLigthAllElements}
          onMouseEnter={() => highLightElements("alkaline earth metal")}
        >
          {" "}
          <BsFillSquareFill />
          Alkali Earth Metal <GiAtom className="atom" />{" "}
        </p>
        <p
          onMouseLeave={lowLigthAllElements}
          onMouseEnter={() => highLightElements("transition metal")}
        >
          {" "}
          <BsFillSquareFill />
          Transition Metal <GiAtom className="atom" />{" "}
        </p>
        <p
          onMouseLeave={lowLigthAllElements}
          onMouseEnter={() => highLightElements("metalloid")}
        >
          {" "}
          <BsFillSquareFill />
          Metalloid <GiAtom className="atom" />{" "}
        </p>
        <p
          onMouseLeave={lowLigthAllElements}
          onMouseEnter={() => highLightElements("polyatomic nonmetal")}
        >
          {" "}
          <BsFillSquareFill />
          Polyatomic non-metal <GiAtom className="atom" />{" "}
        </p>
        <p
          onMouseLeave={lowLigthAllElements}
          onMouseEnter={() => highLightElements("post-transition metal")}
        >
          {" "}
          <BsFillSquareFill />
          Post-transition metal <GiAtom className="atom" />{" "}
        </p>
        <p
          onMouseLeave={lowLigthAllElements}
          onMouseEnter={() => highLightElements("lanthanide")}
        >
          {" "}
          <BsFillSquareFill />
          Lanthanid <GiAtom className="atom" />{" "}
        </p>
        <p
          onMouseLeave={lowLigthAllElements}
          onMouseEnter={() => highLightElements("actinide")}
        >
          {" "}
          <BsFillSquareFill />
          Actinid <GiAtom className="atom" />{" "}
        </p>
        <p
          onMouseLeave={lowLigthAllElements}
          onMouseEnter={() => highLightElements("unknown")}
        >
          {" "}
          <BsFillSquareFill />
          Uncertainty <GiAtom className="atom" />{" "}
        </p>
      </StyledFilters>
    </>
  );
};
