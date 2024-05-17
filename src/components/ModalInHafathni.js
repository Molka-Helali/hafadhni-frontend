import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { AiFillFolderOpen } from "react-icons/ai";
import { MdOutlineFileUpload, MdOutlineClear } from "react-icons/md";
import { FaTrashAlt } from "react-icons/fa";

export default function Modal({ openModal }) {
  const [modal, setModal] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [uploadStatus, setUploadStatus] = useState(null);
  const fileInputRef = useRef(null);
  const [userId, setUserId] = useState("");

  useEffect(() => {
    const id = localStorage.getItem('userId');
    setUserId(id);
  }, []);

  const toggleModal = () => {
    setModal(!modal);
  };

  const fetchUserPhotos = async () => {
    try {
      const formData = new FormData();
      selectedFiles.forEach((file) => {
        formData.append("images", file);
        formData.append("userId", userId);
      });

      const response = await axios.post("http://localhost:3001/v1/api/essai/create", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response.data);

      setUploadStatus("success");
      setSelectedFiles([]);
    } catch (error) {
      console.error("Upload Error:", error);
      setUploadStatus("error");
    }
  };

  const handleFileChange = (event) => {
    const files = event.target.files;
    if (files.length + selectedFiles.length > 3) {
      alert("You can only upload up to 3 files.");
    } else {
      setSelectedFiles([...selectedFiles, ...files]);
    }
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
    if (selectedFiles.length > 0) {
      fetchUserPhotos();
    } else {
      alert("Please select at least one file to upload.");
    }
  };

  return (
    <>
      {!modal && (
        <div onClick={handleOpenModal}>
          <button className="FillSum" style={{ position: 'relative', top: -55, left: -830 }}>
            <AiFillFolderOpen className="FillFolderSum" />
          </button>
        </div>
      )}

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
              <button className="blue-button" onClick={() => fileInputRef.current.click()} disabled={selectedFiles.length >= 3}>
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
            <button
              className="upload-button"
              style={{ width: 319, position: "relative", top: "2px", left: "2px" }}
              disabled={selectedFiles.length === 0}
              onClick={() => {
                handleUploadClick();
                setUploadStatus(null);
              }}
            >
              Upload
            </button>
            {uploadStatus === "success" && <p style={{ color: "green" }}>Upload successful!</p>}
            {uploadStatus === "error" && <p style={{ color: "red" }}>Error uploading files. Please try again.</p>}
            <button className="close-modal" style={{ border: "none", color: "black", width: "25px", height: "40px" }} onClick={toggleModal}>
              <MdOutlineClear />
            </button>
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

        .modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          z-index: 1000;
        }

        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          cursor: pointer;
        }

        .modal-content {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background-color: white;
          padding: 20px;
          border-radius: 5px;
        }

        .centered-container {
          text-align: center;
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

        .close-modal {
          position: absolute;
          top: 10px;
          right: 10px;
          background-color: transparent;
          border: none;
          cursor: pointer;
        }

        /* Add your additional styles here */
      `}</style>
    </>
  );
}