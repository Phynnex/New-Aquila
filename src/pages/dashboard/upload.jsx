import { useState } from "react";
import styled from 'styled-components'
import Modal from "react-modal";
// import axios from "axios";
import ProgressBar from "@ramonak/react-progress-bar";
import { AppLink, Button, Div, P } from '../../globalStyles/style';
import UploadFile from '../../assets/uploadFile.png'
import completed from '../../assets/completed.png'
import './style.css'


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

const CardContainer = styled.div`
   width: 85%;    
   display: flex;
   justify-content: center;
`


const Card = styled.div`
    width: 800px;
    height: 250px;
    background: #FFFFFF;
    box-shadow: 0px 0px 19px 5px #0000000D;
    border-radius: 5px;
    border: 3px dashed #001D5326;
    display: flex;
    justify-content:center;
    align-items:center;
    margin-top:  40px;

`

const TextDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 4vw;

    p {
        font-weight: 500;
        font-size: 1rem;
        color: #5B5B5B;
        margin-bottom: 0px;
    }
`

const Upload = () => {
    // const [posts, setPosts] = useState([]);

    const [modalIsOpen, setIsOpen] = useState(false);


    //   useEffect(() => {
    //     const fetchName = async () => {
    //       const {data} = await axios
    //         .get("http://ec2-18-189-7-106.us-east-2.compute.amazonaws.com:8000/api/projects/")
    //         // .catch((error) => {
    //         //   console.log(error);
    //         //   setFaqsErr(error);
    //         // });
    //         localStorage.setItem('user', JSON.stringify(data));
    //         axios.defaults.headers.common['Authorization'] = `Bearer ${data['access']}`;
    //         setName(data);
    //     };
    //     fetchName();
    //   }, []);

    // useEffect(() => {

    //     axios
    //         .get('https://jsonplaceholder.typicode.com/posts')
    //         .then(res => {
    //             console.log(res)
    //             setPosts(res.data)
    //         })
    //         .catch(err => {
    //             console.log(err)
    //         })




    // }, [])




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
        <CardContainer>

            <Card onClick={openModal}>
                <img src={UploadFile} alt='upload app' />
                <TextDiv >
                    <p>Click to upload your app or drag and drop it here</p>
                    <p>(app should be .apk | .ibb | .obs)</p>
                </TextDiv>
            </Card>

            <Modal
                isOpen={modalIsOpen} //if modal is open
                onAfterOpen={afterOpenModal} //what to do after modal open
                onRequestClose={closeModal} //what to do after modal close
                style={customStyles}
                contentLabel="Example Modal">

                <P color='#5B5B5B' fw='700' fs='22px' mb='0px' >
                    Please wait, your app is scanning ...
                </P>


                <P color='#757575' fs='14px' >
                    please uploading an unobscuted and unecrypted app file will help detect security flaws
                </P>
                {/* {posts.map(post => ( */}


                    <P
                        // key={post.id}
                        color='#5B5B5B'
                        fw='700'
                        fs='22px'
                        mb='0px'
                    >
                        {/* {post.title} */}
                    </P>

                {/* ))} */}

                <div >
                    <form style={{ display: 'flex', flexDirection: 'column' }}>
                        <Div
                            bc='#5B5B5B'
                            mt='10px'
                            br='3px'
                        >
                            <ProgressBar
                                completed={80}
                                className="wrapper"
                                barContainerClassName="container"
                                completedClassName="barCompleted"
                                labelClassName="label"
                                customLabel="uploading...."
                            />
                        </Div>

                        <AppLink to='/dashboard/scan/result'>
                            <Div display='flex' justify='flex-end' >
                                <Div
                                    width='400px'
                                    display='flex'
                                    justify='space-around'
                                    alignI='center'
                                >
                                    <P color='#5B5B5B'>34.67mb / 43.7mb</P>
                                    <P color='#5B5B5B'>completed</P>
                                    <img src={completed} alt='completed' />
                                </Div>


                                <Div display='flex' alignI='center'>

                                    <Button
                                        mt='20px'
                                        w='160px'
                                        p='10px '
                                        bc='#5B5B5B'
                                        color='#EDEFF5'
                                        fs='18px'
                                        br='3px'
                                    >
                                        Continue
                                    </Button>
                                </Div>
                            </Div>
                        </AppLink>

                    </form>
                </div>

            </Modal>
        </CardContainer>

    );
}



export default Upload;