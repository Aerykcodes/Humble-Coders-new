import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MLSCcontent.css'; // Import custom CSS
import Navbar from '../../Navbar/Navbar'; // Import Navbar component
import ContentBox from '../Content/ContentBox'; // Import ContentBox component
import SiteFooter from '../../SiteFooter/SiteFooter'; // Import SiteFooter component
import RegisterButton from '../../RegisterButton/RegisterButton'; // Import RegisterButton component
import logo2 from '../Home/logo2.png'; // Import logo image

// Course content data
const contentData = [
  {
    heading: 'Day 1: Introduction to Kotlin and Jetpack Compose Basics',
    content: (
      <>
        <strong>Overview:</strong> Learn the basics of Kotlin programming and app design by building a simple "Secret Message Service" app. <br />
        <strong>App Idea:</strong> Write a message in the "Encode" text box, and the app will transform it into a secret code. Share this encoded message with a friend, who can use the "Decode" text box to reveal the original message.<br />
        <strong>Tasks:</strong>
        <ul>
          <li>Learn to create text boxes and buttons in an app.</li>
          <li>Write simple code to encode and decode messages.</li>
          <li>Run your app on an emulator or phone and test the features.</li>
        </ul>
        <strong>Relevant Resources:</strong>
        <ul>
          <li><a href="https://developer.android.com/jetpack/compose">Introduction to Jetpack Compose</a></li>
          <li><a href="https://kotlinlang.org/docs/basic-syntax.html">Basic Kotlin Syntax</a></li>
        </ul>
      </>
    ),
  },
  {
    heading: 'Day 2: Building the "CGPA Improver" App (Part 1)',
    content: (
      <>
        <strong>Overview:</strong> Start creating an app that helps you calculate what grades you need in the current semester to achieve your desired CGPA.<br />
        <strong>Tasks:</strong>
        <ul>
          <li>Set up the app and create an input screen for subject names and desired CGPA.</li>
          <li>Write logic to calculate the required grades.</li>
          <li>Display grades dynamically based on user input.</li>
        </ul>
        <strong>Relevant Resources:</strong>
        <ul>
          <li><a href="https://kotlinlang.org/docs/functions.html">Kotlin Functions</a></li>
          <li><a href="https://developer.android.com/jetpack/compose/layout">Jetpack Compose Layouts</a></li>
        </ul>
      </>
    ),
  },
  {
    heading: 'Day 3: Finishing the "CGPA Improver" App',
    content: (
      <>
        <strong>Overview:</strong> Complete the CGPA Improver app by making it fully functional.<br />
        <strong>Tasks:</strong>
        <ul>
          <li>Fine-tune the logic for grade calculation.</li>
          <li>Display the grades next to subject names in a clear format.</li>
          <li>Test the app thoroughly to ensure accuracy.</li>
        </ul>
        <strong>Relevant Resources:</strong>
        <ul>
          <li><a href="https://kotlinlang.org/docs/control-flow.html">Kotlin Loops and Conditions</a></li>
          <li><a href="https://developer.android.com/jetpack/compose/tutorial">Jetpack Compose Tutorials</a></li>
        </ul>
      </>
    ),
  },
  {
    heading: 'Day 4: Introduction to Firebase and Starting the "Tweeting App"',
    content: (
      <>
        <strong>Overview:</strong> Learn about Firebase and start building a simple Tweeting App.<br />
        <strong>App Idea:</strong> Users can write and post tweets, which will be saved online, and everyone can see and like them.<br />
        <strong>Tasks:</strong>
        <ul>
          <li>Set up Firebase Firestore in your project.</li>
          <li>Create a screen with a button to add tweets.</li>
          <li>Design a dialog box for writing and posting tweets.</li>
          <li>Save tweets to Firebase.</li>
        </ul>
        <strong>Relevant Resources:</strong>
        <ul>
          <li><a href="https://firebase.google.com/docs/firestore">Firebase Firestore Documentation</a></li>
          <li><a href="https://developer.android.com/jetpack/compose/modifiers">Dialogs in Jetpack Compose</a></li>
        </ul>
      </>
    ),
  },
  {
    heading: 'Day 5: Completing the "Tweeting App"',
    content: (
      <>
        <strong>Overview:</strong> Finish the Tweeting App by adding features to display and interact with tweets.<br />
        <strong>Tasks:</strong>
        <ul>
          <li>Display all tweets in a scrollable list (LazyColumn).</li>
          <li>Add a like button to each tweet and enable users to increment likes.</li>
          <li>Test the app and start tweeting on your own app.</li>
        </ul>
        <strong>Relevant Resources:</strong>
        <ul>
          <li><a href="https://developer.android.com/jetpack/compose/lists">LazyColumn in Jetpack Compose</a></li>
          <li><a href="https://developer.android.com/jetpack/compose/handling-clicks">Button Clicks in Jetpack Compose</a></li>
        </ul>
      </>
    ),
  },
];

// CourseDetails component
function CourseDetails() {
  return (
    <header className="Course-title-box">
      <h4 className="Course-heading-1">Course Details <br /></h4>
      <ul>
      <li><strong>Date:</strong> 27th January 2025 PM</li>
        <li><strong>Time:</strong> 5:30 to 7:30 PM</li>
        <li><strong>Mode:</strong> Offline</li>
        <li><strong>Pre-requisite:</strong> Basic understanding till if/else of any programming language</li>
      </ul>
      <p><strong>Brief Schedule:</strong></p>
      <ul>
        <li><strong>Day 1:</strong> Introduction to Kotlin and Jetpack Compose Basics</li>
        <li><strong>Day 2:</strong> Building the "CGPA Improver" App (Part 1)</li>
        <li><strong>Day 3:</strong> Finishing the "CGPA Improver" App</li>
        <li><strong>Day 4:</strong> Introduction to Firebase and Starting the "Tweeting App"</li>
        <li><strong>Day 5:</strong> Completing the "Tweeting App"</li>
      </ul>
      <p><strong>Projects Included:</strong></p>
      <ul>
        <li><strong>Secret Message Service</strong></li>
        <li><strong>CGPA Improver</strong></li>
        <li><strong>Tweeting App</strong></li>
      </ul>
      <RegisterButton
        url="https://docs.google.com/forms/d/e/1FAIpQLSdKphT1w1pm3UurWnJCjlQkJUwP8yoldC5rheLDwiD1_ytqbw/viewform?usp=dialog"
        description="Register Now"
        newTab={false}
      />
    </header>
  );
}

// Main NewContent component
function NewContent() {
  return (
    <>
      <Navbar />
      <img
        src={logo2}
        alt="Course banner"
        className="img-fluid responsive-logo"
        loading="lazy"
      />
      <div className="Course-content-container">
        <CourseDetails />
        <div className="Course-box-container container">
          <h2 className="Course-schedule-heading">Course Schedule</h2>
          <div className="row">
            {contentData.map((section, index) => (
              <div className="col-12" key={index}>
                <ContentBox heading={section.heading} content={section.content} />
              </div>
            ))}
          </div>
          <RegisterButton
            url="https://docs.google.com/forms/d/e/1FAIpQLSdKphT1w1pm3UurWnJCjlQkJUwP8yoldC5rheLDwiD1_ytqbw/viewform?usp=dialog"
            description="Register Now"
            newTab={true}
          />
        </div>
      </div>
      <SiteFooter />
    </>
  );
}

export default NewContent;