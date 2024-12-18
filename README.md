I've updated the `README.md` to reflect the server and React app hosting for both local development and production environments. Let me know if you need any further edits:

---

# Project 4: Node.js Express Forum

## Project Overview
This project is a **forum application** built using the **3-tier architecture**. It allows users to register, log in, ask questions, and provide answers. The app demonstrates full-stack development with a **Node.js and Express backend** and a **React frontend**.

## Features
- **User Registration and Authentication**
- **Categories for Questions**
- **Create, Read, and Display Questions**
- **Submit and Display Answers**
- **Logout Functionality**

## Technologies Used

### Backend
- **Node.js**
- **Express.js**
- **MongoDB** (with Mongoose for ODM)

### Frontend
- **React**
- **React Router**
- **CSS** (Modular CSS for styling)

### Other Tools
- **Axios** for HTTP requests
- **Git & GitHub** for version control

## Setup and Installation

### Prerequisites
- **Node.js** (v14+)
- **MongoDB** (installed locally or using an online service like MongoDB Atlas)

### Clone Repositories

```bash
# Clone the frontend repository
git clone https://github.com/kevinfrayed-knot/Project4-Frontend-React-App.git

# Clone the backend repository
git clone https://github.com/kevinfrayed-knot/project4-backend-server.git
```

### Backend Setup

1. **Navigate to the backend folder**:
   ```bash
   cd project4-backend-server
   ```
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Set up environment variables**:
   Create a `.env` file with the following:
   ```env
   PORT=8080
   MONGO_URI=your-mongodb-connection-string
   JWT_SECRET=your-jwt-secret
   ```
4. **Start the server**:
   ```bash
   npm start
   ```
   The server will run on:
   - **Local Development**: `http://localhost:8080`
   - **Production**: `https://project4-backend-server.onrender.com`

### Frontend Setup

1. **Navigate to the frontend folder**:
   ```bash
   cd Project4-Frontend-React-App
   ```
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Start the frontend app**:
   ```bash
   npm start
   ```
   The app will run on:
   - **Local Development**: `http://localhost:3000`
   - **Production**: `https://kevinfrayed-knot.github.io/Project4-Frontend-React-App/`

## Usage Instructions

1. **Register** a new user.
2. **Log in** with your credentials.
3. **View categories** in the sidebar.
4. **Select a category** to view related questions.
5. **Ask a new question** by clicking the "New Question" button.
6. **Submit answers** to existing questions.
7. **Log out** to end your session.

## User Stories

### User Story 1: User Registration
- **As a** new user,
- **I want** to register with my username and password,
- **So that** I can log in and participate in the forum.

### User Story 2: View and Select Categories
- **As a** logged-in user,
- **I want** to view a list of categories,
- **So that** I can select a category to see related questions.

### User Story 3: Submit Answers
- **As a** logged-in user,
- **I want** to submit answers to questions,
- **So that** I can help others and contribute to the community.

## Links

- **Frontend Repository**: [Project4-Frontend-React-App](https://github.com/kevinfrayed-knot/Project4-Frontend-React-App)
- **Backend Repository**: [project4-backend-server](https://github.com/kevinfrayed-knot/project4-backend-server)

---

## Wireframe

### Wireframe Layout Description

```
+-----------------------------------------------------------+
| Navbar (New Category | New Question | Logout)            |
+-----------------------------------------------------------+
| Sidebar (Categories)   | Main Content Area                |
|------------------------|----------------------------------|
| - General              | [Question List or New Question] |
| - Web Development      |                                  |
| - HTML                 |                                  |
| - CSS                  |                                  |
| - JavaScript           |                                  |
| - Node.js              |                                  |
+------------------------+----------------------------------+
```

### Main Components

1. **Navbar**: Contains "New Category", "New Question", and "Logout" links.
2. **Sidebar**: Displays a list of categories.
3. **Main Content Area**: Displays questions, question details, or forms depending on user interaction.

---

