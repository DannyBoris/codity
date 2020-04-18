import React, { useState, useEffect } from 'react';
import './Input.css'
import {VALID_MESSAGE, TOO_SHORT_MESSAGE, FORM} from '../../../constants'
import InvalidMessage from '../InvalidMessage/InvalidMessage'
import emailRgx from 'email-regex'
const Input = ({ field, setForm, form,setInvalid,registerType }) => {
    
    const [valid,setValid] = useState(true)
    const [message,setMessage] = useState('')
    let fieldToDisplay = field.charAt(0).toUpperCase() + field.substr(1,field.length - 1)
    let debounceTimeout = null

    const validateForm = ()=>{
          if(field === FORM.NAME || field === FORM.PASSWORD){
            form[field].length > 6 ?  setMessage(VALID_MESSAGE) : setMessage( `${field} ${TOO_SHORT_MESSAGE}`)
        
         }else{
            !emailRgx().test(form[field]) ? setMessage( `${field} Invalid email`) : setMessage(VALID_MESSAGE)  

         }
    }
    
        const handleChange = (e)=>{
        e.persist()
        setForm({...form, [field]:e.target.value})
        debounceTimeout = setTimeout(() => setValid(validateForm()), 1000);
        e.target.addEventListener('keypress',()=>{
            setValid(true)
            clearInterval(debounceTimeout)
        })
    }
    useEffect(()=>{
     setMessage('')
    },[registerType])
    return ( 
        <div className="input-container flex column">
            <label className="label">{fieldToDisplay}</label>
            <input value={form[field]} className="input" onChange={handleChange} field="text"/>
            {!valid ? <InvalidMessage message={message}></InvalidMessage> : null}
        </div>
     );
}
 
export default Input;