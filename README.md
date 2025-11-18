# 📝 Notes Management Application

A modern, full-stack notes management application built with React, Node.js, Express, and MongoDB. Features a beautiful, responsive UI with real-time CRUD operations.

![Notes App Screenshot](https://via.placeholder.com/800x400/3B82F6/FFFFFF?text=Notes+Management+App)
*Add your screenshot here*

## 🚀 Live Demo

[![Vercel](https://img.shields.io/badge/Vercel-Live%20Demo-black?style=for-the-badge&logo=vercel)](https://your-app.vercel.app)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-black?style=for-the-badge&logo=github)](https://github.com/ASTharunVarshan/Notes-web-app)

## ✨ Features

- ✅ **Full CRUD Operations** - Create, Read, Update, Delete notes
- 🎨 **Modern UI** - Beautiful gradient design with Tailwind CSS
- 🔍 **Search Functionality** - Real-time search across titles, content, and tags
- 🏷️ **Tag System** - Organize notes with custom tags
- 📱 **Responsive Design** - Works perfectly on all devices
- ⚡ **Fast Performance** - Optimized with React and modern JavaScript
- 🎯 **Real-time Validation** - Form validation with error handling
- 🔄 **Optimistic Updates** - Instant UI feedback with error fallback
- 📅 **Timestamps** - Created and updated timestamps for all notes

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with Hooks
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client for API calls
- **ES6+** - Modern JavaScript features

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **CORS** - Cross-origin resource sharing

## 📦 Installation

### Prerequisites
- Node.js 18+
- MongoDB (local or Atlas)
- npm or yarn

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/ASTharunVarshan/Notes-web-app.git
   cd Notes-web-app
Setup Backend

bash
cd backend
npm install
cp .env.example .env
# Edit .env with your MongoDB URI
npm run seed
npm run dev
Backend runs on http://localhost:3000

Setup Frontend

bash
cd frontend
npm install
npm run dev
Frontend runs on http://localhost:5173

Start MongoDB

Local: mongod --dbpath /path/to/data/db

Or use MongoDB Atlas cloud

🗂️ Project Structure
text
notes-web-app/
├── backend/
│   ├── controllers/     # Route controllers
│   ├── models/          # MongoDB models
│   ├── routes/          # Express routes
│   ├── middleware/      # Custom middleware
│   ├── scripts/         # Database seed script
│   └── server.js        # Entry point
├── frontend/
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── services/    # API services
│   │   └── App.jsx      # Main component
│   └── vite.config.js   # Vite configuration
└── README.md
🔌 API Endpoints
Method	Endpoint	Description
GET	/api/notes	Get all notes
GET	/api/notes/:id	Get single note
POST	/api/notes	Create new note
PUT	/api/notes/:id	Update note
DELETE	/api/notes/:id	Delete note
GET	/api/health	Health check
Example API Usage
bash
# Get all notes
curl http://localhost:3000/api/notes

# Create a note
curl -X POST http://localhost:3000/api/notes \
  -H "Content-Type: application/json" \
  -d '{"title":"My Note","content":"Note content","tags":["personal"]}'
🎨 UI Components
NotesList - Displays all notes in a responsive grid

NoteForm - Create and edit notes with validation

Search Bar - Real-time search functionality

Note Cards - Individual note display with actions

🔧 Development Scripts
Backend
bash
npm run dev      # Development server with nodemon
npm start        # Production server
npm run seed     # Seed database with sample data
Frontend
bash
npm run dev      # Development server
npm run build    # Production build
npm run preview  # Preview production build
🌟 Key Features Explained
Modern Design
Gradient backgrounds and glass morphism effects

Smooth animations and transitions

Responsive grid layout

Professional color scheme

State Management
React hooks (useState, useEffect)

Optimistic updates for better UX

Proper error handling and loading states

Real-time form validation

Performance
Component-based architecture

Efficient re-rendering

Optimized API calls

Fast development with Vite

🚀 Deployment
Frontend (Vercel)
Build: npm run build

Deploy dist folder to Vercel

Backend (Railway/Render)
Set environment variables

Connect GitHub repository

Deploy automatically

Database (MongoDB Atlas)
Create free cluster

Get connection string

Update environment variables

🤝 Contributing
Fork the repository

Create a feature branch (git checkout -b feature/amazing-feature)

Commit your changes (git commit -m 'Add amazing feature')

Push to the branch (git push origin feature/amazing-feature)

Open a Pull Request

📝 License
This project is licensed under the MIT License - see the LICENSE file for details.

👨‍💻 Author
Tharun Varshan

GitHub: @ASTharunVarshan

Project Link: https://github.com/ASTharunVarshan/Notes-web-app

🙏 Acknowledgments
React team for the amazing framework

Vite for fast development experience

Tailwind CSS for the utility-first CSS

MongoDB for the robust database solution