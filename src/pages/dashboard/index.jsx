import React from "react";
import styled from "styled-components";
import Dashboard from "../../components/Dashboard";
import Sidebar from "../../components/sidebar";
import DashboardNav from "components/DashboardNav";
export default function App() {
  return (
    <>
      <DashboardNav />

      <Div>
        <Sidebar />
        <Dashboard />
      </Div>
    </>
  );
}

const Div = styled.div`
  position: relative;
`;