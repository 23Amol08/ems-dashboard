import Sidebar from "../components/Sidebar";

const EmployeeLayout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar role="employee" />
      <main className="flex-1 bg-gray-100 min-h-screen p-6">
        {children}
      </main>
    </div>
  );
};

export default EmployeeLayout;
