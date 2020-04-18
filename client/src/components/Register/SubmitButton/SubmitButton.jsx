import React from 'react';
import './SubmitButton.css'
const SubmitButton = ({form, invalid, setInvalid, submitForm}) => {
    
    const onSubmit = () =>{
        //TODO: validate before submit!!!!!!
        submitForm()
      
    }
    return ( 
        <div className="submit-btn-container flex justify-center">
            <button onClick={()=>onSubmit()} className="btn submit-btn">Submit</button>
        </div>
     );
}
 
export default SubmitButton;