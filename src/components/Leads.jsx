import { useState } from "react";
import { useEffect } from "react";
import { getLeads } from "../services/leadService";
function Leads(){
const [leads, setLeads]=useState([]);
const [loading, setLoading] = useState(true);

useEffect(()=>{  
    const loadLeads = async ()=>{
        try{
          const data = await getLeads();
          setLeads(data);
        }
        catch(error){
          console.error(error);
        }
        finally{
            setLoading(false);
        }
    };

    loadLeads();
}, [])

return(
    <div>
        <h1>Leads</h1>
        {
            loading ? (
                <p>Loading..</p>
            ) : 
            (
            leads.map(lead=>(   
            <div key={lead.leadId}>
                <h3>{lead.firstName + " " + lead.lastName}</h3>
                <p>{lead.email}</p>
                 <p>{lead.phoneNumber}</p>    
            </div>
            )

        )

        )}
    </div>
)
}

export default Leads