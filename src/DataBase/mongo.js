const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://viddeveloper110:1234567890@vidhema-dev.n5rtjjg.mongodb.net/Admin_Panel', {
    useNewUrlParser: true,
   
    useUnifiedTopology: true,
  
 });
 const db = mongoose.connection;

 db.on('connecting', () => {
   console.info('Connecting to MongoDB...');
 });
 
 db.on('error', (error) => {
   console.error(`MongoDB connection error: ${error}`);
   mongoose.disconnect();
 });
 
 db.on('connected', () => {
   console.info('Connected to MongoDB!');
 });