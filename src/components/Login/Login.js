import React, { useState } from "react";
import "./Login.css"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = ({ loadUser, onRouteChange }) => {
    const [signInEmail, setSignInEmail] = useState("");
    const [signInPassword, setSignInPassword] = useState("");
    const onEmailChange = (event) => {
        setSignInEmail(event.target.value);
    }
    const onPasswordChange = (event) => {
        setSignInPassword(event.target.value);
    }
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/home");
    }
    const onSubmitLogIn = async () => {
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: signInEmail, password: signInPassword })
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
                        <legend className="f2 white fw6 ph0 mh0">Login</legend>
                        <div className="mt3">
                            {/*<label className="db white fw6 lh-copy f6" htmlFor="email-address">Email</label>*/}
                            <input style={{ margin: "0em 0 1em 0" }} placeholder="Email" onChange={onEmailChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 infoPlaceholder" type="email" name="email-address" id="email-address" />
                        </div>
                        <div className="mv3">
                            {/*<label className="db white fw6 lh-copy f6" htmlFor="password">Password</label>*/}
                            <input style={{ margin: "0em 0 1em 0" }} placeholder="Password" onChange={onPasswordChange} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 infoPlaceholder" type="password" name="password" id="password" />
                        </div>
                    </fieldset>
                    <div className="">
                        <input onClick={onSubmitLogIn} className="b ph3 pv2 white input-reset ba b--white bg-transparent grow pointer f6 dib" type="submit" value="Login" />
                    </div>
                    <div className="lh-copy mt3">
                        <Link to={"/signin"} className="pointer f6 white link  db">Sign up</Link>
                    </div>
                </div>
            </main>
        </article>
    );


}

export default Login;