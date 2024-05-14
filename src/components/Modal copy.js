import React, { useState, useEffect } from "react";
import { AiFillFolderOpen } from "react-icons/ai";

export default function Modal({ openModal }) {
  const [modal, setModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const toggleModal = () => {
    setModal(!modal);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file.name);
    }
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
            <h2>Hello Modal</h2>
            <input type="file" onChange={handleFileChange} />
            {selectedImage && (
              <div className="image-box">
                <p className="selected-image">Selected Image: {selectedImage}</p>
              </div>
            )}
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
            {/* Upload Button */}
            <button className="upload-button">Upload</button>
          </div>
        </div>
      )}
      <style jsx>{`
        .image-box {
          background-color: rgba(255, 255, 255, 0.8); /* Transparent background */
          border: 1px solid grey; /* Grey border */
          padding: 10px;
          margin-top: 10px;
        }

        .selected-image {
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
