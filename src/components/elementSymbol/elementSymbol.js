import styled from "styled-components";
import { css } from "styled-components";

export const StyledSymbol = styled.button`
  ${({ element }) => {
    const xpos = element.xpos;
    const ypos = element.ypos;
    return css`
      grid-column: ${xpos};
      grid-row: ${ypos};
    `;
  }}

  ${({ element }) => {
    if (element.category === "diatomic nonmetal") {
      return css`
        border: 2px solid #e900ff;
        color: #e900ff;
      `;
    } else if (
      element.category === "noble gas" ||
      element.category === "unknown, predicted to be noble gas"
    ) {
      return css`
        border: 2px solid #9cff2e;
        color: #9cff2e;
      `;
    } else if (
      element.category === "alkali metal" ||
      element.category === "unknown, but predicted to be an alkali metal"
    ) {
      return css`
        border: 2px solid #b9fff8;
        color: #b9fff8;
      `;
    } else if (element.category === "alkaline earth metal") {
      return css`
        border: 2px solid #fedb39;
        color: #fedb39;
      `;
    } else if (
      element.category === "transition metal" ||
      element.category === "unknown, probably transition metal"
    ) {
      return css`
        border: 2px solid #0096ff;
        color: #0096ff;
      `;
    } else if (
      element.category === "metalloid" ||
      element.category === "unknown, probably metalloid"
    ) {
      return css`
        border: 2px solid #ff8e00;
        color: #ff8e00;
      `;
    } else if (element.category === "polyatomic nonmetal") {
      return css`
        border: 2px solid #ff1e1e;
        color: #ff1e1e;
      `;
    } else if (
      element.category === "post-transition metal" ||
      element.category === "unknown, probably post-transition metal"
    ) {
      return css`
        border: 2px solid #feffde;
        color: #feffde;
      `;
    } else if (element.category === "lanthanide") {
      return css`
        border: 2px solid #ff0075;
        color: #ff0075;
      `;
    } else if (element.category === "actinide") {
      return css`
        border: 2px solid #b983ff;
        color: #b983ff;
      `;
    }
  }}

  ${({ element }) => {
    if (
      element.highligth === "on" &&
      element.category === "diatomic nonmetal"
    ) {
      return css`
        background-color: #e900ff;
        color: #000;
        font-weight: 700;
      `;
    } else if (
      element.highligth === "on" &&
      (element.category === "noble gas" ||
        element.category === "unknown, predicted to be noble gas")
    ) {
      return css`
        background-color: #9cff2e;
        color: #000;
        font-weight: 700;
      `;
    } else if (
      element.highligth === "on" &&
      (element.category === "alkali metal" ||
        element.category === "unknown, but predicted to be an alkali metal")
    ) {
      return css`
        background-color: #b9fff8;
        color: #000;
        font-weight: 700;
      `;
    } else if (
      element.highligth === "on" &&
      element.category === "alkaline earth metal"
    ) {
      return css`
        background-color: #fedb39;
        color: #000;
        font-weight: 700;
      `;
    } else if (
      element.highligth === "on" &&
      (element.category === "transition metal" ||
        element.category === "unknown, probably transition metal")
    ) {
      return css`
        background-color: #0096ff;
        color: #000;
        font-weight: 700;
      `;
    } else if (
      element.highligth === "on" &&
      (element.category === "metalloid" ||
        element.category === "unknown, probably metalloid")
    ) {
      return css`
        background-color: #ff8e00;
        color: #000;
        font-weight: 700;
      `;
    } else if (
      element.highligth === "on" &&
      element.category === "polyatomic nonmetal"
    ) {
      return css`
        background-color: #ff1e1e;
        color: #000;
        font-weight: 700;
      `;
    } else if (
      element.highligth === "on" &&
      (element.category === "post-transition metal" ||
        element.category === "unknown, probably post-transition metal")
    ) {
      return css`
        background-color: #feffde;
        color: #000;
        font-weight: 700;
      `;
    } else if (
      element.highligth === "on" &&
      element.category === "lanthanide"
    ) {
      return css`
        background-color: #ff0075;
        color: #000;
        font-weight: 700;
      `;
    } else if (element.highligth === "on" && element.category === "actinide") {
      return css`
        background-color: #b983ff;
        color: #000;
        font-weight: 700;
      `;
    } else {
      return css`
        background-color: transparent;
      `;
    }
  }}


  width: 64px;
  height: 64px;
  font-weight: bold;
  position: relative;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
  span {
    font-size: 8px;
  }

  .atomic_mass {
    position: absolute;
    top: 1px;
    left: 1px;
  }

  .atomic_number {
    position: absolute;
    top: 1px;
    right: 2px;
  }
`;
