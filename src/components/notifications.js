import React, { useEffect } from 'react';
import { Button, Container, Grid, GridCol, Image, TextInput } from '@mantine/core';
import BottomNavBar from './bottom-nav.js';
import MiniFish from '../assets/minifish.png';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useAuth } from './authcontext.js'; // Adjust the path to the AuthContext file
import { useNavigate } from 'react-router-dom'; // Assuming you are using React Router v6
import '../styling/login.css';
import '../styling/dashboard.css';
import '../styling/notifications.css';
import default_notifications from '../notifications.json';

const Notifications = () => {
  const { user, login } = useAuth();
  const navigate = useNavigate();

//   useEffect(() => {
//     if (user === null) {
//       navigate('/login');
//     }
//     else {
//       console.log(user);
//     }
//   }, [user, navigate]);

  const today_date = Date.now() / 1000;
  console.log(today_date);

  const default_notifications_recents = default_notifications.filter(
    notif => Math.abs(today_date - notif.date) < 604800); // 7 days old or less

  const default_notifications_month = default_notifications.filter(
    notif => today_date - notif.date < 2629800 && today_date - notif.date >= 604800); // 1 month old or less

  const default_notifications_six_month = default_notifications.filter(
    notif => today_date - notif.date < 2629800 * 6 && today_date - notif.date >= 2629800); // 6 month old or less


  return (
    <div className='contain-dash'>
      <Container size='xs'>
        <Grid className='cont'>
          <br />
          <br />
          <br />
          <GridCol className='contain-content' style={{ marginBottom: '15px', display: 'flex', alignItems: 'center' }}>
            <Image src={MiniFish} alt='Minifish Logo' width={50} height={30} />
            <strong>
              <h2 className='notification-text-1' style={{ marginLeft: '5px' }}>
                Notifications
              </h2>
            </strong>
            <GiHamburgerMenu
              style={{ marginLeft: 'auto', cursor: 'pointer', fontSize: '24px' }}
            />
          </GridCol>
          <div className='notif-container'>
            <h3 className="notif-date-text">Last 7 Days</h3>
            {default_notifications_recents.map((notif, index) => (
                <li class='notif-text' key={index}>
                    <Image className='notification-dp' src = {process.env.PUBLIC_URL + notif.display_picture}  alt={notif.user} width={30} height={30}/>
                    <div className='notif-display-text'>
                        <strong>{notif.user}</strong>
                        {' ' + notif.message}
                        {notif.action && 
                            <>{' ' + notif.place + ". "}<h5>{'View ' + notif.action}</h5></>
                        }
                    </div>
                </li>
            ))} 

            <h3 className="notif-date-text">Last Month</h3>
            {default_notifications_month.map((notif, index) => (
                <li class='notif-text' key={index}>
                    <Image className='notification-dp' src = {process.env.PUBLIC_URL + notif.display_picture}  alt={notif.user} width={30} height={30}/>
                    <div className='notif-display-text'>
                        <strong>{notif.user}</strong>
                        {' ' + notif.message}
                        {notif.action && 
                            <>{' ' + notif.place + ". "}<h5>{'View ' + notif.action}</h5></>
                        }
                    </div>
                </li>
            ))}

            <h3 className="notif-date-text">Last 6 Months</h3>
            {default_notifications_six_month.map((notif, index) => (
                <li class='notif-text' key={index}>
                    <Image className='notification-dp' src = {process.env.PUBLIC_URL + notif.display_picture}  alt={notif.user} width={30} height={30}/>
                    <div className='notif-display-text'>
                        <strong>{notif.user}</strong>
                        {' ' + notif.message}
                        {notif.action && 
                            <>{' ' + notif.place + ". "}<h5>{'View ' + notif.action}</h5></>
                        }
                    </div>
                </li>
            ))}
          </div>
        </Grid>
        <br />
        <BottomNavBar />
      </Container>
    </div>
  );
};

export default Notifications;
