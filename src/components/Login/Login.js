import React, { useContext, useState } from 'react';
import './Login.css'
import * as firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from '../../firebase/firebaseConfig';
import { Container, Row } from 'react-bootstrap';
import googleImg from '../Images/Icon/google.png';
import fbImg from '../Images/Icon/fb.png';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';

firebase.initializeApp(firebaseConfig);

const Login = () => {
    const[newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        isLoggedIn : false,
        name : "",
        email : "",
        password : "",
        photo : "",
        error : ""

    })

    const [loggedInUSer, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    //Google Auth
    const provider = new firebase.auth.GoogleAuthProvider();
    //FB Auth
    const fbProvider = new firebase.auth.FacebookAuthProvider();
    const handleGoogleSignIn = () =>{
        firebase.auth().signInWithPopup(provider)
        .then(res => {
            console.log(res);
            const newUser = {
                name : res.user.name,
                email : res.user.email,
                isLoggedIn : true,
                error : ""
            }
            setLoggedInUser(newUser);
            setUser(newUser);
            history.replace(from);
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

    const handleFbSignIn = () => {
        firebase.auth().signInWithPopup(fbProvider)
        .then(res => {
           console.log(res);
            const newUser = {
                name : res.user.name,
                email : res.user.email,
                isLoggedIn : true,
                error : ""
            }
            setLoggedInUser(newUser);
            history.replace(from);
            setUser(newUser);
          })
          .catch(function(error) {
            const newUserInfo = {
                isLoggedIn : false,
                error : error.message
            }
            newUserInfo.isLoggedIn = false;
            return newUserInfo;
          });
    }

    const handleBlur = (e) => {
        let isFieldValid;
        if(e.target.name === 'email'){
            const isEmailValid = /\S+@\S+\.\S+/.test(e.target.value)
            isFieldValid = isEmailValid;
        }
        if(e.target.name === 'password'){
            const isPasswordValid = e.target.value.length > 6
            const hasNumber = /\d{1}/.test(e.target.value)
            isFieldValid = isPasswordValid && hasNumber;
        }
        if(isFieldValid){
            const newUserInfo = {...user};
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }

    }

    const handleSubmit = (e) => {
        if(newUser && user.email && user.password){
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)

            .then(res => {
                const newUserInfo = {...user};
                newUserInfo.error = '';
                newUserInfo.success = true;
                setUser(newUserInfo);
                updateUserName(user.name);
            })
            .catch(error => {
                const newUserInfo = {...user};
                newUserInfo.error = error.message;
                newUserInfo.success = false;
                setUser(newUserInfo);
              });
        }
if(!newUser && user.email && user.password){
    firebase.auth().signInWithEmailAndPassword(user.email, user.password)
    .then(res => {
        const newUserInfo = {...user};
        newUserInfo.error = '';
        newUserInfo.success = true;
        setUser(newUserInfo);
        setLoggedInUser(newUserInfo);
        history.replace(from);
    })
    .catch(error => {
        const newUserInfo = {...user};
        newUserInfo.error = error.message;
        newUserInfo.success = false;
        setUser(newUserInfo);
      });
}

        e.preventDefault();
    }
    const updateUserName = name => {
        const user = firebase.auth().currentUser;

        user.updateProfile({
        displayName: name
        })
        .then(() => {
        // Update successful.
        })
        .catch(error => {
        // An error happened.
        });
    }

    return (
    <Container>
        <Row>
        <div className = "bg-login col-md-12 text-center">

            <h1>Create a new account or Sign in</h1>
            <form onSubmit = {handleSubmit}>
            {
                newUser && <input className = "w-50 m-3" type="text" name= "name" placeholder= "Name"/>
            
            }
            <br/>
            <input type="text" name = "email" onBlur = {handleBlur} className = "w-50 m-3" placeholder = "Email" required/>
            <br/>
            <input type="password" name = "password" onBlur = {handleBlur} className = "w-50 m-3" placeholder = "Password" required/>
            <br/>
            <input className = "w-50 m-3 btn btn-warning" type="submit" value={newUser ? 'Sign Up' : 'Log in'}/>
            <p>{newUser ? 'Already have an account?' : "Don't Have an account?"}</p> 
            <p onClick= {() => setNewUser(!newUser)} className = "text-danger">{newUser ? 'Log in with email' : 'Create a new account.'}</p>
            </form>
            <p style = {{color : 'red'}}>{user.error}</p>

            <div className ="auth" onClick = {handleGoogleSignIn}>
                <img src={googleImg} alt="" width = "30"/>&nbsp;&nbsp;
                <div>
                    <h6>Continue With Google</h6>
                </div>
            </div>
            <br/>
            <div className ="auth" onClick = {handleFbSignIn}>
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