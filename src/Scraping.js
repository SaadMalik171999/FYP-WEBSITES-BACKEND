const fs = require("fs");
const path = require("path");
const express = require("express");
const router = new express.Router();
const ProductListOne = require("./models/productListOne");
const mongoose = require("mongoose");
const dirPath = path.join(__dirname,'Files/test.json');
const filePath = `${dirPath}`;


//////////////// FOR FILE PATH ////////////////

fs.readFile(filePath,'utf-8',(err,item)=>{
//   console.warn(item)
})
