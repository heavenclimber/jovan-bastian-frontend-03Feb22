import React, { useEffect, useState } from "react";
import UploadProfilePic from "./UploadProfilePic";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import storage from "../Firebase/Firebase";
import "../bootstrap/bootstrap.css";

function Modal({ data, setData, image, setImage, modalState }) {
  const [editdata, setEditData] = useState([]);
  const [newimage, setNewImage] = useState("");
  const [experienceCount, setExperienceCount] = useState(1);

  const closeModal = () => {
    modalState(false);
  };

  useEffect(() => {
    setEditData(data);
  });

  const upload = () => {
    if (newimage === null || newimage === undefined || newimage === "") {
      return alert("Failed");
    } else {
      storage
        .ref(`/images/profilepic`)
        .put(newimage)
        .on("state_changed", window.location.reload());
    }
    // modalState(false)
    // window.location.reload();
  };

  const addMoreExperience = () => {
    setExperienceCount(experienceCount + 1);
    console.log(experienceCount)
  };

  const experiencesDisplay = [];

  const experiences = () => {
    
    console.log(experienceCount)
    for (let i = 0; i <= experienceCount; i++) {
      return (
        <div className="work-experience-box">
          <hr />
          <div className="add-experience-list">
            <label class="labels">Job</label>
            <input
              type="text"
              class="form-control"
              placeholder={data.githublink}
            />
          </div>
          <div className="add-experience-list">
            <label class="labels">Role</label>
            <input
              type="text"
              class="form-control"
              placeholder={data.githublink}
            />
          </div>
          <div className="row add-experience-list">
            <div className="col-md-3">
              <label class="labels">Start Date</label>
              <input
                type="date"
                class="form-control"
                placeholder={data.githublink}
              />
            </div>
            <div className="col-md-3">
              <label class="labels">End Date</label>
              <input
                type="date"
                class="form-control"
                placeholder={data.githublink}
              />
            </div>
          </div>
          <div className="add-experience-list">
            <label class="labels">Job Description</label>
            <textarea
              type="text"
              class="form-control"
              placeholder={data.githublink}
            />
          </div>
        </div>
      );
    }
  };

  const FormInput = () => {
    return (
      <div class="rounded bg-white mt-5 mb-5">
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
                  <label class="labels">Name</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder={data.name}
                  />
                </div>
                <div class="col-md-6">
                  <label class="labels">Age</label>
                  <input
                    type="number"
                    class="form-control"
                    placeholder={data.age}
                  />
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-md-12">
                  <label class="labels">Role</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder={data.role}
                  />
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-md-6">
                  <label class="labels">Facebook</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder={data.fblink}
                  />
                </div>
                <div class="col-md-6">
                  <label class="labels">Instagram</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder={data.iglink}
                  />
                </div>
                <div class="col-md-6">
                  <label class="labels">Linkedin</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder={data.linkedinlink}
                  />
                </div>
                <div class="col-md-6">
                  <label class="labels">Github</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder={data.githublink}
                  />
                </div>
              </div>
              {/* <div class="mt-5 text-center"><button class="btn btn-primary profile-button" type="button">Save Profile</button></div> */}
            </div>
          </div>
        </div>
        <div class="col">
          <div class="d-flex justify-content-between align-items-center experience">
            <span>Experience</span>
          </div>
          {experiences()}
        </div>
        <div class="border px-3 p-1 add-experience" onClick={addMoreExperience}>
          <i class="fa fa-plus"></i>&nbsp;Add
        </div>
      </div>
    );
  };

  return (
    <div className="modal-container">
      <div className="modal-input  modal-scroll">
        {/* <p className="message"></p> */}
        <FormInput />

        <div className="options">
          <button className="modal-btn" onClick={upload}>
            Yes
          </button>
          <button className="modal-btn" onClick={closeModal}>
            No
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
