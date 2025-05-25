import { Link } from "react-router-dom";

const Sidebar = ({ role }) => {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white p-4 space-y-6">
      <h2 className="text-xl font-bold">Dashboard</h2>
      <nav className="space-y-2">
        {role === "admin" && (
          <Link to="/admin" className="block hover:bg-gray-700 p-2 rounded">Admin Home</Link>
        )}
        {role === "employee" && (
          <Link to="/employee" className="block hover:bg-gray-700 p-2 rounded">Employee Home</Link>
        )}
        <Link to="/reports" className="block hover:bg-gray-700 p-2 rounded">Reports</Link>
      </nav>
    </div>
  );
};

export default Sidebar;
