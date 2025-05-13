import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { v2 as cloudinary } from "cloudinary";

import multer from "multer";
const upload = multer({ dest: "uploads/" });

// middlware cors express multer all are same

// cloudinary Configuration
cloudinary.config({
  cloud_name: "dlrl4k1pe",
  api_key: "715359612774167",
  api_secret: "7AG8dJtuSXReygbB71tEEXv-5HU", // Click 'View API Keys' above to copy your API secret
});

// app configuration
const app = express();

// middle wqre
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

// database configuration

try {
  mongoose.connect(
    "mongodb+srv://karkiamit222:PTgjTB0sZQQshpvm@cluster0.ausvax6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  );
  console.log("✅ MongoDB connected successfully");
} catch (error) {
  console.log("❌ MongoDB connection failed");
}

app.get("/", (req, res) => {
  res.send("Hello from jwellery backend");
});

// catogory schema

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  imageUrl: { type: String, required: true },
});

// categoty table
const CategoryTable = mongoose.model("CategoryTable", categorySchema);

// banner schema

const bannerSchema = new mongoose.Schema({
  imageUrl: { type: String, required: true },
});

// banner table
const BannerTable = mongoose.model("BannerTable", bannerSchema);

// producty schema

const productSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  previousPrice: { type: Number, required: true },
  currentPrice: { type: Number, required: true },
  rating: { type: Number, required: true },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "CategoryTable",
    required: true,
  },
  imageUrl: { type: String, required: true },
});

// producy]t table
const ProductTable = mongoose.model("ProductTable", productSchema);

// category routes

// creATE
app.post("/api/category", upload.single("imageUrl"), async (req, res) => {
  try {
    const categoryAlreadyExist = await CategoryTable.findOne({
      name: req.body.name,
    });
    if (categoryAlreadyExist) {
      return res.status(409).json({
        success: false,
        msg: "Name already exist",
        data: null,
      });
    }

    console.log(req.file);

    // image iupload function

    const uploadResult = await cloudinary.uploader
      .upload(req.file.path)
      .catch((error) => {
        return res.status(500).json({
          success: false,
          msg: "image upload failed",
          data: null,
          error,
        });
      });

    console.log(uploadResult.secure_url);

    const newlyCreatedCategory = await CategoryTable.create({
      ...req.body,
      imageUrl: uploadResult.secure_url,
    });
    return res.status(201).json({
      success: true,
      msg: "category created successfully",
      data: newlyCreatedCategory,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: "SOmethign went wrong",
      data: null,
      error,
    });
  }
});

// get-LL
app.get("/api/category", async (req, res) => {
  try {
    const allCategories = await CategoryTable.find();
    return res.status(200).json({
      success: true,
      msg: "get all categoris success",
      data: allCategories,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: "SOmethign went wrong",
      data: null,
      error,
    });
  }
});

// get-single
app.get("/api/category/:id", async (req, res) => {
  try {
    const singleCategories = await CategoryTable.findById(req.params.id);
    return res.status(200).json({
      success: true,
      msg: "get single category success",
      data: singleCategories,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: "SOmethign went wrong",
      data: null,
      error,
    });
  }
});

// u[date]
app.patch("/api/category/:id", upload.single("imageUrl"), async (req, res) => {
  try {
    if (req.file) {
      const uploadResult = await cloudinary.uploader
        .upload(req.file.path)
        .catch((error) => {
          return res.status(500).json({
            success: false,
            msg: "image upload failed",
            data: null,
            error,
          });
        });
      const updatedCategory = await CategoryTable.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      return res.status(200).json({
        success: true,
        msg: "updated successfully",
        data: updatedCategory,
      });
    }

    const updatedCategory = await CategoryTable.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    return res.status(200).json({
      success: true,
      msg: "updated successfully",
      data: updatedCategory,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: "SOmethign went wrong",
      data: null,
      error,
    });
  }
});

//de'ete
app.delete("/api/category/:id", async (req, res) => {
  try {
    const deletedCategory = await CategoryTable.findByIdAndDelete(
      req.params.id
    );
    return res.status(200).json({
      success: true,
      msg: "category deleted successfully",
      data: deletedCategory,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: "SOmethign went wrong",
      data: null,
      error,
    });
  }
});

//bnner routes
// creATE
app.post("/api/banner", upload.single("imageUrl"), async (req, res) => {
  try {
    // image iupload function

    const uploadResult = await cloudinary.uploader
      .upload(req.file.path)
      .catch((error) => {
        return res.status(500).json({
          success: false,
          msg: "image upload failed",
          data: null,
          error,
        });
      });

    console.log(uploadResult.secure_url);

    const newlyCreatedBanner = await BannerTable.create({
      imageUrl: uploadResult.secure_url,
    });
    return res.status(201).json({
      success: true,
      msg: "Banner created successfully",
      data: newlyCreatedBanner,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: "SOmethign went wrong",
      data: null,
      error,
    });
  }
});

// get-LL
app.get("/api/banner", async (req, res) => {
  try {
    const allBanner = await BannerTable.find();
    return res.status(200).json({
      success: true,
      msg: "FEtch all banner successfully",
      data: allBanner,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: "Something went wrong",
      data: null,
    });
  }
});

// get-single
app.get("/api/banner/:id", async (req, res) => {
  try {
    const fetchSingleBanner = await BannerTable.findById(req.params.id);
    return res.status(200).json({
      success: true,
      msg: "Fetch singel banner successfully",
      data: fetchSingleBanner,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: "Something went wrong",
      data: null,
    });
  }
});

// u[date]
app.patch("/ams/banner/:id", async (req, res) => {
  try {
    const updatingBanner = await BannerTable.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    return res.status(200).json({
      success: true,
      msg: "Update banner successfully",
      data: updatingBanner,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: "Something went wrong",
      data: null,
    });
  }
});

//de'ete
app.delete("/api/banner/:id", async (req, res) => {
  try {
    const deleteBanner = await BannerTable.findByIdAndDelete(req.params.id);

    if (!deleteBanner) {
      return res.status(404).json({
        success: false,
        msg: "Not found",
        data: null,
      });
    }

    return res.status(200).json({
      success: true,
      msg: "Delete banner successfully",
      data: deleteBanner,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: "Something went wrong",
      data: null,
    });
  }
});

// product roures
// create product
app.post("/api/products", upload.single("imageUrl"), async (req, res) => {
  console.log(req.file);

  try {
    const productAlreadyExist = await ProductTable.findOne({
      name: req.body.name,
    });
    if (productAlreadyExist) {
      return res.status(409).json({
        success: false,
        msg: " name already exist ",
        data: null,
      });
    }

    const uploadResult = await cloudinary.uploader
      .upload(req.file.path)
      .catch((error) => {
        return res.status(500).json({
          success: false,
          msg: "image upload failed",
          data: null,
          error,
        });
      });

    const newlyCreatedProducts = await ProductTable.create({
      ...req.body,
      imageUrl: uploadResult.secure_url,
    });
    return res.status(201).json({
      success: true,
      msg: "product created successfully",
      data: newlyCreatedProducts,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: "Something went wrong",
      data: null,
    });
  }
});

// get all
app.get("/api/products", async (req, res) => {
  try {
    const allProduct = await ProductTable.find();
    return res.status(200).json({
      success: true,
      msg: " Fetch all products successfully",
      data: allProduct,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: "Something went wrong",
      data: null,
    });
  }
});

// get singel
app.get("/api/products/:id", async (req, res) => {
  try {
    const singleProduct = await ProductTable.findById(req.params.id);

    if (!singleProduct) {
      return res.status(404).json({
        success: false,
        msg: "Not found",
        data: null,
      });
    }

    return res.status(200).json({
      success: true,
      msg: "Fetch single product successfully",
      data: singleProduct,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: "Something went wrong",
      data: null,
    });
  }
});

// update products
app.patch("/api/products/:id", upload.single("imageUrl"), async (req, res) => {
  try {
    // if user upload new image
    if (req.file) {
      const uploadResult = await cloudinary.uploader
        .upload(req.file.path)
        .catch((error) => {
          return res.status(500).json({
            success: false,
            msg: "image upload failed",
            data: null,
            error,
          });
        });

      const updatedProduct = await ProductTable.findByIdAndUpdate(
        req.params.id,
        { ...req.body, imageUrl: uploadResult.secure_url },
        { new: true }
      );
      return res.status(200).json({
        success: true,
        msg: "Product upadated successfully",
        data: updatedProduct,
      });
    }

    // if user not upload th image

    const updatedProduct = await ProductTable.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    return res.status(200).json({
      success: true,
      msg: "Product upadated successfullt",
      data: updatedProduct,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: "Something went wrong",
      data: null,
    });
  }
});

// delete products
app.delete("/api/products", async (req, res) => {
  try {
    const deletedProducts = await ProductTable.findByIdAndDelete(req.params.id);

    return res.status(200).json({
      success: true,
      msg: "product deleted successfully",
      data: deletedProducts,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: "Something went wrong",
      data: null,
    });
  }
});

app.listen(4000, () => {
  console.log("🚀 Server is runnig on port 4000");
});
