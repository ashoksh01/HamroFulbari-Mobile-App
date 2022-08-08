const express = require("express");
const product = require("../models/products");
const router = new express.Router();
const app = express();
const multer = require("multer");
const path = require("path");
var fs = require("fs");
const auth = require("../authfile/auth");

//image upload process
const storage = multer.diskStorage({
  destination: "./public/productuploads",
  filename: (req, file, callback) => {
    let ext = path.extname(file.originalname);
    callback(null, `${file.fieldname}-${Date.now()}${ext}`);
  },
});

const imageFileFilter = (req, file, cb) => {
  if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
    return cb(new Error("Please Choose an Image to Upload not files."), false);
  }
  cb(null, true);
};

const upload = multer({
  storage: storage,
  fileFilter: imageFileFilter,
});

//Product addition
router.post(
  "/products/",
  auth.verifyUser,
  auth.verifyAdmin,
  upload.single("image"),
  (req, res) => {
    req.body.image = req.file.filename;
    console.log(req.body);
    product
      .create(req.body)
      .then(function () {
        return res.json({ successmsg: "Product added successfully" });
      })
      .catch(function (e) {
        if (e.name === "ValidationError") {
          return res.status(403).json({ errmsg: "Validation Error Occured." });
        } else {
          return res
            .status(402)
            .json({ errmsg: "Something Went Wrong. Try again!" });
        }
      });
  }
);

// React getting product list from database open this comment before running the project in react comment below flutter product list code

router.get("/products/", (req, res) => {
  product
    .find({})
    .then(function (products) {
      return res.json(products);
    })
    .catch(function (e) {
      return res
        .status(402)
        .json({ errmsg: "Something Went Wrong. Try again!" });
    });
});

// flutter product list open this comment before running the code in flutter and comment above react product list code

router.get('/products',(req,res)=>{
    product.find().then(function(allproduct){
         res.status(201).json({"success":true,"data":allproduct});
    }).catch(function(e){
            res.json(e);
    });
});


//update for product
router.put("/products/:id", auth.verifyUser, auth.verifyAdmin, (req, res) => {
  product
    .findByIdAndUpdate({ _id: req.params.id }, req.body)
    .then(function () {
      console.log(res.body);
      res.status(200).json({ successmsg: "Product Updated Successfully" });
    })
    .catch(function (e) {
      res.send(e);
    });
});

//product delete
router.delete(
  "/products/:id",
  auth.verifyUser,
  auth.verifyAdmin,
  (req, res) => {
    product
      .findOne({ _id: req.params.id })
      .then(function (found) {
        const filedes = "./public/productuploads/" + found.image;
        fs.unlink(filedes, function (err) {
          if (err) {
            console.log(err);
          } else {
            product
              .findByIdAndDelete(found.id)
              .then(function () {
                res
                  .status(200)
                  .json({ successmsg: "Product Deleted Successfully" });
              })
              .catch(function (e) {
                res
                  .status(402)
                  .json({ errmsg: "Product Could not be deleted." });
              });
          }
        });
      })
      .catch(function (e) {
        res.send(e);
      });
  }
);

// search product function for user and if it doenot exist then it will return all products
router.get("/products/:search", (req, res) => {
  product
    .find({ name: { $regex: req.params.search, $options: "i" } })
    .then(function (products) {
      if (products.length > 0) {
        return res.status(201).json({"success":true,"data":products});
      } else {
        product

          .find({})
          .then(function (products) {
            return res.status(201).json({"success":true,"data":products});
          }
          ).catch(function (e) {
            return res
              .status(402)
              .json({ errmsg: "Something Went Wrong. Try again!" });
          }
          );
      }
    }
    ).catch(function (e) {
      return res
        .status(402)
        .json({ errmsg: "Something Went Wrong. Try again!" });
    }
    );
}
);


module.exports = router;
