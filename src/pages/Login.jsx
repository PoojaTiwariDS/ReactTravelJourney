import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/authService";

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

    const navigate = useNavigate();

   const handleSubmit = async (e) => {
        e.preventDefault();
       try{
         await login(
                formData.email,
                formData.password
            );

            navigate("/dashboard");
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