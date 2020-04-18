import React, {useState, useEffect, useContext} from 'react';
import Input from './Input/Input'
import SubmitButton from './SubmitButton/SubmitButton'
import './Register.css'
import {AuthContext} from '../../contexts/AuthContext';



const Register = () => {
    
    const [form,setForm] = useState({})
    const [registerType, setRegisterType] = useState('login')
    const [loading, setLoading] = useState(true)
    const [invalid,setInvalid] = useState(false)
    const {signUp,login}  = useContext(AuthContext)
   
    const submitForm = () => {
        registerType === 'login' ? login(form) : signUp(form)
    }
    
    const switchForms = (type) =>{
        if(type === registerType) return
        setLoading(false)
        setTimeout(() => {
            setRegisterType(type)
            setLoading(true)
        }, 10);
    }
    useEffect(()=>{
        registerType === 'signup' ?
         setForm({name:'Danny123',password:'danny123123',email:'danny@gmailcom'}) :
         setForm({name:'Danny123',password:'danny123123'})
    }, [registerType] )

    return ( 
        <div className="register flex column align-center">
            <div className="register-header flex space-around align-center ">
                {/* //TODO: MAKE THIS A COMPONENT */}
                <h2 onClick={()=>{switchForms('login')}} className={registerType === 'login' ? 'active' : null}>Login</h2>
                <h2 onClick={()=>{switchForms('signup')}} className={registerType === 'signup' ? 'active' : null} >Signup</h2>
            </div>
            <div className={`form-container ${loading ? 'loading' : null}`}>
                {Object.keys(form).map((key,i)=><Input  key={i} field={key} form={form} registerType={registerType} setInvalid={setInvalid} setForm={setForm}></Input>)}
                <SubmitButton submitForm={submitForm} form={form} invalid={invalid} setInvalid={setInvalid}></SubmitButton>
            </div>
        </div>
     );
}
 
export default Register;