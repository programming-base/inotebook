# iNotebook

A secure and intuitive note-taking application built with the MERN (MongoDB, Express, React, Node.js) stack, designed for users to create, manage, and organize their notes with different privacy levels.

 <!-- Replace with a screenshot of your app -->

## ✨ Features

-   **Secure User Authentication**: Robust login and signup functionality.
-   **OAuth 2.0 Integration**: Conveniently sign in with your Google or GitHub accounts.
-   **Rich Note Management**: A dedicated 'Compose' section to write and format your notes.
-   **Note Privacy Tiers**:
    -   **My Notes**: General notes accessible after logging in.
    -   **Private Notes**: Notes kept separate for enhanced privacy.
    -   **Secure Notes**: A conceptual tier for notes requiring an extra layer of security.
-   **Responsive & Modern UI**: A clean and intuitive interface built with Tailwind CSS that works seamlessly across all devices.
-   **Fast Client-Side Routing**: A smooth, single-page application experience powered by React Router.

## 🛠️ Tech Stack

-   **Frontend**:
    -   [React](https://reactjs.org/)
    -   [React Router](https://reactrouter.com/)
    -   [Tailwind CSS](https://tailwindcss.com/)
    -   [React Context API](https://reactjs.org/docs/context.html) (for authentication state)
    -   [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons) (for icons)
    -   [Lottie](https://lottiefiles.com/) (for loading animations)
-   **Backend**:
    -   [Node.js](https://nodejs.org/)
    -   [Express.js](https://expressjs.com/)
    -   [MongoDB](https://www.mongodb.com/) (with [Mongoose](https://mongoosejs.com/))
    -   [Passport.js](http://www.passportjs.org/) (for authentication strategies)
    -   [JSON Web Tokens (JWT)](https://jwt.io/)

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing.

### Prerequisites

-   [Node.js](https://nodejs.org/en/download/) (v18.x or higher is recommended)
-   `npm` (comes with Node.js)
-   MongoDB installed and running locally or a connection string to a cloud instance.

### Installation

1.  **Clone the repository**
    ```sh
    git clone https://github.com/your-username/inotebook.git
    cd inotebook
    ```

2.  **Set up the Backend**
    ```sh
    cd backend  # Or your backend folder name
    npm install
    ```
    Create a `.env` file in the `backend` directory. See the Environment Variables section below for the required keys.
    ```sh
    npm run dev # Start the backend server
    ```

3.  **Set up the Frontend**
    ```sh
    cd frontend
    npm install
    npm run dev # Start the frontend development server
    ```
    Your application should now be running. Open your browser and navigate to `http://localhost:5173` (or the port specified by Vite/Create React App).

## ⚙️ Environment Variables

The backend relies on a `.env` file for configuration. Create one in the root of your backend directory and add the following variables:

```env
# Server Port
PORT=3000

# MongoDB Connection URI
MONGO_URI=mongodb://localhost:27017/inotebook

# JWT Secret for signing tokens
JWT_SECRET=your_super_secret_jwt_key

# Google OAuth Credentials
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

# GitHub OAuth Credentials
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret
```

## 🚧 To-Do & Future Improvements

This project is a work in progress. Key areas for future development include:

-   [ ] **Dynamic Data Fetching**: Remove hardcoded user IDs and JWTs in `PrivateNotes.jsx` and `SecureNotes.jsx`. All data should be fetched based on the authenticated user's context.
-   [ ] **Implement Full CRUD**: Wire up the UI buttons to fully implement Create, Read, Update, and Delete functionality for all note types.
-   [ ] **Complete Login/Signup Form**: Implement the backend logic for the manual email/password login and signup form.
-   [ ] **Enhanced Error Handling**: Implement global error handling and display user-friendly feedback for API failures.
-   [ ] **Note Security Feature**: Develop the "Secure Note" feature, potentially with client-side or end-to-end encryption.
-   [ ] **Add Tests**: Write unit and integration tests for both the frontend components and backend API endpoints.

## 📄 License

This project is licensed under the MIT License. See the `LICENSE` file for details.