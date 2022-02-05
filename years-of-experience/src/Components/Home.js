import React, { useEffect, useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import EditButton from "./EditButton";
import SplashLoad from "./SplashLoad";
import Modal from "./Modal";
import axios from "axios";
import storage from "../Firebase/Firebase";

library.add(faFacebookF, faInstagram, faLinkedin, faGithub);

export default function Home() {
  const bla = {
    name: "Jovan Maurel Bastian",
    age: "21",
    role: "Front-end Developer | UI/UX Designer",
    fblink: "https://ms-my.facebook.com/jovan.m.bastian ",
    iglink: "https://www.instagram.com/jovanmaurel/",
    linkedinlink:
      "https://www.linkedin.com/in/jovan-maurel-bastian-696947161/ ",
    githublink: "https://github.com/heavenclimber ",
  };

  const [data, setData] = useState([]);
  const [modal, setModal] = useState(false);
  const [image, setImage] = useState("");

  useEffect(() => {
    let tempData = localStorage.getItem("Mydata");

    if (tempData === null) {
      let the_link =
        "https://jovan-bastian-frontend-03feb22-default-rtdb.asia-southeast1.firebasedatabase.app/data.json";
      axios({
        url: the_link,
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        data: JSON.stringify({}),
      })
        .then((response) => {
          let res = response.data;
          setData(res);
          localStorage.setItem("Mydata", JSON.stringify(res));
        })
        .catch((error) => {
          alert(error);
        });
    } else {
      setData(JSON.parse(tempData));
    }
    

    let imageRef = storage.ref(`/images/profilepic`);
    imageRef
      .getDownloadURL()
      .then((url) => {
        setImage(url);
      })
      .catch((e) => console.log('getting downloadURL of image error => ', e));
  

  }, [modal]);

  


  return (
    <div>
      {image ? (
        <div className="main-photo" id="home">
          <div className="bg"></div>
          <div className="bg bg2"></div>
          <div className="bg bg3"></div>
          {/* <div className="profileButtonContainer">
        <a className="profileButton">
          Edit Profile
        </a>
      </div> */}

          {modal===true ?  <Modal data={data} setData={setData} image={image} setImage={setImage} modalState={setModal} /> : <div></div>}
          <div className="imgContainer  zoomIn" data--delay="0.1s">
            <img src={image} />
          </div>
          <h2 data--delay="0.1s">
            {data.name} <span className="ageStyle">[{data.age}]</span>
          </h2>
          <small className=" fadeInUp" data--delay="0.2s">
            {data.role}
          </small>
          <div className="sosmed">
            <a href={data.fblink}>
              <i className="fab fa-facebook fa-lg ">
                <FontAwesomeIcon icon={["fab", "facebook-f"]}></FontAwesomeIcon>
              </i>
            </a>
            <a href={data.iglink}>
              <i className="fab fa-instagram fa-lg ">
                <FontAwesomeIcon icon={["fab", "instagram"]}></FontAwesomeIcon>
              </i>
            </a>
            <a href={data.linkedinlink}>
              <i className="fab fa-linkedin fa-lg ">
                <FontAwesomeIcon icon={["fab", "linkedin"]}></FontAwesomeIcon>
              </i>
            </a>
            <a href={data.githublink}>
              <i className="fab fa-github fa-lg ">
                <FontAwesomeIcon icon={["fab", "github"]}></FontAwesomeIcon>
              </i>
            </a>
          </div>
          <div className="main-link" data--delay="0.3s">
            <a
              href="https://jovanbastian.netlify.app/CV.pdf"
              className="cvbtn "
            >
              Download CV
            </a>
          </div>
          <EditButton modalState={setModal} />
        </div>
      ) : (
        <SplashLoad />
      )}
    </div>
  );
}
