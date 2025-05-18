import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.svg";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <div className="h-40 w-40">
            <img
              src={Logo}
              alt="StudyBuddy Logo"
              className="h-full w-full object-contain"
            />
          </div>
        </div>

        {/* Nav Links */}
        <ul className="flex space-x-6 text-lg">
          <li><Link to="/dashboard" className="hover:underline">Dashboard</Link></li>
          <li><Link to="/resources" className="hover:underline">Resources</Link></li>
          <li><Link to="/login" className="hover:underline">Login</Link></li>
          <li><Link to="/signup" className="hover:underline">Sign Up</Link></li>
        </ul>
      </div>
    </nav>
  );
}
