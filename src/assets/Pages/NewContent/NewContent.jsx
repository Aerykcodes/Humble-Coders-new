import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NewContent.css'// Import custom CSS
import Navbar from '../../Navbar/Navbar'; // Import Navbar component
import ContentBox from '../Content/ContentBox'; // Import ContentBox component
import SiteFooter from '../../SiteFooter/SiteFooter';
import RegisterButton from '../../RegisterButton/RegisterButton';


function NewContent() {
    const contentData = [
        {
          heading: "Topic 1: Introduction, Android Studio Setup and Kotlin Basics",
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
          heading: "Topic 2: Kotlin and Jetpack Compose Basics",
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
                <li><a href="https://github.com/RitvikSingla/Content/blob/d93c6ab074665a16af6d0cda3139dab70eb41da9/README.md">Program Codes</a></li>
                </ul>
              <li><strong>Daily Tasks:</strong></li>
              <ul>
                <li>Build a terminal-based encryption/decryption app in Kotlin.</li>
                <li>Design a simple Jetpack Compose portfolio app with an image, text, and button.</li>
              </ul>
            </ul>
          `
        }
    ];

return (
    <>
      <Navbar />
      <div className="Course-content-container">
        <header className="Course-title-box">
        <h4 className="Course-heading-1"> Course Details <br /> </h4>

<ul>
  <li><strong>Time :</strong> 6:00 to 8:00 PM </li>
  <li><strong>Mode :</strong> Online </li>
  <li><strong>Platform :</strong> Zoom </li>

</ul>

<p><strong>Brief Schedule:</strong></p>
<ul>
  <li><strong>Topic 1:</strong> Introduction, Android Studio Setup and Kotlin Basics</li>
  <li><strong>Topic 2:</strong> Mastering Kotlin and Jetpack Compose Basics</li>
  <li><strong>Topic 3:</strong> Build your own CGPA calculator mobile application </li>
  <li><strong>Topic 4:</strong> Advanced Wishlist App</li>
  <li><strong>Topic 5:</strong> Crafting Your Personal AI Companion</li>
  <li><strong>Topic 6:</strong> Bluetooth Scanner App</li>
  <li><strong>Topic 7:</strong> Firebase Integration</li>
  <li><strong>Topic 8:</strong> Develop your Real-Time Chatting Application</li>
  <li><strong>Topic 9:</strong> Notifications, Services, and Receivers</li>
  <RegisterButton
   url="/registration" description="Register Now" newTab={false}
   />
</ul>

        </header>
        <div className="Course-box-container container">
          <h2 className="Course-schedule-heading">Course Schedule</h2>
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
          <RegisterButton 
           url="/registration" description="Register Now" newTab={false}
           />
        </div>
      </div>
      <SiteFooter />
    </>
  );
}

export default NewContent;
