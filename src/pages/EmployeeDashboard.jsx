import { useEffect, useState } from "react";
import axios from "axios";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
import EmployeeLayout from "../layouts/Employeelayout";

const COLORS = ["#8884d8", "#82ca9d", "#ffc658"];

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    taskStats: [],
    projects: [],
    employeeCount: 0,
  });

  useEffect(() => {
    axios.get("http://localhost:5000/admin/dashboard")
      .then(res => setStats(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <EmployeeLayout>
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Employee Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white rounded-xl p-4 shadow">
          <h2 className="font-medium text-gray-700">Leaves</h2>
          <p className="text-3xl font-bold">{stats.employeeCount}</p>
        </div>
        <div className="bg-white rounded-xl p-4 shadow col-span-2">
          <h2 className="font-medium text-gray-700 mb-2">Announcements</h2>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={stats.taskStats}
                dataKey="count"
                nameKey="status"
                cx="50%"
                cy="50%"
                outerRadius={70}
                label
              >
                {stats.taskStats.map((_, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white rounded-xl p-4 shadow">
        <h2 className="text-lg font-semibold mb-3">Tasks</h2>
        <table className="w-full text-left table-auto">
          <thead className="border-b">
            <tr>
              <th className="p-2">Name</th>
              <th className="p-2">Status</th>
              <th className="p-2">Deadline</th>
            </tr>
          </thead>
          <tbody>
            {stats.projects.map((project, idx) => (
              <tr key={idx} className="border-b">
                <td className="p-2">{project.name}</td>
                <td className="p-2">{project.status}</td>
                <td className="p-2">{project.deadline}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </EmployeeLayout>          
  );
};

export default AdminDashboard;
