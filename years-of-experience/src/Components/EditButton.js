import React ,{ useState } from "react";
import {connect} from 'react-redux';
import {useSelector, useDispatch} from 'react-redux';
import {setReduxData} from '../Redux/actions';


export default function EditButton({data, modalState}) {

  const {reduxdata} = useSelector(
    state => state.userReducer,
  );
  const dispatch = useDispatch();

  const setModal = ()=>{
    dispatch(setReduxData(data));
    modalState(true)
  }
  return (
    <div className="editBar">
      <div className="editBarBtn" onClick={setModal}  data-testid="editBarbutton">
        <p>Edit Profile</p>
      </div>
    </div>
  );
}

