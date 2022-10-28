import React, { useState , useEffect } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { gapi } from "gapi-script";
import "./Glogin.css"

const clientId = "569806989146-mnanvuvhhg5ucb1q41084qae856r6trd.apps.googleusercontent.com";

function GLogin() {

    const [showloginButton, setShowloginButton] = useState(true);
    const [showlogoutButton, setShowlogoutButton] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const onLoginSuccess = (res) => {
        console.log('Login Success:', res.profileObj);
        setShowloginButton(false);
        setShowlogoutButton(true);
        setName(res.given_name);
        setEmail(res.email);
    };

    const onLoginFailure = (res) => {
        console.log('Login Failed:', res);
    };

    const onSignoutSuccess = () => {
        alert("You have been logged out successfully");
        console.clear();
        setShowloginButton(true);
        setShowlogoutButton(false);
    };

    useEffect(() => {
      function start() {
        gapi.auth2.init({
          clientId: process.env.REACT_PUBLIC_GOOGLE_CLIENT_ID,
          scope: 'email',
        });
      }
  
      gapi.load('client:auth2', start);
    }, []);

    return (
      <>
     
        <div>

            { showloginButton ?
               
                <GoogleLogin
                  name={name}
                  email={email}
                    clientId={clientId}
                    buttonText="Sign In"
                    onSuccess={onLoginSuccess}
                    onFailure={onLoginFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                /> : null}

                

            { showlogoutButton ?
                <GoogleLogout
                    clientId={clientId}
                    buttonText="Sign Out"
                    onLogoutSuccess={onSignoutSuccess}
                >
                </GoogleLogout> : null
            }
        </div>
        {/* <div>{name} {email}</div> */}
        </>
    );
}
export default GLogin;