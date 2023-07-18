import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 200px;
  position: relative;
  top: -15px;
  display: inline-block;
  font-size: 1rem;

  ::after {
    content: "\u25BC";
    color: ${({ label }) => (label ? label : "black")};
    position: absolute;
    right: 0;
    bottom: 0;
    margin: 5px 10px;
    transform: ${(props) => (props.active ? "rotate(90deg)" : "rotate(0deg)")};
    transition: all 0.4s;
  }
`;

const Label = styled.label`
  color: ${({ label }) => (label ? label : "black")};
  padding: 5px 0;
  width: 100%;
  display: block;
`;

const Select = styled.select`
  border: 1px solid ${({ color }) => (color ? color : "darkgrey")}; /* border: none; */
  appearance: none;
  padding: 5px;
  width: 100%;
  color: ${({ color }) => (color ? color : "darkgrey")};
  background-color: ${({ backColor }) => (backColor ? backColor : "lightgray")};
  font-size: 1rem; // select no esta heredando
`;

export default function StyledSelect({
  name,
  backColor,
  color,
  label,
  options,
  reference,
  onChange = null,
}) {
  // const [active, setActive] = useState(false);

  return (
    // <Container active={active} onClick={() => setActive(!active)}>
    <Container label={label}>
      <Label label={label}>{name}</Label>
      <Select
        backColor={backColor}
        color={color}
        options={options}
        ref={reference}
        onChange={onChange}
      >
        {options.map((option, index) => {
          return (
            <option value={option} key={index}>
              {option}
            </option>
          );
        })}
      </Select>
    </Container>
  );
}
