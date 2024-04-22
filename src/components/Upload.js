import React, { useState } from 'react';
import Navbar from "../components/NavBar";
import { IoCloudUploadOutline } from "react-icons/io5";
import Ellipse1 from '../Assets/Ellipse1.png';
import Ellipse2 from '../Assets/Ellipse 2.png';
import { useNavigate } from 'react-router-dom';
import { TiDelete } from "react-icons/ti";
import { BiCheck } from "react-icons/bi";


const Upload = () => {
  const handleUploadItClick = () => {
    navigate('/Hafathni');
  };
  const navigate = useNavigate();
  const handleCopyAndPastClick = () => {
    navigate('/Hafathni');
  };
   /**
   * The setFiles function is used to update the files*/
  const [files, setFiles] = useState([]);
  /*representing file information boxes */
  const [fileBoxes, setFileBoxes] = useState([]);

  const handleBrowseClick = (event) => {
  /*This stops something annoying from happening*/
    event.preventDefault();
/*  Creates a new hidden<input> HTML input element of type file.*/
    const inputElement = document.createElement('input');
    inputElement.type = 'file';
    inputElement.multiple = true;
    /**Allows selecting multiple files at once */
    inputElement.accept = '/*';

    inputElement.onchange = (e) => {
      const newFiles = Array.from(e.target.files);
      setFiles(newFiles);

      // Create file boxes for each selected file
      const newFileBoxes = newFiles.map((file) => (
        <div key={file.name} className="file-box">
          <p>{file.name}</p>
          <TiDelete className="remove-icon" onClick={() => handleFileRemoval(file)} />
        </div>
      ));
      setFileBoxes(newFileBoxes);
    };

    inputElement.click();
  };

  const handleFileRemoval = (fileToRemove) => {
    // 1. Filter files state to remove the selected file:
    setFiles((prevFiles) => prevFiles.filter((file) => file !== fileToRemove));

    // 2. Filter fileBoxes state to remove the matching box:
    setFileBoxes((prevFileBoxes) =>
      prevFileBoxes.filter((box) => box.key !== fileToRemove.name)
    );
  };

  return (
    <div>
      <Navbar />
      <div className="background-image" style={{ position: 'absolute', top: 0, left: 0 }}>
        <img src={Ellipse1} alt="background" />
      </div>
      <div className="Ellipse2" style={{ position: 'absolute', bottom: 200, right: -200 }}>
        <img src={Ellipse2} alt="" />
      </div>
      <hr className="horizontal-line"></hr>

      <main className="main">
        <section className="upload">
          <h1>Upload</h1>
          <div className="upload-methods">
            <div className="uploadFromBrowser">
              <IoCloudUploadOutline className="upload-icon" />
              <span>Drag & drop files </span>
              <a href="#" onClick={handleBrowseClick}>Browse</a>
              <p>Supported formats: JPEG, PNG, GIF, PDF, Word, PPT</p>
            </div>
          </div>
          <span>If you want to </span>
          <a href="#" onClick={handleCopyAndPastClick}>copy and paste text,</a><span>you can stop uploading </span>

          <div className="upload-progress">
            {files.length > 0 ? (
              <p>Uploading: {files.length} files</p>
            ) : (
              <p>No files selected</p>
            )}

            <div className="selected-files">
              {fileBoxes} {/* Render the file boxes */}
              </div>
              <div>
            <button className="UploadItButton" onClick={handleUploadItClick}><span >Upload Document</span>
            <BiCheck className="UploadChek-icon" />
            </button>
            </div>
             </div>
        </section>
      </main>
 
    </div>
  );
};

export default Upload;
