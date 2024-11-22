import React from "react";
import Sidebar from "@/app/(components)/Sidebar";
import Navbar from "@/app/(components)/Navbar";

const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={`flex bg-gray-50 text-gray-900 w-full min-h-screen`}>
      <Sidebar />
      <main className={`flex flex-col w-full h-full py-7 px-9 bg-gray-50`}>
        <Navbar />
        {children}
      </main>
    </div>
  );
};
export default DashboardWrapper;
