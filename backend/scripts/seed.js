require('dotenv').config();
const mongoose = require('mongoose');
const Note = require('../models/Note');

const sampleNotes = [
  {
    title: 'Welcome to Notes App',
    content: 'This is your first note. You can edit or delete it.',
    tags: ['welcome', 'getting-started']
  },
  {
    title: 'Shopping List',
    content: 'Milk, Eggs, Bread, Fruits, Vegetables',
    tags: ['shopping', 'personal']
  },
  {
    title: 'Project Ideas',
    content: 'Build a weather app, Create a blog, Learn a new framework',
    tags: ['projects', 'ideas']
  },
  {
    title: 'Meeting Notes',
    content: 'Discussed project timeline and deliverables for Q4.',
    tags: ['work', 'meeting']
  },
  {
    title: 'Book Recommendations',
    content: '1. Deep Work\n2. Atomic Habits\n3. The Pragmatic Programmer',
    tags: ['books', 'learning']
  }
];

const seedDatabase = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/notesapp');
    console.log('Connected to MongoDB');

    // Clear existing notes
    await Note.deleteMany({});
    console.log('Cleared existing notes');

    // Insert sample notes
    await Note.insertMany(sampleNotes);
    console.log('Sample notes inserted successfully');

    // Disconnect
    await mongoose.disconnect();
    console.log('Database seeding completed');
    process.exit(0);
  } catch (error) {
    console.error('Seeding error:', error);
    process.exit(1);
  }
};

seedDatabase();