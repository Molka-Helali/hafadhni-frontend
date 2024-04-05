import React from 'react'
import Navbar from "../components/NavBar";
import Ellipse1 from '../Assets/Ellipse1.png';
import Ellipse2 from '../Assets/Ellipse 2.png';
const Upload = () => {
    return (
        <div>
         <Navbar />
         <div className="Ellipse1"style={{ position: 'absolute', top: 0, left: 0 }}>
    <img src={Ellipse1} alt="" />
    </div>
    <div className="Ellipse2"style={{ position: 'absolute', bottom: 200, right:-200}}>
    <img src={Ellipse2} alt="" />
    </div>
         <hr className="horizontal-line"></hr>

         <main className="main">
        <section className="upload">
          <h1>Upload</h1>
          <p>Drag & drop files or Browse</p>
          <div className="upload-methods">
            <button className="upload-button">Browse</button>
            <button className="upload-button">Use your camera</button>
          </div>
          <p>Supported formats: JPEG, PNG, GIF, PDF, Word, PPT</p>
          <p>If you want to copy and paste text, you can stop uploading it</p>
          <div className="upload-progress">
            <p>Uploading 3/3 files</p>
            <span className="upload-progress-bar">
              <span style={{ width: '33%' }}></span>
            </span>
            <p>Andrew_passport.png</p>
          </div>
        </section>
      </main>
        </div>
      )
}

export default Upload
