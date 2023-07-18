import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { cleanDetail, getCountry } from '../../redux/actions';
import style from './country.module.css';

const Country = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const country = useSelector((state) => state.country);

  useEffect(() => {
    dispatch(getCountry(id));
    // eslint-disable-next-line
    //alert("Intro");
    return () => {
      //alert("Salí")
      dispatch(cleanDetail())
    }
  }, [id]);

  return (
    <section className={style.section}>
      <img src={country.flag} alt="flag" className={style.img} />
      <div className={style.title}>
        <h1>{country.name}</h1>
      </div>
      <div className={style.data}>
        <h3>CODE: {country.id}</h3>
        <h3>CONTINENT: {country.continent}</h3>
        <h3>CAPITAL: {country.capital}</h3>
        <h3>SUBREGION: {country.subregion}</h3>
        <h3>AREA: {country.area}</h3>
        <h3>POPULATION: {country.population}</h3>
      </div>
    </section>
  );
};

export default Country;
