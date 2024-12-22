# Dating Site API

## Description

A RESTful API for a dating site with features like user matching, messaging, and moderation.

## Members

Your Name: Your GitHub Username

## Fonctionnalités

- Authentication & Authorization: JWT-based authentication and role-based access control
- User Profiles: Detailed user profiles with personal information and preferences
- Matching System: User matching with accept/reject functionality
- Messaging: Private messaging between matched users
- Moderation: User reporting and content moderation
- Security: Password hashing and data protection

## Technical Stack

- Node.js
- Express.js
- PostgreSQL
- Sequelize ORM
- JWT for authentication
- bcrypt for password hashing

## API Endpoints

### Authentication
- POST /api/auth/register - Register a new user
- POST /api/auth/login - Login user

### Users
- GET /api/users - Get potential matches
- GET /api/users/:id - Get user profile
- PUT /api/users/:id - Update user profile
- DELETE /api/users/:id - Delete account

### Matches
- POST /api/matches - Create a match request
- PUT /api/matches/:id - Accept/reject match
- GET /api/matches - Get user's matches
- DELETE /api/matches/:id - Unmatch

### Messages
- POST /api/messages - Send a message
- GET /api/messages - Get conversation history
- PUT /api/messages/:id - Mark as read
- DELETE /api/messages/:id - Delete message

### Reports
- POST /api/reports - Report a user
- GET /api/reports - Get reports (moderators only)
- PUT /api/reports/:id - Update report status (moderators only)

## Installation

1. Clone the repository
2. Create PostgreSQL database
3. Configure .env file with your database credentials
4. Run `npm install`
5. Run `npm run dev` for development
6. The API will be available at `http://localhost:3000`

## Database Setup

1. Install PostgreSQL
2. Create a database named 'dating_site'
3. Update .env with your PostgreSQL credentials
4. The tables will be automatically created on first run