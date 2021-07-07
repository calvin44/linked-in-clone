import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { auth } from './firebase'
import './login.css'
import {login} from './features/userSlice'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [profilePic, setProfilePic] = useState("")
    const [name, setName] = useState("")
    const dispatch = useDispatch()

    const register = () => {
        if(!name) {
            return alert("Please enter a full name!")
        }

        auth.createUserWithEmailAndPassword(email, password)
            .then((userAuth) => {
                userAuth.user.updateProfile({
                    displayName: name,
                    photoURL: profilePic
                })
                .then(() => {
                    dispatch(login({
                        email: userAuth.user.email,
                        uid: userAuth.user.uid,
                        displayName: name,
                        photoURL: profilePic
                    }))
                })
            }).catch((err) => alert(err))
    }
    const loginToApp = (e) => {
        e.preventDefault()
        auth.signInWithEmailAndPassword(email, password)
            .then(userAuth => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: userAuth.user.displayName,
                    profileURL: userAuth.user.photoURL
                }))
            }).catch(err => alert(err)) 
    }
    
    return (
        <div className="login">
            <img src="https://1000logos.net/wp-content/uploads/2017/03/Linkedin-Logo.png" alt="logo"/>

            <form>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Full name (required if registering)"/>
                <input type="text" value={profilePic} onChange={(e) => setProfilePic(e.target.value)} placeholder="Profile pic URL (optional)"/>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"/>
                <button type="submit" onClick={loginToApp}>Sign In</button>
            </form>

            <p>Not a member? {" "}
                <span onClick={register} className="login__register">Register Now</span></p>
        </div>
    )
}

export default Login
