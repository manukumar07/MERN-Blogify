import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

// const URL = "http://localhost:5000"; // Define your base URL

const Menu = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.get(`http://localhost:5000/api/auth/logout`, {
        withCredentials: true,
      });
      setUser(null);
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="bg-[#1E293B] w-[200px] md:w-[250px] z-10 flex flex-col items-start absolute top-12 right-6 md:right-32 rounded-md p-4 space-y-4 shadow-lg">
      {!user && (
        <>
          <h3 className="text-[#F1F5F9] text-sm hover:text-[#10B981] cursor-pointer">
            <Link to="/login">Login</Link>
          </h3>
          <h3 className="text-[#F1F5F9] text-sm hover:text-[#10B981] cursor-pointer">
            <Link to="/register">Register</Link>
          </h3>
        </>
      )}
      {user && (
        <>
          <h3 className="text-[#F1F5F9] text-sm hover:text-[#10B981] cursor-pointer">
            <Link to={`/profile/${user._id}`}>Profile</Link>
          </h3>
          <h3 className="text-[#F1F5F9] text-sm hover:text-[#10B981] cursor-pointer">
            <Link to="/write">Write</Link>
          </h3>
          <h3 className="text-[#F1F5F9] text-sm hover:text-[#10B981] cursor-pointer">
            <Link to={`/myblogs/${user._id}`}>My blogs</Link>
          </h3>
          <h3
            onClick={handleLogout}
            className="text-[#F1F5F9] text-sm hover:text-[#10B981] cursor-pointer"
          >
            Logout
          </h3>
        </>
      )}
    </div>
  );
};

export default Menu;
