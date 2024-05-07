/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Dashboard from "../AdminPage/Dashboard";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
    const [value,setValue] = useState({
        Username:"",
        Password:""
    })
    const formhandle=(e)=>{
      const {name,value} = e.target;
      setValue((prev)=>({
          ...prev,
          [name]:value

      }))
    }
      const handleSubmit=async (event)=>{
       event.preventDefault()
        await fetch("https://techtitannodejs.onrender.com/auth",{
          method:"POST",
          headers:{
            'Content-Type': 'application/json',
            'Accept':'application/json'
           },
          body:JSON.stringify(value)
        }).then((data)=>{
            return data.json();
        }).then((data)=>{
          console.log(data);
          if(data ==="exist"){
            navigate("/dashboard")
          }else{
            alert("UserName Password is In Correct")
          }
        })
    
    }
  return (
    <div>
      <section className="w-full flex justify-center items-center min-h-full h-screen bg-blue-700 bg-opacity-55">
        <div className=" md:h-1/2 md:w-1/3 h-1/2 w-9/12 border-2 rounded-2xl relative text-black">
          <form
            action="  "
            onSubmit={handleSubmit}
            className="flex flex-col justify-center items-center h-full "
          >
            <div className="flex  w-full md:px-10 px-2 h-14 my-2 ">
              <input
                type="text"
                name="Username"
                value={value.Username}
                required
                onChange={formhandle}
                placeholder="UserName"
                className="rounded-2xl px-4 w-full bg-transparent border-2"
              />
            </div>
            <div className="flex  w-full md:px-10 px-2 h-14 my-2">
              <input
                type="password"
                name="Password"
                required
                value={value.Password}
                onChange={formhandle}
                placeholder="Password"
                className="rounded-2xl px-4 w-full bg-transparent border-2"
              />
            </div>
            <div className="flex justify-center w-full md:px-10 px-2 h-14 py-1">
              <button
                type="Submit"
                className="bg-orange-600 hover:bg-orange-400   font-medium rounded-xl w-full text-2xl"
              >
                Submit
              </button>
            </div>
            <div className="flex justify-center w-full md:px-10 px-2 h-14 py-1">
              <button
                type="Reset"
                className="bg-orange-600 hover:bg-orange-400  font-medium rounded-xl w-full text-2xl"
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Login;
