const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://mubashir:Norka@123.qnn4n.mongodb.net/newCaseStudy?retryWrites=true&w=majority'); //#part 2: Point 6
const Schema = mongoose.Schema;


const BookSchema = new Schema({
    title: String,
    author: String,
    image: String,
    about: String
});

const bookdata = mongoose.model('bookdata', BookSchema);

module.exports = bookdata;