import React from 'react';

const SignUp = (props) => {
    const handleSubmit = (submitEvent) => {
        submitEvent.preventDefault();
        props.history.push('/')
    }
    return (
        <div>
            <form className="signUpForm" onSubmit={handleSubmit}>
                <label name="email">email</label>
                <input type="email" name="email"></input><br/>

                <label name="password">password</label>
                <input type="password" name="password" minLength="6" ></input><br/>

                <label name="username">display name</label>
                <input type="text" name="username"></input><br/>

                <button> Submit</button>
            </form>
        </div>
    );
}

export default SignUp;
