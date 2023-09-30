require('dotenv').config();
const mongoose = require('mongoose');

const url = process.env.TEST_MONGODB_URI;

mongoose.set('strictQuery', false);
mongoose.connect(url);

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
});

const Note = mongoose.model('Note', noteSchema);

const note = new Note({
  content: 'waos',
  important: false,
});

Note.find({}).then((result) => {
  result.forEach((note) => {
    console.log(note);
  });
  mongoose.connection.close();
});

note.save().then(() => {
  console.log('note saved!');
  mongoose.connection.close();
});
