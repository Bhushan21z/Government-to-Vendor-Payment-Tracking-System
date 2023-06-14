import React, { useEffect, useState } from 'react';
import './RegistrationForm.css';
// import { faTrash } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function GovDetailsPopup({ i, onClose }) {
    return (
      <div className="popup">
        <div className="popup-content">
          <h2>Government Details</h2>
          <p>ID: {i.metamask}</p>
          <p>Name: {i.fname}</p>
          <p>Email: {i.email}</p>
          <p>UPI pin: {i.upipin}</p>
          <p>Password: {i.password}</p>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    );
  }

const GovTable = () => {
    const [data, setData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() =>{
        getAllGov();
    }, []);

    const getAllGov = () => {
        fetch("https://kind-pink-hermit-crab-toga.cyclic.app/get-gov/getAllGov", {
            method: "GET",
        }).then((res) => res.json())
        .then((data) => {
            console.log(data, "governmentData");
            setData(data.data);
        });
    }

    // const deleteGov = (id, fname) => {
    //     if(window.confirm(`Are you sure you want to delete ${fname}`)){
    //         fetch(`http://localhost:8000/del-gov/deleteGov/${id}`, {
    //             method: "POST",
    //             crossDomain: true,
    //             headers: {
    //                 "Content-Type": "application/json",
    //                 Accept: "application/json",
    //                 "Access-Control-Allow-Origin": "*",
    //             },
    //             body: JSON.stringify({
    //                 govid: id,
    //             }),
    //         }).then((res) => res.json())
    //         .then((data) => {
    //             alert(data.data);
    //         });
    //     }
    //     else{
    //     }
    // }

    const deleteGov = (id, fname) => {
        if(window.confirm(`Are you sure you want to delete ${fname}`)){
            fetch(`https://kind-pink-hermit-crab-toga.cyclic.app/del-gov/deleteGov/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    govid: id,
                }),
            }).then((res) => res.json())
            .then((data) => {
                console.log(data);
                alert(data.data);
                getAllGov();
            }).catch((error) => {
                console.error(error);
                alert("Error deleting record");
            });
        }
    }

    const handleSearchChange = (event) => {
        const searchQuery = event.target.value;
        setSearchQuery(searchQuery);
    }

    const filteredData = data.filter((i) => {
        const query = searchQuery.toLowerCase();
        return (
            i.metamask.toLowerCase().includes(query) ||
            i.fname.toLowerCase().includes(query) ||
            i.email.toLowerCase().includes(query)
        );
    });

    const [selectedGov, setSelectedGov] = useState(null);
    
    const handleRowClick = (i) => {
        setSelectedGov(i);
    }
    

  return (
    <div className="main_table">
        <div className="table_header">
            <h2>Government Database<p><i>click record for more details</i></p></h2>
            <input
                className="searchinput"
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleSearchChange}
            />
        </div>
        <table className="table">
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th style={{textAlign: "center"}}>Delete</th>
            </tr>
            {filteredData.map(i => {
                    return (
                        <tr key={i._id} onClick={() => handleRowClick(i)}>
                            <td>{i.metamask}</td>
                            <td>{i.fname}</td>
                            <td>{i.email}</td>
                            <td style={{textAlign: "center"}}>
                                <FontAwesomeIcon icon={faTrash} onClick={() => deleteGov(i._id, i.fname)}/>
                            </td>
                        </tr>
                    );
                })}
        </table>
        {selectedGov && (
            <GovDetailsPopup
                i = {selectedGov}
                onClose={() => setSelectedGov(null)}
            />
        )}
    </div>
  );
};

export default GovTable;