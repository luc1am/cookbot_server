const express = require('express');
//coding train
const Datastore = require('nedb');


const app = express();
app.use(express.static('public'));
// setup express app
//app.use(express.json());

//coding train again
const database = new Datastore('database.db');
database.loadDatabase();


//endpoints// get, post, delete, put
app.get("/", (req, res)=>{
    res.send("hello");
});

app.get("/secret", (req, res) => {
    res.send("you found me!");
});

//start listening
app.listen(3000, () => {
    console.log("running on http://localhost:3000");
  });

//coding train
app.get("/api", (req, res) =>{
    database.find({}, (err, data)=> {
        if (err){
            res.end();
            return;
        }
        res.json(data);
        //stringifies data
    });
});

app.post("/send", (req, res) =>{
    let data = req.body;
    //req.body is an object
    //retrieve client side data through post and put
    const timestamp = Date.now();
    console.log(data); //undefined
    //data.timestamp = timestamp;
    // database.insert(data);
    //send object back with data in it
    //res.json(data);
});


//like twitter
// app.post("/updateBoard/:id", (req,res)=>{ // update the board
//let boardId = req.params.id;

