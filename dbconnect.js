const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const url = process.env.MONGODB_URL;

const connect = mongoose.connect(url, { useNewUrlParser: true });
module.exports = connect;
