import React, { useEffect, useRef } from "react";
import { StyledCard } from "./elementCard";
import { GiAtom, GiStoneBlock, GiHeatHaze } from "react-icons/gi"; //atomo , solido e gas
import { IoWater } from "react-icons/io5"; //liquido
import { CgCloseR } from "react-icons/cg"; //liquido

export const ElementCard = ({ currentElement, setCurrentElement }) => {
  const cardRef = useRef();

  useEffect(() => {
    function handleOutClick(event) {
      const target = event.target;
      if (!cardRef.current.contains(target)) {
        setCurrentElement(null);
      }
    }

    document.addEventListener("mousedown", handleOutClick);

    return () => {
      document.removeEventListener("mousedown", handleOutClick);
    };
  }, [setCurrentElement]);

  return (
    <StyledCard
      element={currentElement}
      color={`#${currentElement["cpk-hex"]}`}
    >
      <div className="card" ref={cardRef}>
        <CgCloseR
          className="closeBtn"
          onClick={() => setCurrentElement(null)}
        />
        <div className="header">
          <h2>
            <span>
              {currentElement.name} - {currentElement.symbol}
            </span>
            <GiAtom className="atom" />
          </h2>

          {currentElement.discovered_by ? (
            <>
              Discovery: <i>{currentElement.discovered_by} </i>
            </>
          ) : (
            <></>
          )}

          {currentElement.named_by ? (
            <>
              || Naming:
              <i>{currentElement.named_by}</i>
            </>
          ) : (
            <></>
          )}
        </div>

        <p>{currentElement.summary}</p>
        <img src={currentElement.image.url} alt={currentElement.image.title} />
        {currentElement.appearance ? (
          <span>Appearance: {currentElement.appearance}</span>
        ) : (
          <></>
        )}
        <div className="properties">
          <div className="text">
            <p className="phaseText">
              Phase:{" "}
              {currentElement.phase === "Gas" ? (
                <GiHeatHaze className="phase" />
              ) : (
                <></>
              )}
              {currentElement.phase === "Solid" ? (
                <GiStoneBlock className="phase" />
              ) : (
                <></>
              )}
              {currentElement.phase === "Liquid" ? (
                <IoWater className="phase" />
              ) : (
                <></>
              )}
            </p>
            <p>Boiling point: {(currentElement.boil - 273.15).toFixed(2)} °C</p>
            <p>Melting point: {(currentElement.melt - 273.15).toFixed(2)} °C</p>
          </div>
          <img src={currentElement.bohr_model_image} alt="" />
        </div>
      </div>
    </StyledCard>
  );
};
