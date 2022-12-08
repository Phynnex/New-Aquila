// import React from "react";
// import styled from "styled-components"
// import { Button } from "../../../globalStyles"

// const Content = styled.div`
//     padding-left: 3rem;
// `

// const Title = styled.p`
//     font-weight: 700;
//     font-size: 18px;
//     line-height: 16px;
//     color: #335AA3;
// `
// const Subtitle = styled.p`
//     font-weight: 300;
//     font-size: 12px;
//     color: #757575;
//     margin-top:-12px;
  
// `

// const Input = styled.input`
//     width: 80%;
//     border-radius: 5px;
//     padding: 1rem 2rem;
//     border: none;
//     background: #335AA31A;

// `


// const ModalContent = () => {

//     return (
//         <Content>
//             <div style={{display:'flex', justifyContent:'space-between'}}>
                
//                 <div >
//                     <Title>Create a new Project</Title>
//                     <Subtitle>Let’s start by setting up your project</Subtitle>
//                 </div>
//                 <p >X</p>
//             </div>
//             <Title>Your App Name</Title>
//             <Input type='text' placeholder="Enter your app name (e.g) zenith bank" />
//             <Button type="submit" bc="#335AA3" p="7px 20px" br="5px" color="#fff" w="150px" m="20px 0px">Continue</Button>
//         </Content>
//     );
// };

// export default ModalContent;

import React from "react";
import Modal from "react-modal";

const customStyles = {
   content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
   },
};

export default function App() {
   let subtitle;
   const [modalIsOpen, setIsOpen] = React.useState(false);
   function openModal() {
      //This function tell what should do when clicked open
      setIsOpen(true);
   }

   function afterOpenModal() {
      // references are now sync'd and can be accessed.
      subtitle.style.color = "#f00";
   }
   function closeModal() {
      //This function tell what should do when clicked close
      setIsOpen(false);
   }

   return (
      <div>
         <button onClick={openModal}>Open Modal</button>
         <Modal
            isOpen={modalIsOpen} //if modal is open
            onAfterOpen={afterOpenModal} //what to do after modal open
            onRequestClose={closeModal} //what to do after modal close
            style={customStyles}
            contentLabel="Example Modal">

            <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
            <button onClick={closeModal}>close</button>
            <div>I am a modal</div>
            <form>
               <input />
               <button>tab navigation</button>
               <button>stays</button>
               <button>inside</button>
               <button>the modal</button>
            </form>
         </Modal>
      </div>
   );
}
