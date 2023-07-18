import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getCountries, getAllActivities, filterByActivities } from "../../redux/actions";
import Countries from "../Countries";
import StyledSelect from "../../styled components/StyledSelect";
import { StyledButton } from "../../styled components/StyledButton";
import style from "./home.module.css";
import Paginator from "../Paginator";
import SearchBar from "../searchBar/searchBar.component";
import FilterByActivities from "../Filter/filterByActivities";

function Home() {
  const [countriesFilter, setCountriesFilter] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [maxPag, setMaxPag] = useState(0);
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);
  const allActivities = useSelector(state => state.allActivities)
  const [activities, setActivities] = useState([])
  const continenteSelect = useRef(null);
  const activitySelect = useRef(null);
  const orderSelect = useRef(null);

  useEffect(() => {
    dispatch(getCountries());
    // eslint-disable-next-line
  }, []);

  function handleClick(e){
    e.preventDefault();
    dispatch(getCountries());
  }

  useEffect(() => {
    dispatch(getAllActivities())
    dispatch(filterByActivities(activities))
}, [dispatch, activities])


function handleActivities(e) {
    if(e.target.value !== 'Seleccionar' && !activities.includes(e.target.value)){
        setActivities([...activities, e.target.value])
    }
}

  /* FILTRO */

  const clausureContinent = (country) => {
    if (continenteSelect.current.value === "All") return true;
    return country.continent === continenteSelect.current.value;
  };


  

  const clausureActivity = (country) => {
    if (activitySelect.current.value === "All") return true;
    return country.activities.some(
      (oneActivity) => oneActivity.name === activitySelect.current.value
    );
  };

  const finalClausure = (country) =>
    clausureContinent(country) && clausureActivity(country);

  /* FIN FILTRO */

  /* ORDENAMIENTO */

  /* FIN ORDENAMIENTO */

  const onFilter = () => {
    const order = orderSelect.current.value;
    let orderA;
    let orderB;
    let property;

    switch (order) {
      case "A - Z":
        orderA = 1;
        orderB = -1;
        property = "name";
        break;
      case "Z - A":
        orderA = -1;
        orderB = 1;
        property = "name";
        break;
      case "Menor - Mayor":
        orderA = 1;
        orderB = -1;
        property = "population";
        break;
      case "Mayor - Menor":
        orderA = -1;
        orderB = 1;
        property = "population";
        break;
    }

    countries.sort(function (a, b) {
      if (a[property] > b[property]) return orderA;
      if (a[property] < b[property]) return orderB;
      return 0;
    });

    setMaxPag(
      Math.floor(
        countries.filter((country) => finalClausure(country)).length / 10
      )
    );

    setCountriesFilter(
      countries
        .filter((country) => finalClausure(country))
        .slice(currentPage * 10, currentPage * 10 + 10)
    );

    //maxPag = Math.floor(countriesFilter.length / 10);
  };

  useEffect(() => {
    onFilter();
    // eslint-disable-next-line
  }, [countries, currentPage]);

  
  return (
    <React.Fragment>
      <section className={style.section}>
        <div className={style.menu}>
        <SearchBar />
          <StyledSelect
            name="Continents:"
            backColor="#d9e6ee"
            color="#31429e"
            label="#1b1e3f"
            options={[
              "All",
              "South America",
              "North America",
              "Europe",
              "Africa",
              "Asia",
              "Oceania",
            ]}
            reference={continenteSelect}
            onChange={() => onFilter()}
          />
          
          
          <StyledSelect
            name="Tourist Activity:"
            backColor="#d9e6ee"
            color="#31429e"
            label="#1b1e3f"
            
            options={[
              "All",
              "ski",
              "trekking",
              "rafting",
              "parapente",
              "paracaidismo",
              "ciclismo",
              "rappel",
              "buceo",
              "pesca",
            ]}
            reference={activitySelect}
            onChange={() => onFilter()}
            
          />
          {/* <FilterByActivities /> */}
          <StyledSelect
            name="Alphabetically and Population:"
            backColor="#d9e6ee"
            color="#31429e"
            label="#1b1e3f"
            options={[
              "A - Z",
              "Z - A",
              "Menor - Mayor",
              "Mayor - Menor",
            ]}
            reference={orderSelect}
            onChange={() => onFilter()}
          />
          <StyledButton onClick={e=>{handleClick(e)}}>
            Reaload all countries
          </StyledButton>
        </div>
        <Paginator
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          maxPag={maxPag}
        />

        <div className={style.cards}>
          {countriesFilter &&
            countriesFilter.map((country) => (
              <Link to={`/country/${country.id}`} key={country.id}>
                <Countries
                  key={country.id}
                  flag={country.flag}
                  name={country.name}
                  continent={country.continent}
                />
              </Link>
            ))}
        </div>
      </section>
    </React.Fragment>
  );
}

export default Home;
