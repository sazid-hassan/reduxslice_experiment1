import React from 'react';

import { useDispatch } from 'react-redux';

import { login } from '../Features/User';

const LogIn = () => {

    const dispatch = useDispatch();

    const [isLogged, setIsLogged] = React.useState(false);

    return (
        <div>
            {
                !isLogged &&
                <button onClick={() => {
                    setIsLogged(true)
                    dispatch(login({
                        name: "KhanZ",
                        age: 25,
                        email: "sazid.khan.hassan@gmail.com"
                    }))
                }} >LogIn</button>
            }
            {
                isLogged &&
                <button onClick={() => {
                    setIsLogged(false)
                    dispatch(login({
                        name: "",
                        age: "",
                        email: ""
                    }))
                }}>Log Out</button>
            }
        </div>
    )
}

export default LogIn
