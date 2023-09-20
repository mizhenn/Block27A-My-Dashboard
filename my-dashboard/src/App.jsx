
import React from 'react';
// import Dashboard from './Component/Dashboard';
// import Header from './Component/Header';
import Sidebar from './Component/Sidebar';
import TransactionLog from './Component/TransactionLog';
import Chart from "./Component/Chart";
function App() {



  return (
    <>
    <Dashboard/>
    <br/>
    <br/>
     {/* <Heading/> */}
     <Sidebar/>
     <Chart/>
     <br/>
     <br/>
     <TransactionLog/>
    </>
  )
}

export default App
