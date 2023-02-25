const express = require("express");
const router = new express.Router();
const path = require("path");
const fs = require("fs");
const ProductListOne = require("../models/productListOne");

router.post("/allproductlist", async (request, response) => {
  try {
    const filePath = path.join("E:/SAAD DATA/PERSONAL PRACTICE PROJECTS/FYP-WEBSITE-BACKEND/src/Files/test.json");
    fs.readFile(filePath, "utf-8", (err, item) => {
      const dataWithoutId = [];
      if (item) {
        const jsonformat = JSON.parse(item);
        jsonformat?.map((x) => {
          dataWithoutId?.push({
            productImage: x?.productImage,
            productName: x?.productName,
            companyPrice: x?.companyPrice,
            productCategory: x?.productCategory,
            companyName: x?.companyName,
            companyProductStock: x?.companyProductStock,
          });
        });
        postFilterData(dataWithoutId);
      }
    });
    response.status(200).json("Scraping Successfylly");
  } catch (error) {
    return response.status(200).json(error);
  }
});


const postFilterData = async (dataWithoutId) => {
  if (dataWithoutId) {
    for (let index = 0; index < dataWithoutId?.length; index++) {
      const element = dataWithoutId[index];
      const ProductListOneData = new ProductListOne(element);
      await ProductListOneData.save();
    }
  }
};

module.exports = router;
