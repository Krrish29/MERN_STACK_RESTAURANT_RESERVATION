# Restaurant Reservation System (MERN Stack)

## Overview
A web application for making and managing restaurant reservations using the MERN stack.

## Features
- User authentication
- Browse available tables & book reservations
- Admin dashboard for managing bookings
- Responsive design

## Tech Stack
- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Auth**: JWT, bcrypt.js

## Installation
1. **Clone repo**: `git clone https://github.com/your-repo/restaurant-reservation.git`
2. **Backend setup**:
   ```sh
   cd backend && npm install && npm start
   ```
3. **Frontend setup**:
   ```sh
   cd frontend && npm install && npm start
   ```
4. **.env setup**:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection
   JWT_SECRET=your_secret_key
   ```

## API Endpoints
- `POST /api/reservations` - Make a reservation
- `GET /api/reservations` - Get reservations

