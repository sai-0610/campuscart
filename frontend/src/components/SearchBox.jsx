import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';

const SearchBox = () => {
  const navigate = useNavigate();
  const { keyword: urlKeyword } = useParams();

  // FIX: uncontrolled input - urlKeyword may be undefined
  const [keyword, setKeyword] = useState(urlKeyword || '');

  const [buttonHovered, setButtonHovered] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword) {
      navigate(`/search/${keyword.trim()}`);
      setKeyword('');
    } else {
      navigate('/');
    }
  };

  const inputStyle = {
    backgroundColor: '#333', // Light black background color
    color: '#fff', // White text color for better readability
  };

  const buttonStyle = {
    backgroundColor: buttonHovered ? '#555' : '#333', // Change background color on hover
    borderColor: '#333', // Light black border color
    color: '#fff', // White text color
    cursor: 'pointer', // Change cursor to pointer
    transition: 'background-color 0.3s ease', // Smooth transition for background color change
  };

  return (
    <Form onSubmit={submitHandler} className='d-flex'>
      <Form.Control
        type='text'
        name='q'
        onChange={(e) => setKeyword(e.target.value)}
        value={keyword}
        placeholder='Search Products...'
        className='mr-sm-2 ml-sm-5'
        style={inputStyle} // Apply inline styles here
      ></Form.Control>
      <Button
        type='submit'
        variant='outline-success'
        className='p-2 mx-2'
        style={buttonStyle} // Apply inline styles here
        onMouseEnter={() => setButtonHovered(true)} // Handle hover effect
        onMouseLeave={() => setButtonHovered(false)} // Reset hover effect
      >
        Search
      </Button>
    </Form>
  );
};

export default SearchBox;
