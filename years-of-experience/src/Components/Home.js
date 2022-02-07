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
    experiences: [
      {
        role: "Frontend Developer",
        company: "Maybank",
        startdate: "01/01/2021",
        enddate: "02/02/2022",
        jobdesc: "blabla",
      },
      {
        role: "Frontend Developer",
        company: "Maybank",
        startdate: "01/01/2021",
        enddate: "02/02/2022",
        jobdesc: "blabla",
      },
    ],
  };

  const [data, setData] = useState([]);
  const [modal, setModal] = useState(false);
  const [image, setImage] = useState("");
  const [loading, setLoad] = useState(false);

  useEffect(() => {
    console.log("masuk")
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
          console.log("masuk2")
          let res = response.data;
          setData(res);
          localStorage.setItem("Mydata", JSON.stringify(res));
          setLoad(true);
        })
        .catch((error) => {
          alert(error);
        });
    } else {
      setData(JSON.parse(tempData));
      console.log("masuk3")
    }

    let imageRef = storage.ref(`/images/profilepic`);
    imageRef
      .getDownloadURL()
      .then((url) => {
        setImage(url);
      })
      .catch((e) => console.log("getting downloadURL of image error => ", e));
  }, [modal]);

  return (
    <div>
      {data ? (
        <div>
          <div className="main-photo" id="home">
            <div className="bg"></div>
            <div className="bg bg2"></div>
            <div className="bg bg3"></div>
            {/* <div className="profileButtonContainer">
        <a className="profileButton">
          Edit Profile
        </a>
      </div> */}

            {modal === true ? (
              <Modal
                loading={loading}
                setLoad={setLoad}
                data={data}
                setData={setData}
                image={image}
                setImage={setImage}
                modalState={setModal}
              />
            ) : (
              <div></div>
            )}
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
                  <FontAwesomeIcon
                    icon={["fab", "facebook-f"]}
                  ></FontAwesomeIcon>
                </i>
              </a>
              <a href={data.iglink}>
                <i className="fab fa-instagram fa-lg ">
                  <FontAwesomeIcon
                    icon={["fab", "instagram"]}
                  ></FontAwesomeIcon>
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

            <EditButton data={data} modalState={setModal} />
          </div>
          <div className="experience-flex-container">
            <div className="p-3  experience-flex">
              <div className="d-flex justify-content-between align-items-center experience">
                <h2>Experience</h2>
              </div>

              {data.experiences ? (
                <div className="experience-flex">
                  {" "}
                  {data.experiences.map((val, i) => {
                    return (
                      <div className="d-flex flex-row mt-3 exp-container exp-container-home">
                        <img
                          src="https://i.imgur.com/azSfBM3.png"
                          width="45"
                          height="45"
                        />
                        <div className="work-experience ml-1">
                          <span className="font-weight-bold d-block">
                            {val.role}
                          </span>
                          <span className="d-block text-black-50 labels">
                            {val.company}
                          </span>
                          <span className="d-block text-black-50 labels">
                            {val.startdate} - {val.enddate}
                          </span>
                          <h6 className="job-desc-title">Job Description</h6>
                          <div className="job-desc">
                            <span>{val.jobdesc}</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div></div>
              )}
              <hr />
            </div>
          </div>
        </div>
      ) : (
        <SplashLoad />
      )}
    </div>
  );
}
