import styled from "styled-components";

export const StyledInput = styled.input`
  width: 100%;
  position: relative;
  top: -15px;
  padding: 0.3rem;
  font-size: 1rem;
  background-color: #d9e6ee;
  border: 1px solid var(--medium-blue);
  ::placeholder {
    /* Most modern browsers support this now. */
    color: #31429e;
  }

  :hover {
    cursor: text;
  }
  :focus {
    border: 2px solid var(--medium-blue);
  }
`;
