import style from './countries.module.css';

const Countries = ({ flag, name, continent }) => {
  return (
    <div className={style.container}>
      <img src={flag} alt="flag" className={style.img}></img>
      <div className={style.information}>
        <h2>{name}</h2>
        <div>{continent}</div>
      </div>
    </div>
  );
};

export default Countries;
