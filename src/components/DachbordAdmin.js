import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/NavBar';
import Ellipse1 from '../Assets/Ellipse1.png';
import Ellipse2 from '../Assets/Ellipse4.png';
import { FaPenSquare } from 'react-icons/fa';
import { RiDeleteBin6Line } from 'react-icons/ri';

import { useParams } from 'react-router-dom';
const DashboardAdmin = () => {
  const [users, setUsers] = useState([]);

  const params = useParams();
  
  useEffect(() => {
    axios.get('http://localhost:3001/v1/api/user/')
      .then(response => setUsers(response.data))
      .catch(error => console.log(error));
  }, []);

  const handleSumbit = (id) => {
    const conf = window.confirm("Do you want to delete?");
    if (conf) {
      axios.delete(`http://localhost:3001/v1/api/user/delete/`+id)
        .then(res => {
          alert('Record has been deleted');
        })
        .catch(err => console.log(err));
    }
  };

  return (
    <div>
      <Navbar />
      <hr className="horizontal-line" />
      <div className="background-image" style={{ position: 'absolute', top: 0, left: 0 }}>
        <img src={Ellipse1} alt="background" />
      </div>
      <div className="Ellipse2" style={{ position: 'absolute', bottom: 700, right: -10 }}>
        <img src={Ellipse2} alt="" />
      </div>
      <table style={{ width: 1250, marginLeft: 'auto', marginRight: 'auto', position: 'relative', top: 20 }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
       {users.map(user =>   {
           return <tr key={user.id}>
             <td>{user.userName}</td>
              <td>{user.email}</td>
              <td style={{ position: 'relative', left: 105 }}>
                <FaPenSquare style={{ color: 'red', fontWeight: 'bold', marginRight: 15 }} />
                <button onClick={() => handleSumbit(user._id)} style={{ border: 'none', background: 'transparent' }}>
                  <RiDeleteBin6Line />
                </button>
              </td>
            </tr>
            })
        }
        </tbody>
      </table>
    </div>
  );
};

export default DashboardAdmin;