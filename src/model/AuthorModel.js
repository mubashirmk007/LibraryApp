const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://mubashir:Norka@123.qnn4n.mongodb.net/newCaseStudy?retryWrites=true&w=majority');


const Schema = mongoose.Schema;


const AuthorSchema = new Schema({
    title : String,
    image: String,
    about: String
});

const authordata = mongoose.model('authordata', AuthorSchema);

module.exports = authordata;