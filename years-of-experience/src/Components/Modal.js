import React, { useEffect, useState } from "react";
import UploadProfilePic from "./UploadProfilePic";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import storage from "../Firebase/Firebase";
import "../bootstrap/bootstrap.css";

function Modal({ data, setData, image, setImage, modalState }) {
  const [editdata, setEditData] = useState([]);
  const [newimage, setNewImage]=useState('')

  const closeModal = () => {
    modalState(false);
  };

  useEffect(() => {
    setEditData(data);
  });


  const upload = () => {
    if ( newimage === null ||  newimage === undefined ||  newimage === "") {
      return alert("Failed");
    } else {
      storage
        .ref(`/images/profilepic`)
        .put( newimage)
        .on("state_changed", window.location.reload());
    }
    // modalState(false)
    // window.location.reload();
  };


  const FormInput = () => {
    return (
      <div class="rounded bg-white mt-5 mb-5">
        <div class="row">
          <div class="col-md-3 border-right">
            <div class="d-flex flex-column align-items-center text-center p-3  ">
              <UploadProfilePic editdata={editdata} image={image} setNewImage={setNewImage}  />
            </div>
          </div>
          <div class="col-md-5 border-right">
            <div class="p-3  ">
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
          <div class="col-md-4">
            <div class="p-3  ">
              <div class="d-flex justify-content-between align-items-center experience">
                <span>Experience</span>
                <span class="border px-3 p-1 add-experience">
                  <i class="fa fa-plus"></i>&nbsp;Add
                </span>
              </div>
              <div class="d-flex flex-row mt-3 exp-container">
                <img
                  src="https://i.imgur.com/azSfBM3.png"
                  width="45"
                  height="45"
                />
                <div class="work-experience ml-1">
                  <span class="font-weight-bold d-block">
                    Senior UI/UX Designer
                  </span>
                  <span class="d-block text-black-50 labels">Twitter Inc.</span>
                  <span class="d-block text-black-50 labels">
                    March,2017 - May 2020
                  </span>
                </div>
              </div>
              <hr />
              <div class="d-flex flex-row mt-3 exp-container">
                <img
                  src="https://i.imgur.com/azSfBM3.png"
                  width="45"
                  height="45"
                />
                <div class="work-experience ml-1">
                  <span class="font-weight-bold d-block">
                    Senior UI/UX Designer
                  </span>
                  <span class="d-block text-black-50 labels">Twitter Inc.</span>
                  <span class="d-block text-black-50 labels">
                    March,2017 - May 2020
                  </span>
                </div>
              </div>
              <hr />
              <div class="d-flex flex-row mt-3 exp-container">
                <img
                  src="https://img.icons8.com/color/50/000000/google-logo.png"
                  width="45"
                  height="45"
                />
                <div class="work-experience ml-1">
                  <span class="font-weight-bold d-block">UI/UX Designer</span>
                  <span class="d-block text-black-50 labels">Google Inc.</span>
                  <span class="d-block text-black-50 labels">
                    March,2017 - May 2020
                  </span>
                </div>
              </div>
            </div>
          </div>
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
          <button className="modal-btn" onClick={upload}>Yes</button>
          <button className="modal-btn" onClick={closeModal}>
            No
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
