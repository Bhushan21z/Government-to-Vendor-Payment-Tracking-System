import React, { useState, useEffect } from 'react';
import './style.css';

function ProjectDetailsPopup({ index, onClose }) {
  const installmentAmount = parseFloat((index.amount / index.installment).toFixed(3));
  const rows = Array.from({ length: parseInt(index.installment) }, (_, i) => {
    const installment = 'Installment ' + (i + 1);
    const timestamp = new Date().toISOString(); 
    const central = index.centralinstallment[i % index.centralinstallment.length];
    const state = index.stateinstallment[i % index.stateinstallment.length];
    const department = index.departmentinstallment[i % index.departmentinstallment.length];

    return (
      <tr key={i}>
        <td>{installment}</td>
        <td>{timestamp}</td>
        <td>{central}</td>
        <td>{state}</td>
        <td>{department}</td>
      </tr>
    );
  });

  return (
    <div className="popup">
      <div className="popup-content">
        <h2>{index.name} Details</h2>
        <p>Central Government: {index.central}</p>
        <p>Total Amount: &#8377;{index.amount}</p>
        <p>Total No. of Installments: {index.installment}</p>
        <p>Installment Amount: &#8377;{installmentAmount}</p>
        <p>Vendors: {index.vendors.join(', ')}</p>

        <table>
        <thead>
          <tr>
            <th>Installment</th>
            <th>Timestamp</th>
            <th>Central</th>
            <th>State</th>
            <th>Department</th>
          </tr>
        </thead>
        <tbody>
          {rows}
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

  function fetchProjects() {
    const data = [
      { state: 'Maharashtra', department: 'Road', name: 'Project 1', amount: 1000, status: 'In Progress', central: 'Approved', installment: '3', vendors: ['ABC', 'DEF', 'XYZ'], centralinstallment: ['Completed', 'Pending', 'completed'], stateinstallment: ['Completed', 'Pending', 'completed'], departmentinstallment:['Completed', 'Pending', 'completed']  },
      { state: 'Kerala', department: 'Education', name: 'Project 2', amount: 2000, status: 'Completed', central: 'Approved', installment: '3', vendors: ['ABC', 'DEF', 'XYZ'], centralinstallment: ['Completed', 'Pending', 'completed'], stateinstallment: ['Completed', 'Pending', 'completed'], departmentinstallment:['Completed', 'Pending', 'completed']  },
      { state: 'Rajasthan', department: 'Water', name: 'Project 3', amount: 1500, status: 'Pending', central: 'Approved', installment: '3', vendors: ['ABC', 'DEF', 'XYZ'], centralinstallment: ['Completed', 'Pending', 'completed'], stateinstallment: ['Completed', 'Pending', 'completed'], departmentinstallment:['Completed', 'Pending', 'completed']  },
      { state: 'Maharashtra', department: 'Electricity', name: 'Project 4', amount: 500, status: 'In Progress', central: 'Approved', installment: '3', vendors: ['ABC, DEF', 'XYZ'], centralinstallment: ['Completed', 'Pending', 'completed'], stateinstallment: ['Completed', 'Pending', 'completed'], departmentinstallment:['Completed', 'Pending', 'completed']  },
      { state: 'Kerala', department: 'Education', name: 'Project 2', amount: 2000, status: 'Completed', central: 'Approved', installment: '3', vendors: ['ABC', 'DEF', 'XYZ'], centralinstallment: ['Completed', 'Pending', 'completed'], stateinstallment: ['Completed', 'Pending', 'completed'], departmentinstallment:['Completed', 'Pending', 'completed']  },
      { state: 'Rajasthan', department: 'Water', name: 'Project 3', amount: 1500, status: 'Pending', central: 'Approved', installment: '3', vendors: ['ABC', 'DEF', 'XYZ'], centralinstallment: ['Completed', 'Pending', 'completed'], stateinstallment: ['Completed', 'Pending', 'completed'], departmentinstallment:['Completed', 'Pending', 'completed']  },
      { state: 'Maharashtra', department: 'Electricity', name: 'Project 4', amount: 500, status: 'In Progress', central: 'Approved', installment: '3', vendors: ['ABC, DEF', 'XYZ'], centralinstallment: ['Completed', 'Pending', 'completed'], stateinstallment: ['Completed', 'Pending', 'completed'], departmentinstallment:['Completed', 'Pending', 'completed']  },
      // { state: 'Kerala', department: 'Education', name: 'Project 2', amount: 2000, status: 'Completed', central: 'Approved', installment: '3', vendors: ['ABC', 'DEF', 'XYZ'], centralinstallment: ['Completed', 'Pending', 'completed'], stateinstallment: ['Completed', 'Pending', 'completed'], departmentinstallment:['Completed', 'Pending', 'completed']  },
      // { state: 'Rajasthan', department: 'Water', name: 'Project 3', amount: 1500, status: 'Pending', central: 'Approved', installment: '3', vendors: ['ABC', 'DEF', 'XYZ'], centralinstallment: ['Completed', 'Pending', 'completed'], stateinstallment: ['Completed', 'Pending', 'completed'], departmentinstallment:['Completed', 'Pending', 'completed']  },
      // { state: 'Maharashtra', department: 'Electricity', name: 'Project 4', amount: 500, status: 'In Progress', central: 'Approved', installment: '3', vendors: ['ABC, DEF', 'XYZ'], centralinstallment: ['Completed', 'Pending', 'completed'], stateinstallment: ['Completed', 'Pending', 'completed'], departmentinstallment:['Completed', 'Pending', 'completed']  },
      // { state: 'Kerala', department: 'Education', name: 'Project 2', amount: 2000, status: 'Completed', central: 'Approved', installment: '3', vendors: ['ABC', 'DEF', 'XYZ'], centralinstallment: ['Completed', 'Pending', 'completed'], stateinstallment: ['Completed', 'Pending', 'completed'], departmentinstallment:['Completed', 'Pending', 'completed']  },
      // { state: 'Rajasthan', department: 'Water', name: 'Project 3', amount: 1500, status: 'Pending', central: 'Approved', installment: '3', vendors: ['ABC', 'DEF', 'XYZ'], centralinstallment: ['Completed', 'Pending', 'completed'], stateinstallment: ['Completed', 'Pending', 'completed'], departmentinstallment:['Completed', 'Pending', 'completed']  },
      // { state: 'Maharashtra', department: 'Electricity', name: 'Project 4', amount: 500, status: 'In Progress', central: 'Approved', installment: '3', vendors: ['ABC, DEF', 'XYZ'], centralinstallment: ['Completed', 'Pending', 'completed'], stateinstallment: ['Completed', 'Pending', 'completed'], departmentinstallment:['Completed', 'Pending', 'completed']  },
      // { state: 'Kerala', department: 'Education', name: 'Project 2', amount: 2000, status: 'Completed', central: 'Approved', installment: '3', vendors: ['ABC', 'DEF', 'XYZ'], centralinstallment: ['Completed', 'Pending', 'completed'], stateinstallment: ['Completed', 'Pending', 'completed'], departmentinstallment:['Completed', 'Pending', 'completed']  },
      // { state: 'Rajasthan', department: 'Water', name: 'Project 3', amount: 1500, status: 'Pending', central: 'Approved', installment: '3', vendors: ['ABC', 'DEF', 'XYZ'], centralinstallment: ['Completed', 'Pending', 'completed'], stateinstallment: ['Completed', 'Pending', 'completed'], departmentinstallment:['Completed', 'Pending', 'completed']  },
      // { state: 'Maharashtra', department: 'Electricity', name: 'Project 4', amount: 500, status: 'In Progress', central: 'Approved', installment: '3', vendors: ['ABC, DEF', 'XYZ'], centralinstallment: ['Completed', 'Pending', 'completed'], stateinstallment: ['Completed', 'Pending', 'completed'], departmentinstallment:['Completed', 'Pending', 'completed']  },
    ];
    
    setProjects(data);
  }

  useEffect(() => {
    fetchProjects();
  }, []);

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
          <option value="Pending">Pending</option>
        </select>
      </div>
      <ProjectTable projects={projects} search={search} filterStatus={filterStatus} />
    </div>
  );
}

export default PaymentTracker;

