import React, { useState, useRef } from 'react';
import Ellipse1 from '../Assets/Ellipse1.png';
import Ellipse2 from '../Assets/Ellipse 2.png';
import Navbar from "../components/NavBar";
import { PiPencilLineLight } from "react-icons/pi";

const ProfileUser = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);

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
    fileInputRef.current.click(); // Trigger file input click
  };

  return (
    <div style={{ position: 'fixed'}}>
      <Navbar />
      <hr className="horizontal-line" />
      <div className="background-image" style={{ position: 'absolute', top: 0, left: 0 }}>
        <img src={Ellipse1} alt="background" />
      </div>
      <div className="Ellipse2" style={{ position: 'absolute', bottom: 200, right: -200 }}>
        <img src={Ellipse2} alt="" />
      </div>
      <div className='profile'>profile</div>
      <div className="vertical-lineUser"></div>
      <h2 className='BasicInfo'>Basic Info</h2>
      <div className="buttons">
        <button>CANCEL</button>
        <button>SAVE</button>
      </div>
      <hr className="horizontal-lineUser" />
      <form style={{ display: 'flex', flexDirection: 'column', width: '300px', margin: '0 auto 0 800px' }}>
        <div className="form-group" style={{ marginBottom: '5px' }}>
          <PiPencilLineLight className='penfirstname' />
          <label htmlFor="firstName" style={{ display: 'flex', alignItems: 'center' }}>First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            style={{ padding: '8px', border: '1px solid #ddd', borderRadius: '4px', width: '400px' }}
          />
        </div>
        <div className="form-group" style={{ marginBottom: '5px' }}>
          <PiPencilLineLight className='penlastName' />
          <label htmlFor="lastName" style={{ display: 'flex', alignItems: 'center' }}>Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            style={{ padding: '8px', border: '1px solid #ddd', borderRadius: '4px', width: '400px' }}
          />
        </div>
        <div className="form-group" style={{ marginBottom: '5px' }}>
          <PiPencilLineLight className='penpassword' />
          <label htmlFor="password" style={{ display: 'flex', alignItems: 'center' }}>Password</label>
          <input
            type="password"
            id="password"
            name="password"
            style={{ padding: '8px', border: '1px solid #ddd', borderRadius: '4px', width: '400px'}}
          />
        </div>
        <div className="form-group" style={{ marginBottom: '5px' }}>
          <PiPencilLineLight className='penemail' />
          <label htmlFor="email" style={{ display: 'flex', alignItems: 'center' }}>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            style={{ padding: '8px', border: '1px solid #ddd', borderRadius: '4px', width: '400px' }}
          />
        </div>
      </form>
      <div className="avatar-upload">
        <label htmlFor="fileInput" style={{  display: 'block', marginBottom: '10px',position: 'relative' , top: 70, right: -170, cursor: 'pointer' }}>
          <button style={{ backgroundColor: 'blue', color: 'white', padding: '8px', borderRadius: '4px', border: 'none' }} onClick={handleButtonClick}>Upload new avatar</button>
          <input ref={fileInputRef} type="file" id="fileInput" style={{ display: 'none' }} onChange={handleImageChange} />
        </label>
        {selectedImage && (
          <div className="avatar-preview">
            <img src={selectedImage} alt="Selected Avatar" />
           
            {/* Add a button to confirm or discard the uploaded image here */}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileUser;
