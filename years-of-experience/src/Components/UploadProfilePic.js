import React, { useState } from "react";
import storage from "../Firebase/Firebase";
import userpic from "../assets/images/user.png";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

function UploadProfilePic(image, setImage) {
    const [imageedit, setImageEdit] = useState("");

    console.log("iniimage");
  console.log(image);

  const upload = () => {
    if (imageedit === null || imageedit === undefined || imageedit === "") {
      return alert("Failed");
    } else {
      storage
        .ref(`/images/profilepic`)
        .put(imageedit)
        .on("state_changed", alert("success"), alert);
    }
  };

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
        <img class="rounded-circle" width="90" height="90" src={image.image} />
      )}
      <div className="upload-container">
        <p>
          Edit picture
          <span>
            {" "}
            <FontAwesomeIcon icon={["fab", "pencil"]}></FontAwesomeIcon>
          </span>
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
