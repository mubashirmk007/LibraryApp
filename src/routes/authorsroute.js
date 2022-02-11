const express = require('express'); 
const authorsRouter = express.Router();
const authordata = require('../model/AuthorModel');



//router to render authors page
authorsRouter.get('/', (req, res) => {

    authordata.find() 
    .then (function (authors) {

    res.render('authors', {
        authors
    });

    })
})



//router to render add author page
authorsRouter.get('/addauthor', (req, res) => {
    res.render('addauthor',{});

});




//router to add author
authorsRouter.post('/add', (req, res) => {

    var item={
        title:req.body.title,
        image:req.body.image,  //#Part 2 - Point 3
        about:req.body.about
    }
    console.log(item)  ;
    const author = new authordata(item);
    author.save();
    res.redirect('/authors');

})




//router for single author
authorsRouter.get('/:id', (req,res) => {
    const id = req.params.id;
    authordata.findOne({ _id: id })
            .then(function (author) {
                res.render('author', {
                    author
                })

            })
    
});




//router to delete author
authorsRouter.post('/delete', (req, res) => {

    const id = req.body.id;  

    authordata.findOneAndDelete({ _id: id })
        .then(function () {

            res.redirect('/authors')

        })  
})



//router to edit author
authorsRouter.post('/edit', (req, res) => {

    authordata.findById(req.body.id, (err, data) => {
        if (err) {
            throw err;
        }
        else {
            res.render('editauthor', {data})
        }
    })
})




//router to update author
authorsRouter.post('/update', (req, res) => {
const id = req.body.id

    authordata.updateOne({_id :id}, { $set: req.body }, function (err, data) { //Part #2 - Point 4
        if (err) {
            res.json({ status: "Failed" });
        }
        else if (data.n == 0) {
            res.json({ status: "No match Found" });
        }
        else {
            res.redirect("/authors")
        }

    })  
})






module.exports = authorsRouter;