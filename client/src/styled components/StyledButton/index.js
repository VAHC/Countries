import styled from "styled-components";

export const StyledButton = styled.button`
  font-weight: bold;
  font-size: 0.9rem;
  position: relative;
  top: -15px;
  border: 1px solid var(--medium-blue);
  box-shadow: 3px 3px var(--medium-blue);
  color: var(--medium-blue);
  :hover {
    cursor: pointer;
    background-color: var(--medium-blue);
    color: #d9e6ee;
    box-shadow: 3px 3px lightslategray;
  }

  :disabled {
    background-color: lightgray;
    cursor: not-allowed;
    color: gray;
    box-shadow: 3px 3px darkgray;
    border: 1px solid gray;
    opacity: 0.85;
  }
`;
