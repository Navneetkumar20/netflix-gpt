import Header from "./Header";
import { useState } from "react";

const Login = () =>{
    const[isSingnInForm,setIsSignInForm]= useState(true);

const toggleSignInForm=()=>{
    setIsSignInForm(!isSingnInForm);
};

    return (
        <>
    <div className="absolute">
        <Header/>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/8200f588-2e93-4c95-8eab-ebba17821657/web/IN-en-20250616-TRIFECTA-perspective_9cbc87b2-d9bb-4fa8-9f8f-a4fe8fc72545_large.jpg" 
        alt="logo"
        />
    </div>
      <form  className=" text-white bg-black w-3/12 absolute p-12 my-36 mx-auto right-0 left-0 rounded-lg bg-opacity-80">
         <h1 className="font-bold text-3xl py-4">{isSingnInForm ? "Sign In" : "Sign Up"}</h1> 
          {!isSingnInForm&&(
             <input 
          type="text" placeholder="Full Name"
           className="placeholder:italic p-2 my-4 w-full bg-black sm:text-sm bg-opacity-40"
           />
       )} 
         <input 
          type="text" placeholder="Email Address"
           className="placeholder:italic p-2 my-4 w-full bg-black sm:text-sm bg-opacity-40"
           />
         <input
          type="password" placeholder="Password"
           className="placeholder:italic p-2 my-4 w-full bg-black  sm:text-sm bg-opacity-40"/>
        <button className=" sm:text-2xl p-4 my-6 bg-red-600 w-full rounded-lg ">
            Sign In</button> 
            <p className="py-4 sm:text-sm cursor-pointer" onClick={toggleSignInForm}>
             {isSingnInForm ?  "New to Netflix?Sign Up":"Already I have a Account!SignIn Now..."}</p>  
    </form>
    </>
    );
};
export default Login;