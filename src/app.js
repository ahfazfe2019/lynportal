const express = require("express");
const app = express();
const port = process.env.PORT || 8086;
var cors = require('cors');

const conn = require("./db/conn");
const productList = require("./models/productList");
const addProduct = require("./models/addProducts");
var cors = require('cors');

app.use(cors())
app.use(express.urlencoded({ extended : true }));
app.use(express.json());

app.post("/",(req,res) => {
    res.send("From Index page");
});

// app.get("/productList",async(req,res) => {

//     try{
//         const productData = productList;
//         console.log('productData',productData);
//     }catch(e){
//         console.log(e);
//     }
// });

app.get('/productList',productList.productList);
app.post('/addProducts',addProduct.addProduct);

app.listen(port,() => {
    console.log(`listing port no ${port} `);
})