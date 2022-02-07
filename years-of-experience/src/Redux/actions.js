export const SET_REDUXDATA = "SET_REDUXDATA"


export const setReduxData = reduxdata => dispatch => {
    dispatch({
        type: SET_REDUXDATA,
        payload: reduxdata,
    });
};
