const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const noteSchema = new Schema(
  {
    title: {
      type: String,
    },
    checked: {
      type: Boolean,
    },
    category: {
      type: String,
    },
    gameId: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

let Note = mongoose.model('Note', noteSchema);
module.exports = Note;
