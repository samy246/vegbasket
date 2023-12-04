import React, { useState } from "react";
import Layout from "../../components/Layout";
import axios from "axios"
import "../../styles/AuthStyles.css";
import {useNavigate} from "react-router-dom"
import {toast} from 'react-toastify';



const Register = () => {

    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setpassword]=useState("");
    const [phone,setphone]=useState("");
    const [address,setaddress]=useState("");

const navigate=useNavigate()
//form function
const handleSubmit = async (e)=>{
  e.preventDefault();
 try{

  const res= await axios.post(
    '/api/v1/auth/register',{
    name,email,password,phone,address
  }
  );
  if(res && res.data.success){

    toast.success(res.data && res.data.message)
    navigate('/login')
  }else{
    toast.error( res.data.message)
  }
 }catch(error){
  console.log(error);
  toast.error('Something went wrong')
 }
}



//console.log(process.env.REACT_APP_API);


  return (
    <Layout title={"Register - Ecommerce App"}>
      <div className="form-container">

        <form onSubmit={handleSubmit}>
        <h4 className="title">Register Form</h4>
          <div className="mb-3">

            <input
              type="text"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Name"
              required
            />

          </div>
          <div className="mb-3">

            <input
              type="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter Your Email"
              required
            />
          </div>
          <div className="mb-3">

            <input
              type="password"
              value={password}
              onChange={(e)=>setpassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter Your password"
              required
            />
          </div>
          <div className="mb-3">

            <input
              type="text"
              value={phone}
              onChange={(e)=>setphone(e.target.value)}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter Your Phone"
              required
            />
          </div>
          <div className="mb-3">

            <input
              type="text"
              value={address}
              onChange={(e)=>setaddress(e.target.value)}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter Your Address"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            REGISTER
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Register;
