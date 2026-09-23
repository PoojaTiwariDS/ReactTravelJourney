import { logout } from "../services/authService";
import { useNavigate } from "react-router-dom";

function Dashboard() {
    const navigate = useNavigate();
    const handleLogout = () => {
        logout();
        navigate("/ogin");
    }
    return (
        <div>
            <h1>Dashboard Page</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Dashboard;