import React, { useState } from "react";

//Define component with (props) function
const HookForm = (props) => {
    //declare array of state variables and initialize
    const [fName,setfName] = useState("");
    const [lName,setlName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confPassword, setconfPassword] =useState("");

    //state variables for validation
    const [namefError, setfNameError] = useState();
    const [namelError, setlNameError] = useState();
    const [emailError,setEmailError] =useState();

    
    //functions

    //validation of first name input
    const handlefName = (e) =>{
        setfNameError(e.target.value); //takes value of input name for validation
        if(e.target.value.length < 1) {
            setfNameError("Name is required");
        } else if (e.target.value.length < 2) {
            setfNameError("Name must be 2 characters or longer!");
        } else { 
            //empty string is falsy
            setfNameError("");
        }
    }
    //validation of last name input
    const handlelName = (e) =>{
        setlNameError(e.target.value); //takes value of input name for validation
        if(e.target.value.length < 1) {
            setlNameError("Name is required");
        } else if (e.target.value.length < 2) {
            setlNameError("Name must be 2 characters or longer!");
        } else { 
            //empty string is falsy
            setlNameError("");
        }
    }
    //validation of email input
    const handleEmail = (e) =>{
        setEmailError(e.target.value); //takes value of input email for validation
        e.target.value.length < 5 ? setEmailError("The field must be at least 5 characters"):setEmailError("");
    }
    
    //functions for the event of onSubmission()
    const userCreation = (e) => {
        // onSubmit(e)vents information for preventDefault() refresh & keep state
        e.preventDefault();
        
        //reset the input field values on submission
        setfName("");
        setlName("");
        setEmail("");
        setPassword("");
        setconfPassword("");
    };
    //React component elements to return to App
    return(
        <form onSubmit={ userCreation }>
                <div className="InputField">
                    <label className="InputValue">First Name </label>
                    <input type="text" onChange={handlefName}/>
                </div>
                    {namefError?<p>{namefError}</p>:""}
                <div className="InputField">
                    <label className="InputValue">Last Name </label>
                    <input type="text" onChange={handlelName}/>
                </div>
                    {namelError?<p>{namelError}</p>:""}
                <div className="InputField">
                    <label className="InputValue">Email </label>
                    <input type="text" onChange={handleEmail}/>
                </div>
                    {emailError ? <p>{emailError}</p> : ""}
                <div className="InputField">
                    <label className="InputValue">Password </label>
                    <input type="text" onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                    {password.length < 8 ? <p>Password must be at least 8 characters</p> : ""}
                <div className="InputField">
                    <label className="InputValue">Confirm Password </label>
                    <input type="text" onChange={(e)=>setconfPassword(e.target.value)}/>
                </div>
                    {confPassword !== password ? <p>Passwords do not match!</p> : ""}


        </form>
    )
}
export default HookForm;