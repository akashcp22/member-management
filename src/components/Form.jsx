import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMember } from '../redux/memberSlice';
import { useNavigate } from 'react-router-dom';
import './Form.css'; // Import the custom CSS file

const Form = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [mobile, setMobile] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addMember({ name, age, mobile }));
    setName('');
    setAge('');
    setMobile('');
  };

  return (
    <div className="form-container mt-5">
      <form className="custom-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            value={name}
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            value={age}
            placeholder="Age"
            onChange={(e) => setAge(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            value={mobile}
            placeholder="Mobile Number"
            onChange={(e) => setMobile(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary btn-block mt-3">Add Member</button>
      </form>
      <button className="btn btn-secondary btn-block mt-3" onClick={() => navigate('/members')}>
        All Members
      </button>
    </div>
  );
};

export default Form;
