import React, { useState, useEffect } from "react";

import userpic from "../assets/images/user.png";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

function UploadProfilePic({ editdata, image, setNewImage }) {
  const [imageedit, setImageEdit] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
      if(loading){
        setNewImage(imageedit);
      }
    // setNewImage(imageedit);
    console.log(imageedit)
  }, [loading]);

  setLoading(true);

//   const editPic = (e) => {
//     setNewImage(tempImage);
//   };

  return (
    <center>
      {imageedit ? (
        <img
          class="rounded-circle"
          src={URL.createObjectURL(imageedit)}
          width="90"
          height="90"
        />
      ) : (
        <img class="rounded-circle" width="90" height="90" src={image} />
      )}
      <div className="upload-container">
        <p>
          Edit picture
          <span> </span>
        </p>
        <input
          type="file"
          className="upload-button"
          accept="image/png, image/jpeg"
          onChange={(e) => {
            setImageEdit(e.target.files[0]);
          }}
        />
      </div>

      {/* <button onClick={upload}>Upload</button> */}
    </center>
  );
}

export default UploadProfilePic;
