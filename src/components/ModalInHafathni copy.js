import React, { useState, useRef, useEffect } from "react";
import { AiFillFolderOpen } from "react-icons/ai";
import { MdOutlineFileUpload, MdOutlineClear } from "react-icons/md";
import { FaTrashAlt } from "react-icons/fa";
import axios from "axios";

export default function Modal({ openModal }) {
  const [modal, setModal] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [_id, setId] = useState(null);
  const [users, setUsers] = useState(null); // Define setUsers

  const fileInputRef = useRef(null);

  const toggleModal = () => {
    setModal(!modal);
  };

  const fetchUserPhotos = async (_id) => {
    try {
      const formData = new FormData();
      formData.append("_id", _id); // Assuming userId is passed as a prop
      console.log("success");
      selectedFiles.forEach((file) => {
        formData.append("files", file);
      });

      await axios.post("http://localhost:3001/v1/api/essai/create",  {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      // Optionally, you can fetch updated user data after upload
      // For example: fetchUserPhotos(userId);
      
      // Close modal after successful upload
      toggleModal();
    } catch (error) {
      console.error("Error uploading files:", error);
    }
  };
  

  const handleFileChange = (event) => {
    const files = event.target.files;
    if (files.length + selectedFiles.length > 3) {
      alert("You can only upload up to 3 files.");
      return;
    }
    setSelectedFiles([...selectedFiles, ...files]);
  };

  const handleOpenModal = () => {
    if (typeof openModal === "function") {
      openModal();
    }
    toggleModal();
  };

  const removeFile = (index) => {
    const updatedFiles = [...selectedFiles];
    updatedFiles.splice(index, 1);
    setSelectedFiles(updatedFiles);
  };

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  return (
    <>
      <div onClick={handleOpenModal}>
        <button className="FillSum" style={{ position: 'relative', top: -55, left: -830 }}>
          <AiFillFolderOpen className="FillFolderSum" />
        </button>
      </div>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <div className="centered-container"
              style={{
                border: "2px dotted #A5B5F1",
                padding: "40px",
                position: "relative",
                top: "55px",
                height: "55px"
              }}>
              <button className="blue-button" onClick={handleUploadClick} disabled={selectedFiles.length >= 3}>
                <MdOutlineFileUpload className="icon" />
              </button>
              <input
                type="file"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleFileChange}
                multiple
              />
            </div>
            <h2 style={{ color: "blue", position: "relative", right: -85, top: -25 }}>Upload File </h2>
            {selectedFiles.map((file, index) => (
              <div key={index} className="file-name" style={{ width: "300px", height: "30px" }} >
                <p>{file.name}</p>
                <div onClick={() => removeFile(index)}>
                  <FaTrashAlt className="trash" />
                </div>
              </div>
            ))}
            <button className="close-modal" style={{ border: "none", color: "black", width: "25px", height: "40px" }} onClick={toggleModal}>
              <MdOutlineClear />
            </button>
            <button className="upload-button" style={{ width: 319, position: "relative", top: "2px", left: "2px" }} disabled={selectedFiles.length === 0}>Upload</button>
          </div>
        </div>
      )}
      <style jsx>{`
        .file-name {
          color: black;
          background-color: #dbe0f3;
          border: 1px solid #dbe0f3;
          padding: 10px;
          margin-top: 10px;
          border-radius: 20px;
        }
        .file-name p {
          margin: 0;
        }
        .image-box {
          background-color: rgba(255, 255, 255, 0.8);
          border: 1px solid grey;
          padding: 10px;
          margin-top: 10px;
        }
        .selected-image {
          margin: 0;
        }
        .upload-button {
          background-color: blue;
          color: #fff;
          border: none;
          padding: 8px 16px;
          border-radius: 4px;
          margin-top: 20px;
          cursor: pointer;
        }
        .upload-button:hover {
          background-color: #0056b3;
        }
      `}</style>
    </>
  );
}
