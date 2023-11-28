import React, { useState } from 'react'
import './Barberlogin.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const Barberlogin = () => {
    const [barber, setBarber] = useState({
        email: "",
        password: "",
    })
    const onChange = (e) => {
        setBarber({
            ...barber,
            [e.target.name]: e.target.value
        })
    }
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/barberhome");
    }
    const onSubmitLogIn = async () => {
        const response = await fetch("https://doormonk-mongo.onrender.com/api/barberauth/loginbarber", {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(barber)
        })
        const json = await response.json()

        if (json.success) {
            localStorage.setItem("token", json.authtoken)
            handleClick()
        }
            else {
                alert("Invalid Credentials")
            }
    }
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-4'>
                    <h1 className='text-light'>Earn More. Earn Easily</h1>
                </div>

            </div>
            <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
                <main className="pa4 black-80">
                    <div className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f1 white fw6 ph0 mh0">Login</legend>
                            <div className="mt3">
                                <label className="db white fw6 lh-copy f6" htmlFor="email">Email</label>
                                <input onChange={onChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email" id="email" />
                            </div>
                            <div className="mv3">
                                <label className="db white fw6 lh-copy f6" htmlFor="password">Password</label>
                                <input onChange={onChange} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password" id="password" />
                            </div>
                        </fieldset>
                        <div className="">
                            <input onClick={onSubmitLogIn} className="b ph3 pv2 white input-reset ba b--white bg-transparent grow pointer f6 dib" type="submit" value="Login" />
                        </div>
                        <div className="lh-copy mt3">
                            <Link to={"/barberregister"} className="pointer f6 white link dim black db">Register</Link>
                        </div>
                    </div>
                </main>
            </article>
        </div>
    )
}

export default Barberlogin