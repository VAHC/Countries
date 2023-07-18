import { useRef } from "react";
import styled from "styled-components";
import { StyledButton } from "../../styled components/StyledButton";
import { StyledInput } from "../../styled components/StyledInput";

const MultiSelectBox = styled.div``;

const TopRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const BottomRow = styled.div`
  margin-top: 0.7rem;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const LeftColumn = styled.div`
  width: 84%;
`;

const RightColumn = styled.div`
  width: 16%;
  text-align: right;
`;

const ButtonAdd = styled(StyledButton)`
  padding: 0.3rem 0.9rem;
`;

const ErrorMsg = styled.div`
  color: red;
  font-size: 0.7rem;
`;

export default function MultiSelect({ formData, setFormData, countries }) {
  const dataListRef = useRef(null);

  const onAddClick = (event) => {
    event.preventDefault();

    if (formData.countries.hasOwnProperty("error")) return;

    const currentArray = formData.countries.value;
    const currentName = dataListRef.current.value;

    if (currentName.length === 0) return;

    if (currentArray.some((country) => country.name === currentName)) return;

    const currentCountry = countries.find((c) => c.name === currentName);

    setFormData({
      ...formData,
      countries: {
        value: [
          ...currentArray,
          {
            id: currentCountry.id,
            name: currentCountry.name,
            flag: currentCountry.flag,
          },
        ],
      },
    });

    dataListRef.current.value = "";
  };

  const onChangeCountries = (event) => {
    const currentValue = event.target.value;

    //TODO: mostrar el error de no tiene pais
    if (currentValue.length === 0) {
      setFormData({
        ...formData,
        countries: {
          value: formData.countries.value,
        },
      });
      return;
    }

    if (
      currentValue.length === 0 ||
      !countries.some((c) => c.name === currentValue)
    ) {
      setFormData({
        ...formData,
        countries: {
          ...formData.countries,
          error: "The country is not found",
        },
      });
      return;
    }

    setFormData({
      ...formData,
      countries: {
        value: formData.countries.value,
      },
    });
  };

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      onAddClick(event);
      return;
    }
  };

  return (
    <MultiSelectBox>
      <TopRow>
        <LeftColumn>
          <StyledInput
            name="countryInput"
            list="countriesLabels"
            ref={dataListRef}
            onChange={(e) => onChangeCountries(e)}
            onKeyDown={(e) => onKeyDown(e)}
          />
          <datalist id="countriesLabels">
            {countries.map((country) => (
              <option key={country.id} value={country.name} />
            ))}
          </datalist>
          {formData.countries.error && (
            <ErrorMsg>{formData.countries.error}</ErrorMsg>
          )}
        </LeftColumn>
        <RightColumn>
          <ButtonAdd type="button" onClick={onAddClick}>
            +
          </ButtonAdd>
        </RightColumn>
      </TopRow>
      <BottomRow>
        {formData.countries.value.map((country) => (
          <Country
            country={country}
            key={country.id}
            formData={formData}
            setFormData={setFormData}
          />
        ))}
      </BottomRow>
    </MultiSelectBox>
  );
}

const OneCountry = styled.div`
  background-color: #afc8d7;
  display: inline-block;
  padding: 0.3rem;
  margin: 0.2rem;
`;

const CrusButton = styled(StyledButton)`
  padding: 0.1rem;
  margin: 0 0.1rem;
`;

const Flag = styled.img`
  width: 20px;
  height: 20px;
  vertical-align: middle;
  margin: 0 0.2em 0 0.2em;
  box-shadow: 0 0 5px 2px rgb(0 0 0 / 60%);
`;

function Country({ country, formData, setFormData }) {
  const onDeleteCountry = (countryId) => {
    setFormData({
      ...formData,
      countries: {
        value: formData.countries.value.filter((c) => c.id !== countryId),
      },
    });
  };

  return (
    <OneCountry>
      <Flag src={country.flag} alt="flag" />
      {country.name}
      <CrusButton onClick={() => onDeleteCountry(country.id)}>X</CrusButton>
    </OneCountry>
  );
}
