import React, { useEffect, useState } from "react";
import UploadProfilePic from "./UploadProfilePic";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import storage from "../Firebase/Firebase";
import { useSelector, useDispatch } from "react-redux";
import { setReduxData } from "../Redux/actions";
import "../bootstrap/bootstrap.css";
import axios from "axios";

function Modal({ loading, setLoad, data, setData, image, setImage, modalState }) {
  const [editdata, setEditData] = useState([]);
  const [newimage, setNewImage] = useState("");
  const [experienceCount, setExperienceCount] = useState(1);

  const { reduxdata } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const closeModal = () => {
    modalState(false);
  };

  useEffect(() => {
    setEditData(data);
  }, []);

  const upload = () => {
    console.log(editdata)
    console.log(JSON.stringify(editdata))
      let the_link =
      "https://jovan-bastian-frontend-03feb22-default-rtdb.asia-southeast1.firebasedatabase.app/data.json";
    axios({
      url: the_link,
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data: JSON.stringify(
        editdata),
    })
      .then((response) => { 
        console.log("WOI")
        localStorage.setItem("Mydata", JSON.stringify(editdata));
        if (newimage === null || newimage === undefined || newimage === "") {
          return 
        }
        else{
          storage
          .ref(`/images/profilepic`)
          .put(newimage)
        } 
     
       
      })
      .catch((error) => {
        alert(error);
      });
      
      modalState(false)
  };

  const experienceEditCompany = (e,i) =>{
    let tempData = {...editdata}
    tempData.experiences[i].company=e.target.value
   setEditData(tempData)
  }

  const experienceEditRole = (e,i) =>{
    let tempData = {...editdata}
    tempData.experiences[i].role=e.target.value
   setEditData(tempData)
  }

  const experienceEditSDate = (e,i) =>{
    let tempData = {...editdata}
    tempData.experiences[i].startdate=e.target.value
   setEditData(tempData)
  }
  const experienceEditLDate = (e,i) =>{
    let tempData = {...editdata}
    tempData.experiences[i].enddate=e.target.value
   setEditData(tempData)
  }

  const experienceEditJobDesc = (e,i) =>{
    let tempData = {...editdata}
    tempData.experiences[i].jobdesc=e.target.value
   setEditData(tempData)
  }

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="modal-container">
      <div className="modal-input  modal-scroll">
        {/* <p className="message"></p> */}
        <form id="form-edit" onSubmit={onSubmit} class="rounded bg-white mt-5 mb-5">
          <div class="row">
            <div class="col-md-3 border-right">
              <div class="d-flex flex-column align-items-center text-center p-3  py-5">
                <UploadProfilePic
                  editdata={editdata}
                  image={image}
                  newimage={newimage}
                  setNewImage={setNewImage}
                />
              </div>
            </div>
            <div class="col border-right">
              <div class="p-3  py-5">
                <div class="d-flex justify-content-between align-items-center mb-3">
                  <h6 class="text-right">Edit your profile</h6>
                </div>
                <div class="row mt-2">
                  <div class="col-md-6">
                    <label id class="labels">
                      Name
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      value={editdata.name}
                      onChange={(e) =>
                        setEditData({ ...editdata, name: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div class="col-md-6">
                    <label class="labels">Age</label>
                    <input
                      type="number"
                      class="form-control"
                      value={editdata.age}   onChange={(e) =>
                        setEditData({ ...editdata, age: e.target.value })
                      } required
                    /> 
                  </div>
                </div>
                <div class="row mt-3">
                  <div class="col-md-12">
                    <label class="labels">Role</label>
                    <input
                      type="text"
                      class="form-control"
                      value={editdata.role}
                      onChange={(e) =>  setEditData({ ...editdata, role: e.target.value })} required
                    />
                  </div>
                </div>
                <div class="row mt-3">
                  <div class="col-md-6">
                    <label class="labels">Facebook</label>
                    <input
                      type="text"
                      class="form-control"
                      value={editdata.fblink}
                      onChange={(e) =>  setEditData({ ...editdata, fblink: e.target.value })} required
                    />
                  </div>
                  <div class="col-md-6">
                    <label class="labels">Instagram</label>
                    <input
                      type="text"
                      class="form-control"
                      value={editdata.iglink}
                      onChange={(e) =>  setEditData({ ...editdata, iglink: e.target.value })} required
                    />
                  </div>
                  <div class="col-md-6">
                    <label class="labels">Linkedin</label>
                    <input
                      type="text"
                      class="form-control"
                      value={editdata.linkedinlink}
                      onChange={(e) =>  setEditData({ ...editdata, linkedinlink: e.target.value })} required
                    />
                  </div>
                  <div class="col-md-6">
                    <label class="labels">Github</label>
                    <input
                      type="text"
                      class="form-control"
                      value={editdata.githublink}
                      onChange={(e) =>  setEditData({ ...editdata, githublink: e.target.value })} required
                    />
                  </div>
                </div>
                {/* <div class="mt-5 text-center"><button class="btn btn-primary profile-button" type="button">Save Profile</button></div> */}
              </div>
            </div>
          </div>
          <div class="col">
            <div class="d-flex justify-content-between align-items-center experience">
              <h6>Experience</h6>
            </div>
           {editdata.experiences ? 
           <div>{editdata.experiences.map((val, i)=>{
            return(
              <div className="work-experience-box">
            <hr />
            <div className="add-experience-list">
              <label class="labels">Job</label>
              <input
                type="text"
                class="form-control"
                value={val.role}
                onChange={(e) =>  experienceEditRole(e, i)} required
              />
            </div>
            <div className="add-experience-list">
              <label class="labels">Company</label>
              <input
                type="text"
                class="form-control"
                value={val.company}
                onChange={(e) =>  experienceEditCompany(e, i)} required
              />
            </div>
            <div className="row add-experience-list">
              <div className="col-md-3">
                <label class="labels">Start Date</label>
                <input
                  type="date"
                  class="form-control"
                  value={val.startdate}
                  onChange={(e) =>  experienceEditSDate(e, i)} required
                />
              </div>
              <div className="col-md-3">
                <label class="labels">End Date</label>
                <input
                  type="date"
                  class="form-control"
                  value={val.enddate}
                  onChange={(e) =>  experienceEditLDate(e, i)} required
                />
              </div>
            </div>
            <div className="add-experience-list">
              <label class="labels">Job Description</label>
              <textarea
                type="text"
                class="form-control"
                value={val.jobdesc}
                onChange={(e) =>  experienceEditJobDesc(e, i)} required
              />
            </div>
          </div>
            )
           })}</div>
           : <div></div>}
          </div>
          {/* <div
            class="border px-3 p-1 add-experience"
            onClick={addMoreExperience}
          >
            <i class="fa fa-plus"></i>&nbsp;Add
          </div> */}
        </form>

        <div className="options">
          <button
            type="submit"
            form="form-edit"
            className="modal-btn"
            onClick={upload}
          >
            Confirm
          </button>
          <button className="modal-btn" onClick={closeModal}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
