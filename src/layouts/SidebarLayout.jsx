import React from "react";
import Sidebar from "../components/Sidebar";

const SidebarLayout = ({ children }) => {
    return (
        <div className="flex w-screen h-screen">
            <Sidebar />
            <main className="flex-1 p-4">{children}</main>
        </div>
    );
}

export default SidebarLayout;