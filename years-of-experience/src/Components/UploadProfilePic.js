import React, { useState, useEffect } from "react";

function UploadProfilePic({ editdata, image, newimage, setNewImage }) {
  const [imageedit, setImageEdit] = useState("");

  // useEffect(() => {
  //   setNewImage(imageedit);
  //   console.log(imageedit)
  //   console.log(newimage)
  // }, [imageedit]);

  const editPic = (e) => {
    
    setNewImage(e.target.files[0]);
    setImageEdit(e.target.files[0]);
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
            editPic(e);
          }}
        />
      </div>

      {/* <button onClick={upload}>Upload</button> */}
    </center>
  );
}

export default UploadProfilePic;
