"use client";

import axios from "axios";
import React, { ReactElement, useState } from "react";
import { useFieldArray } from "react-hook-form";
import toast from "react-hot-toast";

export default function page() {
  // for banner
  const [file, setFile] = useState<File | null>(null);
  
  const [bannerCreating, setBannerCreating] = useState<boolean>(false)
 const createBanner = async (e:React.FormEvent<HTMLFormElement>)=>{
  e.preventDefault()
  try {

    setBannerCreating(true)

    if (!file) {
      return;
    }

    const formData = new FormData()
    formData.append("imageUrl", file)
    const response = await axios.post("https://jewellery-y5qn.onrender.com/api/banner", formData)
    console.log(response)
    toast.success("Banner created successfully")
    setBannerCreating(false)

  } catch (error) {
    setBannerCreating(false)
    toast.error("Something went wrong")
    console.log("something went wrong", error)
  }
 }

  // for cateogty
  const [categoryName, setCategoryName] = useState<string>("");
  const [categoryFile, setCategoryFile] = useState<File | null>(null);
  const [categoryCreating, setCategoryCreating] = useState<boolean>(false)


   
 const createdCategory = async (e:React.FormEvent<HTMLFormElement>)=>{
  e.preventDefault()
  try {

    setCategoryCreating(true)

    if (!categoryFile) {
      return;
    }

    const formData = new FormData()
    formData.append("imageUrl", categoryFile)
    formData.append("name", categoryName )
    const response = await axios.post("https://jewellery-y5qn.onrender.com/api/category", formData)
    console.log(response)
    toast.success("Category created successfully")
    setCategoryCreating(false)

  } catch (error) {
    setCategoryCreating(false)
    toast.error("Something went wrong")
    console.log("something went wrong", error)
  }
 }

  // for product
  const [productName, setProductName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [rating, setRating] = useState<number>(0);
  const [previousPrice, setPreviousPrice] = useState<number>(0);
  const [currentPrice, setCurrentPrice] = useState<number>(0);
  const [category, setCategory] = useState<string>("");
  const [productFile, setProductFile] = useState<File | null>(null);


  const [productCreating, setProductCreating] = useState<boolean>(false)


   
 const createProduct = async (e:React.FormEvent<HTMLFormElement>)=>{
  e.preventDefault()
  try {

    setProductCreating(true)

    if (!productFile) {
      return;
    }

    const formData = new FormData()
    formData.append("imageUrl", productFile)
    formData.append("name", productName )
    formData.append("description", description )
    formData.append("rating", String(rating) )
    formData.append("previousPrice", String(previousPrice) )
    formData.append("currentPrice", String(currentPrice) )
    formData.append("category", category )
 




    const response = await axios.post("https://jewellery-y5qn.onrender.com/api/products", formData)
    console.log(response)
    toast.success("Product created successfully")
    setProductCreating(false)

  } catch (error) {
    setProductCreating(false)
    toast.error("Something went wrong")
    console.log("something went wrong", error)
  }
 }


  return (
    <div className="space-y-12">
      {/* banner create card */}
      <form onSubmit={createBanner} className="flex flex-col gap-4 w-5/12 mx-auto border p-4 border-gray-300 shadow-md ">
        <input
          required
          onChange={(e) => setFile(e.target.files?.[0] || null)}
          type="file"
          placeholder="Upload Banner File"
          className="border border-gray-200 outline-0 p-2"
        />
        <button
          type="submit"
          className="text-white bg-blue-500 px-6 py-2 rounded-sm"
        >
          {bannerCreating? "Create Banner..." : "Create Banner"}
        </button>
      </form>

      {/* category craeate card */}

      <form onSubmit={createdCategory} className="flex flex-col gap-4 w-5/12 mx-auto border p-4 border-gray-300 shadow-md ">
        <input
        required
        onChange={(e)=>setCategoryName(e.target.value)}
        type="text"
          placeholder="Enter Category Name"
          className="border border-gray-200 outline-0 p-2"
        />
        <input
        required
         onChange={(e) => setCategoryFile(e.target.files?.[0] || null)}
          type="file"
          placeholder="select Category image"
          className="border border-gray-200 outline-0 p-2"
        />
        <button
          type="submit"
          className="text-white bg-blue-500 px-6 py-2 rounded-sm"
        >
          {categoryCreating? "Create Category..." : "Create Category"}
        </button>
      </form>

      {/* create product card */}

      <form onSubmit={createProduct} className="flex flex-col gap-4 w-5/12 mx-auto border p-4 border-gray-300 shadow-md ">
        <input
        required
        onChange={(e)=>setProductName(e.target.value)}
          type="text"
          placeholder="Enter Product Name"
          className="border border-gray-200 outline-0 p-2"
        />

        <input
          required
        onChange={(e)=>setDescription(e.target.value)}
          type="text"
          placeholder="Enter product description"
          className="border border-gray-200 outline-0 p-2"
        />

        <input
          required
        onChange={(e)=>setRating(e.target.valueAsNumber)}
          type="Number"
          placeholder="Enter Product Rating"
          className="border border-gray-200 outline-0 p-2"
        />

        <input
          required
        onChange={(e)=>setPreviousPrice(e.target.valueAsNumber)}
          type="Number"
          placeholder="Enter product previos price"
          className="border border-gray-200 outline-0 p-2"
        />

        <input
          required
        onChange={(e)=>setCurrentPrice(e.target.valueAsNumber)}
          type="Number"
          placeholder="Enter product current price"
          className="border border-gray-200 outline-0 p-2"
        />

        <input
          required
        onChange={(e)=>setCategory(e.target.value)}
          type="text"
          placeholder="Enter product category"
          className="border border-gray-200 outline-0 p-2"
        />

        <input
          type="file"
           onChange={(e) => setProductFile(e.target.files?.[0] || null)}
          placeholder="Select product image"
          className="border border-gray-200 outline-0 p-2"
        />

        <button
          type="submit"
          className="text-white bg-blue-500 px-6 py-2 rounded-sm"
        >
      {productCreating ? "creating..." :" Create product"}
        </button>
      </form>
    </div>
  );
}
