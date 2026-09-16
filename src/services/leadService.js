import axios from "axios";
import api from "./api";

  
  const API_URL ="https://localhost:7035/api/Lead";
 export const getLeads = async()=>{  
            const response = await api.get("/lead");            
             return response.data.data ?? [];
    };

export const createLead = async(lead)=>{    
 const response = await api.post("/lead", lead)
        return await response.data;
};

export const getLeadById = async (id) => {

    const response = await axios.get(`${API_URL}/${id}`);

    return await response.data;
};

export const updateLead = async (id, lead) => {

    const response = await axios.put(`${API_URL}/${id}`, lead);
    return await response.data;
};

export const deleteLead = async (id) => {

    const response = await axios.delete(`${API_URL}/${id}`);
    return true;
};