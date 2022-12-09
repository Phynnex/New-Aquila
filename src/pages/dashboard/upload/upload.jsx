import { Fragment, useState, useEffect } from "react";
import Modal from "react-modal";

import styled from "styled-components";
import axios from "axios";
// import { useFormik } from "formik"
// import * as Yup from "yup"
import { Button, P } from "../../../globalStyles/style";
import UploadFile from "../../../assets/uploadFile.png";

// import AppsCards from "components/FirstLogin/AppsCards";

// import { FileUploader } from "react-drag-drop-files";
import { checkExpiredUserToken } from "utils";
import http from "services/httpService";
import { Redirect } from "react-router-dom";
import OldProject from "assets/oldproject.png";
import Message from "pages/dashboard/upload/Message";
import Progress from "pages/dashboard/upload/Progress";

// import "./styles.css";

// const fileTypes = ["IPA", "APK",];

const customStyles = {
  content: {
    width: "600px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "15px",
    paddingLeft: "20px",
  },
};

const ExistingProject = styled.div`
  width: 280px;
  height: 280px;
  background: #5b5b5b;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
  border-radius: 3px;
  p {
    font-weight: 400;
    font-size: 22px;
    line-height: 38px;
    color: #fff;
  }
`;

const CardContainer = styled.div`
  width: 85%;
  display: flex;
  justify-content: center;
`;

const Card = styled.div`
  width: 800px;
  height: 250px;
  background: #ffffff;
  box-shadow: 0px 0px 19px 5px #0000000d;
  border-radius: 5px;
  border: 3px dashed #001d5326;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;

const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  /* margin-left: 4vw; */
  /* align-items: center ; */

  p {
    font-weight: 500;
    font-size: 1rem;
    color: #5b5b5b;
    margin-bottom: 0px;
  }
`;

const Upload = ({ location }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  // const [file, setFile] = useState('');
  const [project_name, setProject_name] = useState("");
  const [filename, setFilename] = useState("Choose File");
  const [uploadedFile, setUploadedFile] = useState({});

  const [project, setProject] = useState("");
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [upload, setUpload] = useState(false);
  const [error, setError] = useState(false);
  const [isLoading, setisLoading] = useState(false);

  const [message, setMessage] = useState("");
  const [uploadPercentage, setUploadPercentage] = useState(0);
  const [err, setErr] = useState(false);

  useEffect(() => {
    checkExpiredUserToken();
    async function fetchData() {
      const request = await axios.get(
        "http://ec2-18-189-7-106.us-east-2.compute.amazonaws.com:8000/api/projects/"
      );

      setProject(request.data);
      console.log(request.data, "from upload");
      return request;
    }
    fetchData();
  }, []);

 
  

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {}
  function closeModal() {
    //This function tell what should do when clicked close
    setIsOpen(false);
  }

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get('http://ec2-18-189-7-106.us-east-2.compute.amazonaws.com:8000/api/projects/');
      // setProject_name(request.data);
      console.log(request.data, 'hello')
      return request;
    }
    fetchData();

  }, [])

  const onChange = (e) => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
    setErr(false);

  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("project_name", project_name);
    try {
      const response2 = await axios.post(
        "http://ec2-18-189-7-106.us-east-2.compute.amazonaws.com:8000/api/upload/",
        formData,
        {
          onUploadProgress: (progressEvent) => {
            setUploadPercentage(
              parseInt(
                Math.round((progressEvent.loaded * 100) / progressEvent.total)
              )
            );
          },
        }
      );
      setUpload(true);
      setProject_name();
      sessionStorage.setItem("response2", JSON.stringify(response2));

      // Clear percentage
      setTimeout(() => setUploadPercentage(0), 10000);

      const { file, project_name } = response2.data;

      setUploadedFile({ file, project_name });

      setMessage("File Uploaded");
    } catch (err) {
      if (err) {
        setErr(true);
      } else {
        setMessage(err.response.data.msg);
      }
      setUploadPercentage(0);
    }
  };

  if (upload) {
    return <Redirect to="/dashboard/upload-result/" />;
  }

 

  return (
    <Fragment>
      <CardContainer onClick={openModal}>
        {/* 
         <FileUploader
          multiple={true}
          handleChange={handleChange}
          name="file"
          types={fileTypes}
        >
          <Card >
            <img src={UploadFile} alt='upload app' />
            {file ? (<p>File name: {file[0].name}</p>) : (
              <TextDiv >
                <p>Click to upload your app or drag and drop it here</p>
                <p>(app should be .apk | .ibb | .obs)</p>
              </TextDiv>
            )}

          </Card>
        </FileUploader> */}
        <Card onClick={() => setProject_name()}>
          <img src={UploadFile} alt="upload app" />
          <TextDiv>
            <p>Click to upload your app or drag and drop it here</p>
            <p>(app should be .apk | .ibb | .obs)</p>
          </TextDiv>
        </Card>
      </CardContainer>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        ariaHideApp={false}
        
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <P color="#5B5B5B" fw="700" fs="22px" mb="0px">
            Please wait, your app is scanning ...
          </P>
          <Button onClick={closeModal} bc="transparent" fs="22px" fw="700">
            X
          </Button>
        </div>
        <P color="#757575" fs="14px">
          please uploading an unobscuted and unecrypted app file will help
          detect security flaws
        </P>

        <P color="#5B5B5B" fw="700" fs="22px" mb="0px">
        {project_name}
        </P>

        <P color="#5B5B5B" fw="700" fs="22px" mb="0px"></P>
        <Fragment>
          <form onSubmit={onSubmit}>
            <div className="custom-file mb-4">
              <input
                type="file"
                className="custom-file-input"
                id="customFile"
                onChange={onChange}
              />
              {err && <p style={{ color: "red" }}>File type not supported</p>}
              <label className="custom-file-label" htmlFor="customFile">
                {filename}
              </label>
            </div>

            <Progress percentage={uploadPercentage} />

            <input
              type="submit"
              value="Upload"
              className="btn btn-primary btn-block mt-4"
            />
          </form>
          {uploadedFile ? (
            <div className="row mt-5">
              <div className="col-md-6 m-auto">
                <h3 className="text-center">{uploadedFile.fileName}</h3>
                <img
                  style={{ width: "100%" }}
                  src={uploadedFile.filePath}
                  alt=""
                />
              </div>
            </div>
          ) : null}
        </Fragment>
      </Modal>
    </Fragment>
  );
};

export default Upload;
