import React from 'react'
import { useSelector } from 'react-redux'
import LogOut from '../main/LogOut'
import Form from '../regestration/Form'

export default function Content() {
    const signUp = useSelector(state => state.auth)
    const content = <div className="content">
        <h1>Welcome</h1>
        {signUp.value?
        <h3>{signUp.value.fname}</h3>:
        ''}
        <LogOut/>
    </div>

    return (
        <>
            {signUp.value? <>{content}</>: <Form/>}
        </>
    )
}
