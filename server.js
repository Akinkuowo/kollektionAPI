const express = require('express');

const app = express();

app.get('/', function(req,res){
    res.send('Hello World')
})

app.listen(3000, ()=>{
    console.log('App is running on port 30000')
});


/*
Home --> Get --> res = this is working
Signin --> Get --> res = success or fail
Register --> Put -- > res = new user
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