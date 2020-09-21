import React, { useContext, useState } from 'react';
import './Login.css'
import * as firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from '../../firebase/firebaseConfig';
import { Container, Row } from 'react-bootstrap';
import googleImg from '../Images/Icon/google.png';
import fbImg from '../Images/Icon/fb.png';
import { UserContext } from '../../App';

firebase.initializeApp(firebaseConfig);

const Login = () => {
    const [user, setUser] = useState({
        isLoggedIn : false,
        displayName : "",
        email : "",
        password : "",
        photo : "",
        error : ""

    })

    const [loggedInUSer, setLoggedInUser] = useContext(UserContext);

    //Google Auth
    const provider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleSignIn = () =>{
        firebase.auth().signInWithPopup(provider)
        .then(res => {
            console.log(res);
            const newUser = {
                displayName : res.user.displayName,
                email : res.user.email,
                isLoggedIn : true,
                error : ""
            }
            setLoggedInUser(newUser);
            setUser(newUser);
          })
          .catch(error =>  {
            const newUserInfo = {
                isLoggedIn : false,
                error : error.message
            }
            newUserInfo.isLoggedIn = false;
            return newUserInfo;
          });
    }
    return (
    <Container>
        <Row>
        <div className = "bg-login col-md-12 text-center">
            <div className ="auth" onClick = {handleGoogleSignIn}>
                <img src={googleImg} alt="" width = "30"/>&nbsp;
                <div>
                    <h6>Continue With Google</h6>
                </div>
            </div>
            <br/>
            <div className ="auth">
                <img src={fbImg} alt="" width = "30"/>&nbsp;
                <div>
                    <h6>Continue With Facebook</h6>
                </div>
            </div>
        </div>
        </Row>
      </Container>
        
    );
};

export default Login;