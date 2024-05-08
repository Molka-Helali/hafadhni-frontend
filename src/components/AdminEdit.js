import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/NavBar';
import Ellipse1 from '../Assets/Ellipse1.png';
import Ellipse2 from '../Assets/Ellipse4.png';
const AdminEdit = () => {
  const formAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(-20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
  });
  const {id}=useParams();
  const[data,setData]=useState([])
  const navigate = useNavigate();
  useEffect(()=>{
    axios.get(`http://localhost:3001/v1/api/user/get/${id}`)
    .then(res=>setData(res.data))
    .catch(err=>console.log(err))
  },[])

function handelSumnitAdmin(event){
  event.preventDefault()
  axios.patch(`http://localhost:3001/v1/api/user/update/${id}`,data)
  .then(res=>setData(res.data))
  alert("data update successfully ")
  navigate('/DachbordAdmin')
}
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
    <animated.div style={formAnimation}>
          <form  onSubmit={handelSumnitAdmin} style={{ width: '50%', margin: 'auto', padding: '20px', border: '2px solid #ccc', borderRadius: '5px',  position:'relative',top:'90px', left:'30px'}}>
          <div style={{ marginBottom: '20px' }}>
          <label htmlFor='name' style={{ display: 'block', marginBottom: '5px' }}>ID:</label>
          <input type='text' name='userName' disabled value={data._id} className='form-control' style={{ width: '95%', padding: '8px', border: '2px solid #ccc', borderRadius: '3px' }} />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor='name' style={{ display: 'block', marginBottom: '5px' }}>Name:</label>
          <input type='text' name='userName'value={data.userName} className='form-control' style={{ width: '95%', padding: '8px', border: '2px solid #ccc', borderRadius: '3px',backgroundColor:'transparent' }}
          onChange={e=>setData({...data,userName:e.target.value})} />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor='email' style={{ display: 'block', marginBottom: '5px' }}>Email:</label>
          <input type='email' name='email' value={data.email}className='form-control' style={{ width: '95%', padding: '8px', border: '2px solid #ccc', borderRadius: '3px',backgroundColor:'transparent' }} 
            onChange={e=>setData({...data,email:e.target.value})}/>
        </div>
        <br />
        <button type='submit' className='btn btn-info' style={{ padding: '10px 30px', backgroundColor: '#1A46EE', color: '#fff', border: 'none', borderRadius: '3px', cursor: 'pointer',position:'relative',top:'-10px' }}>Update</button>
      </form>
    </animated.div>
    </div>
  );
};


export default AdminEdit;


