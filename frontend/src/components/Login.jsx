import React from "react";

// import GoogleLogin from "react-google-login";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import shareVideo from "../assets/share.mp4";
import logo from "../assets/logo.png";
import jwtDecode from "jwt-decode";

import { client } from "../client";

function Login() {
  const navigate = useNavigate();
  return (
    <div className=" flex justify-start items-center flex-col h-screen">
      <div className=" relative w-full h-full">
        <video
          className=" w-full h-full object-cover"
          type="video/mp4"
          loop
          controls={false}
          muted
          autoPlay
          src={shareVideo}
        />
        <div className="absolute flex flex-col justify-center w-full h-full items-center top-0  bg-blackOverlay ">
          <div className="p-5">
            <img src={logo} width="130px" alt="logo" />
          </div>
          <div className="shadow-2xl">
            {/*             
            <GoogleOAuthProvider 
            clientId='733920570611-fsrqjeq9oi8ds6t63ec5lk9bk1mtfo4q.apps.googleusercontent.com'
            render={(renderProps)=>(
              <button onClick={renderProps.onClick} type="button" className="bg-mainColor">
              Sign in with Google
            </button>
            )}
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy="single_host_origin"
            
            /> */}
            <GoogleOAuthProvider clientId="733920570611-43hjch2qqtvc4va8qmnmqhugeob3sv3i.apps.googleusercontent.com">
              <GoogleLogin
                onSuccess={(credentialResponse) => {
                  const details = jwtDecode(credentialResponse.credential);
                  localStorage.setItem("user", JSON.stringify(details));
                  const { name, picture, sub} = details;
                  console.log(name, picture);
                  const doc = {
                    _id:sub,
                    _type: "user",
                    username: name,
                    image: picture,
                  };
                  client.createIfNotExists(doc).then(()=>{
                    navigate('/',{replace:true})
                  });
                  console.log(credentialResponse.credential);
                  console.log(details);
                }}
                onError={() => {
                  console.log("login failed");
                }}
              />
            </GoogleOAuthProvider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
