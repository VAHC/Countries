import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(NavLink)`
  display: inline-flex; /* Para que funcione justify-content */
  text-align: center;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  background-color: ${({ inactive }) => (inactive ? inactive : 'darkgrey')};
  color: white;
  height: 50px;
  width: 270px;

  &:hover {
    font-weight: 900;
    color: ${({ hover }) => (hover ? hover : 'lightgray')};
    background-color: white;
    box-shadow: 0 0 10px white, 0 0 40px;
  }

  &.active {
    color: ${({ color }) => (color ? color : 'black')};
    background-color: ${({ active }) => (active ? active : 'lightgray')};
    pointer-events: none;
  }
`;

// NOTA: las pseudoclases y los pseudoelementos no pueden aplicarse en estilos en linea.
// React implementa de forma nativa estilos en linea.
