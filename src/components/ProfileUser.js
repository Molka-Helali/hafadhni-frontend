import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import Ellipse1 from '../Assets/Ellipse1.png';
import Ellipse2 from '../Assets/Ellipse2.png'; // Corrected filename
import Navbar from '../components/NavBar';
import { PiPencilLineLight } from 'react-icons/pi';

const ProfileUser = () => {
 
  const [id, setId] = useState();

  const [ users, setUsers ] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);


  const params = useParams();
  console.log(params );
  useEffect(() => {
      const fetchData = async () => {
        const response = await fetch(`http://localhost:3001/v1/api/user/get/${params.id}`, { mode: 'cors' })
        
             const data = await response.json();
            console.log({data})
            setUsers( data) 
            setId(data._id)
            setUserName(data.userName)
            setEmail(data.email)
            console.log(data)      
      }
      // Call the function
      fetchData();
   }, []);


  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setSelectedImage(URL.createObjectURL(file));
    } else {
      setSelectedImage(null);
      // You can optionally add an error message here if the file is not an image
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleUserProfile = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.patch(
        `http://localhost:3001/v1/api/user/update/${params.id}`,
        {userName,email },
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        }
      );
      if (response.data.success) {
        toast.success('Profile Updated Successfully');
        window.location = '/';
      } else {
        toast.error(response.data.msg);
      }
    } catch (error) {
      console.error(error);
      toast.error('Something went wrong');
    }
  };

  return (
    <div style={{ position: 'fixed' }}>
      <Navbar />
      <hr className="horizontal-line" />
      <div className="background-image" style={{ position: 'absolute', top: 0, left: 0 }}>
        <img src={Ellipse1} alt="background" />
      </div>
      <div className="Ellipse2" style={{ position: 'absolute', bottom: 200, right: -200 }}>
        <img src={Ellipse2} alt="" />
      </div>
      <div className="profile">profile</div>
      <div className="vertical-lineUser"></div>
      <h2 className="BasicInfo">Basic Info</h2>
      <div className="buttons">
        <button onClick={handleUserProfile}>SAVE</button>
      </div>
      <hr className="horizontal-lineUser" />
      <form style={{ display: 'flex', flexDirection: 'column', width: '300px', margin: '0 auto 0 800px' }}>
        <div className="form-group" style={{ marginBottom: '5px' }}
           disabled='false'
           defaultValue={users._id}
           >
        
     
          <PiPencilLineLight className="penemail" />
          <label htmlFor="lastName" style={{ display: 'flex', alignItems: 'center' }}>User Name</label>
          <input
            type="text"
            id="userName"
            name="userName"
            onChange={(e) => setUserName(e.target.value)}
            defaultValue={users.userName}
            style={{ padding: '8px', border: '1px solid #ddd', borderRadius: '4px', width: '400px' }}
          />
        </div>
        <div className="form-group" style={{ marginBottom: '5px' }}>
          <PiPencilLineLight className="penemail" />
          <label htmlFor="password" style={{ display: 'flex', alignItems: 'center' }}>Password</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            defaultValue={users.password}
            style={{ padding: '8px', border: '1px solid #ddd', borderRadius: '4px', width: '400px' }}
          />
        </div>
        <div className="form-group" style={{ marginBottom: '5px' }}>
          <PiPencilLineLight className="penemail" />
          <label htmlFor="email" style={{ display: 'flex', alignItems: 'center' }}>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            defaultValue={users.email}
            style={{ padding: '8px', border: '1px solid #ddd', borderRadius: '4px', width: '400px' }}
          />
        </div>
      </form>
      <div className="avatar-upload">
        <label htmlFor="fileInput" style={{ display: 'block', marginBottom: '10px', position: 'relative', top: 70, right: -170, cursor: 'pointer' }}>
          <button style={{ backgroundColor: 'blue', color: 'white', padding: '8px', borderRadius: '4px', border: 'none' }} onClick={handleButtonClick}>Upload new avatar</button>
          <input ref={fileInputRef} type="file" id="fileInput" style={{ display: 'none' }} onChange={handleImageChange} />
        </label>
        {selectedImage && (
          <div className="avatar-preview">
            <img src={selectedImage} alt="Selected Avatar" />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileUser;