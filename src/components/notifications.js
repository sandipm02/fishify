import React, { useEffect, useState } from 'react';
import { Button, Container, Grid, GridCol, Image, TextInput, Text } from '@mantine/core';
import BottomNavBar from './bottom-nav.js';
import MiniFish from '../assets/minifish.png';
import closeIcon from '../assets/closePNG.png';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useAuth } from './authcontext.js'; // Adjust the path to the AuthContext file
import { useNavigate } from 'react-router-dom'; // Assuming you are using React Router v6
import '../styling/login.css';
import '../styling/dashboard.css';
import '../styling/notifications.css';
import default_notifications from '../notifications.json';
import NotificationsPopupGroup from './notifications-popup-group.js';
import NotificationsPopupCatch from './notifications-popup-catch.js';
import NotificationsPopupLocation from './notifications-popup-location.js';

const Notifications = () => {
  const { user, login } = useAuth();
  const navigate = useNavigate();

  const [showGroupPopup, setShowGroupPopup] = useState(false);
  const [showCatchPopup, setShowCatchPopup] = useState(false);
  const [showLocationPopup, setShowLocationPopup] = useState(false);

//   useEffect(() => {
//     if (user === null) {
//       navigate('/login');
//     }
//     else {
//       console.log(user);
//     }
//   }, [user, navigate]);

  const today_date = Date.now() / 1000; // Epoch time in seconds

  const default_notifications_recents = default_notifications.filter(
    notif => today_date - notif.date < 604800); // 7 days old or less

  const default_notifications_month = default_notifications.filter(
    notif => today_date - notif.date < 2629800 && today_date - notif.date >= 604800); // 1 month old or less

  const default_notifications_six_month = default_notifications.filter(
    notif => today_date - notif.date < 2629800 * 6 && today_date - notif.date >= 2629800); // 6 month old or less

  const handleClick = (i) => {
    console.log({i} + "straight from the horse");
    if(i.localeCompare("Location")) HandleClickLocation();
    else if(i.localeCompare("Group")) HandleClickGroup();
    else if(i.localeCompare("Catch")) HandleClickCatch();
  };

  const HandleClickLocation = () => {
    setShowLocationPopup(true);
    console.log("Location");
  };

  const HandleClickCatch = () => {
    setShowCatchPopup(true);
    console.log("Group");
  };

  const HandleClickGroup = () => {
    setShowGroupPopup(true);
    console.log("Catch");
  };

  const openHamburgerMenu = () => {
    navigate('/menu'); 
  };

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
            <GiHamburgerMenu onClick={openHamburgerMenu}
              style={{ marginLeft: 'auto', cursor: 'pointer', fontSize: '24px' }}
            />
          </GridCol>
          <GridCol span={12}>
              <TextInput
                className='input-dash input-no-focus-outline'
                placeholder=''
                autoComplete=''
                required
                name=''
                styles={{
                  input: {
                    appearance: 'none',
                    backgroundColor: 'white',
                    border: 'none',
                    borderBottom: '1px solid transparent',
                    boxShadow: 'none',
                    WebkitBoxShadow: 'none',
                    width: '320px',
                    zIndex: '-1'
                  },
                }}
              />
            </GridCol>
          <div className='notif-container'>
            {!showCatchPopup && !showGroupPopup && !showLocationPopup && 
            <>
            <h3 className="notif-date-text">Last 7 Days</h3>
            {default_notifications_recents.map((notif, index) => (
                <li class='notif-text' key={index}>
                    <Image className='notification-dp' src = {process.env.PUBLIC_URL + notif.display_picture}  alt={notif.user} width={30} height={30}/>
                    <div className='notif-display-text'>
                        <strong>{notif.user}</strong>
                        {' ' + notif.message}
                        {notif.action && 
                            <>{' ' + notif.place + ". "}<h5 onClick={() => HandleClickGroup()}>{'View ' + notif.action}</h5></>
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
                            <>{' ' + notif.place + ". "}<h5 onClick={() => HandleClickLocation()}>{'View ' + notif.action}</h5></>
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
                            <>{' ' + notif.place + ". "}<h5 onClick={() => HandleClickCatch()}>{'View ' + notif.action}</h5></>
                        }
                    </div>
                </li>
            ))}

            </>
            }
            
            {showGroupPopup && <NotificationsPopupGroup onClose={()=> setShowGroupPopup(false)}/>}
            {showCatchPopup && <NotificationsPopupCatch onClose={()=> setShowCatchPopup(false)}/>}
            {showLocationPopup && <NotificationsPopupLocation onClose={()=> setShowLocationPopup(false)}/>}

          </div>
        </Grid>
        <br />
        <BottomNavBar selectedTab={3}/>
      </Container>
    </div>
  );
};

export default Notifications;
