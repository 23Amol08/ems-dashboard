import { Routes, Route } from "react-router-dom";
import AdminDashboard from "../pages/AdminDashboard";
import EmployeeDashboard from "../pages/EmployeeDashboard";
import Home from "../pages/Home";
import ReportsPage from "../pages/ReportsPage";


const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/admin" element={<AdminDashboard />} />
    <Route path="/employee" element={<EmployeeDashboard />} />
    <Route path="/reports" element={<ReportsPage />} />

  </Routes>
);

export default AppRoutes;
