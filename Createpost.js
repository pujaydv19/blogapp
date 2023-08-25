import React from 'react'
import "./Createpost.css";

export default function Createpost() {
    
    
  return (
    <div className='createPost'>
        
        <div className='post-header'>
            <h4 style={{margin:"3px auto"}}>Create New Post</h4>
            <button id='post-btn'>Share</button>
        </div>
        <div className='main-div'>
            
            <input type='file' accept='image/*'/>
        </div>
        <div className='details'>
            <div className='card-header'>
                <div className='card-pic'>
                    <img src='po1.png' alt=''/>
                </div>
                <h5>Blogger Singh</h5>
            </div>
            <textarea type="text" placeholder='Write a Caption'></textarea>
        </div>
    </div>
  )
}
