import { useState } from "react";
import { useAuthContext } from "./useAuthContext";


export const useSignup = () =>{
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const { dispatch } = useAuthContext();

    const signup = async (orgname, email, phoneNumber, about, password) => {
        setIsLoading(true);
        setError(null);

        const response = await fetch('/api/user/signup', {   //we are writing a fetch api here, this will get us the body 
            method:'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({orgname, email, phoneNumber, about, password})
        })
        const json = await response.json()  //we are storing the response we are getting in this

        if(!response.ok){   //if the response will not be okay then setisloading will be false and error will be the displayed
            setIsLoading(false);
            setError(json.error);
        }

        if(response.ok){  //if response is ok then we will save the user in the local storage, user is defined in authcontext as null but now it will have the body
            localStorage.setItem('user', JSON.stringify(json));  //storing 'user' item in localstorage

            //update the auth context
            dispatch({type:'LOGIN', payload: json});

            setIsLoading(false);
        }

    }

    return { signup, isLoading, error }

}