import React, { useState } from 'react';
import '../Assets/Feedback.css'; // Import the CSS file

import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import StarIcon from '@mui/icons-material/Star';
import { Link } from 'react-router-dom';
import UserNavbar from '../Components/UserNavbar';
import UserFooter from '../Components/UserFooter';
import axios from 'axios'; // Import Axios for making HTTP requests

// ...

function Feedback() {
  const [name, setName] = useState('');
  const [cleanliness, setCleanliness] = useState(0);
  const [comfort, setComfort] = useState(0);
  const [service, setService] = useState(0);
  const [valueForMoney, setValueForMoney] = useState(0);
  const [comments, setComments] = useState('');
  const [staff,setStaff]=useState('');
  const [stay,setStay]=useState('');
  const [isRegistered, setIsRegistered] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const feedbackData =[ {
      name,
      cleanliness,
      comfort,
      service,
      valueForMoney,
      stay,staff,
      comments,
    },];

    try {
      const response = await axios.post("http://localhost:8999/api/v1/auth/submitFeedback", feedbackData);
      if (response.status === 200) {
        setIsRegistered(true);
      }
    } catch (error) {
      console.error('Error submitting feedback:', error);
    }
  };

  return (
    <div id="bodyfeedback">
      <div id="layerfeedback">
        <UserNavbar />
        <br />
        <div className="feedback-container">
          <h1 className="feedback-title">Feedback Form</h1>
          <form onSubmit={handleFormSubmit} className="feedback-form">
            <label className="feedback-label">
              Name:
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="feedback-input"
              />
            </label>

            <h3 className="satisfaction-title">Satisfaction Scale (1 to 5):</h3>

            <label className="feedback-label">
              Cleanliness:
              <Stack spacing={1}>
                <Rating
                  name="cleanliness-rating"
                  value={cleanliness}
                  onChange={(event, newValue) => {
                    setCleanliness(newValue);
                  }}
                  precision={1}
                  IconContainerComponent={StarIcon}
                  emptyIcon={<StarIcon style={{ color: 'grey' }} />}
                  icon={<StarIcon style={{ color: 'gold' }} />}
                />
              </Stack>
            </label>

            <label className="feedback-label">
              Comfort:
              <Stack spacing={1}>
                <Rating
                  name="comfort-rating"
                  value={comfort}
                  onChange={(event, newValue) => {
                    setComfort(newValue);
                  }}
                  precision={1}
                  IconContainerComponent={StarIcon}
                  emptyIcon={<StarIcon style={{ color: 'grey' }} />}
                  icon={<StarIcon style={{ color: 'gold' }} />}
                />
              </Stack>
            </label>

            <label className="feedback-label">
              Service:
              <Stack spacing={1}>
                <Rating
                  name="service-rating"
                  value={service}
                  onChange={(event, newValue) => {
                    setService(newValue);
                  }}
                  precision={1}
                  IconContainerComponent={StarIcon}
                  emptyIcon={<StarIcon style={{ color: 'grey' }} />}
                  icon={<StarIcon style={{ color: 'gold' }} />}
                />
              </Stack>
            </label>

            <label className="feedback-label">
              Value for Money:
              <Stack spacing={1}>
                <Rating
                  name="valueForMoney-rating"
                  value={valueForMoney}
                  onChange={(event, newValue) => {
                    setValueForMoney(newValue);
                  }}
                  precision={1}
                  IconContainerComponent={StarIcon}
                  emptyIcon={<StarIcon style={{ color: 'grey' }} />}
                  icon={<StarIcon style={{ color: 'gold' }} />}
                />
              </Stack>
            </label>

            <label className="feedback-label">
              What did you like about your stay?
              <textarea
              value={stay}
              onChange={(e)=> setStay(e.target.value)}
                className="feedback-text"
              />
            </label>

            <label className="feedback-label">
              Were the staff members helpful and courteous?
              <textarea
              value={staff}
              onChange={(e)=> setStaff(e.target.value)}
                className="feedback-text"
              />
            </label>

            <label className="feedback-label">
              Comments:
              <textarea
                value={comments}
                onChange={(e) => setComments(e.target.value)}
                className="feedback-textarea"
              />
            </label>

            <button type="submit" className="submit-button">Submit</button>
            {isRegistered && (
              <div className="success-popup">
                <div className="success-popup-content">
                  <h3>Submitted Successfully</h3>
                  <Link to='/home'><button className='btn1'>Done</button></Link>
                </div>
              </div>
            )}
          </form>
        </div>
        <br />
        <UserFooter />
      </div>
    </div>
  );
}

export default Feedback;
