import axios from "axios";
const TOKEN = "token";
import "regenerator-runtime/runtime";
/**
 * ACTION TYPES
 */
const SET_COLLECTIONS = "SET_COLLECTIONS";

/**
 * ACTION CREATORS
 */
const set_Collections = (collections) => ({ type: SET_COLLECTIONS, collections });

/**
 * THUNK CREATORS
 */

export const fetchCollections = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("/api/collection");
      dispatch(set_Collections(data));
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
    case SET_COLLECTIONS:
      return action.collections;
    default:
      return state;
  }
}
