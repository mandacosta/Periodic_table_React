import styled from "styled-components";
import { css } from "styled-components";

export const StyledCard = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-color: #00000052;
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;

  .card {
    width: 500px;
    height: fit-content;
    background-color: #000;
    border-radius: 8px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    ${({ element }) => {
      if (element.category === "diatomic nonmetal") {
        return css`
          border: 2px solid #e900ff;
        `;
      } else if (
        element.category === "noble gas" ||
        element.category === "unknown, predicted to be noble gas"
      ) {
        return css`
          border: 2px solid #9cff2e;
        `;
      } else if (
        element.category === "alkali metal" ||
        element.category === "unknown, but predicted to be an alkali metal"
      ) {
        return css`
          border: 2px solid #b9fff8;
        `;
      } else if (element.category === "alkaline earth metal") {
        return css`
          border: 2px solid #fedb39;
        `;
      } else if (
        element.category === "transition metal" ||
        element.category === "unknown, probably transition metal"
      ) {
        return css`
          border: 2px solid #0096ff;
        `;
      } else if (
        element.category === "metalloid" ||
        element.category === "unknown, probably metalloid"
      ) {
        return css`
          border: 2px solid #ff8e00;
        `;
      } else if (element.category === "polyatomic nonmetal") {
        return css`
          border: 2px solid #ff1e1e;
        `;
      } else if (
        element.category === "post-transition metal" ||
        element.category === "unknown, probably post-transition metal"
      ) {
        return css`
          border: 2px solid #feffde;
        `;
      } else if (element.category === "lanthanide") {
        return css`
          border: 2px solid #ff0075;
        `;
      } else if (element.category === "actinide") {
        return css`
          border: 2px solid #b983ff;
        `;
      }
    }}

    .closeBtn {
      position: absolute;
      top: 15px;
      right: 15px;
      font-size: 30px;
      cursor: pointer;
    }

    .header {
      width: 100%;

      h2 {
        display: flex;
        gap: 40px;
        align-items: center;
      }
    }

    .atom {
      font-size: 50px;

      ${({ color }) => {
        return css`
          color: ${color};
        `;
      }}
    }
    p {
      width: 100%;
      line-height: 28px;
    }

    img {
      width: 200px;
      height: 200px;
      border-radius: 8px;
      object-fit: cover;
      margin-bottom: 5px;
    }

    .properties {
      width: 100%;
      height: 200px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .text {
        .phaseText {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .phase {
          font-size: 30px;

          ${({ color }) => {
            return css`
              color: ${color};
            `;
          }}
        }
      }

      img {
        width: 150px;
        height: 150px;
        object-fit: cover;
        border-radius: 50%;
        filter: grayscale(0.5);
      }
    }
  }
`;
