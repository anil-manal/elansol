# Full Stack Register-Login-Dashboard Application

This project is a full-stack application that includes a registration and login system with a dashboard. The backend is built using Node.js and Express, the frontend is built using React, and MongoDB Atlas is used for the database.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Features

- User Registration
- User Login
- Dashboard for managing users
- Responsive design

## Tech Stack

**Frontend:**
- React
- React Bootstrap
- React Router DOM

**Backend:**
- Node.js
- Express
- MongoDB Atlas
- JWT for authentication

**Deployment:**
- Vercel for frontend
- Render for backend

## Installation

### Prerequisites

- Node.js installed on your local machine
- MongoDB Atlas account for database

### Backend Setup

1. Navigate to the backend directory:

    ```bash
    cd backend
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file in the `backend` directory and add the following environment variables:

    ```env
    PORT=5000
    MONGO_URI=your-mongodb-atlas-uri
    JWT_SECRET=your-jwt-secret
    ```

4. Start the backend server:

    ```bash
    npm start
    ```

### Frontend Setup

1. Navigate to the frontend directory:

    ```bash
    cd ../frontend
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file in the `frontend` directory and add the following environment variables:

    ```env
    REACT_APP_API_URL=http://localhost:5000
    ```

4. Start the frontend development server:

    ```bash
    npm run dev
    ```

## Usage

- Register a new user through the registration form.
- Login using the registered credentials.
- Access the dashboard to manage users.

## Deployment

### Deploying the Frontend

1. Sign up for a free account at [Vercel](https://vercel.com/).
2. Install Vercel CLI:

    ```bash
    npm install -g vercel
    ```

3. Navigate to the `frontend` directory and deploy:

    ```bash
    cd frontend
    vercel
    ```

4. Follow the prompts to set up and deploy your project.

### Deploying the Backend

1. Sign up for a free account at [Render](https://render.com/).
2. Connect your GitHub repository to Render.
3. Create a new Web Service on Render and provide the necessary build and start commands:

    - Build Command: `npm install`
    - Start Command: `node index.js`

4. Add the necessary environment variables in the Render dashboard.

5. Deploy your backend service.

### Updating Frontend API URL

After deploying the backend, update the `REACT_APP_API_URL` in the frontend `.env` file to point to the Render backend URL.

```env
REACT_APP_API_URL=https://your-backend-url.onrender.com

# License
Distributed under the MIT License. See LICENSE for more information.