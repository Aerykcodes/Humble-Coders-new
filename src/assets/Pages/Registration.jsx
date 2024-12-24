import React from "react";
import Navbar from "../Navbar/Navbar";
import './registration.css';
import ContentSection from "../Content/ContentSection";
import Accordion from "../Content/Accordion";
import RegisterButton from "../Content/RegisterButton";
import 'bootstrap-icons/font/bootstrap-icons.css';  // Import Bootstrap icons
import SiteFooter from "../SiteFooter/SiteFooter";

export default function Registration() {
  return (
    <>
      <div className="main-container-Register">
        <Navbar />
        <br /><br /><br />
        <ContentSection />
        
        <Accordion
          title="Day 1: Introduction, Android Studio Setup and Kotlin Basics"
          content={
            <ul>
              <li><strong><i className="bi bi-star animated-icon"></i> Welcome to a journey of learning with Humble Coders:</strong> Start with an overview of the app development journey, explore the current trends in technology, and understand the roadmap to becoming an Android developer.</li>
              <li><strong><i className="bi bi-android animated-icon"></i> Android Studio Setup:</strong> Set up Android Studio, the primary IDE for Android development. Learn the basics of its interface, tools, and settings.</li>
              <li><strong><i className="bi bi-file-code animated-icon"></i> Kotlin: Basics Introduction:</strong> Get familiar with Kotlin syntax, data types, conditional and iterative statements, setting the foundation for building Android apps.</li>
            </ul>
          }
        />
        
        <br />
        
        <Accordion
          title="Day 2: Mastering Kotlin and Jetpack Compose Basics through a Console & Portfolio App"
          content={
            <ul>
              <li><strong><i className="bi bi-terminal animated-icon"></i> Kotlin: Complete Basics with Terminal App (Encryption/Decryption):</strong> Master Kotlin fundamentals like functions, and collections while creating a terminal-based encryption/decryption app, showcasing the practicality of Kotlin.</li>
              <li><strong><i className="bi bi-app animated-icon"></i> Jetpack Compose: Basics and Portfolio App:</strong> Discover Jetpack Compose, the modern toolkit for building Android UI. Build a portfolio app that includes images, text, buttons, covering layout basics and interactivity.</li>
            </ul>
          }
        />
        
        <br />
        
        <Accordion
          title="Day 3 & Day 4: Kickstart your App Dev journey: Build your own CGPA calculator"
          content={
            <ul>
              <li><strong><i className="bi bi-calculator animated-icon"></i> Create your own CGPA App with a Polished UI:</strong> From idea to reality, develop your first mobile application, a CGPA calculator with an intuitive and polished UI using Jetpack Compose. Focus on creating layouts, input fields, and displaying calculated results.</li>
              <li><strong><i className="bi bi-github animated-icon"></i> Deploy on GitHub and Phone:</strong> Learn the steps to version control your code with GitHub and deploy your app on a physical Android device, complete with a custom icon.</li>
            </ul>
          }
        />
        
        <br />
        
        <Accordion
          title="Day 5 to Day 8: Your first big leap: Creating a Wishlist APP with advanced features and UI"
          content={
            <ul>
              <li><strong><i className="bi bi-list-check animated-icon"></i> Building an Advanced Wishlist App:</strong> Leveraging MVVM, Room, and More for Enhanced Functionality: In this Wishlist app, we are combining modern Android development techniques to create a seamless and efficient user experience.</li>
              <li><strong><i className="bi bi-diagram-3 animated-icon"></i> MVVM Architecture:</strong> ViewModel handles the logic for fetching and updating wishlist items, ensuring a clean separation of concerns between UI and data.</li>
              <li><strong><i className="bi bi-grid-3x3-gap-fill animated-icon"></i> Lazy Row/Column:</strong> Lazy Row and Lazy Column display wishlist items efficiently, loading only visible items to optimize scrolling performance.</li>
              <li><strong><i className="bi bi-layers animated-icon"></i> Scaffold:</strong> Scaffold provides a flexible layout with components like AppBar, BottomNavigation, and a content area to structure the wishlist app's interface.</li>
              <li><strong><i className="bi bi-database animated-icon"></i> Room Database:</strong> Room Database stores and retrieves wishlist data locally, ensuring persistence even when the app is closed.</li>
              <li><strong><i className="bi bi-chat-dots animated-icon"></i> Toast Messages:</strong> Toast messages offer brief, non-intrusive notifications for actions like adding or deleting items from the wishlist.</li>
              <li><strong><i className="bi bi-arrow-right animated-icon"></i> Navigation:</strong> Navigation enables smooth transitions between different screens.</li>
              <li><strong><i className="bi bi-play-circle animated-icon"></i> Splash Screen:</strong> The first screen displayed on app startup.</li>
            </ul>
          }
        />
        
        <br />
        
        <Accordion
          title="Day 9: Craft Your Personal AI Companion: Build a Chatbot powered by ChatGPT"
          content={
            <ul>
              <li><strong><i className="bi bi-plug animated-icon"></i> Integrating ChatGPT API for AI Responses:</strong> Set up the ChatGPT API enabling seamless communication between your app and the AI model for generating real-time responses to user queries.</li>
              <li><strong><i className="bi bi-ui-checks-grid animated-icon"></i> Designing an Interactive Chat UI:</strong> Build a visually appealing and user-friendly chat interface using Jetpack Compose. Create a smooth conversation flow where users can easily send and receive messages.</li>
              <li><strong><i className="bi bi-reply-all animated-icon"></i> Handling Real-Time Messaging:</strong> Use Retrofit to handle API calls and manage real-time message exchanges between the user and ChatGPT, ensuring quick and accurate responses in the chatbot.</li>
            </ul>
          }
        />
        
        <br />
        
        <Accordion
          title="Day 10: Turn your App into a Bluetooth Detective: Scan nearby devices"
          content={
            <ul>
              <li><strong><i className="bi bi-bluetooth animated-icon"></i> Mastering Bluetooth Permissions:</strong> Learn to request and manage essential runtime permissions like BLUETOOTH_CONNECT and BLUETOOTH_SCAN. Ensure your app handles user consent seamlessly for secure Bluetooth access.</li>
              <li><strong><i className="bi bi-search animated-icon"></i> Building a Bluetooth Scanner App:</strong> Create an app that scans and retrieves details of nearby Bluetooth devices. Display the discovered devices in real-time, offering an interactive and user-friendly experience.</li>
              <li><strong><i className="bi bi-display animated-icon"></i> Dynamic and Engaging UI:</strong> Display scanned devices interactively using Jetpack Compose. Implement a dynamic list with LazyColumn to showcase detected devices in real-time for an intuitive user experience.</li>
            </ul>
          }
/>

<br />

<Accordion
  title="Day 11: Firebase: Power your App with real-time online database, authentication, and more"
  content={
    <ul>
      <li><strong><i className="bi bi-cloud-upload animated-icon"></i> Firebase Integration:</strong> Integrate Firebase for backend services like authentication and Firestore, connecting through the Firebase SDK.</li>
      <li><strong><i className="bi bi-lock animated-icon"></i> Learning Firebase Authentication:</strong> Use Firebase Authentication for secure sign-ups and logins via methods like email/password.</li>
      <li><strong><i className="bi bi-hdd-network animated-icon"></i> Implementing Firestore:</strong> Use Firestore for real-time data syncing and secure storage with built-in access control rules.</li>
    </ul>
  }
/>

<br />

<Accordion
  title="Day 12 & Day 13: Your next big Project: Develop your very own Chatting Application"
  content={
    <ul>
      <li><strong><i className="bi bi-chat-dots animated-icon"></i> User Signup and Real-Time Chat Functionality:</strong> Get ready to create your very first real-time chat room app! You’ll implement all the core features of app development, including user signups, logins, and live messaging. With Firebase for backend support, you'll learn how to manage users, sync data in real-time, and secure your app—all while building an engaging chat experience. Let’s bring your app to life with these exciting features!</li>
    </ul>
  }
/>

<br />
<Accordion
  title="Day 14 & Day 15: Learning App Essentials - Notifications, Services, and Receivers"
  content={
    <ul>
      <li><strong><i className="bi bi-bell animated-icon"></i> Notifications:</strong> Use Android's notification system to keep users engaged by delivering timely updates and alerts directly to their device.</li>
      <li><strong><i className="bi bi-play-circle animated-icon"></i> Foreground Services:</strong> Implement continuous background tasks with foreground services, ensuring critical processes run uninterrupted, even when the app is not in focus.</li>
      <li><strong><i className="bi bi-power animated-icon"></i> Boot Receivers:</strong> Enable app initialization on device startup by creating boot receivers, ensuring essential features or services are ready as soon as the device powers on.</li>
    </ul>
  }
/>

<br />

<Accordion
  title="Daily Add-ons"
  content={
    <ul>
      <li><strong><i className="bi bi-clipboard-check animated-icon"></i> Quizzes and Self-Tasks:</strong> Reinforce learning with daily challenges. Modify apps, submit UI screenshots, and write clean, efficient code.</li>
      <li><strong><i className="bi bi-book animated-icon"></i> Resources for Learning and Reading:</strong> Gain access to curated materials, including articles, tutorials, and documentation, to enhance your skills beyond the workshop.</li>
    </ul>
  }
/>

<br />

<RegisterButton />
</div>
<SiteFooter/>
    </>
  );
}
