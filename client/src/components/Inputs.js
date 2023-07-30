import { Button } from "react-bootstrap";
import axios from "axios";
import { useState } from "react";

export default function Input() {
  const [post, setPost] = useState({
    name: "",
    lastName: "",
    email: ""
  });

  const handleInput = (event) => {
    setPost({ ...post, [event.target.name]: event.target.value });
  };
  function handleSubmit(event) {
    event.preventDefault();
    axios.post("http://127.0.0.1:5000/user", { post });
    console.log(post);
  }
  return (
    <>
    <form > 
      <input className="input" onChange={handleInput} name="name" placeholder="Name"/>
      <input className="input" onChange={handleInput} name="lastName" placeholder="lastName"/>
      <input className="input" onChange={handleInput} name="email" placeholder="email"/>
      <Button onClick={handleSubmit} variant="dark"  className="sendButton"> Reserve </Button>
      </form>
    </>
  );
}
