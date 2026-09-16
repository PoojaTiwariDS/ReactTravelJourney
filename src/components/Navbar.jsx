import { Link } from "react-router-dom";

function Navbar(){
    return(
        <nav>
            <Link to="/dashboard">Dashboard</Link>
              {" | "}
               <Link to="/login">Login</Link>
              {" | "}
               <Link to="/leads">Leads</Link>
              {" | "}
               <Link to="/leads/create">Create Lead</Link>
              {" | "}
        </nav>
      
    )
}

export default Navbar;