var express = require('express');
// var todoController = require('./controllers/todoController');
var app = express();
const path = require('path');
const members = require('./Members');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const UserModel = require("./models/Users")
// const Blog = require('./models/blogs')
const blogRoutes = require('./routes/blogRoutes')
var cors = require('cors');
// var blogController = require('./controllers/blogController');
// blogController(app);
// todoController(app);
// app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, './public')));
// app.get('/', (req, res) => {
//     // res.sendFile(__dirname + '/index.html');
//     res.send("Helllllllloooooooooo");
// });
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
// app.use(bodyParser.urlencoded({ extended: true }))
// parse requests of content-type - application/json
// app.use(bodyParser.json())

mongoose.connect('mongodb://localhost:27017/sheetal-test-db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    connectTimeoutMS: 10000
},(err,result)=>{
if(err)
console.log(err,"connnection issue")
else
console.log("database connected")
});
// define a root/default route
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

app.use('/api/employees', require('./routes/employees'))
app.use('/api/members', require('./routes/members'));
app.use('/api/blogs', blogRoutes);
app.listen(3000);

// app.get('/', function(req, res) {
//     res.send('Hello World')
//   })
