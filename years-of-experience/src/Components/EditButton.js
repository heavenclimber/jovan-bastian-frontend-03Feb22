import React ,{ useState } from "react";

export default function EditButton({modalState}) {
  const setModal = ()=>{
    console.log('bleh')
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
