import {
  SET_REDUXDATA
} from './actions';

const initialState = {
  reduxdata: [],
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case SET_REDUXDATA:
      return {
        ...state,
        reduxdata: action.payload,
      };
      

    default:
      return state;
  }
}

export default userReducer;