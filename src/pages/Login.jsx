import { useState } from "react";
import api from "../services/api";

function Login(){
const [formData, setFormData] = useState({
    email: "",
    password: ""
});

const handleChange = (e)=>{
setFormData({
    ...formData,
    [e.target.name]: e.target.value   
});
};

   const handleSubmit = async (e) => {
        e.preventDefault();
       try{
         const response = await api.post("/auth/login", formData)
         console.log(response.data.data.token);
         const token = response.data.data.token;
         localStorage.setItem("token", token);
       }
       catch(error){
         console.error(error);
       }
    };
    return(
       
       <form onSubmit={handleSubmit}>
        <div>
            <label>Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange}/>
        </div>
         <div>
            <label>Password</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange}/>
        </div>
        <button type="submit">Login</button>
       </form>
    )
}

export default Login;   