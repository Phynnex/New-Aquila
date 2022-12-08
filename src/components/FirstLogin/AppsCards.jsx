import { useState, useEffect, Fragment } from "react";
import { Redirect } from 'react-router-dom';
import axios from "axios";
import Modal from "react-modal";
// import BeatLoader from "react-spinners/BeatLoader";
import Message from '../../pages/dashboard/upload/Message';
import Progress from '../../pages/dashboard/upload/Progress';
import NewProject from '../../assets/newproject.png'
import OldProject from '../../assets/oldproject.png'
import styled from "styled-components";
import {  Button, Div, P } from '../../globalStyles/style';
import { Input } from '../../globalStyles/style';
import { checkExpiredUserToken } from "utils";
// import { setDatasets } from "react-chartjs-2/dist/utils";



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

const CardsContainer = styled.div`
    display: grid;
    grid-template-columns:  1fr auto 1fr;
    justify-items: center;
    align-items:center;
    row-gap: 20px;
    // margin-top: 40px;
`
const CreateProject = styled.div`
    width: 280px;
    height: 280px;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    margin-top: 25px;
    p {
        font-weight: 700;
        font-size: 22px;
        line-height: 38px;
        color: #000;
    }
`

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


const AppsCards = () => {
    const [name, setName] = useState('');
    const [project, setProject] = useState('');
    const [navigate, setNavigate] = useState(false);
    const [upload, setUpload] = useState(false);
    // const [data, setData] = useState();
    // const [isLoading, setisLoading] = useState(false)
    const [modalIsOpen, setIsOpen] = useState(false);
    const [modalIsOpen2, setIsOpen2] = useState(false);
    const [file, setFile] = useState('');
    const [filename, setFilename] = useState('Choose File');
    const [project_name, setProject_name] = useState('');
    const [uploadedFile, setUploadedFile] = useState({});
    const [message, setMessage] = useState('');
    const [uploadPercentage, setUploadPercentage] = useState(0);
    const [err, setErr] =useState(false)

    // const history = useHistory();

    useEffect(() => {
        checkExpiredUserToken()

        async function fetchData() {
            const request = await axios.get('http://aquiladev.azurewebsites.net/api/projects/');
            setProject(request.data);
            console.log(request.data, 'hello')
            return request;
        }
       
        fetchData();

    }, [])
    

    const handleCreateProject = async e => {
        checkExpiredUserToken()

        // setisLoading(true)
        e.preventDefault();
        checkExpiredUserToken()

        const { data } = await axios.post('http://aquiladev.azurewebsites.net/api/projects/', {name});
      

        setNavigate(true)
        setProject_name()
        console.log(data)
    }
    if (navigate) {

        return <Redirect to="/dashboard/upload/" />;
    }



    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {

    }
    function closeModal() {
        setIsOpen(false);
    }


    function openModal2() {
        setIsOpen2(true);
    }

    function afterOpenModal2() {
    }
    function closeModal2() {
        setIsOpen2(false);
    }
   
    const onChange = e => {
        setFile(e.target.files[0]);
        setFilename(e.target.files[0].name);
        setErr(false)
    };
    
    const onSubmit = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    formData.set('project_name', project_name);
        try {
            const response2 = await axios.post('http://aquiladev.azurewebsites.net/api/upload/', formData, {
                headers: {
                    'Content-Type': 'application/json',
                    
                },
                
                
                onUploadProgress: progressEvent => {
                    setUploadPercentage(
                        parseInt(
                            Math.round((progressEvent.loaded * 100) / progressEvent.total)
                            )
                            );
                        }
                    })
            sessionStorage.setItem('response2', JSON.stringify(response2));
            setUpload(true);
           
            // Clear percentage
            setTimeout(() => setUploadPercentage(0), 10000);

            const { file, project_name } = response2.data;

            setUploadedFile({ file, project_name });

            setMessage('File Uploaded');
        } 
        catch (err) {
            if (err) {
            setErr(true);
            } else {
            setMessage(err.response.data.msg);
            }
            setUploadPercentage(0)
        }
        
    }

    if(upload){
    return <Redirect to="/dashboard/upload-result/"/>
  }
    

    

    return (
        <CardsContainer className="sides">

            <CreateProject onClick={openModal}>
                <img src={NewProject} alt='new-project' />
                <p>Create New Project</p>
            </CreateProject>
            <Modal
                isOpen={modalIsOpen} 
                onAfterOpen={afterOpenModal} 
                onRequestClose={closeModal} 
                style={customStyles}
                contentLabel="Example Modal"
                ariaHideApp={false}
                onClick={()=> setProject_name}
            >

                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <P
                        color='#5B5B5B'
                        fw='700'
                        fs='22px'
                        mb='0px'
                    >
                        Create a new Project
                    </P>
                    <Button
                        onClick={closeModal}
                        bc='transparent'
                        fs='22px'
                        fw='700'
                    >
                        X
                    </Button>
                </div>
                <P
                    color='#757575'
                    fs='14px'
                >
                    Let’s start by setting up your project
                </P>
                <P color='#5B5B5B'
                    fw='700'
                    fs='22px'
                    mb='0px'>Your App Name</P>
                <div >
                    <form onSubmit={handleCreateProject} style={{ display: 'flex', flexDirection: 'column' }}>
                        <Div
                            bc='#001D5326'
                            padding='6px 10px'
                            mt='10px'
                            br='3px'
                        >
                            <Input
                                w='100%'
                                bg="transparent"
                                color='#5B5B5B'
                                type='text'
                                id='name'
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                                required
                            />
                        </Div>

                        <Button
                            mt='20px'
                            w='200px'
                            p='10px'
                            bc='#5B5B5B'
                            color='#EDEFF5'
                            fs='18px'
                            br='3px'
                            onClick={()=> setProject_name}
                        >
                            Continue
                        </Button>
                    </form>
                </div>

            </Modal>
            
             {project && project.map((CardsData, key) => (
                <div key={key} onClick={ openModal2 }> 
                    <ExistingProject key={key} onClick={()=> setProject_name(CardsData.name)}>
                        <img src={OldProject} alt='new-project' />
                        <p style={{ marginBottom: '0px' }}>{CardsData.name}</p>
                        

                        <div style={{ width: '100px', display: 'flex', justifyContent: 'space-evenly' }}>
                            <img src={CardsData.apk} alt='andriod' />
                            <img src={CardsData.ipa} alt='ios' />
                        </div>
                    </ExistingProject> 
                     <Modal
                        isOpen={modalIsOpen2} 
                        onAfterOpen={afterOpenModal2} 
                        onRequestClose={closeModal2} 
                        style={customStyles}
                        contentLabel="Example Modal"
                        ariaHideApp={false}
                    >

                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <P color='#5B5B5B' fw='700' fs='22px' mb='0px' >
                            Please wait, your app is scanning ...
                        </P>
                        <Button
                            onClick={closeModal2}
                            bc='transparent'
                            fs='22px'
                            fw='700'
                        >
                            X
                        </Button>
                    </div>
                        <P color='#757575' fs='14px' >
                            please uploading an unobscuted and unecrypted app file will help detect security flaws
                        </P>
        
                        <P
                           color='#5B5B5B'
                           fw='700'
                           fs='22px'
                           mb='0px'
                        >
                            {project_name}
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
                                    {err && <p style={{color:'red'}}>File type not supported</p>}
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
            ))}  

        </CardsContainer>
    );
}



export default AppsCards;