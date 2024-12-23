import React from "react";
import Navbar from "../Navbar/Navbar";
import './registration.css';
import ContentSection from "../Content/ContentSection";
import Accordion from "../Content/Accordion";
import RegisterButton from "../Content/RegisterButton";
import 'bootstrap-icons/font/bootstrap-icons.css';  // Import Bootstrap icons

export default function Registration() {
  return (
    <>
      <div className="main-container-Register">
        <Navbar />
        <br /><br /><br />
        <ContentSection />
        
        <Accordion
          title="Day 1: Introduction to Android Development"
          content={
            <ul>
              <li><strong><i className="bi bi-android animated-icon"></i> Android Studio Setup:</strong> Set up Android Studio, the primary IDE for Android development. Learn the basics of its interface, tools, and settings.</li>
              <li><strong><i className="bi bi-file-earmark-code animated-icon"></i> Kotlin Basics:</strong> Get familiar with Kotlin syntax, data types, conditional and iterative statements. Set the foundation for building Android apps.</li>
            </ul>
          }
        />
        
        <br />
        
        <Accordion
          title="Day 2: Mastering Kotlin and Jetpack Compose Basics"
          content={
            <ul>
              <li><strong><i className="bi bi-file-earmark-code animated-icon"></i> Kotlin Basics:</strong> Master Kotlin fundamentals like functions, collections, and more. Build a terminal-based encryption/decryption app to showcase Kotlin's practicality.</li>
              <li><strong><i className="bi bi-app animated-icon"></i> Jetpack Compose:</strong> Discover the modern toolkit for building Android UI. Build a portfolio app with images, text, buttons, covering layout basics and interactivity.</li>
            </ul>
          }
        />
        
        <br />
        
        <Accordion
          title="Day 3: Kickstart Your App Dev Journey"
          content={
            <ul>
              <li><strong>CGPA Calculator App:</strong> Develop your first mobile app, a CGPA calculator with an intuitive and polished UI using Jetpack Compose.</li>
              <li><strong><i className="bi bi-github animated-icon"></i> Deploy on GitHub and Android Phone:</strong> Learn version control with GitHub and deploy the app on a physical Android device.</li>
            </ul>
          }
        />
        
        <br />
        
        <Accordion
          title="Day 4 & Day 5: Advanced Features in Wishlist App"
          content={
            <ul>
              <li><strong><i className="bi bi-diagram-3 animated-icon"></i> MVVM Architecture:</strong> Use ViewModel to handle business logic, ensuring separation between UI and data.</li>
              <li><strong><i className="bi bi-database animated-icon"></i> Room Database:</strong> Integrate Room for local storage of wishlist data.</li>
              <li><strong><i className="bi bi-ui-checks-grid animated-icon"></i> UI Features:</strong> Implement Lazy Row/Column, Scaffold layout, and more to display wishlist items efficiently.</li>
              <li><strong><i className="bi bi-box-arrow-in-right animated-icon"></i> Navigation:</strong> Learn how to navigate between different screens in the app.</li>
            </ul>
          }
        />
        
        <br />
        
        <Accordion
          title="Day 6: Working with APIs"
          content={
            <ul>
              <li><strong><i className="bi bi-plug animated-icon"></i> API Basics:</strong> Learn about APIs and how to fetch or send data over the internet. Build a single-screen app that interacts with a live API (e.g., a chatbot app using ChatGPT).</li>
            </ul>
          }
        />
        
        <br />
        
        <Accordion
          title="Day 7: Building a Location-Based App"
          content={
            <ul>
              <li><strong><i className="bi bi-geo-alt animated-icon"></i> Permissions & Location Services:</strong> Build an app using Android's location services. Handle runtime permissions and create a GPS-based feature to display user locations.</li>
            </ul>
          }
        />
        
        <br />
        
        <Accordion
          title="Day 8: Firebase Integration"
          content={
            <ul>
              <li><strong><i className="bi bi-lock animated-icon"></i> Firebase Authentication:</strong> Use Firebase Authentication for secure sign-ups and logins.</li>
              <li><strong><i className="bi bi-cloud-upload animated-icon"></i> Firestore:</strong> Use Firestore for real-time data syncing and secure storage.</li>
            </ul>
          }
        />
        
        <br />
        
        <Accordion
          title="Day 9: Chatting Application Project"
          content={
            <ul>
              <li><strong><i className="bi bi-chat-dots animated-icon"></i> Real-Time Chat Functionality:</strong> Implement real-time chat features in your app using Firebase for backend support.</li>
              <li><strong><i className="bi bi-people animated-icon"></i> User Management:</strong> Learn how to manage users and secure your chat app.</li>
            </ul>
          }
        />
        
        <br />
        
        <Accordion
          title="Day 10: Learning App Essentials - Notifications, Services, and Receivers"
          content={
            <ul>
              <li><strong><i className="bi bi-bell animated-icon"></i> Notifications:</strong> Use Android's notification system to keep users engaged with timely updates.</li>
              <li><strong><i className="bi bi-play-circle animated-icon"></i> Foreground Services:</strong> Implement continuous background tasks with foreground services.</li>
              <li><strong><i className="bi bi-power animated-icon"></i> Boot Receivers:</strong> Ensure your app initializes properly upon device startup.</li>
            </ul>
          }
        />
        
        <br />
        
        <Accordion
          title="Daily Add-ons"
          content={
            <ul>
              <li><strong className="subheading"><i className="bi bi-clipboard-check animated-icon"></i> Quizzes and Self-Tasks:</strong> Reinforce learning with daily challenges. Modify apps, submit UI screenshots, and write clean, efficient code.</li>
              <li><strong><i className="bi bi-book animated-icon"></i> Resources for Learning and Reading:</strong> Access curated materials, including articles, tutorials, and practice problems to supplement your learning.</li>
            </ul>
          }
        />
        
        <br />
        
        <RegisterButton />
      </div>
    </>
  );
}
