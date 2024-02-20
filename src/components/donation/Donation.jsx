import React from 'react';
import "./Donation.css"

export const FlipCard = () => {
  return (
    <div className='donation-card'>
        
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src="https://th.bing.com/th/id/OIG2.aLmjKixdWtwn3K.GAA7Z?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn" alt="Avatar" />
        </div>
        <div className="flip-card-back">
          <h2>Project title</h2>
          <p>Category</p>
          <p>https://davidwalsh.name/css-flip</p>
        </div>
      </div>
    </div>
    <div className='donation-text'> 
        Donate Us
        <div className='donation-text1'> 
        Empower the transgender community. Your donation fosters inclusivity, provides essential resources, and advocates for equal rights. Help us offer vital services like healthcare, education, and legal assistance. Together, let's break barriers, challenge stigma, and create a world where everyone thrives with dignity and respect. Donate now for positive change.
        </div>
        </div>
        
    </div>
  );
}

