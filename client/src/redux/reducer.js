import { 
  GET_COUNTRIES, 
  GET_COUNTRY, 
  GET_BY_NAME_COUNTRIES, 
  //POST_ACTIVITY, 
  GET_ACTIVITIES,
  GET_ALL_ACTIVITIES,
  FILTER_BY_ACTIVITIES,
  CLEAN_DETAIL

} from './actions';

const initialState = {
  countries: [],
  country: {},
  activities: [],
  postedActivites: [],
  allActivities: [],
  showLoading: false
};

//En nuestro estado guardaremos objetos con `todos`. Cada todo tendra: title, description, place, date, id y un status;
const reducer = (state = initialState, action) => {
  switch (action.type) {
    // Aca va tu codigo;
    case GET_COUNTRIES:
      return { 
        ...state, 
        countries: action.payload 
      };

    case GET_BY_NAME_COUNTRIES:
      return{
        ...state,
        countries: action.payload
      };
    case GET_COUNTRY:
      return { 
        ...state, 
        country: action.payload 
      };
    // case POST_ACTIVITY:
    //   return{
    //     ...state
    //   }
    case GET_ALL_ACTIVITIES:
      return { 
        ...state, 
        postedActivities: action.payload 
      };
    // case GET_ALL_ACTIVITIES: 
    //   return {
    //     ...state,
    //     allActivities: action.payload.sort((a, b) => a.name.localeCompare(b.name)),
    //     showLoading: false,
    //   }
      case FILTER_BY_ACTIVITIES:
        if(action.payload.length !== 0){
            const selectedActivities = action.payload
            const filterActivities = state.backUpCountries.filter((country) => {
                return selectedActivities.every(i => country.activities.map(activity => activity.name).includes(i))
            })
            return{
                ...state,
                allCountries: filterActivities
            }
        } else{
            return {
                ...state,
                allCountries: state.backUpCountries
            }        
        }
      case CLEAN_DETAIL:
        return{
          ...state,
          country: {}
        }
    default:
      return state;
  }
};

export default reducer;
