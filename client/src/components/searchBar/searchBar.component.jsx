import { StyledInput } from "../../styled components/StyledInput";
import { StyledButton } from "../../styled components/StyledButton";

// import './searchBar.styles.css'
// import styled from 'styled-components';

import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getByNameCountries } from '../../redux/actions';

// const styleInput = styled.input`
// margin-right: 15px,
// padding: 7px,
// background-color: #d9e6ee,
// font-size: 1rem,
// color: #31429e,
// border-radius: 5px,
// border: 1px solid var(--medium-blue),
// `;

// const styleInput = {
//   marginRight: "15px",
//   padding: "7px",
//   backgroundColor: "#d9e6ee",
//   fontSize: "1rem",
//   color: "#31429e",
//   borderRadius: "5px",
//   border: "1px solid var(--medium-blue)",
// };

// const styleButton = {
//   color: "#31429e",
//   border: "1px solid var(--medium-blue)",
//   borderRadius: "5px",
//   fontWeight: "bold",
//   fontSize: "0.9rem",
//   padding: "5px",
//   margin: "5px 0px 5px 0px",
//   marginRight: "15px",
//   cursor: 'pointer',
//   backgroundColor: '#d9e6ee',
// };

// const styleButton = styled.button`
// color: #31429e,
// border: 1px solid var(--medium-blue),
// border-radius: 5px,
// font-weight: bold,
// font-size: 0.9rem,
// padding: 5px,
// margin: 5px 0px 5px 0px,
// margin-right: 15px,
// cursor: pointer,
// background-color: #d9e6ee,
// `;

export default function SearchBar(){
  const dispatch = useDispatch();
  const [name, setName] = useState("")

function handleInputChange(e){
  e.preventDefault()
  setName(e.target.value)
}

function handleSubmit(e){
  e.preventDefault()
  dispatch(getByNameCountries(name))
  setName("");
}

  return(
    <div>
      <StyledInput 
        type="text"
        placeholder='Write the name'
        onChange={(e) => handleInputChange(e)}
        // style={styleInput}
        />
      <StyledButton
        type='submit' 
        onClick={(e) => handleSubmit(e)}
        // style={styleButton}
      >Search a country</StyledButton>
    </div>
  )
}



// function Navbar({handleChange, handleSubmit}) {
//   return (
//     <div className='search-box'>
//       <form onChange={handleChange}>
//         <input placeholder='Search' type='search'/>
//         <button type='submit' onClick={handleSubmit}>Search</button>
//       </form>
//     </div>
//   );
// }

// export default Navbar;