import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Content.css'; // Import custom CSS
import Navbar from '../../navbar/Navbar'; // Import Navbar component
import ContentBox from './ContentBox'; // Import ContentBox component
import SiteFooter from '../../SiteFooter/SiteFooter';

function Content() {
  const contentData = [
    {
      heading: "Day 1: Introduction, Android Studio Setup and Kotlin Basics",
      content: `
        <ul>
          <li><strong>Topics of the Day:</strong></li>
          <ul>
            <li>Introduction:</li>
            <ul>
              <li>Overview of the app development journey.</li>
              <li>Exploration of current trends in technology.</li>
              <li>Understanding the roadmap to becoming an Android developer.</li>
            </ul>
            <li>Android Studio Setup:</li>
            <ul>
              <li>Setting up Android Studio, the primary IDE for Android development.</li>
              <li>Learning the basics of its interface, tools, and settings.</li>
            </ul>
            <li>Kotlin: Basics Introduction:</li>
            <ul>
              <li>Get familiar with Kotlin syntax</li>
              <li>Understanding data types in Kotlin.</li>
              <li>Learning conditional and iterative statements.</li>
              <li>Building a foundation for Android app development.</li>
            </ul>
          </ul>
          <li><strong>Self Learning:</strong></li>
          <ul>
            <li>Explore the Android Studio interface and understand basic tools like Logcat, Emulator, and Build variants.</li>
          </ul>
          <li><strong>Resource of the Day:</strong></li>
          <ul>
            <li><a href="https://developer.android.com/studio?gad_source=1&gclid=Cj0KCQiAvbm7BhC5ARIsAFjwNHsGqZpGQhyPMi3jxt2UfxjjZM8odNrB6RTDdicZDEbBIwzCDvOvJ68aAhSGEALw_wcB&gclsrc=aw.ds">Android Studio download link</a></li>
            <li><a href="https://developer.android.com/studio?gad_source=1&gclid=Cj0KCQiAvbm7BhC5ARIsAFjwNHulZpUETEWn4D2bALMoR-QyBN0Bwjmvl9Hdurlq_vR3uyeAGzaMrh0aAs9VEALw_wcB&gclsrc=aw.ds">Android Studio Installation Guide</a></li>
            <li><a href="https://kotlinlang.org/docs/home.html">Kotlin Official Documentation link</a></li>
            <li><a href="https://developer.android.com/tools/logcat">Logcat Documentation: Official Guide: Write and View Logs with Logcat</a></li>
            <li><a href="https://developer.android.com/studio/run/emulator">Emulator (Virtual Device Testing) Documentation: Official Guide: Run Apps on the Emulator</a></li>
          </ul>
          <li><strong>Daily Tasks:</strong></li>
          <ul>
            <li>Write a basic "Hello, World!" program in Kotlin.</li>
            <li>Practice Kotlin’s data types, variables, and simple conditionals.</li>
          </ul>
        </ul>
      `
    },
    {
      heading: "Day 2: Mastering Kotlin and Jetpack Compose Basics",
      content: `
        <ul>
          <li><strong>Topics of the Day:</strong></li>
          <ul>
            <li>Master Kotlin fundamentals, including:</li>
            <ul>
              <li>Functions and their usage.</li>
              <li>Collections and operations on them.</li>
            </ul>
            <li>Build a terminal-based encryption/decryption app:</li>
            <ul>
              <li>Apply Kotlin concepts to a practical project.</li>
              <li>Explore real-world use cases of Kotlin programming.</li>
            </ul>
            <li>Introduction to Jetpack Compose, the modern toolkit for building Android UI.</li>
            <li>Learn layout basics and interactivity:</li>
            <ul>
              <li>Work with images, text, and buttons.</li>
              <li>Explore Jetpack Compose's declarative approach to UI development.</li>
            </ul>
            <li>Build a portfolio app to showcase skills and projects.</li>
          </ul>
          <li><strong>Self Learning:</strong></li>
          <ul>
            <li>Research how encryption works for strings.</li>
            <li>Explore Jetpack Compose’s layout system.</li>
          </ul>
          <li><strong>Resource of the Day:</strong></li>
          <ul>
            <li><a href="https://www.geeksforgeeks.org/kotlin-android-tutorial/">Kotlin Collections and Functions: link</a></li>
            <li><a href="https://developer.android.com/develop/ui/compose/documentation">Jetpack Compose Basics: Jetpack Compose Overview</a></li>
            <li><a href="https://developer.android.com/develop/ui/compose/layouts">Layout Basics and Interactivity: Compose Layouts Guide</a></li>
          </ul>
          <li><strong>Daily Tasks:</strong></li>
          <ul>
            <li>Build a terminal-based encryption/decryption app in Kotlin.</li>
            <li>Design a simple Jetpack Compose portfolio app with an image, text, and button.</li>
          </ul>
        </ul>
      `
    },
    {
      heading: "Day 3 & Day 4: Build your own CGPA calculator mobile application and deploy on GitHub",
      content: `
        <ul>
          <li><strong>Topics of the Day:</strong></li>
          <ul>
            <li>Develop your first mobile application, a CGPA calculator.</li>
            <li>Use Jetpack Compose for an intuitive and polished UI.</li>
            <li>Focus on creating layouts, input fields, and displaying calculated results.</li>
            <li>Deploy on GitHub and Phone:</li>
            <ul>
              <li>Learn how to version control your code using GitHub.</li>
              <li>Deploy your app to a physical Android device.</li>
              <li>Add a custom icon to your app.</li>
            </ul>
          </ul>
          <li><strong>Self Learning:</strong></li>
          <ul>
            <li>Read about state management in Jetpack Compose.</li>
            <li>Understand the basics of APK generation.</li>
          </ul>
          <li><strong>Resource of the Day:</strong></li>
          <ul>
            <li><a href="https://developer.android.com/develop/ui/compose/layouts">Jetpack Compose Layouts: Compose Layouts</a></li>
            <li><a href="https://docs.github.com/en/get-started">Git and GitHub Basics: GitHub Docs</a></li>
            <li><a href="https://www.geeksforgeeks.org/methods-of-generating-apk-of-android-application/">APK Generation and Build Process: Build and Generate APK in Android Studio</a></li>
            <li><a href="https://developer.android.com/develop/ui/compose/state">State Management in Jetpack Compose</a></li>
          </ul>
          <li><strong>Daily Tasks:</strong></li>
          <ul>
            <li>Design the UI for the CGPA calculator with input fields and output display.</li>
            <li>Implement CGPA calculation logic.</li>
            <li>Push your project to GitHub and deploy it on an Android device.</li>
          </ul>
        </ul>
      `
    },
    {
      heading: "Day 5 to Day 8: Advanced Wishlist App",
      content: `
        <ul>
          <li><strong>Topics of the Day:</strong></li>
          <ul>
            <li>MVVM Architecture</li>
            <ul>
              <li>ViewModel handles the logic for fetching and updating wishlist items.</li>
              <li>Ensures clean separation of concerns between UI and data.</li>
            </ul>
            <li>Lazy Row/Column</li>
            <ul>
              <li>Learn how to make anything scrollable in your app.</li>
              <li>Efficiently displays wishlist items.</li>
            </ul>
            <li>Scaffold</li>
            <ul>
              <li>Provides a flexible layout with components like AppBar, BottomNavigation, and a content area.</li>
              <li>Structures the wishlist app’s interface.</li>
            </ul>
            <li>Room Database</li>
            <ul>
              <li>Use Local storage as a database in your mobile.</li>
              <li>Stores and retrieves wishlist data locally.</li>
            </ul>
            <li>Toast Messages</li>
            <ul>
              <li>Display pop-up messages to communicate with users.</li>
            </ul>
            <li>Navigation</li>
            <ul>
              <li>Enables smooth transitions between different screens in the app.</li>
            </ul>
            <li>Splash Screen</li>
            <ul>
              <li>The first screen displayed on app startup.</li>
            </ul>
          </ul>
          <li><strong>Self Learning:</strong></li>
          <ul>
            <li>Research LazyRow and LazyColumn in Jetpack Compose.</li>
            <li>Learn to implement custom Toast messages.</li>
          </ul>
          <li><strong>Resources of the Day:</strong></li>
          <ul>
            <li><a href="https://www.geeksforgeeks.org/mvvm-model-view-viewmodel-architecture-pattern-in-android/">MVVM Architecture in Android: link</a></li>
            <li><a href="https://developer.android.com/develop/ui/compose/lists#lazycolumn-and-lazyrow">LazyRow and LazyColumn in Jetpack Compose</a></li>
            <li><a href="https://developer.android.com/develop/ui/compose/components/scaffold">Scaffold in Jetpack Compose: link</a></li>
            <li><a href="https://developer.android.com/reference/android/widget/Toast">Toast Messages in Android</a></li>
          </ul>
          <li><strong>Daily Tasks:</strong></li>
          <ul>
            <li>Create the app’s architecture with MVVM.</li>
            <li>Set up Room database for local storage.</li>
            <li>Design and implement LazyColumn for displaying wishlist items.</li>
            <li>Integrate navigation and scaffold components.</li>
          </ul>
        </ul>
      `
    },
    {
      heading: "Day 9: Crafting Your Personal AI Companion",
      content: `
        <ul>
          <li><strong>Topics of the Day:</strong></li>
          <ul>
            <li>Set up the ChatGPT API to enable communication between your app and the AI model.</li>
            <li>Allow the app to generate real-time responses to user queries.</li>
            <li>Build a visually appealing and easy-to-use chat interface using Jetpack Compose.</li>
            <li>Create a smooth conversation flow where users can send and receive messages easily.</li>
            <li>Handling Real-Time Messaging</li>
            <ul>
              <li>Use Retrofit to manage API calls and real-time messaging.</li>
              <li>Ensure quick and accurate responses between the user and ChatGPT in the chat bot.</li>
            </ul>
          </ul>
          <li><strong>Self Learning:</strong></li>
          <ul>
            <li>Explore Retrofit’s integration with Jetpack Compose.</li>
            <li>Learn about handling JSON responses in Kotlin.</li>
          </ul>
          <li><strong>Resources of the Day:</strong></li>
          <ul>
            <li><a href="https://platform.openai.com/docs/guides/text-generation">OpenAI API Documentation: ChatGPT</a></li>
            <li><a href="https://developer.android.com/develop/ui/compose/documentation">Jetpack Compose: Building a Chat UI (Codelab)</a></li>
            <li><a href="https://square.github.io/retrofit/">Retrofit Documentation</a></li>
            <li><a href="#">Handling JSON with Retrofit and Gson in Kotlin</a></li>
          </ul>
          <li><strong>Daily Tasks:</strong></li>
          <ul>
            <li>Set up the ChatGPT API for response generation.</li>
            <li>Build an interactive chat UI using Jetpack Compose.</li>
            <li>Test real-time messaging between the user and ChatGPT.</li>
          </ul>
        </ul>
      `
    },
    {
      heading: "Day 10: Bluetooth Scanner App",
      content: `
        <ul>
          <li><strong>Topics of the Day:</strong></li>
          <ul>
            <li>Learn to request and manage runtime Bluetooth permissions like BLUETOOTH_CONNECT and BLUETOOTH_SCAN.</li>
            <li>Ensure your app handles user consent seamlessly for secure Bluetooth access.</li>
            <li>Create an app that scans and retrieves details of nearby Bluetooth devices, displaying them in real-time for an interactive and user-friendly experience.</li>
            <li>Display scanned devices interactively using Jetpack Compose.</li>
            <li>Implement a dynamic list with LazyColumn to showcase detected devices in real-time for an intuitive user experience.</li>
          </ul>
          <li><strong>Self Learning:</strong></li>
          <ul>
            <li>Learn about different kinds of permissions in Android.</li>
          </ul>
          <li><strong>Resources of the Day:</strong></li>
          <ul>
            <li><a href="https://developer.android.com/develop/connectivity/bluetooth/bt-permissions">Bluetooth Permissions in Android</a></li>
            <li><a href="https://developer.android.com/compose">Jetpack Compose Basics</a></li>
            <li><a href="https://developer.android.com/develop/ui/compose/lists#lazycolumn">LazyColumn in Jetpack Compose</a></li>
          </ul>
          <li><strong>Daily Tasks:</strong></li>
          <ul>
            <li>Create an app that requests Bluetooth permissions.</li>
            <li>Display a list of scanned devices in real-time using LazyColumns.</li>
          </ul>
        </ul>
      `
    },
    {
      heading: "Day 11: Firebase Integration",
      content: `
        <ul>
          <li><strong>Topics of the Day:</strong></li>
          <ul>
            <li>Learn how to use a cloud database made by Google.</li>
            <li>Integrate Firebase for backend services like authentication and Firestore.</li>
            <li>Learn how to make a sign-up and login page.</li>
            <li>Use Firestore for real-time data syncing and secure storage.</li>
            <li>Set up built-in access control rules to manage data security.</li>
          </ul>
          <li><strong>Self Learning:</strong></li>
          <ul>
            <li>Understand Firebase’s security rules.</li>
            <li>Explore Firestore’s querying capabilities.</li>
          </ul>
          <li><strong>Resources of the Day:</strong></li>
          <ul>
            <li><a href="https://firebase.google.com/docs/functions/get-started?gen=2nd">Get Started with Firebase in Android</a></li>
            <li><a href="https://firebase.google.com/docs/android/setup">Firebase SDK Setup for Android</a></li>
            <li><a href="https://firebase.google.com/docs/firestore">Firestore Documentation</a></li>
          </ul>
          <li><strong>Daily Tasks:</strong></li>
          <ul>
            <li>Implement user authentication with Firebase.</li>
            <li>Set up Firestore to store and retrieve app data.</li>
          </ul>
        </ul>
      `
    },
    {
      heading: "Day 12 & Day 13: Develop your Real-Time Chatting Application",
      content: `
        <ul>
          <li><strong>Topics of the Day:</strong></li>
          <ul>
            <li>Use Firebase Authentication to securely manage user accounts, signups, and logins.</li>
            <li>Use Firebase Firestore to sync messages in real-time, enabling an interactive chat experience between users.</li>
            <li>Use Firebase as the backend to manage users, store messages, and handle data syncing.</li>
            <li>Ensure secure data access with Firestore security rules.</li>
            <li>Design a user-friendly chat interface that shows messages in real-time, ensuring a smooth and engaging conversation flow.</li>
          </ul>
          <li><strong>Self Learning:</strong></li>
          <ul>
            <li>Research best practices for managing chat data.</li>
            <li>Learn about LiveData’s role in real-time updates.</li>
          </ul>
          <li><strong>Resources of the Day:</strong></li>
          <ul>
            <li><a href="https://firebase.google.com/docs/auth">Firebase Authentication Documentation</a></li>
            <li><a href="https://firebase.google.com/docs/firestore">Firebase Firestore Documentation</a></li>
            <li><a href="https://firebase.google.com/docs/rules">Firestore Security Rules</a></li>
          </ul>
          <li><strong>Daily Tasks:</strong></li>
          <ul>
            <li>Build user signup and login flows.</li>
            <li>Implement real-time messaging functionality with Firebase Firestore.</li>
            <li>Design a User-Friendly Chat UI.</li>
          </ul>
        </ul>
      `
    },
    {
      heading: "Day 14 & Day 15: Notifications, Services, and Receivers",
      content: `
        <ul>
          <li><strong>Topics of the Day:</strong></li>
          <ul>
            <li>Use Android’s notification system to send timely updates and alerts to users, keeping them engaged with your app.</li>
            <li>Implement foreground services to run continuous background tasks, ensuring critical processes remain active even when the app is not in focus.</li>
            <li>Create boot receivers to initialize the app’s essential features or services upon device startup, ensuring readiness as soon as the device powers on.</li>
          </ul>
          <li><strong>Self Learning:</strong></li>
          <ul>
            <li>Learn how to trigger app behavior on device boot.</li>
            <li>Explore different types of notifications in Android.</li>
          </ul>
          <li><strong>Resources of the Day:</strong></li>
          <ul>
            <li><a href="https://developer.android.com/develop/ui/views/notifications">Notifications Overview</a></li>
            <li><a href="https://developer.android.com/develop/background-work/services#Foreground">Foreground Service Documentation</a></li>
            <li><a href="https://developer.android.com/reference/android/content/BroadcastReceiver">Broadcast Receivers for Device Boot</a></li>
          </ul>
          <li><strong>Daily Tasks:</strong></li>
          <ul>
            <li>Implement notifications to engage users.</li>
            <li>Create a foreground service for background tasks.</li>
            <li>Build a boot receiver for app initialization.</li>
          </ul>
        </ul>
      `
    } 
  ];

  return (
    <>
      <Navbar />
      <div className="Content-container">
        <header className="Title-box">
        <h4 className="text-center"> Course Details: <br /> </h4>

<p><strong>Time:</strong></p>
<ul>
  <li><strong>Online:</strong> 6:00 to 8:00 PM</li>
</ul>

<p><strong>Note:</strong></p>
<ul>
  <li>(1) Be on Time</li>
  <li>(2) Bring your Laptop</li>
</ul>

<p><strong>Brief Schedule:</strong></p>
<ul>
  <li><strong>Day 1:</strong> Introduction, Android Studio Setup and Kotlin Basics</li>
  <li><strong>Day 2:</strong> Mastering Kotlin and Jetpack Compose Basics</li>
  <li><strong>Day 3 & Day 4:</strong> Build your own CGPA calculator mobile application and deploy on GitHub</li>
  <li><strong>Day 5 to Day 8:</strong> Advanced Wishlist App</li>
  <li><strong>Day 9:</strong> Crafting Your Personal AI Companion</li>
  <li><strong>Day 10:</strong> Bluetooth Scanner App</li>
  <li><strong>Day 11:</strong> Firebase Integration</li>
  <li><strong>Day 12 & Day 13:</strong> Develop your Real-Time Chatting Application</li>
  <li><strong>Day 14 & Day 15:</strong> Notifications, Services, and Receivers</li>
</ul>

        </header>
        <div className="Box-Container container">
          <h2 className="text-center my-4">Course Schedule</h2>
          <h3 className="text-center my-4">Week 1: Building Foundations and Core Android Concepts</h3>
          <div className="row">
            {contentData.slice(0, 4).map((section, index) => (
              <div className="col-12" key={index}>
                <ContentBox 
                  heading={section.heading} 
                  content={<div dangerouslySetInnerHTML={{ __html: section.content }} />} 
                />
              </div>
            ))}
          </div>
          <h3 className="text-center my-4">Week 2: Advanced Projects and Modern Development Techniques</h3>  {/* Inserted heading */}
          <div className="row">
            {contentData.slice(4).map((section, index) => (
              <div className="col-12" key={index}>
                <ContentBox 
                  heading={section.heading} 
                  content={<div dangerouslySetInnerHTML={{ __html: section.content }} />} 
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <SiteFooter />
    </>
  );
  
}

export default Content;
