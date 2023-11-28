import React, { useEffect, useState } from 'react'

const Dashboard = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
    })
    const onChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }
    const onEdit = async () => {
        if(!user.email||!user.name)
        {
            alert("Fields cannot be empty")
            window.location.reload();
            return
        }
        const response=await fetch(`https://doormonk-mongo.onrender.com/api/auth/updateuser`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token")
            },
            body: JSON.stringify({ name: user.name, email: user.email }),
        });
        const json=await response.json();

        if(json.errors)
        {
            alert("Enter valid details")
            window.location.reload()
            return
        }
        alert("Account Updated.")
    }
    useEffect(() => {
        const getUser = async () => {
            const response = await fetch("https://doormonk-mongo.onrender.com/api/auth/getUser", {
                method: "post",
                headers: { "Content-Type": "application/json", "auth-token": localStorage.getItem("token") },

            })
            const json = await response.json()
            setUser({ name: json.name, email: json.email, uses: json.uses })

        }
        getUser()
    }, [])
    return (
        <>
            
            <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
            <main className="pa4 black-80">
                <div className="measure">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f2 white fw6 ph0 mh0">Account Details</legend>
                        <div className="mt3">
                            <label className="db white fw6 lh-copy f6" htmlFor="email-address">Name</label>
                            <input value={user.name}  style={{ margin: "0em 0 1em 0" }} placeholder="Name" onChange={onChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 infoPlaceholder" type="text" name="name" id="name" />
                        </div>
                        <div className="mv3">
                            <label className="db white fw6 lh-copy f6" htmlFor="password">Email</label>
                            <input value={user.email}  style={{ margin: "0em 0 1em 0" }} placeholder="Email" onChange={onChange} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 infoPlaceholder" type="text" name="email" id="email" />
                        </div>
                    </fieldset>
                    <div className="">
                        <input onClick={onEdit} className="b ph3 pv2 white input-reset ba b--white bg-transparent grow pointer f6 dib" type="submit" value="Edit" />
                    </div>
                </div>
            </main>
        </article>
        </>

    )
}

export default Dashboard