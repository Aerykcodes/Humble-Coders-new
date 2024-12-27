import React from 'react';
import Picture1 from './Images/Picture1.jpg';
import Picture2 from './Images/Picture2.jpg';
import Picture3 from './Images/Picture3.jpg';
import Picture4 from './Images/Picture4.jpg';
import NewPicture1 from './Images/NewPicture1.jpg';
import NewPicture2 from './Images/NewPicture2.jpg';
import NewPicture3 from './Images/NewPicture3.jpg';
import NewPicture4 from './Images/NewPicture4.jpg';
import NewPicture5 from './Images/NewPicture5.jpg';
import NewPicture6 from './Images/NewPicture6.jpg';

const WorkshopSection = () => {
  const images = [
    Picture1,
    Picture2,
    Picture3,
    Picture4
  ];

  const newImages = [
    { src: NewPicture1, title: 'Content relevance' },
    { src: NewPicture2, title: 'Knowledge and expertise of instructors' },
    { src: NewPicture3, title: 'Overall experience' },
    { src: NewPicture4, title: 'Hands-on activities/coding sessions' },
    { src: NewPicture5, title: 'Was the workshop environment conductive to learning' },
    { src: NewPicture6, title: 'Confidence Level: Applying Workshop Skills to Real-World App Development Projects' }
  ];

  const styles = {
    textArea: {
      width: '100%',
      marginTop: '20px',
      padding: '10px',
      border: '2px solid black',
      borderRadius: '8px',
      backgroundColor: '#f9f9f9',
    },
    image: {
      width: '100%',
      height: '300px', // Increased height
      objectFit: 'cover', // Cover the area while maintaining aspect ratio
      borderRadius: '8px', // Optional: add some border radius for better appearance
    },
    title: {
      textAlign: 'center',
      marginTop: '10px',
      fontWeight: 'bold',
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        {images.map((image, index) => (
          <div className="col-12 col-md-12 col-lg-3 mb-3" key={index}> {/* Full width on small and medium screens, 3 columns on large screens */}
            <img src={image} alt={`Workshop ${index}`} className="img-fluid" style={styles.image} />
          </div>
        ))}
      </div>
      <div style={styles.textArea}>
        <h3>Previous Workshop Recap:</h3>
        <p>
          Humble Coders recently conducted an exciting app development workshop at the prestigious Thapar Institute of Engineering and Technology! 🚀✨
        </p>
        <p>
          With over 170 enthusiastic students from diverse branches like Computer Engineering (COE), Computer Science and Business Systems (COPC), Electronics and Communication (EEC), Biotechnology, and more joined for the innovative workshop and hands-on learning experience.
        </p>
        <h4>Workshop Highlights</h4>
        <ul>
          <li><strong>Focus on Native Android Development:</strong> Students explored the latest trends in Android development using Kotlin Jetpack Compose, diving deep into building modern and intuitive mobile apps.</li>
          <li><strong>Practical Projects:</strong> The participants brought their learning to life by designing and deploying a fully functional CGPA calculator app, showcasing their work on GitHub.</li>
          <li><strong>Hands-On Learning:</strong> The sessions were designed to be interactive and practical, ensuring students gained real-world experience that prepares them for the tech industry's demands.</li>
        </ul>
        <h4>Student Engagement and Impact</h4>
        <p>
          The participants’ energy and enthusiasm were truly inspiring! Their curiosity and eagerness to learn reminded us why skill-based education is so important. By the end of the workshop, every student walked away with increased confidence, industry-relevant knowledge and a project they could proudly call their own.
        </p>
      </div>
      {/* New Section */}
      <div className="additional-section mt-5">
        <p className='text-center'>
          The success of our workshop was not just reflected in the projects created but also in the overwhelming positive feedback we received from the participants. <br /> <br />
          Here’s a glimpse into how the students rated various aspects of the workshop, from content quality and
        </p>
        <div className="row justify-content-center">
          {newImages.map((image, index) => (
            <div className="col-12 col-sm-6 col-lg-6 mb-3" key={index}> {/* Full width on small screens, 2 columns on large screens */}
              <img src={image.src} alt={image.title} className="img-fluid" style={styles.image} />
              <div style={styles.title}>{image.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkshopSection;
