//import { useState, useEffect } from "react";
import styled from "styled-components";
import LeftEndIcon from "../../asserts/svg/media-backward-end-svgrepo-com.svg";
import LeftIcon from "../../asserts/svg/left.svg";
import RightIcon from "../../asserts/svg/right.svg";
import RighEndIcon from "../../asserts/svg/media-forward-end-svgrepo-com.svg";

const PaginatorBox = styled.div`
  width: 100vw;
  height: 5vh;
  border: 1px solid var(--medium-blue);
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  /* con flex no hay solapamiento de margins */
  /* buena práctica mover hacia abajo las cajas solo con margin-bottom */
`;

const LeftColumn = styled.div`
  width: 20%;
  display: flex;
  flex-direction: row;
`;

const CenterColumn = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #31429e;
`;

const RightColumn = styled.div`
  width: 20%;
  display: flex;
  flex-direction: row-reverse;
`;

const ActionButton = styled.button`
  margin: 0.5vh;
  font-size: 1rem;
  width: 30%;
  border: 1px solid var(--medium-blue);
  cursor: pointer;
  background-color: #d9e6ee;
  background-size: 4vh 4vh;
  background-repeat: no-repeat;
  background-position: center;
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: inset 0 0 0 2em rgba(49, 64, 157, 0.5);
  }
`;

const LeftEndButton = styled(ActionButton)`
  background-image: url(${LeftEndIcon});
`;

const LeftButton = styled(ActionButton)`
  background-image: url(${LeftIcon});
`;

const RightButton = styled(ActionButton)`
  background-image: url(${RightIcon});
`;

const RightEndButton = styled(ActionButton)`
  background-image: url(${RighEndIcon});
`;

export default function Paginator({ currentPage, setCurrentPage, maxPag }) {
  //const [maxPag, setMaxPag] = useState(maxPagProp);

  const onLeftButton = () => {
    if (currentPage === 0) return;
    setCurrentPage(currentPage - 1);
  };

  const onRightButton = () => {
    if (currentPage === maxPag) return;
    setCurrentPage(currentPage + 1);
  };

  return (
    <PaginatorBox>
      <LeftColumn>
        <LeftEndButton onClick={() => setCurrentPage(0)} />{" "}
        <LeftButton onClick={() => onLeftButton()} />
      </LeftColumn>
      <CenterColumn>
        {currentPage} / {maxPag}
      </CenterColumn>
      <RightColumn>
        <RightEndButton onClick={() => setCurrentPage(maxPag)} />
        <RightButton onClick={() => onRightButton()} />
      </RightColumn>
    </PaginatorBox>
  );
}
