import { useState } from "react";
import { createLead } from "../services/leadService";
function CreateLead(){
const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: ""
});

const handleChange = (e)=>{
    setFormData({
        ...formData,
        [e.target.name]: e.target.value
    });  
};
  const handleSubit = async (e)=>{
        e.preventDefault();
        try{
             const result = await createLead(formData);
              console.log(result);
            }
        catch(error){
          console.error(result);
        }
    };

    return(
        <form onSubmit={handleSubit}>
            <h1>Test Heading</h1>
        <div>
            <label>Customer First Name</label>
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange}></input>
        </div>
        <div>
            <label>Customer Last Name</label>
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange}></input>
        </div>
          <div>
            <label>Customer Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange}></input>
        </div>
          <div>
            <label>Customer Phone Number</label>
            <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange}></input>
        </div>
        <button type="submit">Create Lead</button>
        </form>
    );
}

export default CreateLead;