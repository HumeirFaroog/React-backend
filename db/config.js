const mongoose= require('mongoose')

const dbName = 'ReactTest'; 

mongoose.connect(
    ` HERE YOUR CONNECTION`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  );
  
  const db = mongoose.connection;
  
  db.on('error', (error) => {
    console.error('Error connecting to the database:', error.message);
  });
  
  db.once('open', () => {
    console.log('Connected to the database');
  });
