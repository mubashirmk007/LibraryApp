const express = require ('express'); //Part #1  Point 1
const path = require ('path');
const bodyParser = require ('body-parser'); //Part #1  Point 2
//const cors = require ('cors');
var port = process.env.PORT || 5000; //Part #2  Point 2

const nav= [
    {
        link:"/books",
        title:"Books"
    },
    {
        link:"/authors",
        title:"Authors"
    },
    {
        link:"/addbook",
        title:"Add Book"
    },
    {
        link:"/addauthor",
        title:"Add Author"
    },
    {
        link:"/logout",
        title:"Logout"
    }
]

const loginRouter = require('./src/routes/loginroute');
const signupRouter = require('./src/routes/signuproute');
const homeRouter = require('./src/routes/homerouter'); // Part #1  Point 3
const booksRouter = require('./src/routes/booksroute');
const authorsRouter = require('./src/routes/authorsroute');

const app = new express(); 


app.set('views','./src/views'); 
app.set('view engine','ejs'); 


app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json()); 
app.use(express.static(path.join(__dirname , '/public')));

app.use('/login', loginRouter); 
app.use('/signup', signupRouter); 
app.use('/home', homeRouter); 
app.use('/books', booksRouter); 
app.use('/authors', authorsRouter);



app.get('/', (req,res) => {

    res.render('index',{
        nav,
        title : "Books"
    });
    
});


app.listen (port, () => {
    console.log ("Server 5000 running... "); // Part #1  Point 5
});

 