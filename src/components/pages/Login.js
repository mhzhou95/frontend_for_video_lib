import React from 'react';

const Login = (props) => {
    const handleSubmit = (submitEvent) => {
        submitEvent.preventDefault();
        props.history.push('/')
    }
    return (
        <div>
            <form className="signInForm" onSubmit={handleSubmit}>
                <label name="email">email</label>
                <input type="email" name="email"></input><br/>

                <label name="password">password</label>
                <input type="password" name="password" minLength="6" ></input><br/>
                
                <button> Submit</button>
            </form>
        </div>
    );
}

export default Login;
