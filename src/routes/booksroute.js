const express = require('express'); 
const booksRouter = express.Router();
// const books = require('../data/books');
const bookdata = require('../model/BookModel');



//router to render books page
booksRouter.get('/', (req,res) => {

    bookdata.find() 
    .then(function (books) {

    res.render('books',{
        books
    });

    })
})



//router to render addbook page
booksRouter.get('/addbook', (req,res) => {
    res.render('addbook',{});

});




//router to add book
booksRouter.post('/add', (req, res) => {

        var item={
            title:req.body.title,
            author:req.body.author,
            image:req.body.image,
            about:req.body.about
        }
        console.log(item)  ;
        const book = new bookdata(item);
        book.save();
        res.redirect('/books');

    })



//router for singlebook
booksRouter.get('/:id', (req,res) => {
    const id = req.params.id;
    bookdata.findOne({ _id: id })
            .then(function (book) {
                res.render('book', {
                    book
                })

            })
    
});




//router to delete book
booksRouter.post('/delete', (req, res) => {

    const id = req.body.id;  

    bookdata.DeleteOne({ _id: id })
        .then(function () {

            res.redirect('/books')

        })  
})



//router to edit book
booksRouter.post('/edit', (req, res) => {

    bookdata.findById(req.body.id, function(err, data){
        if (err) {
            throw err;
        }
        else {
            res.render('editbook', {data})
        }
    })
})



//router to update book
booksRouter.post('/update', (req, res) => {
const id = req.body.id

    bookdata.updateOne({_id : id}, { $set: req.body }, (err, data) => { //#Part 2: Point 4
        if (err) {
            res.json({ status: "Failed" });
        }
        else if (data.n == 0) {
            res.json({ status: "No match Found" });
        }
        else {
            res.redirect("/books");
        }

    }) 
})

module.exports = booksRouter;