import React, {useState, useEffect, Fragment} from 'react';
import axios from "axios";
import Modal from "react-modal";
import styled from "styled-components";
import Message from '../../pages/dashboard/upload/Message';
import Progress from '../../pages/dashboard/upload/Progress';
import { P } from '../../globalStyles/style';
import NewProject from '../../assets/newproject.png'
import OldProject from '../../assets/oldproject.png'



const customStyles = {
    content: {
        width: '600px',
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
    background: #5B5B5B;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    margin-top: 25px;
    border-radius: 3px;
    p {
        font-weight: 400;
        font-size: 22px;
        line-height: 38px;
        color: #fff;
    }
`
const ExistingProjects = () => {
    // const [name, setName] = useState('');
    const [project_name, setProject_name] = useState();
    const [modalIsOpen, setIsOpen] = useState(false);
    const [file, setFile] = useState('');
    const [filename, setFilename] = useState('Choose File');
    const [uploadedFile, setUploadedFile] = useState({});
    const [message, setMessage] = useState('');
    const [uploadPercentage, setUploadPercentage] = useState(0);

    const onChange = e => {
        setFile(e.target.files[0]);
        setFilename(e.target.files[0].name);
        setProject_name(e.target.files[0].project_name)
    };

    // useEffect(() => {
    //     async function fetchData() {
    //         const request = await axios.get('https://aquiladev.herokuapp.com/api/projects/');
    //         setProject_name(request.data);
    //         console.log(request.data, 'hello')
    //         return request;
    //     }
    //     fetchData();

    // }, [])
    // console.log(project_name, 'hi')

    useEffect(() => {
        // declare the data fetching function
        const fetchData = async () => {
          const data = await fetch('http://ec2-18-189-7-106.us-east-2.compute.amazonaws.com:8000/api/projects/');
        //   localStorage.setItem('user', JSON.stringify(data));
        // axios.defaults.headers.common['Authorization'] = `Bearer ${data['access']}`;
          setProject_name(data.data);
            console.log(data.data, 'hello')
            return data;
        }
      
        // call the function
        fetchData()
          // make sure to catch any error
          .catch(console.error);
      }, [])
       
      console.log(project_name, 'hi')
      

    

    const onSubmit = async e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);
        formData.set('project_name', project_name, file)

        try {
            const res = await axios.post('http://ec2-18-189-7-106.us-east-2.compute.amazonaws.com:8000/api/uploadandscan/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'

                },
                onUploadProgress: progressEvent => {
                    setUploadPercentage(
                        parseInt(
                            Math.round((progressEvent.loaded * 100) / progressEvent.total)
                        )
                    );
                }
            });

            // Clear percentage
            setTimeout(() => setUploadPercentage(0), 10000);

            const { fileName, filePath } = res.data;

            setUploadedFile({ fileName, filePath });

            setMessage('File Uploaded');
        } catch (err) {
            if (err.response.status === 500) {
                setMessage('There was a problem with the server');
            } else {
                setMessage(err.response.data.msg);
            }
            setUploadPercentage(0)
        }
    };

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
    }
    function closeModal() {
        //This function tell what should do when clicked close
        setIsOpen(false);
    }
    return (
        <div>
           
            <ExistingProject>
                <img src={OldProject} alt='new-project' />
                <p style={{ marginBottom: '0px' }}>Name</p>
                

                <div style={{ width: '100px', display: 'flex', justifyContent: 'space-evenly' }}>
                    <img src={OldProject} alt='andriod' />
                    <img src={OldProject} alt='new_scan' />
                    <p style={{ marginBottom: '0px' }}>Andriod</p>
                <p style={{ marginBottom: '0px' }}>Apple</p>
                </div>
            </ExistingProject>
            <Modal
                isOpen={modalIsOpen} //if modal is open
                onAfterOpen={afterOpenModal} //what to do after modal open
                onRequestClose={closeModal} //what to do after modal close
                style={customStyles}
                contentLabel="Example Modal"
                ariaHideApp={false}
            >

                <P color='#5B5B5B' fw='700' fs='22px' mb='0px' >
                    Please wait, your app is scanning ...
                </P>
                <P color='#757575' fs='14px' >
                    please uploading an unobscuted and unecrypted app file will help detect security flaws
                </P>
                <P

                    color='#5B5B5B'
                    fw='700'
                    fs='22px'
                    mb='0px'
                >

                </P>
                <Fragment>
                    {message ? <Message msg={message} /> : null}
                    <form onSubmit={onSubmit}>
                        <div className='custom-file mb-4'>
                            <input
                                type='file'
                                className='custom-file-input'
                                id='customFile'
                                onChange={onChange}
                            />
                            <label className='custom-file-label' htmlFor='customFile'>
                                {filename}
                            </label>
                        </div>

                        <Progress percentage={uploadPercentage} />

                        <input
                            type='submit'
                            value='Upload'
                            className='btn btn-primary btn-block mt-4'
                        />
                    </form>
                    {uploadedFile ? (
                        <div className='row mt-5'>
                            <div className='col-md-6 m-auto'>
                                <h3 className='text-center'>{uploadedFile.fileName}</h3>
                                <img style={{ width: '100%' }} src={uploadedFile.filePath} alt='' />
                            </div>
                        </div>
                    ) : null}
                </Fragment>

            </Modal>
        </div>
         

               
            
           
       
    );
}



export default ExistingProjects;