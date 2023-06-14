// import React, { useState, useEffect } from 'react';
// import './style.css';
// import { useContext } from "react";
// import { TransactionContext } from "../../context/TransactionContext";


// function ProjectDetailsPopup({ index, onClose }) {
//   const installmentAmount = parseFloat((index.instamount).toFixed(3));
//   const projectrows = Array.from({ length: parseInt(index.instno) }, (_, i) => {
//     const installment = 'Installment ' + (i + 1);
//     // const timestamp = new Date().toISOString();
//     // const date = new Date(timestamp);
//     // const readableDate = date.toLocaleString();
//     const timestamp = index.instts[i % index.instts.length];
//     const central = index.central[i % index.central.length];
//     const state = index.state[i % index.state.length];
//     const department = index.department[i % index.department.length];

//     return (
//       <tr key={i}>
//         <td>{installment}</td>
//         <td>{timestamp}</td>
//         <td>{central}</td>
//         <td>{state}</td>
//         <td>{department}</td>
//       </tr>
//     );
//   });

//   const vendorrows = Array.from({ length: parseInt(index.instno) }, (_, i) => {
//     const installment = 'Installment ' + (i + 1);
//     const timestamp = index.vendorts[i % index.vendorts.length];
//     const vendorstatus = index.vendoramt[i % index.vendoramt.length];

//     return (
//       <tr key={i}>
//         <td>{installment}</td>
//         <td>{timestamp}</td>
//         <td>{vendorstatus}</td>
//       </tr>
//     );
//   });

//   return (
//     <div className="popup">
//       <div className="popup-content">
//         <h2>{index.name} Details</h2>
//         <p>Central Government: {index.central}</p>
//         <p>Total Amount: &#8377;{index.amount}</p>
//         <p>Total No. of Installments: {index.installment}</p>
//         <p>Current Installment: &#8377;{index.currInst}</p>
//         <p>Installment Amount: &#8377;{installmentAmount}</p>
//         <p>Total Given Amount: &#8377;{index.given}</p>
        

//         <table className='scrollable-table'>
//         <thead>
//           <tr>
//             <th>Installment No.</th>
//             <th>Timestamp</th>
//             <th>Amount</th>
//             <th>From</th>
//             <th>To</th>
//           </tr>
//         </thead>
//         <tbody>
//           {projectrows}
//         </tbody>
//         </table>
        
//         <h2>Vendor Details</h2>
//         <p>Vendors: {index.vendors.join(', ')}</p>
//         <table className='scrollable-table'>
//         <thead>
//           <tr>
//             <th>Installment</th>
//             <th>Timestamp</th>
//             <th>Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {vendorrows}
//         </tbody>
//         </table>

//         <button onClick={onClose}>Close</button>
//       </div>
//     </div>
//   );
// }


// function ProjectTable({ dummyprojects, search, filterStatus }) {
//   const filteredProjects = dummyprojects.filter((project) =>
//     Object.values(project)
//       .join('')
//       .toLowerCase()
//       .includes(search.toLowerCase())
//   ).filter((project) =>
//     filterStatus === "All" || project.status === filterStatus
//   );

//   const [selectedProject, setSelectedProject] = useState(null);
    
//   const handleRowClick = (index) => {
//       setSelectedProject(index);
//   }

//   return (
//     <>
//       <table>
//         <thead>
//           <tr>
//             <th>State</th>
//             <th>Department</th>
//             <th>Project Name</th>
//             <th>Amount</th>
//             <th>Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredProjects.map((project, index) => (
//             <tr key={index} onClick={() => handleRowClick(project)}>
//               <td>{project.state}</td>
//               <td>{project.department}</td>
//               <td>{project.name}</td>
//               <td>&#8377;{project.amount}</td>
//               <td className={`status-${project.status.toLowerCase()}`}>{project.status}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       {selectedProject && (
//         <ProjectDetailsPopup
//             index = {selectedProject}
//             onClose={() => setSelectedProject(null)}
//         />
//       )}
//     </>
//   );
// }

// function PaymentTracker() {
//   const { projects2, getAllProjects2 } = useContext(TransactionContext);
//   const [dummyprojects, setDummyProjects] = useState([]);
//   const [search, setSearch] = useState('');
//   const [filterStatus, setFilterStatus] = useState("All");

//   // function fetchProjects() {
//   //   var data=[];
//   //   console.log("FUNCTION");
//   //   console.log(projects);
//   //   for(var a=0;a<projects.length;a++){
//   //   console.log(projects[a]);
//   //   const status=parseInt(projects[a].status);
//   //   var stat="";
//   //   var app="";
//   //   if(status==0){
//   //     stat="Initiated";
//   //     app="Not Approved";
//   //   }
//   //   if(status==1){
//   //     stat="In progress";
//   //     app="Approved";
//   //   }
//   //   if(status==2){
//   //     stat="Completed";
//   //     app="Approved";
//   //   }
//   //   var instno=[];
//   //   var instts=[];
//   //   var instamount=[];
//   //   var instfrom=[];
//   //   var instto=[];
//   //   for(var i=0; i<projects.inst.length ; i++){
//   //     instno.push(parseInt(projects[a].inst[i].installment_no));
//   //     instamount.push(parseInt(projects[a].inst[i].amount));
//   //     instfrom.push(projects[a].inst[i].from_name);
//   //     instto.push(projects[a].inst[i].to_name);
//   //     instts.push(projects[a].inst[i].time);
//   //   }

//   //   var contracts=[];
//   //   var vendors=[];
//   //   var vendorts=[];
//   //   var vendoramt=[];
//   //   for(var i=0;i<projects.vendor.length;i++){
//   //     contracts.push(projects[a].vendor[i].contract_name);
//   //     vendors.push(projects[a].vendor[i].vendor_name);
//   //     vendorts.push(projects[a].vendor[i].time);
//   //     vendoramt.push(projects[a].vendor[i].amount);
//   //   }

//   //   const dumm =
//   //     {
//   //       state: projects.state_name,
//   //       department: projects.dept_name,
//   //       name: projects.name,
//   //       amount: parseInt(projects,amount),
//   //       status: stat,
//   //       central: app,
//   //       installment: parseInt(projects.installments),
//   //       givenAmt: parseInt(projects.given),
//   //       currInst: parseInt(projects.curr_inst),
//   //       instno: instno,
//   //       instts: instts,
//   //       instamount: instamount,
//   //       instfrom: instfrom,
//   //       instto: instto,
//   //       contracts: contracts,
//   //       vendorts:vendorts,
//   //       vendoramt: vendoramt,
//   //       vendors: vendors
//   //     } 
  
//   //    console.log(dumm);
//   //    data.push(dumm); 

//   //   }
//   //   setDummyProjects(data);
//   //   console.log(data);
//   // }

//   useEffect(() => {
//     getAllProjects2();
//     //fetchProjects();
//   }, []);
//   console.log(projects2);

//   function handleSearch(event) {
//     setSearch(event.target.value);
//   }

//   function handleFilterStatus(event) {
//     setFilterStatus(event.target.value);
//   }
  
//   return (
//     <div className='main_section'>
//       <h1>Project List</h1>
//       <div className='filter_section'>
//         <input type="text" placeholder="Search dummyprojects" value={search} onChange={handleSearch} />
//         <select value={filterStatus} onChange={handleFilterStatus}>
//           <option value="All">All Statuses</option>
//           <option value="In Progress">In Progress</option>
//           <option value="Completed">Completed</option>
//           <option value="Pending">Not Approved</option>
//         </select>
//       </div>
//       <ProjectTable dummyprojects={projects2} search={search} filterStatus={filterStatus} />
//     </div>
//   );
// }

// export default PaymentTracker;



import React, { useState, useEffect } from 'react';
import './style.css';
import { useContext } from "react";
import { TransactionContext } from "../../context/TransactionContext";

function ProjectDetailsPopup({ index, onClose }) {
  function time_convert(timestamp) {
    const milliseconds = timestamp * 1000; // Convert seconds to milliseconds
    const date = new Date(milliseconds);
    return date.toUTCString(); // Return the date in UTC format
  }
  
  const installmentAmount = (index.amount)/(index.installment);
  //const installment= index.installment;
  const projectrows = Array.from({ length: parseInt(index.installment) }, (_, i) => {
    const installment = 'Installment ' + (i+1);
    // const timestamp = new Date().toISOString();
    // const date = new Date(timestamp);
    // const readableDate = date.toLocaleString();
    const timestamp = time_convert(index.instts[i % index.instts.length]);
    const instfrom = index.instfrom[i % index.instfrom.length];
    const instto = index.instto[i % index.instto.length];
    // const vinstfrom = index.vinstfrom[i % index.vinstfrom.length];
    // // const central = index.centralinstallment[i % index.centralinstallment.length];
    // const state = index.stateinstallment[i % index.stateinstallment.length];
    // const department = index.departmentinstallment[i % index.departmentinstallment.length];

    return (
      <tr key={i}>
        <td>{installment}</td>
        <td>{timestamp}</td>
        <td>{instfrom}</td>
        <td>{instto}</td>
      </tr>
    );
  });

  const vendorrows = Array.from({ length: parseInt(index.instno) }, (_, i) => {
    const installment = 'Installment ' + (i + 1);
    const timestamp = time_convert(index.vendorts[i % index.vendorts.length]);
    // const vinstfrom = index.instfrom[i % index.vinstfrom.length];
    const vendoramount = index.vendoramt[i % index.vendoramt.length];
    // const vendorinstallmentstatus = index.vendorinstallmentstatus[i % index.vendorinstallmentstatus.length];

    return (
      <tr key={i}>
        <td>{installment}</td>
        <td>{timestamp}</td>
        {/* <td>{vendorinstallmentstatus}</td> */}
        <td>{vendoramount}</td>
      </tr>
    );
  });

  return (
    <div className="popup">
      <div className="popup-content">
        <h2>{index.name} Details</h2>
        <p>Central Government: {index.central}</p>
        <p>State Government: {index.state}</p>
        <p>Department: {index.department}</p>
        <p>Total Amount: &#8377;{index.amount}</p>
        <p>Total No. of Installments: {index.installment}</p>
        <p>Installment Amount: &#8377;{installmentAmount}</p>
        

        <table className='scrollable-table'>
        <thead>
          <tr>
            <th>Installment</th>
            <th>Timestamp</th>
            <th>From</th>
            <th>To</th>
          </tr>
        </thead>
        <tbody>
          {projectrows}
        </tbody>
        </table>
        
        <h2>Vendor Details</h2>
        <p>Contract Name: {index.contracts}</p>
        <p>Vendors: {index.vendors.join(', ')}</p>
        <table className='scrollable-table'>
        <thead>
          <tr>
            <th>Installment</th>
            <th>Timestamp</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {vendorrows}
        </tbody>
        </table>

        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}


function ProjectTable({ projects, search, filterStatus }) {
  const filteredProjects = projects.filter((project) =>
    Object.values(project)
      .join('')
      .toLowerCase()
      .includes(search.toLowerCase())
  ).filter((project) =>
    filterStatus === "All" || project.status === filterStatus
  );

  const [selectedProject, setSelectedProject] = useState(null);
    
  const handleRowClick = (index) => {
      setSelectedProject(index);
  }

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>State</th>
            <th>Department</th>
            <th>Project Name</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredProjects.map((project, index) => (
            <tr key={index} onClick={() => handleRowClick(project)}>
              <td>{project.state}</td>
              <td>{project.department}</td>
              <td>{project.name}</td>
              <td>&#8377;{project.amount}</td>
              <td className={`status-${project.status.toLowerCase()}`}>{project.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedProject && (
        <ProjectDetailsPopup
            index = {selectedProject}
            onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}

function PaymentTracker() {
  const [projects, setProjects] = useState([]);
  const [search, setSearch] = useState('');
  const [filterStatus, setFilterStatus] = useState("All");
  const { projects2, getAllProjects2 } = useContext(TransactionContext);

  // function fetchProjects() {
  //   const data = [
  //     {
  //       state: 'Madhya Pradesh',
  //       department: 'Infrastructure',
  //       name: 'Road Development',
  //       amount: 800000,
  //       status: 'In Progress',
  //       central: 'Approved',
  //       installment: '250000',
  //       givenAmt: '250000',
  //       currInst: '2',
  //       instno: '3',
  //       instts: ['5/10/2023 09:30:00 AM', '6/15/2023 11:45:00 AM', '7/20/2023 02:00:00 PM'],
  //       instamount: '250000',
  //       instfrom: ['Central', 'Central', 'Central'],
  //       instto: ['State', 'State', 'State'],
  //       contracts: 'Road',
  //       vendorts: ['5/10/2023 09:30:00 AM', '6/15/2023 11:45:00 AM', '7/20/2023 02:00:00 PM'],
  //       vendoramt: ['250000', '300000', '250000'],
  //       vendors: ['ABC Construction', 'DEF Builders', 'XYZ Contractors'],
  //     }
  //   ];    
        

  //   setProjects(data);
  // }

  useEffect(() => {
    getAllProjects2();
  }, []);
  console.log(projects2);

  function handleSearch(event) {
    setSearch(event.target.value);
  }

  function handleFilterStatus(event) {
    setFilterStatus(event.target.value);
  }
  
  return (
    <div className='main_section'>
      <h1>Project List</h1>
      <div className='filter_section'>
        <input type="text" placeholder="Search projects" value={search} onChange={handleSearch} />
        <select value={filterStatus} onChange={handleFilterStatus}>
          <option value="All">All Statuses</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
          <option value="Pending">Not Approved</option>
        </select>
      </div>
      <ProjectTable projects={projects2} search={search} filterStatus={filterStatus} />
    </div>
  );
}

export default PaymentTracker;



