import React, {createContext} from 'react';
import axios from 'axios'


export const AuthContext = createContext()
const BASE_URL = 'http://localhost:3002'


const AuthContextProvider = (props) => {
    
    const signUp = async (user) =>{
        let res = await axios.post(`${BASE_URL}/signup`,user)
        console.log(res)
    }
    const login = async (user) =>{
        let res = await axios.post(`${BASE_URL}/login`, user)
        console.log(res)
    }
    return ( 
        <AuthContext.Provider value={{signUp,login}}>
            {props.children}
        </AuthContext.Provider>
        );
}
 
export default AuthContextProvider;