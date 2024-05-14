import React, { useState, useEffect, useRef } from "react";
import { AiFillFolderOpen } from "react-icons/ai";
import { MdOutlineFileUpload } from "react-icons/md";
import { FaTrashAlt } from "react-icons/fa";
import { MdOutlineClear } from "react-icons/md";

export default function Modal({ openModal }) {
  const [modal, setModal] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const fileInputRef = useRef(null);

  const toggleModal = () => {
    setModal(!modal);
  };

  const handleFileChange = (event) => {
    const files = event.target.files;
    if (files.length + selectedFiles.length > 3) {
      alert("You can only upload up to 3 files.");
      return;
    }
    setSelectedFiles([...selectedFiles, ...files]);
  };

  const resetFiles = () => {
    setSelectedFiles([]); // Reset selected files
    fileInputRef.current.value = null; // Reset file input value
  };

  useEffect(() => {
    if (modal) {
      document.body.classList.add("active-modal");
    } else {
      document.body.classList.remove("active-modal");
    }
    // Clean up the class on component unmount
    return () => {
      document.body.classList.remove("active-modal");
    };
  }, [modal]);

  const handleOpenModal = () => {
    if (typeof openModal === "function") {
      openModal();
    }
    toggleModal(); // Toggle modal after opening
  };

  const removeFile = (index) => {
    const updatedFiles = [...selectedFiles];
    updatedFiles.splice(index, 1);
    setSelectedFiles(updatedFiles);
  };

  const handleUploadClick = () => {
    fileInputRef.current.click(); // Trigger file input click
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
              <button className="blue-button" onClick={handleUploadClick}>
                <MdOutlineFileUpload className="icon" />
              </button>
              {/* Hidden file input */}
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
              <div key={index} className="file-name" style={{ width: "300px", height: "30px" }}>
                <p>{file.name}</p>
                <div onClick={() => removeFile(index)}>
                  <FaTrashAlt className="trash" />
                </div>
              </div>
            ))}
            <button className="close-modal" style={{ border: "none", color: "black", width: "25px", height: "40px" }} onClick={toggleModal}>
              <MdOutlineClear />
            </button>
            {/* Upload Button */}
            <button className="upload-button" style={{ width: "319px", position: "relative", top: "2px", left: "2px" }} disabled={selectedFiles.length === 0} onClick={resetFiles}>
              Upload
            </button>
          </div>
        </div>
      )}
      <style jsx>{`
        .file-name {
          color: black;
          background-color: #dbe0f3; /* Transparent background */
          border: 1px solid #dbe0f3; /* Grey border */
          padding: 10px;
          margin-top: 10px;
          border-radius: 20px;
        }

        .file-name p {
          margin: 0;
        }

        /* Style for the Upload button */
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
