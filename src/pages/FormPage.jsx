import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FormPage.css';

const FormPage = () => {
  const navigate = useNavigate();

  const handleFormClick = () => {
    window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSegpoBL5ca4q1nP4OG1NAoKwyKa3msWERSXIOGMCkxHRCJPaw/viewform?usp=header';
  };

  return (
    <div className="form-page">
      <button className="back-button" onClick={() => navigate('/')}>
        ← Back
      </button>
      <div className="form-container">
        <img 
          src="/images/form-image.png" 
          alt="Form Image" 
          className="form-image"
        />
        <button className="form-button" onClick={handleFormClick}>
          Click here for the Form! ;)
        </button>
      </div>
    </div>
  );
};

export default FormPage; 