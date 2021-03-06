const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gameSchema = new Schema(
  {
    title: {
      type: String,
    },
    noteIds: {
      type: Array,
    },
  },
  {
    timestamps: true,
  }
);

let Game = mongoose.model('Game', gameSchema);
module.exports = Game;
