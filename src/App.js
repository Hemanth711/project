
import { useState } from 'react';
import './App.css';


function App() {
  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [gender, setgender] = useState("Select Gender")
  const [phonenumber, setphonenumber] = useState("")
  const [passowrd, setpassowrd] = useState("")
  const [username, setUsername] = useState("")
  const [nameError, setnameError] = useState("")
  const [emailError, setemailError] = useState("")
  const [genderError, setgenderError] = useState("")
  const [phonenumberError, setphonenumberError] = useState("")
  const [passowrdError, setpasswordError] = useState("")
  const [emptyError, setemptyError] = useState("")
  const resetErrorDefault =()=>{
    setnameError("")
    setemailError("")
    setgenderError("")
    setphonenumberError("")
    setpasswordError("")
    setemptyError("")
  }
  const validate =()=>{
    if (
       name === "" || email === "" || gender === "" || phonenumber === "" || passowrd === ""
    ){
        setemptyError("all feilds are mandatory")
        setUsername("")
        return false
    }
    if(!name.match(/^[A-Za-z0-9- ]+$/)){
         setnameError("Name is not Alphanumeric")
         setUsername("")
         return false 
    }
    if(!email.includes("@")){
      setemailError("Email must contain @")
      return false;
    }
    if(!gender.match(/male|female|other/i)){
      setgenderError("Please identify as male,female or Other")
      return false;
    }
    if(!phonenumber.match(/^[0-9]+$/)){
      setphonenumberError("Phone number must contain only numbers")
      return false;
    }
    if(passowrd.length < 8){
      setpasswordError("Password must contain atleast 8 letters")
      return false;
    }
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    resetErrorDefault()
    const isValid = validate()
    if(isValid){
      setname("")
      setemail("")
      setgender("")
      setphonenumber("")
      setpassowrd("")
      resetErrorDefault()
      
    }
    setUsername(email.substr(0,email.indexOf("@")))
  }
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>Student Rigistratrion From</label><br/>
        <input type="text" placeholder='name' value={name} onChange = {(e)=>{setname(e.target.value)}}/><br />
        <span>{nameError}</span>
        <input type="email" placeholder='Email' value={email} onChange = {(e)=>{setemail(e.target.value)}} /><br />
        <span>{emailError}</span>
        <select name="gender" value={gender} onChange = {(e)=>{setgender(e.target.value)}}>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select><br />
        {genderError}
        <input type="text" placeholder='Phone Number' value={phonenumber} onChange = {(e)=>{setphonenumber(e.target.value)}}/><br />
        <span>{phonenumberError}</span>
        <input type="passowrd" placeholder='Passowrd' value={passowrd} onChange = {(e)=>{setpassowrd(e.target.value)}}/><br />
        <span>{passowrdError}</span>
        <span>{emptyError}</span><br />
        <input type="submit" value="submit" /><br />
      </form>
      <div>
        <h2>{username ? "Hello " + username : "LPU"}</h2>
      </div>
    </div>
  );
}

export default App;
