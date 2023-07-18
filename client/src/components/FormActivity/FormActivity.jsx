import { useEffect, useState } from "react";
import styled from "styled-components";
import StyledSelect from "../../styled components/StyledSelect";
import MultiSelect from "./../MultiSelect";
import { StyledButton } from "../../styled components/StyledButton";
import { StyledInput } from "../../styled components/StyledInput";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
import { getCountries, getAllActivities } from "../../redux/actions";
import { useHistory } from "react-router-dom";
import validate from "./validators";

const FormActivityBox = styled.form`
  display: flex;
  max-width: 350px;
  flex-direction: column;
  text-align: center;
  padding: 2rem 1.2rem 1.2rem 1.2rem;
  margin: 50px 0;
  border: 1px solid var(--medium-blue);
  box-shadow: 3px 3px var(--medium-blue);
  color: var(--medium-blue);
`;

const Title = styled.h2``;

const SubTitle = styled.h5`
  margin-bottom: 1rem;
`;

const CountriesLabel = styled.h4`
  margin: 1rem;
`;

const BottomForm = styled.div`
  text-align: center;
  padding-top: 1.2rem;
`;

const FormField = styled.div`
  margin-top: 0.8em;
  width: 100%;
`;

const ButtonSubmit = styled(StyledButton)`
  padding: 0.5rem 0.9rem;
`;

const ErrorMsg = styled.div`
  color: red;
  font-size: 0.7rem;
`;

export default function FormActivity() {
  const countries = useSelector((state) => state.countries);
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const history = useHistory()

  const [buttonEnable, setButtonEnable] = useState(true);
  const [formChanged, setFormChanged] = useState(false);
  const [errors, setErrors] = useState({firstTry: true});

  const [formData, setFormData] = useState({
        // name: "",
        // difficulty: "",
        // duration: "",
        // season: "",
        // countries: []
    
    name: { value: "", valid: false },
    difficulty: { value: "", valid: false },
    duration: { value: "", valid: false },
    season: { value: "", valid: false },
    countries: { value: [], valid: true },
    //img: { value: "", valid: true },
  });

  useEffect(() => {
    dispatch(getCountries());
    // eslint-disable-next-line
  }, [dispatch]);

  useEffect(() => {
    if (formChanged) {
      for (const prop in formData) {
        //console.log(`${prop}: `);
        if (
          formData[prop].hasOwnProperty("error") ||
          formData[prop].valid === false
        ) {
          console.log("encontró un error", formData);
          setButtonEnable(true);
          return;
        }
      }
      setButtonEnable(false);
    }
  }, [formData]);

  // const handleForm = (event) => {
  //   event.preventDefault();
  //   console.log("formData", formData);
  // };

  function handleForm(event){
    event.preventDefault();
    // if(formData.name && formData.difficulty && formData.duration && formData.season && formData.countries.length >= 1){
      //dispatch(postActivities(formData))
      alert("Activiy Created!!!")
      setFormData({
        name: "",
        difficulty: "",
        duration: "",
        season: "",
        countries: []
      });
      history.push('/home')
    //}    
  }

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      if (event.target.name === "countryInput") {
        event.preventDefault();
        return;
      }
    }
  };

  const onChangeName = (event) => {
  //   setFormData({
  //     ...formData,
  //     [event.target.name]: event.target.value
  //   });
  //   if(!errors.firstTry){
  //     setErrors(validate({
  //       ...formData,
  //       [event.target.name]: event.target.value
  //     }))
  // }
    
    
    const currentValue = event.target.value;

    if (currentValue.length === 0) {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value,
        error: "El campo no debe estar vacio.",
        valid: false,
        // name: {
        //   value: currentValue,
        //   error: "El campo no debe estar vacio.",
        //   valid: false,
        // },
      });
      return;
    }

    //TODO: El campo solo debe tener solo letras

    setFormData({ 
      ...formData, 
      [event.target.name]: event.target.value,
      valid: true
      // name: { value: currentValue, valid: true } });
  });
}
  const onChangeDifficulty = (event) => {
  //   setFormData({
  //     ...formData,
  //     [event.target.difficulty]: event.target.value
  //   });
  //   if(!errors.firstTry){
  //     setErrors(validate({
  //       ...formData,
  //       [event.target.difficulty]: event.target.value
  //     }))
      
  // }
    
    
    const currentValue = event.target.value;

    if (currentValue === "Difficulty") {
      setFormData({
        ...formData,
        [event.target.difficulty]: event.target.value,
        error: "Seleccione una dificultad.",
        valid: false,
        // difficulty: {
        //   value: currentValue,
        //   error: "Seleccione una dificultad.",
        //   valid: false,
        // },
      });
      return;
    }

    setFormData({
      ...formData,
      // [event.target.difficulty]: event.target.value,
      // false: true
      difficulty: { value: currentValue, false: true },
    });
  };

  const onChangeDuration = (event) => {
    const currentValue = event.target.value;

    if (currentValue.length === 0) {
      setFormData({
        ...formData,
        duration: {
          value: currentValue,
          error: "La duración no puede estar vacia.",
          valid: false,
        },
      });
      return;
    }

    //TODO: Verificar que sea sólo númeRos

    if (currentValue < 0) {
      setFormData({
        ...formData,
        duration: {
          value: currentValue,
          error: "La duracion no puede ser negativa.",
          valid: false,
        },
      });
      return;
    }

    if (currentValue > 72) {
      setFormData({
        ...formData,
        duration: {
          value: currentValue,
          error: "La duracion no puede mayor a 72 horas.",
          valid: false,
        },
      });
      return;
    }

    setFormData({
      ...formData,
      duration: { value: currentValue, valid: true },
    });
  };

  const onChangeSeason = (event) => {
    const currentValue = event.target.value;

    if (currentValue === "Season") {
      setFormData({
        ...formData,
        season: {
          value: currentValue,
          error: "Seleccione una estación.",
          valid: false,
        },
      });
      return;
    }

    setFormData({
      ...formData,
      season: { value: currentValue, valid: true },
    });
  };

  function handleCountry(event){
    setFormData({
        ...formData,
        countries: [...formData.countries, event.target.value]
    })
  }

  return (
    <FormActivityBox
      onChange={() => setFormChanged(true)}
      onSubmit={(event) => handleForm(event)}
      //onSubmit={handleForm}
      onKeyDown={handleKeyDown}
    >
      <Title>CREATE NEW ACTIVITY</Title>
      <br/>
      <SubTitle>Complete all fields</SubTitle>     
      <FormField>
        <StyledInput
          type="text"
          name="name"
          placeholder="Name"
          onChange={(e) => onChangeName(e)}
        />
        {formData.name.error && <ErrorMsg>{formData.name.error}</ErrorMsg>}
      </FormField>
      <StyledSelect
        backColor="#d9e6ee"
        color="#31429e"
        label="#1b1e3f"
        options={["Difficulty", "1", "2", "3", "4", "5"]}
        onChange={(e) => onChangeDifficulty(e)}
      />
      {formData.difficulty.error && (
        <ErrorMsg>{formData.difficulty.error}</ErrorMsg>
      )}
      <FormField>
        <StyledInput
          type="time"
          name="duration"
          placeholder="Duration"
          onChange={(e) => onChangeDuration(e)}
        />
        {formData.duration.error && (
          <ErrorMsg>{formData.duration.error}</ErrorMsg>
        )}
      </FormField>
      <StyledSelect
        backColor="#d9e6ee"
        color="#31429e"
        label="#1b1e3f"
        options={["Season", "Summer", "Autumn", "Winter", "Spring"]}
        onChange={(e) => onChangeSeason(e)}
      />
      {formData.season.error && <ErrorMsg>{formData.season.error}</ErrorMsg>}
      <CountriesLabel>Countries:</CountriesLabel>
      <MultiSelect
        formData={formData}
        setFormData={setFormData}
        countries={countries}
        onChange={(event) => handleCountry(event)}
      />
      {/* <FormField>
        <StyledInput placeholder="URL de imagen" />
      </FormField> */}
      <BottomForm>
        <ButtonSubmit type="submit" disabled={buttonEnable}>
          SUBMIT
        </ButtonSubmit>
      </BottomForm>
    </FormActivityBox>
  );
}
