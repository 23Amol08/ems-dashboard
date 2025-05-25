import { useEffect, useState } from "react";
import axios from "axios";
import { CSVLink } from "react-csv";
import jsPDF from "jspdf";
import "jspdf-autotable";

const ReportsPage = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/reports/tasks")
      .then((res) => setTasks(res.data))
      .catch((err) => console.error(err));
  }, []);

  const exportPDF = () => {
    const doc = new jsPDF();
    doc.text("Task Report", 14, 16);
    doc.autoTable({
      startY: 20,
      head: [["Title", "Status", "Assigned To", "Due Date"]],
      body: tasks.map((task) => [
        task.title,
        task.status,
        task.assignedTo,
        task.dueDate,
      ]),
    });
    doc.save("tasks-report.pdf");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Reports</h1>

      <div className="flex gap-4 mb-4">
        <button onClick={exportPDF} className="bg-red-600 text-white px-4 py-2 rounded shadow">
          Export PDF
        </button>
        <CSVLink
          data={tasks}
          filename="tasks-report.csv"
          className="bg-green-600 text-white px-4 py-2 rounded shadow"
        >
          Export CSV
        </CSVLink>
      </div>

      <div className="bg-white p-4 rounded-xl shadow">
        <table className="w-full text-left table-auto">
          <thead className="border-b">
            <tr>
              <th className="p-2">Title</th>
              <th className="p-2">Status</th>
              <th className="p-2">Assigned To</th>
              <th className="p-2">Due Date</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, idx) => (
              <tr key={idx} className="border-b">
                <td className="p-2">{task.title}</td>
                <td className="p-2">{task.status}</td>
                <td className="p-2">{task.assignedTo}</td>
                <td className="p-2">{task.dueDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReportsPage;
