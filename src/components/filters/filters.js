import styled from "styled-components";
import { css } from "styled-components";

export const StyledFilters = styled.div`
  width: 20vw;
  height: fit-content;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  p {
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .atom {
    font-size: 30px;
    animation: rotation infinite 5s linear;
    color: transparent;
  }

  p:hover .atom {
    color: #fff;
  }

  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export const StyledTitle = styled.h1`
  position: absolute;
  top: 0;
  left: 60px;
`;
