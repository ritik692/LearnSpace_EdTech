# LearnSpace

[LearnSpace](https://learn-space-ed.vercel.app/) is a fully functional ed-tech platform that enables users to create, consume, and rate educational content. The platform is built using the MERN stack, which includes ReactJS, NodeJS, MongoDB, and ExpressJS.

## Introduction

**LearnSpace** aims to provide:
- A seamless and interactive learning experience for students, making education more accessible and engaging.
- A platform for instructors to showcase their expertise and connect with learners across the globe.

## Front-end

The front end of the platform is built using **ReactJS**, a popular JavaScript library for building user interfaces. ReactJS allows for the creation of dynamic and responsive user interfaces, which are critical for providing an engaging learning experience to students. The front end communicates with the back end using RESTful API calls.

### For Students:

- **Homepage**: This page will have a brief introduction to the platform, as well as links to the course list and user details.
- **Course List**: This page will have a list of all the courses available on the platform, along with their descriptions and ratings.
- **Wishlist**: This page will display all the courses that a student has added to their wishlist.
- **Cart Checkout**: This page will allow the user to complete the course purchase.
- **Course Content**: This page will have the course content for a particular course, including videos, and other related material.
- **User Details**: This page will have details about the student's account, including their name, email, and other relevant information.
- **User Edit Details**: This page will allow the student to edit their account details.

### For Instructors:

- **Dashboard**: This page will have an overview of the instructor's courses, as well as the ratings and feedback for each course.
- **Insights**: This page will have detailed insights into the instructor's courses, including the number of views, clicks, and other relevant metrics.
- **Course Management Pages**: These pages will allow the instructor to create, update, and delete courses, as well as manage the course content and pricing.
- **View and Edit Profile Details**: These pages will allow the instructor to view and edit their account details.

## Back-end

The back end of the platform is built using **NodeJS** and **ExpressJS**, popular frameworks for building scalable and robust server-side applications. The back end provides APIs for the front end to consume, which include functionalities such as user authentication, course creation, and course consumption. The back end also handles the logic for processing and storing the course content and user data.

### Features and Functionalities of the Back-end:

1. **User Authentication and Authorization**: Students and instructors can sign up and log in to the platform using their email addresses and passwords. The platform also supports OTP (One-Time Password) verification and forgot password functionality for added security.
2. **Course Management**: Instructors can create, read, update, and delete courses, as well as manage course content and media. Students can view and rate courses.
3. **Payment Integration**: Students will purchase and enroll in courses by completing the checkout flow that is followed by Razorpay integration for payment handling.
4. **Cloud-based Media Management**: LearnSpace uses Cloudinary, a cloud-based media management service, to store and manage all media content, including images, videos, and documents.
5. **Markdown Formatting**: Course content in document format is stored in Markdown format, which allows for easier display and rendering on the front end.

### Frameworks, Libraries, and Tools used:

- **Node.js**: Used as the primary framework for the back end.
- **MongoDB**: Used as the primary database, providing a flexible and scalable data storage solution.
- **Express.js**: Used as a web application framework, providing a range of features and tools for building web applications.
- **JWT**: JSON Web Tokens are used for authentication and authorization, providing a secure and reliable way to manage user credentials.
- **Bcrypt**: Used for password hashing, adding an extra layer of security to user data.
- **Mongoose**: Used as an Object Data Modeling (ODM) library, providing a way to interact with MongoDB using JavaScript.

### Data Models and Database Schema:

- **Student Schema**: Includes fields such as name, email, password, and course details for each student.
- **Instructor Schema**: Includes fields such as name, email, password, and course details for each instructor.
- **Course Schema**: Includes fields such as course name, description, instructor details, and media content.

Overall, the back end of LearnSpace is designed to provide a robust and scalable solution for an ed-tech platform, focusing on security, reliability, and ease of use.
