import React from 'react';
import './HomeCard.css';

const HomeCard = () => {
  return (
    <div className="container-fluid mt-5">
      <div className="row gx-5"> {/* Add gx-5 for horizontal spacing */}
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="home-card card card-1"> {/* Add card-1 class */}
            <div className="home-card__content card-body">
              <p className="home-card__title card-title">Library Management App for NNCL </p>
              <p className="home-card__description card-text">
                Humble Coders is working on a Library Management App for NNCL, featuring a seat booking system, real-time availability tracking, and break scheduling to ensure efficient library use. The app includes ID card scanning for attendance, group room bookings, and luggage storage updates. <br /><br />
                For library administrators, the Library Manager App tracks seat usage, peak hours, demographics, and user complaints, optimizing operations and ensuring a seamless experience for all users.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="home-card card card-2"> {/* Add card-2 class */}
            <div className="home-card__content card-body">
              <p className="home-card__title card-title">Classified Project with the Indian Army </p>
              <p className="home-card__description card-text">Humble Coders is proud to have worked for the Indian Army on a classified project. 
<br /><br />While details remain confidential, this collaboration showcases our ability to deliver innovative and reliable solutions for critical and sensitive requirements, reinforcing our commitment to excellence.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4 mx-auto">
          <div className="home-card card card-3"> {/* Add card-3 class */}
            <div className="home-card__content card-body">
              <p className="home-card__title card-title">Business Management App for a Cylinder Business</p>
              <p className="home-card__description card-text"><br />
              Humble Coders successfully developed and delivered a custom business management app tailored for a cylinder distribution business. This app streamlined operations, improved inventory tracking, and enhanced overall efficiency. <br /> <br />
By addressing the client’s specific needs, we provided a scalable solution that transformed their workflow, showcasing our ability to create impactful tech solutions for businesses of all scales.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
