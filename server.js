const express = require('express');
const bodyparser = require('body-parser');

const canHandleRequest = require('./contentHandler.js').canHandleRequest;
const contentHandler = require('./contentHandler.js').contentHandler;

const app = express();

app.use("/route", express.static('route'));
app.use(bodyparser.json());

const database = 
    {
        users: [
            {
                userId: "01",
                name: "Akinkuowo Oluwaseun",
                email: "Akinkuowo@gmail.com",
                password: "akinkuowo1990",
                joined: new Date()
            },
            {
                userId: "02",
                name: "Fisuyi Tolulope",
                email: "Tolu@gmail.com",
                password: "lope",
                joined: new Date()
            }
        ]
    
    }

    const products = 
    {
        Ladieswears: [
            {
                product_Image: "Image_001",
                product_name: "Gucci Bag",
                Price: "2000"
            },
            {
                product_Image: "Image_002",
                product_name: "Gucci scandal",
                Price: "4000"
            }
        ]
    
    }


app.get('/', function(req,res){
    console.log(`incoming request: ${req.url}`)
    res.json('Hello World')
})

app.get('/signin', function(req,res){
    console.log(`incoming request: ${req.url}`)
    if(req.body.username === database.users[0].email && req.body.password === database.users[0].password){
        res.json('welcome');
    }else{
        res.status(400).json('error logging in');
    }
})

app.post('/register', function(req,res){
    console.log(`incoming request: ${req.url}`)
    const { name, email, password} = req.body;
    database.users.push({
        userId: "01",
        name: name,
        email: email,
        password: password,
        joined: new Date()
    })
    res.json(database.users[database.users.length-1])
})

app.get('/route/ladieswear', function(req,res){
    console.log(`incoming request: ${req.url}`)
    if(canHandleRequest(req)){
        contentHandler(req, res);
        return;
    }
});

app.listen(3000, ()=>{
    console.log('App is running on port 3000')
});


/*
home --> Get --> res = this is working
signin --> Get --> res = success or fail
register --> Post -- > res = new user
/profile/:userId --> get = user
ladies wear --> get --> res = ladies item 
bags --> get --> res - ladies bag
footwear --> get --> res = all footwear  
glasses --> get --> res = all glasses 
shoes --> get --> res = all shoes
wristwatch --> get --> res = all wristwatch 
accessories --> get --> res = all accessories 
chains --> get --> res = all chains
hotdeal --> get --> res = hot deals
new arrivals --> get --> res = all new arrivals 
*/