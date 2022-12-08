import React, { useState } from 'react'
import './newcss.css'

const InputForm = (props) => {

    const [focused, setFocused] = useState(false)

    const { onChange, id, errorMessage, ...inputProps } = props;
  
    // console.log(props);
  

  


    
  return (


    <div className="form-input">
      
        <input className='input' {...inputProps} onChange={onChange} focused={focused.toString()} onBlur={(e) => setFocused(true)}
            onFocus={() => inputProps.name === 'confirmpassword' && setFocused(true)} />
        <span>{errorMessage}</span>
        

    </div>
  )
}

  

export default InputForm