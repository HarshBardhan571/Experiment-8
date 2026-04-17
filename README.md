# ?? Experiment 8: Frontend Integration with JWT APIs (Session-Based UI)

This repository contains the React frontend implementation for Experiment 8, which connects to the Spring Boot backend from Experiment 6.

## ?? Project Explanation
* **React Frontend**: Connects directly to the backend authentication and protected APIs.
* **JWT Storage**: Upon successful login, the JWT is securely stored in the browser's sessionStorage.
* **Protected Routes**: The Dashboard route (/dashboard) is protected and can only be accessed using the token. The token is appended to the Authorization: Bearer <token> header for fetching secure API data.
* **Logout functionality**: Clears the token from sessionStorage and immediately redirects the user to the login screen.

## ?? Tech Stack
* **Frontend**: React.js, React Router DOM
* **Styling**: Material UI (@mui/material) & Custom CSS Glassmorphism
* **HTTP Client**: Axios

## ?? How to Execute / Run the Program
1. **Start the Backend (Experiment 6)**:
   Ensure the Spring Boot backend is running on \http://localhost:8080\ and CORS is enabled.
2. **Setup Frontend**:
   \\\ash
   cd frontend
   npm install
   \\\
3. **Run Frontend**:
   \\\ash
   npm start
   \\\
   The application will start on \http://localhost:3000\.

## ?? Execution Proof (Screenshots)
*(Note: Refer to the submitted document/form for the actual screenshot images, which verify the execution of the following)*
1. Login from frontend (React UI)
2. Token stored in sessionStorage (DevTools)
3. Access protected API (data visible on UI)
4. Unauthorized access (redirect to login)
5. Logout functionality
