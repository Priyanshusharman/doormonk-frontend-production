import React, { useState } from "react";
import '../Login/Login.css'
import { useNavigate } from "react-router-dom";
const Signup = ({ loadUser, onRouteChange }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const onEmailChange = (event) => {
        setEmail(event.target.value);
    }
    const onPasswordChange = (event) => {
        setPassword(event.target.value);
    }
    const onNameChange = (event) => {
        setName(event.target.value);
    }
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/home");
    }
    const onSubmitSignUp = async () => {
        const response = await fetch("http://localhost:5000/api/auth/createuser", {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email: email,
                password: password,
                name: name,
            })
        })
        const json = await response.json()

        if (json.success) {
            localStorage.setItem("token", json.authtoken)
            handleClick()

        }
        else {
            alert("Invalid Credentials")
        }
        /*.then(response => response.json())
.then(user => {
    if (user.id) {
        loadUser(user);
        onRouteChange("home");

    }
})*/

    }
    return (

        <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
            <main className="pa4 black-80">
                <div className="measure">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f2 white fw6 ph0 mh0">Signup</legend>
                        <div className="mt3">

                            <input style={{ margin: "0em 0 1em 0" }} placeholder="Name" onChange={onNameChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 infoPlaceholder" type="text" name="name" id="name" />
                        </div>
                        <div className="mt3">

                            <input style={{ margin: "0em 0 1em 0" }} placeholder="Email" onChange={onEmailChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 infoPlaceholder" type="email" name="email-address" id="email-address" />
                        </div>
                        <div className="mv3">

                            <input style={{ margin: "0em 0 1em 0" }} placeholder="Password" onChange={onPasswordChange} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 infoPlaceholder" type="password" name="password" id="password" />
                        </div>
                    </fieldset>
                    <div className="">
                        <input onClick={onSubmitSignUp} className="b ph3 pv2 white input-reset ba b--white bg-transparent grow pointer f6 dib" type="submit" value="Signup" />
                    </div>
                </div>
            </main>
        </article>
    );
}

export default Signup;