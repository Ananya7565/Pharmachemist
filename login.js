import React from "react";
import {useHistory} from "react-router-dom";

function Login(){
    let history = useHistory();
    //history.push('/profile')
    return(
        <div>
            <input type="text" placeholder="username"/>
            <input type="text" placeholder="password"/>
            <button 
            onClick={() => {
                history.push('/profile');
                }}
                >
                    
                    login
                    </button>
        </div>
    );
}

export default Login