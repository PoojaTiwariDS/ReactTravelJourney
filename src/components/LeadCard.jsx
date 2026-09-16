function LeadCard({lead}){
return(
    <div>
        <h1>{lead.name}</h1>
           <h1>{lead.email}</h1>
              <h1>{lead.address}</h1>
    </div>
    
)
}

export default LeadCard