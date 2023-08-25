import React from 'react';
import "./Profile.css";
export default function Profile() {
  return (
    <div className='profile'>
      {/*/ Profile Frame */}
      <div className='profile-frame'>
        <div className='profile-pic'>
          {/*/ Profile Pic */}
        <img src='po1.png' alt=''/>
        </div>
        
        {/*/ Profile Data */}
        <div className='profile-data'>
          <h1>Blogger Singh</h1>
          <div className='profile-info' style={{display:'flex'}}>
            <p>10 Posts</p>
            <p>100 Followers</p>
            <p>15 following</p>
          </div>
        </div>
      </div>
      <hr style={{width: "90%" , opacity:"0.8" , margin: "25px ,auto"}}/>
      {/*/ Gallery */}
      <div className='gallery'>
        <img src='logo.jpg' alt=''/>
        <img src='img1.png' alt=''/>
        <img src='logo.jpeg' alt=''/>
        <img src='logo.jpg' alt=''/>
        <img src='po1.png' alt=''/>
        <img src='po1.png' alt=''/>
      </div>
   </div>
  )
}
