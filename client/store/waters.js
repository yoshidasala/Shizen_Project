import axios from 'axios'
const TOKEN = 'token'

/**
 * ACTION TYPES
 */
const SET_WATERS = 'SET_WATERS'

/**
 * ACTION CREATORS
 */
const set_Waters = (waters) => ({type: SET_WATERS ,waters})

/**
 * THUNK CREATORS
 */

 export const fetchProjects = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("/api/waters");
      dispatch(set_Waters(data));
    } catch (error) {
      console.log(error);
    }
  };
};
/**
 * REDUCER
 */
export default function(state = {}, action) {
  switch (action.type) {
    case SET_WATERS:
      return action.waters
    default:
      return state
  }
}
