import axios from "axios";

// const hostname = "http://localhost:3001";

export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_COUNTRY = "GET_COUNTRY";
export const GET_BY_NAME_COUNTRIES = "GET_BY_NAME_COUNTRIES";
export const GET_ACTIVITIES = "GET_ACTIVITIES";
export const GET_ALL_ACTIVITIES = "GET_ALL_ACTIVITIES"
//export const POST_ACTIVITY = 'POST_ACTIVITY';
export const FILTER_BY_ACTIVITIES = "FILTER_BY_ACTIVITIES"
export const CLEAN_DETAIL = "CLEAN_DETAIL"

export function getCountries(){
  return async function(dispatch){
      const response = await axios.get("http://localhost:3001/countries");
      return dispatch({
          type: GET_COUNTRIES,
          payload: response.data
      })
  }
}
//---------------------------------------------------------------------
export function cleanDetail(){
  
  return async function(dispatch){
        return dispatch({
          type: CLEAN_DETAIL
      })
  }
}


export function getByNameCountries(name){
  return async function(dispatch){
      try {
          const db = await axios.get("http://localhost:3001/countries?name=" + name);
          return dispatch({
              type: GET_BY_NAME_COUNTRIES,
              payload: db.data
          })
      } catch (error) {
          console.log(error);
      }
  }
}

export const getCountry = (id) => {
  return async function (dispatch) {
    const country = await axios.get(`http://localhost:3001/countries/${id}`)
    return dispatch({
      type: GET_COUNTRY,
      payload: country.data
    })    
  };
};

// export const postActivity = (countries) => {
//   return async function (dispatch) {
//     let response = await axios.post('http://localhost:3001/activities', countries)
//     return response
//   }
// }

// export function postActivities(payload){
//   return async function(dispatch){
//     try {
//       const db = await axios.post("http://localhost:3001/activities", payload);
//       return dispatch({
//         type: POST_ACTIVITY,
//         payload: db.data
//       })
//     } catch (error) {
//       console.log(error);
//       console.log('Error action postActivity' + error);
//     };
//   };
// };

// export function getActivities(){
//   return async function(dispatch){
//       const db = await axios.get("http://localhost:3001/activities", {

//       });
//       return dispatch({
//           type: GET_ACTIVITIES,
//           payload: db.data
//       });
//   }
// }

// export function getAllActivities() {
//   return function (dispatch) {
//       axios.get("http://localhost:3001/activities")
//           .then(response => response.data)
//           .then(response => {
//               dispatch({ type: GET_ALL_ACTIVITIES, payload: response })
//           })
//           .catch(error => console.log(error))
//   };
// };

export function getAllActivities() {
  return async function (dispatch) {
      try {
          var json = await axios.get("http://localhost:3001/activities")
          return dispatch({
              type: GET_ALL_ACTIVITIES,
              payload: json.data
          })
      } catch (error) {
          console.log('Error action filterByActivity ' + error)
      };
  };
};

export function filterByActivities(payload) {
  return {
      type: FILTER_BY_ACTIVITIES,
      payload: payload
  }
};



// export const getActivities = () => {
//   return async function (dispatch) {
//     const { data } = await axios.get("http://localhost:3001/activities");
//     const activities = data.map((activity) => activity.name);
//     console.log(activities);
//     dispatch({ type: GET_ACTIVITIES, payload: activities });
//   };
// };



// export const getCountries = () => {
//   return function (dispach) {
//     axios
//       .get(`${hostname}/api/countries`)
//       .then((response) =>
//         dispach({ type: GET_COUNTRIES, payload: response.data })
//       );
//   };
// };

