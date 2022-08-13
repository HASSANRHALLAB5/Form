import {useState} from "react";
import axios from 'axios'
const BACKEND_URL = 'http://localhost:5000/signup'
function Form() {
  const[data,setData]=useState({
    firstName:'',
    lastName:'',
    email:'',
    description:''
  })

  function submit(e){
    e.preventDefault()
    console.log(data)
    axios.post(BACKEND_URL,data).then(res=>{
      console.log(res.data)
    }
    )
  }
  function hundlesubmit(e){
    const newData={...data}
    newData[e.target.name]=e.target.value
    setData(newData)
    console.log(newData)
  }
  return (
    <div className="form-container">
      <form className="register-form"
      onSubmit={submit}
      >
        <input
        onChange={(e)=>hundlesubmit(e)}
        value={data.FirstName}

          className="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
        />

        <input
           onChange={(e)=>hundlesubmit(e)}
           value={data.lastName}
          className="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
        />

        <input
           onChange={(e)=>hundlesubmit(e)}
           value={data.email}
          className="form-field"
          type="text"
          placeholder="Email"
          name="email"
        />

        <input
           onChange={(e)=>hundlesubmit(e)}
           value={data.Description}
          className="form-field"
          type="text"
          placeholder="Description"
          name="description"
        />
        <button
         className="form-field" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
