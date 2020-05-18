const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
    },
    settings: {
      type: Object,
    },
  },
  {
    timestamps: true,
  }
);

let User = mongoose.model('User', userSchema);
module.exports = User;
