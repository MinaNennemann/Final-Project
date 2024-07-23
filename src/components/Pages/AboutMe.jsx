import React from 'react';
import './AboutMe.css';
import myPhoto from '/images/7.jpeg';

const AboutMe = () => {
  return (
    <div className="about-me-container">
      <div className="text-content">
      <h1 className="about-me-title">About Me</h1>

        <p>
          My name is Mina. I was born and raised in Istanbul, where I developed a passion for literature and languages early on. During high school, I majored in English, which fueled my love for reading and writing. This passion led me to pursue a degree in literature at university.
        </p>
        <p>
          In my spare time, I enjoy reading and collecting books of quotes from various authors. I often mark the quotes that resonate with me and revisit these highlights later. This hobby inspired me to merge my love for literature with my interest in IT, resulting in the creation of this website.
        </p>
        
      </div>
      <div className="photo-content">
        <img src={myPhoto} alt="My Photo" className="profile-photo" />
      </div>
    </div>
  );
}

export default AboutMe;
