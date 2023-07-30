import { Button } from "react-bootstrap";
import Axios from "axios";
import { useState } from "react";

export default function Input() {
  const[user, setUser] = useState({
    name: "",
    lastName: "",
    email: "",
  })
  
  function Submit(e) {
    e.preventDefault();
    Axios.post("http://127.0.0.1:5000/user", {
      name: user.name,
      lastName: user.lastName,
      email: user.email
    })
    .then(res =>{
      console.log(res)
    })
  }

  function Handle(e) {
    const newUser = {...user}
    newUser[e.target.id] = e.target.value
    setUser(newUser)
  }
  return (
    <>
    <form  > 
      <input className="input" onChange={(e) =>Handle(e)} value={user.name} id="name" placeholder="name"/>
      <input className="input" onChange={(e) =>Handle(e)} value={user.lastName}  id="lastName" placeholder="lastname"/>
      <input className="input" onChange={(e) =>Handle(e)} value={user.email}  id="email" placeholder="email"/>
      <Button onClick={(e) => Submit(e)}  variant="dark"  className="sendButton"> Reserve </Button>
      </form>
    </>
  );
}
