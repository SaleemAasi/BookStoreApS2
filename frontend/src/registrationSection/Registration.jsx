import React, { useState } from 'react';
import './registra.css';

function Registration() {
  const [formData, setFormData] = useState({
    studentName: '',
    fatherName: '',
    guidance: '',
    teacherGender: '',
    studentGender: '',
    email: '',
    course: '',
    desiredTiming: '',
    reference: '',
    country: '',
    address: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:5000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        alert('Registration successful');
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Registration failed');
      });
  };

  return (
    <>
      <div className="registration-container">
        <div className="registration-header">
          <h1>Register</h1>
        </div>
        <hr className="design-line" />
        <div className="registration-content">
          <p>Home / Register</p>
        </div>
      </div>

      <form className="registration-form" onSubmit={handleSubmit}>
        <h2 className='mb-5'> Regestration form</h2>
        <label htmlFor="student-name">Student Name:</label>
        <input
          type="text"
          id="student-name"
          name="studentName"
          value={formData.studentName}
          onChange={handleChange}
          required
        />

        <label htmlFor="father-name">Father's Name:</label>
        <input
          type="text"
          id="father-name"
          name="fatherName"
          value={formData.fatherName}
          onChange={handleChange}
          required
        />

        <label htmlFor="guidance">Guidance:</label>
        <input
          type="text"
          id="guidance"
          name="guidance"
          value={formData.guidance}
          onChange={handleChange}
          required
        />

        <label htmlFor="teacher-gender">Requirement of Teacher's Gender:</label>
        <select
          id="teacher-gender"
          name="teacherGender"
          value={formData.teacherGender}
          onChange={handleChange}
          required
        >
          <option value="">Select...</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        <label htmlFor="student-gender">Student Gender:</label>
        <select
          id="student-gender"
          name="studentGender"
          value={formData.studentGender}
          onChange={handleChange}
          required
        >
          <option value="">Select...</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="course">Course:</label>
        <select
          id="course"
          name="course"
          value={formData.course}
          onChange={handleChange}
          required
        >
          <option value="">Select a course...</option>
          <option value="web-development">Web Development</option>
          <option value="data-science">Data Science</option>
          <option value="graphic-design">Graphic Design</option>
          {/* Add more courses as needed */}
        </select>

        <label htmlFor="desired-timing">Desired Timing:</label>
        <input
          type="text"
          id="desired-timing"
          name="desiredTiming"
          value={formData.desiredTiming}
          onChange={handleChange}
          required
        />

        <label htmlFor="reference">Reference:</label>
        <input
          type="text"
          id="reference"
          name="reference"
          value={formData.reference}
          onChange={handleChange}
          required
        />

        <label htmlFor="country">Country:</label>
        <input
          type="text"
          id="country"
          name="country"
          value={formData.country}
          onChange={handleChange}
          required
        />

        <label htmlFor="address">Address:</label>
        <textarea
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Registration;
