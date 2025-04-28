
import { useContext, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../Context/AuthContext";


function Login() {

  const [mail,setmail] = useState("")
  const [pass,setpass] = useState("")

  const navigate = useNavigate()
  const { authState, loginUser } = useContext(AuthContext)

  const {token} = authState

  function HandleSubmit(e){
    e.preventDefault()
    axios.post("https://reqres.in/api/login", { email: mail, password: pass })
    .then((res)=>{
      console.log(res.data.token)
      loginUser(res.data.token)
      localStorage.setItem('token', res.data.token);
      navigate("/dashboard")
    })
    .catch((err)=>{
      console.log(err)
    })
  }


  if(token){
    return <Navigate to="/dashboard" />
   } return (
    <div>
      <form data-testid="login-form" onSubmit={(e)=>HandleSubmit(e)}>
        <div>
          <label>
            Email
            <input data-testid="email-input" type="email" value={mail} onChange={(e)=>setmail(e.target.value)} placeholder="email" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              data-testid="password-input"
              value={pass}
              type="password"
              onChange={(e)=>setpass(e.target.value)}
              placeholder="password"
            />
          </label>
        </div>
        <div>
          <input data-testid="form-submit" type="submit" value="SUBMIT" />
        </div>
      </form>
      <div>
        <Link to="/">Go Back</Link>
      </div>
    </div>
  );
}
export default Login;
