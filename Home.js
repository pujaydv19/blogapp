import React from 'react'
import "./Home.css";
export default function Home() {
  return (
    <div className="home">
   
      <div className='card'>
        <div className='card-header'>
         <div className='card-pic'>
          <img src='po1.png' alt=''/>
         </div>
         <h5>Pooja</h5>
        </div>

       
        <div className='card-image'>
          <img src='bg.png' alt=''/>
        </div>
        <div className='card-content'>
        <i class="fa-regular fa-heart"></i>
        <span className="material-symbols-outlined">
favorite
</span>
<p>10 Like</p>
<p>This is Amazing</p>
        </div>

        <div className='add-comment'>
        <i class="fa-regular fa-face-smile-beam"></i>
        <span className="material-symbols-outlined">
sentiment_very_satisfied
</span>
<input type='text' placeholder='Add a comment' />
<button className='comment'>Post</button>
        </div>
      </div>
      </div>
  )
}
