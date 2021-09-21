import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { signup } from '../../actions'
import Alert from './Alert';

export default function Form() {
    const [user, setUser] = useState({})
    const [open, setOpen] = useState(false)
    const [message, setMessage] = useState('')
    const dispatch = useDispatch()

    const handleChange = (e) => {
        let name = e.target.name
        let value = e.target.value
        setUser({ ...user, [name]: value })
    }

    const onSignUp = (e) => {
        e.preventDefault()
        if (user.password !== user.password_confirm) {
            console.log("test");
            setOpen(true)
            setMessage("Password And Its Confirmation Did Not Match!")
        }
        else{ dispatch(signup(user)) }
    }

    const alert = <Alert open={open} setOpen={setOpen} message={message} />

    return (
        <>
            <form
                className="signup"
                onSubmit={(e) => onSignUp(e)}>
                <p class="title">Sign Up</p>

                <label>
                    <input
                        name="fname"
                        type="text"
                        placeholder="First Name"
                        required
                        onChange={(e) => handleChange(e)} />
                </label>

                <label>
                    <input
                        name="lname"
                        type="text"
                        placeholder="Last Name"
                        onChange={(e) => handleChange(e)} />
                </label>

                <label>
                    <input
                        name="username"
                        type="text"
                        placeholder="Username"
                        required
                        onChange={(e) => handleChange(e)} />
                </label>

                <label>
                    <input
                        name="email"
                        type="text"
                        placeholder="Email"
                        required
                        onChange={(e) => handleChange(e)} />
                </label>

                <label>
                    <input
                        name="password"
                        type="password"
                        placeholder="Password"
                        required 
                        onChange={(e) => handleChange(e)}/>
                </label>

                <label>
                    <input
                        name="password_confirm"
                        type="password"
                        placeholder="Password Confirmation"
                        required 
                        onChange={(e) => handleChange(e)}/>
                </label>

                <div>
                    <button
                        type="submit"
                        className="state"
                    >Sign Up</button>
                </div>
            </form>
            {alert}
        </>
    )
}
