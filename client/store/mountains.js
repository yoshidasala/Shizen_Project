import axios from "axios";
const TOKEN = "token";
import "regenerator-runtime/runtime";
/**
 * ACTION TYPES
 */
const SET_MOUNTAINS = "SET_MOUNTAINS";

/**
 * ACTION CREATORS
 */
const set_Mountains = (mountains) => ({ type: SET_MOUNTAINS, mountains });

/**
 * THUNK CREATORS
 */

export const fetchMountains = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("/api/mountains");
      dispatch(set_Mountains(data));
    } catch (error) {
      console.log(error);
    }
  };
};
/**
 * REDUCER
 */
export default function (state = [], action) {
  switch (action.type) {
    case SET_MOUNTAINS:
      return action.mountains;
    default:
      return state;
  }
}
