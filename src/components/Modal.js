import React, { useState, useEffect, useRef } from "react";
import { AiFillFolderOpen } from "react-icons/ai";
import { MdOutlineFileUpload, MdOutlineClear } from "react-icons/md";
import { FaTrashAlt } from "react-icons/fa";
import axios from "axios";

export default function Modal({ openModal }) {
  const [modal, setModal] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const fileInputRef = useRef(null);
  const [uploadStatus, setUploadStatus] = useState(null);
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
      });
      formData.append("userId", userId);

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
    const files = Array.from(event.target.files);
    if (files.length + selectedFiles.length > 3) {
      alert("You can only upload up to 3 files.");
      return;
    }
    setSelectedFiles([...selectedFiles, ...files]);
  };

  const resetFiles = () => {
    setSelectedFiles([]);
    fileInputRef.current.value = null;
  };

  useEffect(() => {
    if (modal) {
      document.body.classList.add("active-modal");
    } else {
      document.body.classList.remove("active-modal");
    }
    return () => {
      document.body.classList.remove("active-modal");
    };
  }, [modal]);

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
      <div onClick={handleOpenModal}>
        <button className="FillSum">
          <AiFillFolderOpen className="FillFolderSum" />
        </button>
      </div>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <div
              className="centered-container"
              style={{
                border: "2px dotted #A5B5F1",
                padding: "40px",
                position: "relative",
                top: "55px",
                height: "55px",
              }}
            >
              <button 
                className="blue-button" 
                onClick={() => fileInputRef.current.click()} 
                disabled={selectedFiles.length >= 3}
              >
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
            <h2 style={{ color: "blue", position: "relative", right: -85, top: -25 }}>
              Upload File
            </h2>
            {selectedFiles.map((file, index) => (
              <div key={index} className="file-name" style={{ width: "300px", height: "30px" }}>
                <p>{file.name}</p>
                <div onClick={() => removeFile(index)}>
                  <FaTrashAlt className="trash" />
                </div>
              </div>
            ))}
            <button
              className="close-modal"
              style={{ border: "none", color: "black", width: "25px", height: "40px" }}
              onClick={toggleModal}
            >
              <MdOutlineClear />
            </button>
            <button
              className="upload-button"
              style={{ width: "319px", position: "relative", top: "2px", left: "2px" }}
              disabled={selectedFiles.length === 0}
              onClick={() => {
                handleUploadClick();
                resetFiles();
                setUploadStatus(null);
              }}
            >
              Upload
            </button>
            {uploadStatus === "success" && <p style={{ color: "green" }}>Upload successful!</p>}
            {uploadStatus === "error" && <p style={{ color: "red" }}>Error uploading files. Please try again.</p>}
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